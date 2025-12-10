<template>
  <!--
    学习说明：
    - 通过 MeshTemplate 的 onMount 回调拿到 three 的上下文（scene/camera/renderer/dom），
      在父组件中完成一次性事件绑定（点击圆点显示对应省份文字，并隐藏其他文字）。
    - :on-frame 用于每帧更新动画；本示例无需动画，仅保留空实现。
  -->
  <MeshTemplate
    :object3d="chinaMap"
    :controls="true"
    :lights="pointLight"
    :axes-helper="true"
    :on-frame="onFrame"
    :on-mount="onMount"
  >
    <template #title>
      <div class="text-red-300 text-center w-full!">中国人口柱状图</div>
    </template>
  </MeshTemplate>
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import { creatMap } from './mesh/map/chinaPopulationBar'
import * as THREE from 'three'
import SpriteText from 'three-spritetext'
/**
 * 目标：
 * - 点击省份标注圆点（Sprite），在圆点上方显示文字标签；
 * - 再点击其他圆点时，自动移除之前显示的文字，仅保留当前圆点文字。
 */
const chinaMap = creatMap()
const pointLight = new THREE.PointLight(0xffffff, 10000)
pointLight.position.set(80, 80, 80)
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function onFrame(ctx: any) {
  return
}

let mounted = false
/**
 * onMount：由 MeshTemplate 在画布挂载后调用，一次性提供 three 上下文。
 * ctx 字段：
 * - scene：场景根对象
 * - camera：当前相机
 * - renderer：WebGL 渲染器
 * - THREE：three 命名空间（便于构造 Raycaster/Vector2 等）
 * - dom：renderer 的画布元素，绑定鼠标事件使用
 * - size：画布尺寸（width/height），用于将像素坐标换算到 NDC（归一化设备坐标）
 */
function onMount(ctx: {
  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.WebGLRenderer
  THREE: typeof THREE
  dom: HTMLCanvasElement
  size: { width: number; height: number }
}) {
  return
  if (mounted) return
  mounted = true
  const { scene, camera, THREE: T, dom, size } = ctx

  const handleClick = (e: MouseEvent) => {
    // 1) 将鼠标像素坐标转换为 NDC：[-1, 1]
    const width = dom.clientWidth || size.width
    const height = dom.clientHeight || size.height
    const x = (e.offsetX / width) * 2 - 1
    const y = -((e.offsetY / height) * 2 - 1)

    // 2) 使用 Raycaster 基于相机与 NDC 发射射线，进行对象拾取
    const rayCaster = new T.Raycaster()
    rayCaster.setFromCamera(new T.Vector2(x, y), camera)
    // 递归遍历场景子层级以命中分组内的 Sprite
    const intersections = rayCaster.intersectObjects(scene.children, true)

    if (intersections.length) {
      const obj = intersections[0].object as THREE.Object3D & {
        isSprite?: boolean
        name?: string
      }
      // 3) 仅处理“标注圆点”，它们在 chinaMap2.ts 中命名为 'annotation' + 省名
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((obj as any).isSprite && obj.name?.startsWith('annotation')) {
        // 先清理其他圆点上已显示的文字（子节点名为 'posName'）
        scene.traverse((node) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((node as any).isSprite) {
            node.children?.forEach((c) => {
              if (c.name === 'posName') (node as THREE.Object3D).remove(c)
            })
          }
        })
        // 4) 在当前命中圆点上添加文字标签（SpriteText）
        const posName = new SpriteText(obj.name.replace('annotation', ''), 1)
        posName.name = 'posName'
        posName.color = 'black'
        posName.backgroundColor = 'white'
        posName.padding = 1.5
        posName.borderWidth = 0.2
        posName.borderRadius = 1
        posName.borderColor = 'orange'
        posName.position.set(0, 3, 0)
        obj.add(posName)
      }
    }
  }

  dom.addEventListener('click', handleClick)
}
</script>
