<template>
  <MeshTemplate
    :object3d="lineDashedMaterialDemo"
    :controls="true"
    :lights="pointLight"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">虚线材质</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import lineDashedMaterialDemo from './mesh/lineDashedMaterialDemo'
import * as THREE from 'three'
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
</script>
