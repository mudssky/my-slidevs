<template>
  <MeshTemplate
    :object3d="chinaMap"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
    @frame="onFrame"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">中国地图</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import { creatMap } from './mesh/map/chinaMap1'
import * as THREE from 'three'
const chinaMap = creatMap()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function onFrame(ctx: any) {
  return
}
</script>
