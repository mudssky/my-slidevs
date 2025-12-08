---
title: 材质
transition: fade
layout: center
---

## 材质

---

所有的物体，不管是网格模型 Mesh、点模型 Points、还是线模型 Line，都是由几何体和材质构成。  
点模型 Points 有专门的材质 PointsMaterial  
线模型 Line 有专门的材质 LineBasicMaterial、LineDashedMaterial （画虚线用的）  
网格模型 Mesh 也有很多材质 MeshBasicMaterial（不受光照影响）、MeshLambertMaterial（支持漫反射）、MeshPhongMaterial（镜面反射）等  
同一种几何体，加上不同的材质，就可以渲染出不同的质感。  

下面是一个虚线材质的demo  
渲染线模型我们把BoxGeometry转为EdgesGeometry，因为线模型只需要顶点，不需要很多三角形。。。  

---
layout: none
---

<LazyRender>
<Demo013Materail />
</LazyRender>

---

网格模型材质  
可以通过`mesh.material.color`调整颜色  
可以创建时指定透明度

```js
const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('orange'),
  // 可以指定透明度
  // transparent: true,
  // opacity: 0.5,
})
```

可以通过map加载贴图  

```js
import * as THREE from 'three'
import diqiu from '@/public/assets/world.topo.bathy.200401.jpg'

const loader = new THREE.TextureLoader()
const texture = loader.load(diqiu)
const geometry = new THREE.SphereGeometry(100)
const material = new THREE.MeshBasicMaterial({
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)
export default mesh

```

---
layout: none
---

<LazyRender>
<Demo014MeshBasicMaterial />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo015SphereTexture />
</LazyRender>

---

```js
// 可以重复贴图
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(3, 3)
// 设置贴图颜色空间
texture.colorSpace = THREE.SRGBColorSpace
```

在Three.js中，材质的aoMap属性是环境光遮挡贴图(Ambient Occlusion Map)的缩写，它是一个用于增强3D模型真实感的重要贴图属性。

```js
const material = new THREE.MeshBasicMaterial({
  map: texture,
  // 环境遮挡图
  aoMap: texture,
})
```

---
layout: none
---

<LazyRender>
<Demo016zhuan />
</LazyRender>

---

## uv 坐标

uv 坐标是指在3D模型中，用于映射贴图的二维坐标系统。每个顶点都有一个对应的uv坐标，用于确定在贴图上的位置。

uv坐标的范围是0到1，分别对应贴图的水平方向和垂直方向。

在Three.js中，我们可以通过`geometry.uvsNeedUpdate = true`来更新顶点的uv坐标。

```js
const geometry = new THREE.BoxGeometry(100, 100, 100)
geometry.uvsNeedUpdate = true
```

---
layout: none
---

<LazyRender>
<Demo017textureUv />
</LazyRender>

---

## uv动画

纹理对象 Texture 有个 offset 属性，可以让纹理贴图在 x、y 方向做一些偏移。  

这相当于改变了 uv 坐标，所以这种改变 texture.offset 的动画叫做 uv 动画。

---
layout: none
---

<LazyRender>
<Demo018uvAnimation />
</LazyRender>

---
