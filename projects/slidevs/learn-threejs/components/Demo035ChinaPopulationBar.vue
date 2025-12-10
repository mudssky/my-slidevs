<template>
  <!--
    学习说明：
    - 通过 MeshTemplate 的 onMount 回调拿到 three 的上下文（scene/camera/renderer/dom），
      在父组件中完成一次性事件绑定（点击圆点显示对应省份文字，并隐藏其他文字）。
    - :on-frame 用于每帧更新动画；本示例无需动画，仅保留空实现。
  -->
  <MeshTemplate
    :object3d="chinaMap"
    :controls="true"
    :lights="ambientLight"
    :axes-helper="false"
    :on-frame="onFrame"
    :on-mount="onMount"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">中国人口柱状图</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import { MountContext } from '@/type'
import MeshTemplate from './MeshTemplate.vue'
import { creatMap } from './mesh/map/chinaPopulationBar'
import * as THREE from 'three'
import gridImg from '@/assets/grid.png'

/**
 * 目标：
 * - 点击省份标注圆点（Sprite），在圆点上方显示文字标签；
 * - 再点击其他圆点时，自动移除之前显示的文字，仅保留当前圆点文字。
 */
const chinaMap = creatMap()
// const pointLight = new THREE.PointLight(0xffffff, 10000)
// pointLight.position.set(80, 80, 80)
// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// 使用柔和环境光，让挤出省份面和人口柱具备基础明暗对比

function onMount(ctx: MountContext) {
  const { camera, scene } = ctx
  // 将相机抬高并略微前倾，获得俯视角度以便观察整体布局
  camera.position.set(0, 500, 200)
  const geometry = new THREE.PlaneGeometry(3000, 3000)

  // 创建地面网格纹理，作为坐标参考背景
  const loader = new THREE.TextureLoader()
  const grid = loader.load(gridImg)
  grid.colorSpace = THREE.SRGBColorSpace
  grid.wrapS = grid.wrapT = THREE.RepeatWrapping
  grid.repeat.set(20, 20)

  const material = new THREE.MeshPhongMaterial({
    map: grid,
    transparent: true,
    opacity: 0.15,
  })
  const plane = new THREE.Mesh(geometry, material)
  // 将平面旋转到水平（XZ）平面，轻微下沉以避免与省份挤出面重叠
  plane.rotateX(-Math.PI / 2)
  plane.position.y = -11
  scene.add(plane)

  // 绘制多组同心圆/虚线圆，增强空间感与尺度参考
  for (let i = 0; i < 10; i++) {
    const R = 100 + i * 50

    if (i % 2 === 0) {
      // 偶数半径：使用 EllipseCurve 生成实线圆环
      const curve1 = new THREE.EllipseCurve(0, 0, R, R, 0, Math.PI * 2)

      const pointsArr = curve1.getPoints(50)
      const geometry2 = new THREE.BufferGeometry()
      geometry2.setFromPoints(pointsArr)

      const material2 = new THREE.LineBasicMaterial({
        color: new THREE.Color('white'),
        transparent: true,
        // 半径越大透明度越低，形成由内向外渐隐的层次
        opacity: 0.8 - i * 0.05,
      })

      const line = new THREE.Line(geometry2, material2)
      line.rotateX(-Math.PI / 2)
      line.position.y = -10
      scene.add(line)
    } else {
      // 奇数半径：通过点对构造 LineSegments，形成“虚线”效果
      const geometry2 = new THREE.BufferGeometry()

      const R2 = R - 10
      const pointsArr = []

      for (let angle = 0; angle <= Math.PI * 2; angle += Math.PI / 100) {
        pointsArr.push(
          new THREE.Vector3(R * Math.cos(angle), R * Math.sin(angle), 0),
          new THREE.Vector3(R2 * Math.cos(angle), R2 * Math.sin(angle), 0),
        )
      }

      geometry2.setFromPoints(pointsArr)

      const material2 = new THREE.LineBasicMaterial({
        color: new THREE.Color('white'),
        transparent: true,
        opacity: 0.8 - i * 0.05,
      })

      const line = new THREE.LineSegments(geometry2, material2)
      line.rotateX(-Math.PI / 2)
      line.position.y = -10
      scene.add(line)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function onFrame(ctx: any) {
  // 本示例不涉及动画更新；保留空实现以示范 on-frame 用法
  return
}
</script>
