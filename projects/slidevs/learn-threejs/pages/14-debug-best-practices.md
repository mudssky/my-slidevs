---
title: 调试与最佳实践
---

### 目标

- 使用 GUI/Helpers 进行调试
- 组织代码与资源，规避常见坑

### 要点

- 参数面板驱动演示
- 工程结构与命名约定

### 调试工具与方法

- Helpers：`AxesHelper`、`GridHelper`、`CameraHelper`、`Box3Helper`、`SkeletonHelper`
- 面板：`lil-gui` 管理灯光、材质、相机、后期参数；页面不可见时自动隐藏（`useGuiVisibility`）
- 性能监测：对象数量、Draw Calls、纹理分辨率、阴影贴图大小、后期通道数量
- 颜色空间与曝光：`renderer.outputColorSpace = SRGBColorSpace`、`toneMapping` 与 `toneMappingExposure`

```ts
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
const gui = new GUI()
gui.add(mesh.position, 'x', -100, 100)
gui.add(material, 'roughness', 0, 1, 0.01)
gui.add(light, 'intensity', 0, 5, 0.1)
```

### 工程最佳实践

- 目录与资源：统一放置在 `public/assets/*`，按演示主题分组；Markdown 引用相对 `public/`
- 命名：组件使用 PascalCase，脚本与变量 camelCase；贴图命名包含通道标识（`_diffuse`、`_normal`、`_metallic`）
- 组件职责：展示逻辑与渲染逻辑分离；复用 `useSlideContext` 计算画布尺寸
- 事件与清理：监听窗口尺寸时更新相机与渲染器；在组件卸载时释放观察器/GUI/纹理

```ts
window.addEventListener('resize', () => {
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
})
```

### 常见坑位清单

- 阴影未显示：`renderer.shadowMap.enabled`、光源/网格的 `castShadow/receiveShadow`、阴影相机体积
- 贴图偏暗：未设置 sRGB 输出或纹理色空间；`texture.colorSpace = SRGBColorSpace`
- 像素糊：`setPixelRatio(devicePixelRatio)` 与合适的 `minFilter/magFilter`
- 后期无效：未通过 `EffectComposer` 渲染，或分辨率 uniform 未按 DPR 设置
- 资源路径错误：相对路径应以演示 `public/` 为根，注意构建后的 `base`

### 性能优化建议

- 批量与实例化：使用 `InstancedMesh` 代替重复网格；合并静态几何体
- 可见性：视锥裁剪（默认开启）、近远裁剪面合理设置、LOD 管理远距离对象
- 纹理：尺寸与通道按需、开启 Mipmap、各向异性过滤合理值
- 阴影：阴影贴图大小按需、软阴影类型选择、减少投射阴影对象
- 后期：减少通道数量、优先 FXAA/TAA，谨慎使用昂贵的景深/泛光
