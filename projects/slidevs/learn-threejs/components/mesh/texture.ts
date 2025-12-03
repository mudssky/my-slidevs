import * as THREE from 'three'
import diqiu from '@/assets/world.topo.bathy.200401.jpg'

const loader = new THREE.TextureLoader()
const texture = loader.load(diqiu)

const geometry = new THREE.SphereGeometry(100)

const material = new THREE.MeshBasicMaterial({
  map: texture,
  // color: new THREE.Color('orange'),
  // color: new THREE.Color('white'),
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
