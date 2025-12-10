---
title: BufferGeometry
transition: fade
layout: center
---

## BufferGeometry

---
layout: scroll
hideInToc: true
---

https://threejs.org/docs/index.html?q=Geometry#BoxGeometry

BufferGeometry 是 Three.js 中现代几何体的共同基类。它用 TypedArray 存储顶点数据并直接面向 GPU，既省内存也更易于批量更新。

- attributes：顶点属性集合，如 `position`、`normal`、`uv`，每个属性由 `BufferAttribute` 表示
- index：可选的索引缓冲，用来复用顶点、减少面片重复；编辑几何体后记得同步更新
- computeVertexNormals()：当未提供法线或修改了 `position`/`index` 时，用此方法按面平均生成顶点法线

常见子类与用途：

- `BoxGeometry`：通过 `width`/`height`/`depth` 构建盒体，适合快速搭建场景元素
- `SphereGeometry`：用 `radius` 与经纬细分生成球体，常用于星球/球形指示器
- `TextGeometry`：基于字体曲线挤出生成文本网格，顶点数较多，适合静态标题

使用建议：

- 自定义形状或批量数据：直接使用 `BufferGeometry`，通过 `setAttribute('position', ...)` 构建顶点
- 修改几何后：设置 `geometry.attributes.position.needsUpdate = true` 并调用 `computeVertexNormals()`
- 性能优化：优先使用 `index` 合并重复顶点；大量实例考虑 `InstancedBufferGeometry`

---
layout: scroll
---

```mermaid
classDiagram
    direction TB
    
    class BufferGeometry {
        +attributes
        +index
        +computeVertexNormals()
    }

    class BoxGeometry {
        +width
        +height
        +depth
    }

    class SphereGeometry {
        +radius
        +widthSegments
        +heightSegments
    }
    
    class TextGeometry {
        +text
        +parameters
    }

    class Others["其他15+种几何体..."] {
        <<PlaceHolder>>
    }

    BufferGeometry <|-- BoxGeometry
    BufferGeometry <|-- SphereGeometry
    BufferGeometry <|-- TextGeometry
    BufferGeometry <.. Others : 及其它子类
```

