import * as THREE from 'three'
import { geoMercator } from 'd3-geo'
import worldGeojson from '@/assets/geojson/world-min.json'

import { FeatureCollection, PolygonCoords, Position } from '@/type'

/**
 * 说明：
 * - 本文件演示如何将中国行政区划 GeoJSON 用 d3-geo 的墨卡托投影转换为平面坐标，
 *   再用 three.js 将各省轮廓绘制为线段集合。
 * - 类型 `Feature`、`PolygonCoords`、`Position` 从项目共享类型中引入，
 *   分别表示 GeoJSON 的要素、坐标结构，以及单个经纬度点 `[lng, lat]`。
 */

/**
 * 墨卡托投影：
 * 将经纬度转为二维坐标
 * - center([105, 34]) 将中国区域作为投影中心，减少整体偏移；
 * - translate([0, 0]) 保持坐标原点在 (0,0)；
 * - scale(800) 控制地图整体尺寸，可按需调整密度与大小。
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mercator = geoMercator().center([105, 34]).translate([0, 0]).scale(400)

/**
 * 说明：
 * - 本函数将经纬度点转换为三维空间中的坐标点。
 * - 参数 `R`：球半径，默认值为 1。
 * - 参数 `longitude`：经度，范围 [-180, 180]。
 * - 参数 `latitude`：纬度，范围 [-90, 90]。
 * - 返回值：包含 `x`, `y`, `z` 三个属性的对象，分别表示点在空间中的坐标。
 */
function lon2xyz(R = 1, longitude: number, latitude: number) {
  const lon = (-longitude * Math.PI) / 180
  const lat = (latitude * Math.PI) / 180

  const x = R * Math.cos(lat) * Math.cos(lon)
  const y = R * Math.sin(lat)
  const z = R * Math.cos(lat) * Math.sin(lon)

  return {
    x,
    y,
    z,
  }
}
/**
 * 根据导入的 GeoJSON 生成中国地图的 `THREE.Group`。
 * 返回值：包含所有省份轮廓线段的分组，可直接添加到场景中。
 */
export function creatMap(): THREE.Group {
  const worldMap = new THREE.Group()
  const geojson = worldGeojson as unknown as FeatureCollection
  geojson.features.forEach((feature) => {
    const province = new THREE.Group()

    if (feature.geometry.type === 'Polygon') {
      const polygon = createPolygon(feature.geometry.coordinates)
      province.add(polygon)
    } else if (feature.geometry.type === 'MultiPolygon') {
      feature.geometry.coordinates.forEach((polygonCoords) => {
        const polygon = createPolygon(polygonCoords)
        province.add(polygon)
      })
    }

    worldMap.add(province)

    // 地图底部绘制一个球
    function createBall() {
      const geometry = new THREE.SphereGeometry(200)
      const material = new THREE.MeshBasicMaterial({
        color: 'blue',
      })
      const ball = new THREE.Mesh(geometry, material)
      return ball
    }

    worldMap.add(createBall())
  })

  return worldMap
}

/**
 * 将一个省的坐标（可能包含多个环：外环 + 若干内洞）转换为线段集合。
 * - 参数 `coordinates`：`Position[][]`，外层为多个环，内层为环上的点。
 */
function createPolygon(coordinates: PolygonCoords) {
  const group = new THREE.Group()

  coordinates.forEach((ring: Position[]) => {
    const bufferGeometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    ring.forEach((point: Position) => {
      // 墨卡托投影经纬度点；可能返回 null（坐标异常时），需要判空处理。
      //   const projected = mercator(point)
      //   if (!projected) return
      //   const [x, y] = projected
      // three.js Y 轴朝上，而墨卡托通常以屏幕坐标系为参考。
      // 这里取负值以视觉上“正向”朝上，可按实际需求调整。
      //   vertices.push(x, -y, 0)
      //   改为球面坐标算法
      const { x, y, z } = lon2xyz(200, point[0], point[1])
      vertices.push(x, -y, z)
    })
    const attribute = new THREE.Float32BufferAttribute(vertices, 3)
    // 通过 setAttribute 正确设置顶点位置缓冲数据
    bufferGeometry.setAttribute('position', attribute)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 'white',
    })
    const line = new THREE.Line(bufferGeometry, lineMaterial)
    group.add(line)
  })

  return group
}
