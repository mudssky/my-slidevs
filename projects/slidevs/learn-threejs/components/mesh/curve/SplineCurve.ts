import * as THREE from 'three'
export default function createMesh() {
  // 自定义一些点来绘制曲线。
  const arr = [
    new THREE.Vector2(-100, 0),
    new THREE.Vector2(-50, 50),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(50, -50),
    new THREE.Vector2(100, 0),
  ]

  const curve = new THREE.SplineCurve(arr)
  const pointsArr = curve.getPoints(20)

  const geometry = new THREE.BufferGeometry()
  geometry.setFromPoints(pointsArr)

  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange'),
  })

  const line = new THREE.Line(geometry, material)

  // 把点也会出来，方便查看曲线的点是哪些
  const pointsMaterial = new THREE.PointsMaterial({
    color: new THREE.Color('pink'),
    size: 5,
  })
  const points = new THREE.Points(geometry, pointsMaterial)
  line.add(points)

  //   添加一个集合体，把使用的几个点绘制一下
  const geometry2 = new THREE.BufferGeometry()
  geometry2.setFromPoints(arr)
  const material2 = new THREE.PointsMaterial({
    color: new THREE.Color('green'),
    size: 10,
  })
  const points2 = new THREE.Points(geometry2, material2)
  const line2 = new THREE.Line(geometry2, new THREE.LineBasicMaterial())
  line.add(points2, line2)
  return line
}
