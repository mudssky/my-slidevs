import * as THREE from 'three'

export default function createMesh() {
  const pointsArr = [
    new THREE.Vector2(100, 0),
    new THREE.Vector2(50, 20),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(50, 100),
  ]

  const shape = new THREE.Shape(pointsArr)

  // 挖孔
  const path = new THREE.Path()
  // 圆心 50,50 、半径 10 、从 0 到 2π 绘制整圆， clockwise=false
  path.absarc(50, 50, 10, 0, Math.PI * 2, false)
  shape.holes.push(path)
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 100,
  })
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('lightgreen'),
  })

  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
