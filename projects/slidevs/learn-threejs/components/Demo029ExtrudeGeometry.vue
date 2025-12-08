<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="[pointLight, ambientLight]"
    :axes-helper="true"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">ExtrudeGeometry</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/curve/ExtrudeGeometry'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
// 使用点光源，背面太暗，所以加一个环境光
const ambientLight = new THREE.AmbientLight()
</script>
