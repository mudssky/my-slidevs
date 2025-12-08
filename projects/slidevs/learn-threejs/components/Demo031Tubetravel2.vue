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
import createMesh from './mesh/curve/tubetravel'
import * as THREE from 'three'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
const path = textureUv.geometry.parameters.path
const tubePoints = path.getSpacedPoints(1000)
let i = 0

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onFrame(ctx: any) {
  const { camera } = ctx
  if (i < tubePoints.length - 1) {
    camera.position.copy(tubePoints[i])
    camera.lookAt(tubePoints[i + 1])
    i += 1
  } else {
    i = 0
  }
}
</script>
