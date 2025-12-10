import * as THREE from 'three'
import { geoMercator } from 'd3-geo'
import chinaGeojson from '@/assets/geojson/china-full.json'
import { Feature, FeatureCollection, PolygonCoords, Position } from '@/type'
import chinaPopulation from './data/chinaPopulation'

/**
 * 说明：
 * - 本文件演示如何将中国行政区划 GeoJSON 用 d3-geo 的墨卡托投影转换为平面坐标，
 *   再用 three.js 将各省轮廓绘制为线段集合。
 * - 类型 `Feature`、`PolygonCoords`、`Position` 从项目共享类型中引入，
 *   分别表示 GeoJSON 的要素、坐标结构，以及单个经纬度点 `[lng, lat]`。
 */

/**
 * 墨卡托投影：
 * - center([105, 34]) 将中国区域作为投影中心，减少整体偏移；
 * - translate([0, 0]) 保持坐标原点在 (0,0)；
 * - scale(800) 控制地图整体尺寸，可按需调整密度与大小。
 */
const mercator = geoMercator().center([105, 34]).translate([0, 0]).scale(600)

/**
 * 根据导入的 GeoJSON 生成中国地图的 `THREE.Group`。
 * 返回值：包含所有省份轮廓线段的分组，可直接添加到场景中。
 */
export function creatMap(): THREE.Group {
  const chinaMap = new THREE.Group()
  const geojson = chinaGeojson as unknown as FeatureCollection
  //   绘制地图轮廓
  geojson.features.forEach((feature: Feature) => {
    const province = new THREE.Group()
    if (feature.geometry.type === 'Polygon') {
      const polygon = createPolygon(feature.geometry.coordinates)
      province.add(polygon)
    } else {
      feature.geometry.coordinates.forEach((polygonCoords: PolygonCoords) => {
        const polygon = createPolygon(polygonCoords)
        province.add(polygon)
      })
    }
    chinaMap.add(province)
  })

  // 获取省份center，绘制bar
  geojson.features.forEach((feature) => {
    if (!feature.properties.center) {
      return
    }

    const center = feature.properties.center as [number, number]
    const projected = mercator(center)
    if (!projected) return
    const [x, y] = projected

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const num = (chinaPopulation as any)[feature.properties.name as any]
    // 绘制bar
    const geometry = new THREE.BoxGeometry(10, 10, num / 100)
    const material = new THREE.MeshPhongMaterial({
      color: 'orange',
    })
    const bar = new THREE.Mesh(geometry, material)
    bar.position.set(x, -y, num / 100 / 2)

    chinaMap.add(bar)
  })

  return chinaMap
}

/**
 * 将一个省的坐标（可能包含多个环：外环 + 若干内洞）转换为线段集合。
 * - 参数 `coordinates`：`Position[][]`，外层为多个环，内层为环上的点。
 */
function createPolygon(coordinates: PolygonCoords) {
  const group = new THREE.Group()
  const shape = new THREE.Shape()
  let first = true
  coordinates.forEach((item: Position[]) => {
    const bufferGeometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    item.forEach((point) => {
      const projected = mercator(point)
      if (!projected) return
      const [x, y] = projected
      vertices.push(x, -y, 0)

      if (first) {
        shape.moveTo(x, -y)
      } else {
        shape.lineTo(x, -y)
      }
      first = false
    })

    const attribute = new THREE.Float32BufferAttribute(vertices, 3)
    bufferGeometry.attributes.position = attribute

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 'white',
    })
    const line = new THREE.Line(bufferGeometry, lineMaterial)
    group.add(line)

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 10,
    })
    const material = new THREE.MeshPhongMaterial({
      color: 'lightblue',
    })
    const mesh = new THREE.Mesh(geometry, material)
    group.add(mesh)
    mesh.position.z = -11
  })

  return group
}
