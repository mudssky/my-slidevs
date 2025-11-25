<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { disposeThreeResources } from '@mudssky/slidev-addon-default/composables/useThreeCleanup'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
const domRef = ref()
const slideContext = useSlideContext()
let stop = false
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
let composer: EffectComposer | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({ renderer, scene, controls, composer })
  composer = null
  renderer = null
  controls = null
  scene = null
})
onMounted(() => {
  scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(200, 160, 200)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  const light = new THREE.PointLight(0xffffff, 1000)
  light.position.set(100, 150, 100)
  scene.add(light)
  const mesh = new THREE.Mesh(
    new THREE.TorusKnotGeometry(40, 12, 200, 32),
    new THREE.MeshStandardMaterial({
      color: 0x00bcd4,
      metalness: 0.6,
      roughness: 0.3,
    }),
  )
  scene.add(mesh)
  // 后处理管线：先渲染场景，再应用 FXAA 抗锯齿
  composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)
  const fxaaPass = new ShaderPass(FXAAShader)
  const dpr = window.devicePixelRatio
  // FXAA 分辨率需要根据 DPR 设置为像素的倒数
  fxaaPass.material.uniforms['resolution'].value.set(
    1 / (w * dpr),
    1 / (h * dpr),
  )
  composer.addPass(fxaaPass)
  function animate() {
    if (stop) return
    mesh.rotation.y += 0.01
    controls!.update()
    // 使用 composer 渲染以启用后处理
    composer!.render()
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
