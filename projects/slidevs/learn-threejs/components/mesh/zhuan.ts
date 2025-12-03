import * as THREE from 'three'
import zhuanImage from '@/assets/zhuan.awebp'
const loader = new THREE.TextureLoader()
const texture = loader.load(zhuanImage)
// 可以重复贴图
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(3, 3)
// 设置贴图颜色空间
texture.colorSpace = THREE.SRGBColorSpace

const geometry = new THREE.PlaneGeometry(1000, 1000)

const material = new THREE.MeshBasicMaterial({
  map: texture,
  // 环境遮挡图
  aoMap: texture,
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
