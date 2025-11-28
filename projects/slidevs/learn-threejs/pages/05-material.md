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
