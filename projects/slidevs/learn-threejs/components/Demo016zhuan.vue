<template>
  <MeshTemplate
    :object3d="zhuan"
    :controls="true"
    :lights="pointLight"
    :camera-option="{
      far: 10000,
    }"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">材质贴图</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import { createZhuan } from './mesh/zhuan'
import * as THREE from 'three'
const zhuan = createZhuan()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
</script>
