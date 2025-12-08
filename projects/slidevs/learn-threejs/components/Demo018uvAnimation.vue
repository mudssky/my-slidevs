<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
    @frame="onFrame"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">uv动画</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/muxing'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)

function onFrame() {
  if (!textureUv.material.map) return
  // textureUv.material.map.offset.x += 0.001
  textureUv.material.map.offset.y += 0.001

  // 设置纹理在 T 方向（垂直方向）重复包裹，使 uv 动画循环无缝
  textureUv.material.map.wrapT = THREE.RepeatWrapping
  // textureUv.material.map.wrapS = THREE.RepeatWrapping
}
</script>
