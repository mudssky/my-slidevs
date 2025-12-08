import * as THREE from 'three'
import storm from '@/assets/storm.png'
export default function createMesh() {
  const geometry = new THREE.CylinderGeometry(30, 50, 1000, 32, 32, true)

  const loader = new THREE.TextureLoader()
  const texture = loader.load(storm)
  texture.colorSpace = THREE.SRGBColorSpace
  // 竖直方向重复两次
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 2)
  const material = new THREE.MeshBasicMaterial({
    // color: 'orange',
    // map: texture,
    //alpha贴图是一张灰度纹理，用于控制整个表面的不透明度
    // 这里使用alpha贴图方便我们调整颜色
    transparent: true,
    alphaMap: texture,
    // 只需要看到内面
    side: THREE.BackSide,
  })

  const tunnel = new THREE.Mesh(geometry, material)
  return tunnel
}