---
hide: true
---
<MermaidViewer>
<!-- markdownlint-disable MD046 -->
```mermaid
classDiagram
    direction TB
    %% 最顶层的基类
    class EventDispatcher {
        <<abstract>>
        +addEventListener()
        +removeEventListener()
        +dispatchEvent()
    }

    %% 三维对象的基类
    class Object3D {
        <<abstract>>
        +position: Vector3
        +rotation: Euler
        +scale: Vector3
        +add(object)
        +remove(object)
    }

    %% 所有几何体的基类
    class BufferGeometry {
        <<abstract>>
        +attributes: Object
        +index: BufferAttribute
        +boundingBox: Box3
        +setAttribute(name, attribute)
        +computeVertexNormals()
        +dispose()
    }

    %% 具体几何体实现
    class BoxGeometry {
        +width: Number
        +height: Number
        +depth: Number
    }

    class SphereGeometry {
        +radius: Number
        +widthSegments: Integer
        +heightSegments: Integer
    }

    class PlaneGeometry {
        +width: Number
        +height: Number
        +widthSegments: Integer
        +heightSegments: Integer
    }

    class CylinderGeometry {
        +radiusTop: Number
        +radiusBottom: Number
        +height: Number
        +radialSegments: Integer
    }

    class ConeGeometry {
        +radius: Number
        +height: Number
        +radialSegments: Integer
    }

    class TorusGeometry {
        +radius: Number
        +tube: Number
        +radialSegments: Integer
        +tubularSegments: Integer
    }

    class RingGeometry {
        +innerRadius: Number
        +outerRadius: Number
        +thetaSegments: Integer
        +phiSegments: Integer
    }

    class CircleGeometry {
        +radius: Number
        +segments: Integer
    }

    class TubeGeometry {
        +path: Curve
        +tubularSegments: Integer
        +radius: Number
        +radialSegments: Integer
    }

    class LatheGeometry {
        +points: Array
        +segments: Integer
        +phiStart: Number
        +phiLength: Number
    }

    class ExtrudeGeometry {
        +shapes: Shape
        +options: Object
    }

    class TextGeometry {
        +text: String
        +parameters: Object
    }

    class TorusKnotGeometry {
        +radius: Number
        +tube: Number
        +tubularSegments: Integer
        +radialSegments: Integer
        +p: Number
        +q: Number
    }

    class PolyhedronGeometry {
        +vertices: Array
        +indices: Array
        +radius: Number
        +detail: Integer
    }

    class DodecahedronGeometry {
        +radius: Number
        +detail: Integer
    }

    class IcosahedronGeometry {
        +radius: Number
        +detail: Integer
    }

    class OctahedronGeometry {
        +radius: Number
        +detail: Integer
    }

    class TetrahedronGeometry {
        +radius: Number
        +detail: Integer
    }

    %% 继承关系
    EventDispatcher <|-- Object3D
    Object3D <|-- BufferGeometry
    BufferGeometry <|-- BoxGeometry
    BufferGeometry <|-- SphereGeometry
    BufferGeometry <|-- PlaneGeometry
    BufferGeometry <|-- CylinderGeometry
    BufferGeometry <|-- ConeGeometry
    BufferGeometry <|-- TorusGeometry
    BufferGeometry <|-- RingGeometry
    BufferGeometry <|-- CircleGeometry
    BufferGeometry <|-- TubeGeometry
    BufferGeometry <|-- LatheGeometry
    BufferGeometry <|-- ExtrudeGeometry
    BufferGeometry <|-- TextGeometry
    BufferGeometry <|-- TorusKnotGeometry
    BufferGeometry <|-- PolyhedronGeometry
    BufferGeometry <|-- DodecahedronGeometry
    BufferGeometry <|-- IcosahedronGeometry
    BufferGeometry <|-- OctahedronGeometry
    BufferGeometry <|-- TetrahedronGeometry

    %% 分组注释
    note for BufferGeometry "所有现代 Three.js 几何体的基类"
    note for BoxGeometry "基础几何体"
    note for TextGeometry "复杂/特殊几何体"

```
<!-- markdownlint-enable MD046 -->
</MermaidViewer>



---
level: 2
layout: webgl
---


  <Demo004BufferGeometry/>


---

上面的例子我们可以看出BufferGeometry是由多个三角形组成的 (6个顶点构成两个三角形) 
可以基于多个三角形来构建复杂的几何体  

我们可以基于BufferGeometry封装各种几何体，比如平面几何体PlaneGeometry  

可以由两个三角形构成

```ts
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,

    0, 100, 0,
    100, 0, 0,
    100, 100, 0
]);
```

---
layout: webgl
---

  <Demo004BufferGeometry2/>

---
level: 2
---

我们发现上面的两个三角形，有两个顶点是重合的，因此TypeArray中也重复定义了两个顶点  

Three.js 提供了一种优化顶点存储的方案：  
存储一份不重复的顶点数据，然后存储一份顶点索引的顺序就可以了。

```ts
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,

    // 0, 100, 0,
    // 100, 0, 0,
    100, 100, 0
]);

const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const indexes = new Uint16Array([
    0, 1, 2, 2, 1, 3
]);
geometry.index = new THREE.BufferAttribute(indexes, 1);

```

---
layout: webgl
---

  <Demo004BufferGeometry3/>

---
layout: scroll
---

把 `geometry.attributes.position` 里重复的两个顶点删掉，然后加一份索引数据，设置到 `geometry.index`  
所有几何体都是这样存储顶点数据的  
`geometry.attributes.position`可以查看顶点数为24  
`geometry.index`可以看到顶点索引为36个.12个三角形，每面两个三角形，一共6个面，这个就是一个立方体

```js {monaco-run} {autorun:false}
import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial(({
    color: new THREE.Color('orange')
}));
const mesh = new THREE.Mesh(geometry, material);
debugger
console.log('测试几何体顶点',mesh);

```

---
layout: webgl
---

  <Demo004BufferGeometry4/>
