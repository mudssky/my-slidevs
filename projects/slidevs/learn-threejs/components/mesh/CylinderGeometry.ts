import * as THREE from 'three'

// 不设置分段，默认的分段数是32 ，1
const geometry = new THREE.CylinderGeometry(50, 50, 80)
// 设置为5就会显得不圆
// const geometry = new THREE.CylinderGeometry(50, 50, 80, 5)

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  wireframe: true,
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
