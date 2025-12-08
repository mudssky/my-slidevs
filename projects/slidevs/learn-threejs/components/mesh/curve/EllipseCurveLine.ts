import * as THREE from 'three'
export default function createMesh() {
  // 绘制椭圆曲线，椭圆中心是 0,0，长短半轴长分别是 100、50
  const arc = new THREE.EllipseCurve(0, 0, 100, 50)
  const pointsList = arc.getPoints(20)

  const geometry = new THREE.BufferGeometry()
  geometry.setFromPoints(pointsList)

  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange'),
  })
  const line = new THREE.Line(geometry, material)

  console.log(line)
  return line
}
