import { createNoise2D } from 'simplex-noise'
import * as THREE from 'three'

// const geometry = new THREE.PlaneGeometry(300, 300, 100, 100)
// 增大平面
const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100)

const noise2D = createNoise2D()
const positions = geometry.attributes.position
for (let i = 0; i < positions.count; i++) {
  const x = positions.getX(i)
  const y = positions.getY(i)
  // 传入 x、y 让噪音算法算出这个位置的 z
  // const z = noise2D(x / 100, y / 100) * 50
  // 减缓坡度
  const z = noise2D(x / 300, y / 300) * 50
  positions.setZ(i, z)
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  wireframe: true,
})

const mesh = new THREE.Mesh(geometry, material)

// 绕x轴旋转90度
mesh.rotateX(-Math.PI / 2)
export default mesh
