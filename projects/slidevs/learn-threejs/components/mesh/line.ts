import * as THREE from 'three'

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 100, 100, 0,
])
const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color('orange'),
})
const line = new THREE.Line(geometry, material)
// 首尾相连的线
// const line = new THREE.LineLoop(geometry, material)
// 每两个点一条线段的话
// const line = new THREE.LineLoop(geometry, material)

export default line
