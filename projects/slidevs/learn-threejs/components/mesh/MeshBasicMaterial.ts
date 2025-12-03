import * as THREE from 'three'

const geometry = new THREE.PlaneGeometry(100, 100)

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  // 可以指定透明度
  // transparent: true,
  // opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, material)

// mesh可以从材质上获取颜色对象
const color = mesh.material.color
console.log(color.getHexString())
console.log(color.getStyle())
color.setStyle('blue')
// console.log(mesh)

export default mesh
