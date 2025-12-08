<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
    @frame="onFrame"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">云雷纹</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/curve/yunleiwen'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
// 每帧回调：让纹样中的各子对象按奇偶交替方向缓慢旋转
function onFrame() {
  textureUv.children.forEach((item, index) => {
    // 偶数顺时针，奇数逆时针；转速与索引成比例
    const flag = index % 2 === 0 ? 1 : -1
    item.rotation.z += 0.001 * index * flag
  })
}
</script>
