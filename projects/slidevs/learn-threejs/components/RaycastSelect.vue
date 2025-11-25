<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { disposeThreeResources } from '@mudssky/slidev-addon-default/composables/useThreeCleanup'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const domRef = ref()
const slideContext = useSlideContext()
let stop = false
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
let onMoveHandler: ((e: MouseEvent) => void) | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({
    renderer,
    scene,
    controls,
    events: renderer && onMoveHandler ? [{ target: renderer.domElement, type: 'mousemove', handler: onMoveHandler }] : [],
  })
  renderer = null
  controls = null
  scene = null
  onMoveHandler = null
})
onMounted(() => {
  scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(200, 200, 200)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  const light = new THREE.PointLight(0xffffff, 1000)
  light.position.set(100, 150, 100)
  scene.add(light)
  const objs: THREE.Mesh[] = []
  for (let i = -4; i <= 4; i++) {
    for (let j = -4; j <= 4; j++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(20, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x9e9e9e }),
      )
      m.position.set(i * 30, 10, j * 30)
      scene.add(m)
      objs.push(m)
    }
  }
  // 射线拾取器：用于根据鼠标坐标检测命中对象
  const raycaster = new THREE.Raycaster()
  let hovered: THREE.Mesh | null = null
  function onMove(e: MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect()
    // 将鼠标位置转换为标准化设备坐标(NDC)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    raycaster.setFromCamera({ x, y }, camera)
    const hit = raycaster.intersectObjects(objs)
    if (hovered)
      (hovered.material as THREE.MeshStandardMaterial).color.setHex(0x9e9e9e)
    hovered = hit.length ? (hit[0].object as THREE.Mesh) : null
    // 命中时高亮显示
    if (hovered)
      (hovered.material as THREE.MeshStandardMaterial).color.setHex(0xff5722)
  }
  // 监听鼠标移动以实现悬停选中
  renderer.domElement.addEventListener('mousemove', onMove)
  onMoveHandler = onMove
  function animate() {
    if (stop) return
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
