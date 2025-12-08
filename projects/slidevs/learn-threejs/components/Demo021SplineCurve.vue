<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">SplineCurve</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/curve/SplineCurve'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
</script>
