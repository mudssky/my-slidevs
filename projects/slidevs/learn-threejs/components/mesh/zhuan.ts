import * as THREE from 'three'
import zhuanImage from '@/assets/zhuan.awebp'
const loader = new THREE.TextureLoader()
const texture = loader.load(zhuanImage)

const geometry = new THREE.PlaneGeometry(1000, 1000)

const material = new THREE.MeshBasicMaterial({
  map: texture,
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
