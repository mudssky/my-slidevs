// 模型分段案例
import * as THREE from 'three'

const geometry = new THREE.PlaneGeometry(100, 100, 2, 3)
// const geometry = new THREE.PlaneGeometry(100, 100)

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  wireframe: true,
})

const segmentDemo = new THREE.Mesh(geometry, material)

console.log(segmentDemo)

export default segmentDemo
