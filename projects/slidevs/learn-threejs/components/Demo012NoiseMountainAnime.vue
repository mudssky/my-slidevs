<template>
  <MeshTemplate :object3d="noiseMountain" :controls="true" :onFrame="onFrame" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'
import MeshTemplate from './MeshTemplate.vue'
import noiseMountain from './mesh/noiseMountain'

const noise2D = createNoise2D()

function onFrame() {
  const geometry = noiseMountain.geometry as THREE.BufferGeometry
  const positions = geometry.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i)
    const y = positions.getY(i)
    const z = noise2D(x / 300, y / 300) * 50
    // 利用sin随着时间的变化，形成周期性变动
    const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10
    positions.setZ(i, z + sinNum)
  }
  // geometry.rotateZ(Math.PI * 0.001)
  // 增加绕z轴旋转
  // geometry.rotateZ(0.003)
  positions.needsUpdate = true
}
</script>
