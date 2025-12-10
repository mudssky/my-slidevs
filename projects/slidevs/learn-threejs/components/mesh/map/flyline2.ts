// 绘制北京到其他城市的飞线
import * as THREE from 'three'
import { geoMercator } from 'd3-geo'
import chinaGeojson from '@/assets/geojson/china-full.json'
import { Feature, FeatureCollection, PolygonCoords, Position } from '@/type'
import { Line2, LineGeometry, LineMaterial } from 'three/examples/jsm/Addons'
import { gsap } from 'gsap'

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
const mercator = geoMercator().center([105, 34]).translate([0, 0]).scale(500)

/**
 * 根据导入的 GeoJSON 生成中国地图的 `THREE.Group`。
 * 返回值：包含所有省份轮廓线段的分组，可直接添加到场景中。
 */
export function creatMap(): THREE.Group {
  const chinaMap = new THREE.Group()
  const geojson = chinaGeojson as unknown as FeatureCollection
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

  const cityCenterMap = new Map()
  geojson.features.forEach((feature) => {
    cityCenterMap.set(feature.properties.name, feature.properties.center)
  })
  // console.log(cityCenterMap)

  const beijingPos = mercator(cityCenterMap.get('北京市')) as Position
  for (const [name, center] of cityCenterMap.entries()) {
    if (!name) {
      continue
    }
    if (name === '北京市') {
      continue
    }
    const endPos = mercator(center) as Position
    const start = new THREE.Vector3(beijingPos[0], -beijingPos[1], 0)
    const end = new THREE.Vector3(endPos[0], -endPos[1], 0)
    const middle = start.clone().add(end).divideScalar(2)
    // middle.z = 100

    // 根据两个点的距离设置高度
    const distance = start.clone().sub(end).length()
    middle.z = distance / 3

    const curve = new THREE.CatmullRomCurve3([start, middle, end])
    const pointsArr = curve.getPoints(100)

    const geometry = new LineGeometry()
    geometry.setFromPoints(pointsArr)

    const material = new LineMaterial({
      color: new THREE.Color('lightblue'),
      linewidth: 2,
    })

    const line = new Line2(geometry, material)
    chinaMap.add(line)

    // 绘制另一条线表示方向
    const pointsArr2 = pointsArr.slice(30, 30 + 20)
    const geometry2 = new LineGeometry()
    geometry2.setFromPoints(pointsArr2)
    const material2 = new LineMaterial({
      color: new THREE.Color('orange'),
      linewidth: 2,
    })
    const line2 = new Line2(geometry2, material2)
    chinaMap.add(line2)

    // 循环添加动画
    // let index = 30
    // function render() {
    //   if (index >= 100) index = 0
    //   index++
    //   const arr = pointsArr.slice(index, index + 20)
    //   geometry2.setFromPoints(arr)
    //   requestAnimationFrame(render)
    // }

    // render()
    const obj = { index: 0 }
    gsap.to(obj, {
      index: 100,
      // ease: 'none',
      ease: 'circ.out',
      repeat: -1,
      duration: 2,
      onUpdate() {
        const arr = pointsArr.slice(obj.index, obj.index + 20)
        geometry2.setFromPoints(arr)
      },
    })
  }
  return chinaMap
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
      const projected = mercator(point)
      if (!projected) return
      const [x, y] = projected
      // three.js Y 轴朝上，而墨卡托通常以屏幕坐标系为参考。
      // 这里取负值以视觉上“正向”朝上，可按实际需求调整。
      vertices.push(x, -y, 0)
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
