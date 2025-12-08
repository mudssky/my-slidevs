---
title: 曲线
transition: fade
layout: center
---

## 曲线

---

曲线api是用来计算点，然后可以拿这些点使用点模型或者线模型画出来

---
layout: none
---

<LazyRender>
<Demo019EllipseCurve />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo020EllipseCurve2 />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo021SplineCurve />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo022QuadraticBezierCurve />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo023CubicBezierCurve3 />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo024CurvePath />
</LazyRender>

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

---
layout: none
---

<LazyRender>
<Demo025yunleiwen />
</LazyRender>

---

LatheGeometry相当于旋转成型  
TubeGeometry用于生成管道  
Shape 可以定义多边形
ShapeGeometry 可以绘制Shape定义的多边形  
Shape+ExtrudeGeometry 可以拉伸Shape定义的多边形

---
layout: none
---

<LazyRender>
<Demo026LatheGeometry />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo027TubeGeometry />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo028ShapeGeometry />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo029ExtrudeGeometry />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo030Tubetravel />
</LazyRender>

---
layout: none
---

<LazyRender>
<Demo031Tubetravel2 />
</LazyRender>
