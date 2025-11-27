<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { disposeThreeResources } from '@mudssky/slidev-addon-default'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 将纯色生成为1x1图片的 dataURL，用于快速构造立方体贴图
function dataUrlFromColor(color: THREE.ColorRepresentation) {
  const cnv = document.createElement('canvas')
  cnv.width = 1
  cnv.height = 1
  const ctx = cnv.getContext('2d') as CanvasRenderingContext2D
  ctx.fillStyle = new THREE.Color(color).getStyle()
  ctx.fillRect(0, 0, 1, 1)
  return cnv.toDataURL()
}
const domRef = ref()
const slideContext = useSlideContext()
let stop = false
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
let pmrem: THREE.PMREMGenerator | null = null
let cubeTex: THREE.CubeTexture | null = null
let refrCube: THREE.CubeTexture | null = null
let envMap: THREE.Texture | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({
    renderer,
    scene,
    controls,
    extra: [pmrem!, cubeTex!, refrCube!, envMap!],
  })
  renderer = null
  controls = null
  scene = null
  pmrem = null
  cubeTex = null
  refrCube = null
  envMap = null
})
onMounted(() => {
  scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(150, 120, 180)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  const urls = [
    dataUrlFromColor('#ff0000'),
    dataUrlFromColor('#00ff00'),
    dataUrlFromColor('#0000ff'),
    dataUrlFromColor('#ffff00'),
    dataUrlFromColor('#00ffff'),
    dataUrlFromColor('#ff00ff'),
  ]
  cubeTex = new THREE.CubeTextureLoader().load(urls)
  // 使用 PMREM 生成预滤波环境贴图以获得更真实的金属反射
  pmrem = new THREE.PMREMGenerator(renderer)
  envMap = pmrem.fromCubemap(cubeTex).texture
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(40, 64, 32),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.2,
    }),
  )
  sphere.material.envMap = envMap
  scene.add(new THREE.AmbientLight(0xffffff, 0.2))
  const light = new THREE.PointLight(0xffffff, 1000)
  light.position.set(100, 150, 100)
  scene.add(light)
  scene.add(sphere)
  refrCube = cubeTex.clone()
  // 将映射改为折射，实现玻璃质感
  refrCube.mapping = THREE.CubeRefractionMapping
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(60, 60, 60),
    new THREE.MeshPhysicalMaterial({
      envMap: refrCube,
      transmission: 1,
      thickness: 2,
      roughness: 0.05,
      ior: 1.2,
    }),
  )
  box.position.x = 120
  scene.add(box)
  function animate() {
    if (stop) return
    sphere.rotation.y += 0.01
    box.rotation.x += 0.008
    controls!.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
