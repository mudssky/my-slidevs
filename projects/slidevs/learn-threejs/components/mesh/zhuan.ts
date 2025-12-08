import * as THREE from 'three'
import zhuanImage from '@/assets/zhuan.awebp'

export function createZhuan() {
  const loader = new THREE.TextureLoader()
  const texture = loader.load(zhuanImage)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(3, 3)
  texture.colorSpace = THREE.SRGBColorSpace

  const geometry = new THREE.PlaneGeometry(1000, 1000)
  const uv = geometry.attributes.uv
  geometry.setAttribute('uv2', new THREE.BufferAttribute(uv.array, 2))

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    aoMap: texture,
  })

  return new THREE.Mesh(geometry, material)
}
