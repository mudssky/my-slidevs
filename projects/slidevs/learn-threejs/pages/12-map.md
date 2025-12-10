---
title: 地图
transition: fade
layout: center
---

## 地图

---

## GeoJson与地图绘制

单独绘制某个省的形状，可以使用Shape来绘制，如果要凸起地块的效果，可以使用ExtrudeGeometry拉伸一下  
如何获取到形状的数据，就是使用geojson这个标准  

下面是我把一个中国地图的geojson拿出部分来看

```json
  "features": [
    {
      "type": "Feature",
      "properties": {
        "adcode": 100000,
        "name": "中华人民共和国",
        "center": [116.3683244, 39.915085],
        "centroid": [104.113164, 37.570667],
        "childrenNum": 34,
        "level": "country",
        "parent": { "adcode": null }
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [124.515065, 40.22019],
              [124.62655, 40.291896],
              [124.722636, 40.321561],
              [124.739267, 40.371733],
              [124.834121, 40.423235],
              [124.913578, 40.481981],
              [124.945606, 40.45603],
              [124.985642, 40.475153],
              [125.044157, 40.466503],
              ...
            ]]}}]
```

---

可以看到里面都是一些二维的坐标点，表示经纬度  
我们绘制的时候需要用一种墨卡托投影的算法，把经纬度转为平面坐标使用  
这里可以从antv这个网站获取到geojson数据  https://datav.aliyun.com/portal/school/atlas/area_selector  

---
layout: none
---

<LazyRender>
<Demo033ChinaMap1 />
</LazyRender>

---
layout: webgl
---

<LazyRender>
<Demo034ChinaMap2/>
</LazyRender>

---
layout: webgl
---

<Demo001start/>
