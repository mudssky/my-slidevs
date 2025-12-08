import * as THREE from 'three'
import muxing from '@/assets/muxing.jpg'
export default function createMesh() {
  const loader = new THREE.TextureLoader()
  const texture = loader.load(muxing)
  texture.colorSpace = THREE.SRGBColorSpace

  const geometry = new THREE.SphereGeometry(50)

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  })

  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
