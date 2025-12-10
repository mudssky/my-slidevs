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
      <div class="text-red-300 text-center w-full!">地图飞线</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import { MountContext } from '@/type'
import MeshTemplate from './MeshTemplate.vue'
import { creatMap } from './mesh/map/flyline'
import * as THREE from 'three'

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
  console.log({ camera, scene })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function onFrame(ctx: any) {
  // 本示例不涉及动画更新；保留空实现以示范 on-frame 用法
  return
}
</script>
