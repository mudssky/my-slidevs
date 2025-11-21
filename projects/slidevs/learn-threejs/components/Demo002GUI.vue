<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGuiAutoVisibility } from '../hooks'

const domRef = ref()
const slideContext = useSlideContext()

onMounted(() => {
  // 1. 创建场景 - 所有3D对象的容器
  const scene = new THREE.Scene()

  // 获取幻灯片容器尺寸（优先使用SlideV配置的尺寸，否则使用窗口尺寸）
  const slideWidth =
    slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const slideHeight =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight

  const { createGui } = useGuiAutoVisibility(domRef)
  const gui = createGui()
  // 2. 创建立方体
  {
    // 创建立方体几何体（宽高深各100单位）
    const geometry = new THREE.BoxGeometry(100, 100, 100)
    // 创建材质（使用橙色Lambert材质，适合非光泽表面）
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color('orange'),
    })
    // 将几何体和材质组合成网格对象
    const mesh = new THREE.Mesh(geometry, material)
    // 设置网格位置（场景中心）
    mesh.position.set(0, 0, 0)
    // 将网格添加到场景中
    scene.add(mesh)

    const meshFolder = gui.addFolder('立方体')
    meshFolder.addColor(mesh.material, 'color')
    meshFolder.add(mesh.position, 'x').step(10)
    meshFolder.add(mesh.position, 'y').step(10)
    meshFolder.add(mesh.position, 'z').step(10)
  }

  // 3. 创建光源
  {
    // 创建点光源（白色，强度10000）
    const pointLight = new THREE.PointLight(0xffffff, 10000)
    // 设置光源位置（右上后方）
    pointLight.position.set(80, 80, 80)
    // 将光源添加到场景中
    scene.add(pointLight)

    const lightFolder = gui.addFolder('灯光')
    lightFolder.add(pointLight.position, 'x').step(10)
    lightFolder.add(pointLight.position, 'y').step(10)
    lightFolder.add(pointLight.position, 'z').step(10)
    lightFolder.add(pointLight, 'intensity').step(1000)
  }

  {
    const otherFolder = gui.addFolder('其他控件类型')

    const obj = {
      aaa: '测试空间',
      bbb: false,
      ccc: 0,
      ddd: '111',
      fff: 'Bbb',
      logic: function () {
        alert('执行一段逻辑!')
      },
    }

    otherFolder.add(obj, 'aaa')
    otherFolder.add(obj, 'bbb')
    otherFolder.add(obj, 'ccc').min(-10).max(10).step(0.5)
    otherFolder.add(obj, 'ddd', ['111', '222', '333'])
    // otherFolder.add(obj, 'fff', { Aaa: 0, Bbb: 0.1, Ccc: 5 })
    otherFolder.add(obj, 'logic')
    otherFolder.onChange((value) => {
      console.log(value)
    })
  }
  // 4. 创建坐标轴辅助器（红色-X，绿色-Y，蓝色-Z）
  {
    const axesHelper = new THREE.AxesHelper(200)
    scene.add(axesHelper)
  }

  // 5. 创建相机和渲染器
  {
    // 创建透视相机（60度视野，根据容器尺寸计算宽高比，近裁剪面1，远裁剪面1000）
    const camera = new THREE.PerspectiveCamera(
      60,
      slideWidth / slideHeight,
      1,
      1000,
    )
    // 设置相机位置（右上方）
    camera.position.set(200, 200, 200)
    // 让相机看向场景中心
    camera.lookAt(0, 0, 0)

    // 创建WebGL渲染器
    const renderer = new THREE.WebGLRenderer()
    // 设置渲染器尺寸为幻灯片容器尺寸
    renderer.setSize(slideWidth, slideHeight)

    // 渲染循环函数
    function render() {
      // 渲染场景和相机
      renderer.render(scene, camera)
      // 请求下一帧继续渲染（实现动画效果）
      requestAnimationFrame(render)
    }
    // 开始渲染循环
    render()
    // 将渲染器的canvas元素添加到DOM中
    domRef.value.appendChild(renderer.domElement)
    // 添加轨道控制器（允许用鼠标旋转/缩放场景）
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const controls = new OrbitControls(camera, renderer.domElement)
  }
})
</script>
