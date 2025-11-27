---
title: 点、线、网格模型
transition: fade
layout: center
---

## 点、线、网格模型

---
level: 2
---

## 点模型

下面是一个例子  
通过 BufferGeometry 创建自定义几何体,添加了一些顶点数据  
点模型的专属材质 PointsMaterial，设置 size 为 10  

```js
import * as THREE from 'three';

const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;
const material = new THREE.PointsMaterial({
    color: new THREE.Color('orange'),
    size: 10
});
const points = new THREE.Points(geometry, material);
export default points;

```

---
layout: none
---

<LazyRender>
<Demo005Point />
</LazyRender>

---
level: 2
---

## 线模型

还是BufferGeometry  
更换了材质LineBasicMaterial，然后创建Line  

```js
import * as THREE from 'three';
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;
const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('orange')
});
const line = new THREE.Line(geometry, material);
export default line;

```

---
layout: none
---

<LazyRender>
<Demo006Line />
</LazyRender>

---
level: 2
---

## 网格模型Mesh
这个是之前实现的平面  
可以发现平面我们只能看到一个方向的面，反过来就看不到了

```ts
import * as THREE from 'three';
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    100, 100, 0
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;
const indexes = new Uint16Array([
    0, 1, 2, 2, 1, 3
]);
geometry.index = new THREE.BufferAttribute(indexes, 1);
const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('orange')
});
const mesh = new THREE.Mesh(geometry, material);
export default mesh;

```

---
layout: none
---

<LazyRender>
<Demo007Mesh />
</LazyRender>

---

Three.js 规定了：从相机看过去的方向，如果一个三角形是逆时针连接的顶点，就是正面，顺时针就是反面。  
默认是正面可见的，如果想要双面可见，可以在材质里设置  

```ts
const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('orange'),
    side: THREE.DoubleSide
});
```

---
level: 2
---

## 模型分段

模型存在分段的概念  
这个平面被分成了 2x3 个小平面，每个平面都是两个三角形  
如果后面两个参数不设置，则只有两个三角形，现在是12个三角形  

```js
const geometry = new THREE.PlaneGeometry(100, 100, 2, 3);
```

分段多了要渲染更多顶点，性能会变差  
圆柱体的场景比较直观，设置的分段越多就会越圆  
https://threejs.org/docs/index.html?q=Geometry#CylinderGeometry

---
layout: none
---

<LazyRender>
<Demo008Segment />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo009CylinderGeometry />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo010RandomMountain />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo011NoiseMountain />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo012NoiseMountainAnime />
</LazyRender>
