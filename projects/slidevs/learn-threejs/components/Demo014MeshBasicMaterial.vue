<template>
  <MeshTemplate
    :object3d="MeshBasicMaterial"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">网格材质</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import MeshBasicMaterial from './mesh/MeshBasicMaterial'
import * as THREE from 'three'
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
</script>
