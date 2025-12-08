import * as THREE from 'three'
import natureImage from '@/assets/nature169.avif'
export default function createMesh() {
  const geometry = new THREE.PlaneGeometry(200, 100)

  const loader = new THREE.TextureLoader()
  const texture = loader.load(natureImage)
  texture.colorSpace = THREE.SRGBColorSpace

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  })

  // uv默认是0-1
  // 改成0.5缩小了uv的范围，会只取原图的一部分
  const uvs = new Float32Array([0, 0.5, 0.5, 0.5, 0, 0, 0.5, 0])

  geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2)
  const mesh = new THREE.Mesh(geometry, material)

  console.log(mesh)
  return mesh
}
