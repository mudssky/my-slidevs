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

  const geometry = new THREE.ShapeGeometry(shape)
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('lightgreen'),
  })

  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
