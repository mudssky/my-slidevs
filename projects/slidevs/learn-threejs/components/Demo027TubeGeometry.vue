<template>
  <MeshTemplate
    :object3d="textureUv"
    :controls="true"
    :lights="[pointLight, ambientLight]"
    :axes-helper="true"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">TubeGeometry</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import GUI from 'three/examples/jsm/libs/lil-gui.module.min'
import MeshTemplate from './MeshTemplate.vue'
import createMesh from './mesh/curve/TubeGeometry'
import * as THREE from 'three'

import { onMounted, onUnmounted } from 'vue'
const textureUv = createMesh()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
// 使用点光源，背面太暗，所以加一个环境光
const ambientLight = new THREE.AmbientLight()

const mesh = textureUv as THREE.Mesh
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const curve = (mesh as any).userData.curve as THREE.Curve<THREE.Vector3>

const obj = {
  tubularSegments: 50,
  radius: 20,
  radialSegments: 20,
}

let gui: GUI

function onChange() {
  const newGeom = new THREE.TubeGeometry(
    curve,
    obj.tubularSegments,
    obj.radius,
    obj.radialSegments,
  )
  mesh.geometry.dispose()
  mesh.geometry = newGeom
}

onMounted(() => {
  gui = new GUI()
  gui
    .add(obj, 'tubularSegments')
    .min(3)
    .max(100)
    .step(1)
    .name('管道方向分段数')
    .onChange(onChange)
  gui
    .add(obj, 'radius')
    .min(10)
    .max(100)
    .step(0.1)
    .name('半径')
    .onChange(onChange)
  gui
    .add(obj, 'radialSegments')
    .min(3)
    .max(100)
    .step(1)
    .name('横截面分段数')
    .onChange(onChange)
})

onUnmounted(() => {
  gui?.destroy()
})
</script>
