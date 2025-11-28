<template>
  <MeshTemplate
    :object3d="[boxMesh, groundMesh]"
    :default-light="dlConf as any"
    :enable-shadows="true"
  />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import MeshTemplate from './MeshTemplate.vue'

const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6699ff' })
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
boxMesh.position.set(0, 50, 0)
boxMesh.castShadow = true

const groundGeometry = new THREE.PlaneGeometry(600, 600)
const groundMaterial = new THREE.MeshStandardMaterial({ color: '#dddddd' })
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
groundMesh.rotation.x = -Math.PI / 2
groundMesh.receiveShadow = true

const dlConf = {
  type: 'directional',
  color: '#ffffff',
  intensity: 1,
  position: { x: 200, y: 300, z: 150 },
}
</script>
