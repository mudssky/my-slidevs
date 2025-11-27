import * as THREE from 'three'

const geometry = new THREE.PlaneGeometry(300, 300, 10, 10)
// 随机数的完全随机顶点数量变多以后不像山脉，需要连续性的随机
// const geometry = new THREE.PlaneGeometry(300, 300, 100, 100)

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  wireframe: true,
})

// 随机顶点高度
const positions = geometry.attributes.position
for (let i = 0; i < positions.count; i++) {
  positions.setZ(i, Math.random() * 50)
}

const mesh = new THREE.Mesh(geometry, material)

// 绕x轴旋转90度
mesh.rotateX(-Math.PI / 2)
export default mesh
