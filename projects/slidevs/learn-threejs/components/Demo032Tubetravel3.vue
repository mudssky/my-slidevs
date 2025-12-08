<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
    @frame="onFrame"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">隧道穿梭</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/curve/timeTravel'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)

let cameraHasInit = false
let H = 0
const clock = new THREE.Clock()
// 相对于之前隧道穿梭，这次使用了uv动画形式，实现无限穿梭
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onFrame(ctx: any) {
  // 设置相机初始位置
  if (!cameraHasInit) {
    ctx.camera.position.set(0.9, -520, 6.5)
    cameraHasInit = true
  }

  // textureUv.material.map!.offset.y += 0.01
  // 用 clock.getDelta 来拿到每次渲染的时间间隔，用它作为改变的数值。
  const delta = clock.getDelta()
  // textureUv.material.map!.offset.y += delta * 0.5
  textureUv.material.alphaMap!.offset.y += delta * 0.5
  // 隧道同时进行旋转
  textureUv.rotation.y += delta * 0.5

  // 使用hsl颜色，实现五颜六色的时空隧道
  H += 0.002
  if (H > 1) {
    H = 0
  }
  textureUv.material.color.setHSL(H, 0.5, 0.5)
}
</script>
