import * as THREE from 'three'
import { geoMercator } from 'd3-geo'
import chinaGeojson from '@/assets/geojson/china-full.json'
import { Feature, FeatureCollection, PolygonCoords, Position } from '@/type'
import chinaPopulation from './data/chinaPopulation'
import SpriteText from 'three-spritetext'
import gsap from 'gsap'

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
 * - scale(600) 控制地图整体尺寸，可按需调整密度与大小。
 *
 * 注意：经投影后的二维坐标为 `[x, y]`，后续在 three.js 中我们使用 `z` 轴作为高度，
 * 并且将 `y` 取负（`-y`）以匹配右手坐标系的视觉直觉（屏幕上北向为上）。
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
    // 为每个省份建立一个分组，便于整体管理和附加柱状图/标签
    const province = new THREE.Group()
    if (feature.geometry.type === 'Polygon') {
      // 单一多边形省份
      const polygon = createPolygon(feature.geometry.coordinates)
      province.add(polygon)
    } else {
      // MultiPolygon：包含多个不连续的外轮廓或内洞，逐个处理
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
    // 绘制人口柱状条：宽度/长度固定，高度与人口数成比例
    const geometry = new THREE.BoxGeometry(10, 10, num / 50)

    // 设置bar颜色
    const positions = geometry.attributes.position
    // 根据顶点的 z 值（高度方向）进行颜色插值，构造从浅到深的渐变
    const colorsArr = []
    const color1 = new THREE.Color('pink')
    const color2 = new THREE.Color('red')
    for (let i = 0; i < positions.count; i++) {
      const z = positions.getZ(i) * 2
      const percent = z / 100
      const c = color1.clone().lerp(color2, percent)
      colorsArr.push(c.r, c.g, c.b)
    }
    const colors = new Float32Array(colorsArr)
    geometry.attributes.color = new THREE.BufferAttribute(colors, 3)

    const material = new THREE.MeshPhongMaterial({
      // color: 'orange'
      vertexColors: true,
    })
    // const material = new THREE.MeshPhongMaterial({
    //   color: 'orange',
    // })
    const bar = new THREE.Mesh(geometry, material)
    // 注意：y 取负以匹配 three.js 场景布局；z 为柱体中心高度
    bar.position.set(x, -y, num / 50 / 2)

    chinaMap.add(bar)
    // 绘制顶部数字
    // 顶部人口数字标签（SpriteText）：便于 3D 空间中始终面向相机渲染清晰文字
    const numText = new SpriteText(num + '万', 8)
    numText.color = 'black'
    numText.backgroundColor = 'white'
    numText.strokeWidth = 0.5
    numText.strokeColor = 'blue'
    numText.borderRadius = 5
    numText.borderWidth = 1
    numText.borderColor = '#000'
    numText.padding = 2
    numText.position.set(0, 0, num / 50 / 2 + 10)
    bar.add(numText)

    // 绘制省份名字
    // 省份名称标签，默认隐藏，待柱体动画完成后显示
    const nameText = new SpriteText(feature.properties.name, 10)
    nameText.color = 'white'
    nameText.strokeWidth = 3
    nameText.strokeColor = 'black'
    nameText.position.set(10, -10, -num / 50 / 2 + 10)
    bar.add(nameText)
    nameText.visible = false

    // 使用 gsap 绘制柱子“从地面伸出”的动画，并在完成后展示省份名称
    bar.position.z = -num / 50 / 2
    gsap.to(bar.position, {
      z: num / 50 / 2,
      ease: 'bounce.out',
      duration: 2,
      // 文字在动画完成后展示
      onComplete: () => {
        nameText.visible = true
      },
    })
  })

  // 将整张地图旋转到 XZ 平面，使得 Z 作为高度轴（更符合数据可视化直觉）
  chinaMap.rotateX(-Math.PI / 2)

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
      // 将经纬度投影到平面坐标，并将 y 取负以适配 three.js 场景方向
      vertices.push(x, -y, 0)

      if (first) {
        // 使用 Shape 记录轮廓首点，后续用于挤出几何体（ExtrudeGeometry）
        shape.moveTo(x, -y)
      } else {
        // 连线至下一个点，形成闭合轮廓路径
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

    // 使用挤出几何体为省份轮廓增加厚度，形成带体量的区域
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 10,
    })
    // 省份生成随机颜色
    // 用 Math.random 配合 color.lerp 颜色插值可以生成两个颜色之间的随机颜色
    const color1 = new THREE.Color('lightblue')
    const color2 = new THREE.Color('blue')
    const percent = Math.random()
    const color = color1.clone().lerp(color2, percent)
    const material = new THREE.MeshPhongMaterial({
      // color: 'lightblue',
      color,
    })
    const mesh = new THREE.Mesh(geometry, material)
    group.add(mesh)
    // 将省份厚度略微下沉，避免与地面网格/柱体产生视觉冲突
    mesh.position.z = -11
  })

  return group
}
