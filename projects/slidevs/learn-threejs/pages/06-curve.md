---
title: 曲线
transition: fade
layout: center
---

## 曲线

---

曲线api是用来计算点，然后可以拿这些点使用点模型或者线模型画出来

---
layout: webgl
---

<Demo019EllipseCurve />

---
layout: webgl
---

<Demo020EllipseCurve2 />

---
layout: webgl
---

<Demo021SplineCurve />

---
layout: webgl
---

<Demo022QuadraticBezierCurve />

---
layout: webgl
---

<Demo023CubicBezierCurve3 />

---
layout: webgl
---

<Demo024CurvePath />

---

## Three.Group

- 作用：`Group` 是 `Object3D` 的容器，用来把一组对象组织在一起，方便统一移动、旋转、缩放与显隐控制。
- 层级坐标：子对象的坐标、旋转都相对于 `Group` 的本地坐标系，适合做图形的整体编排。
- 批量控制：可以通过 `group.visible`、`group.add/remove` 一次性显示/隐藏、增删一组元素。

示例：

```ts
const group = new THREE.Group()

// 添加子图形
group.add(line1)
group.add(circleGroup)
group.add(line3)
// 整体变换
group.position.set(0, 0, 0)
group.rotation.z = Math.PI / 6
group.scale.set(1, 1, 1)
// 显隐控制
group.visible = true
// 添加到场景
scene.add(group)
```

---

要点：

- 对 `group` 的变换会同步作用到所有子对象，适合将复杂纹样作为一个整体管理。
- 在“云雷纹”示例中，返回的 `group` 集合了同心圆、小圆环、以及两圈“回”字折线，便于整体添加到场景或做动画。

group存在postion属性，group中的mesh也有postion。mesh添加到group之后，绝对坐标是group的position加上mesh的position  
group内部mesh的postion就变成了局部坐标  
mesh上有getWorldPosition这个api可以获取到世界坐标  

遍历scene ：  
threejs提供了api可以遍历scene中的mesh  
可以在遍历scene的过程中改变属性  
如果给mesh设置了name属性，可以通过`scene.getObjectByName` api查找对象

```js
scene.traverse((obj) => {
    if(obj.isMesh) {
        obj.material.color = new THREE.Color('pink');
    }
});

```

---
layout: webgl
---

<Demo025yunleiwen />

---

LatheGeometry相当于旋转成型  
TubeGeometry用于生成管道  
Shape 可以定义多边形
ShapeGeometry 可以绘制Shape定义的多边形  
Shape+ExtrudeGeometry 可以拉伸Shape定义的多边形

---
layout: webgl
---

<Demo026LatheGeometry />

---
layout: webgl
---

<Demo027TubeGeometry />

---
layout: webgl
---

<Demo028ShapeGeometry />

---
layout: webgl
---

<Demo029ExtrudeGeometry />

---
layout: webgl
---

<Demo030Tubetravel />

---
layout: webgl
---

<Demo031Tubetravel2 />

---
layout: webgl
---

<Demo032Tubetravel3 />
