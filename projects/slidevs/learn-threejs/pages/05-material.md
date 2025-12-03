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
