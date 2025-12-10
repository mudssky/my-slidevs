import * as THREE from 'three'
import { geoMercator } from 'd3-geo'
import worldGeojson from '@/assets/geojson/world-min.json'

import { FeatureCollection, PolygonCoords, Position } from '@/type'

/**
 * 说明：
 * - 本文件展示两种绘制地图轮廓的思路：
 *   1) 使用 d3-geo 墨卡托投影将经纬度转换为平面坐标并绘制二维线段；
 *   2) 使用球面坐标（lon2xyz）将经纬度映射到球体表面并绘制三维线段。
 * - 示例数据为世界简化版 GeoJSON（`world-min.json`），思路与绘制中国行政区相同。
 * - 类型 `FeatureCollection`、`PolygonCoords`、`Position` 来自共享类型：
 *   分别表示 GeoJSON 要素集合、一个多边形的坐标结构，以及单个经纬度点 `[lng, lat]`。
 *
 * 使用建议：
 * - 在 three.js 场景中使用：
 *   `const group = creatMap(); scene.add(group)`；可与 OrbitControls 配合查看。
 * - 想要二维地图：启用下方 `mercator(point)` 的代码并注释球面算法；
 *   想要三维地球：保留 `lon2xyz` 并按需调整半径与材质。
 * - 数据量较大时，可考虑：合并几何、使用 `LineSegments` 或 `InstancedBufferGeometry`。
 */

/**
 * 墨卡托投影：
 * 将经纬度转为二维坐标
 * - center([105, 34]) 将中国区域作为投影中心，减少整体偏移；
 * - translate([0, 0]) 保持坐标原点在 (0,0)；
 * - scale(400) 控制地图整体尺寸，可按需调整密度与大小（与下方球半径对应）。
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mercator = geoMercator().center([105, 34]).translate([0, 0]).scale(400)

/**
 * 球面坐标转换（经纬度 -> 三维坐标）
 * - 目的：将经纬度映射到半径为 R 的球体表面，便于绘制“地球”上的线段。
 * - 参数：
 *   - `R` 球半径（与 `SphereGeometry` 半径保持一致可贴合表面）；
 *   - `longitude` 经度，范围 [-180, 180]；
 *   - `latitude`  纬度，范围  [-90, 90]。
 * - 公式：
 *   - 将角度转换为弧度：`lon = -λ * π/180`（取负使经度向东为正时绕 Y 轴右手旋转）；
 *   - `lat = φ * π/180`；
 *   - `x = R * cos(lat) * cos(lon)`，`y = R * sin(lat)`，`z = R * cos(lat) * sin(lon)`。
 * - three.js 坐标系约定：Y 轴向上；本文件在入缓冲时对 `y` 取负以获得期望的可视朝向。
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
/**
 * 生成世界（或任意 GeoJSON）地图线段分组
 * - 遍历 GeoJSON 要素，根据几何类型分别处理 `Polygon` 与 `MultiPolygon`。
 * - 每个要素作为一个 `THREE.Group` 加入到 `worldMap`，便于独立控制材质/变换。
 * - 同时在底部添加一个球体（半径与 `lon2xyz` 使用的半径一致）作为视觉参照。
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

    // 地图底部绘制一个球：可视化地球半径与经纬坐标的对应关系
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
 * 将一个区域（可能包含多个环：外环 + 若干内洞）转换为线段集合
 * - 参数 `coordinates`：`Position[][]`，外层为多个环，内层为环上的点。
 * - GeoJSON 约定：环通常以首尾点相同闭合；`THREE.Line` 会按顶点顺序绘制折线。
 *   若数据未闭合，可在处理时将首点推入末尾以闭合。
 * - 可在此处切换投影方案：
 *   - 二维平面：解注 `mercator(point)`，入缓冲 `vertices.push(x, -y, 0)`；
 *   - 三维球面：使用 `lon2xyz`，入缓冲 `vertices.push(x, -y, z)`。
 */
function createPolygon(coordinates: PolygonCoords) {
  const group = new THREE.Group()

  coordinates.forEach((ring: Position[]) => {
    const bufferGeometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    ring.forEach((point: Position) => {
      // 墨卡托投影经纬度点；可能返回 null（坐标异常时），需要判空处理。
      // const projected = mercator(point)
      // if (!projected) return
      // const [x, y] = projected
      // three.js Y 轴朝上，而墨卡托以屏幕坐标系为参考，故此处对 y 取负以符合预期。
      // vertices.push(x, -y, 0)

      // 球面坐标算法：将经纬度映射到半径为 200 的球体表面
      const { x, y, z } = lon2xyz(200, point[0], point[1])
      // 为统一视觉朝向，对 y 取负（与上方二维方案保持一致）
      vertices.push(x, -y, z)
    })
    const attribute = new THREE.Float32BufferAttribute(vertices, 3)
    // 设置位置顶点缓冲：每 3 个数表示一个顶点的 x/y/z
    bufferGeometry.setAttribute('position', attribute)

    // 线材质：基础白色。需要抗锯齿/更粗线段可考虑 LineSegments 或第三方粗线实现
    const lineMaterial = new THREE.LineBasicMaterial({ color: 'white' })
    const line = new THREE.Line(bufferGeometry, lineMaterial)
    group.add(line)
  })

  return group
}
