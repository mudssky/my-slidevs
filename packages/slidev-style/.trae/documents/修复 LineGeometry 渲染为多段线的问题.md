## 原因说明
- `LineGeometry`/`LineMaterial` 属于粗线（屏幕空间线宽）实现，需配合 `Line2`（Mesh）渲染。
- 当前使用 `new THREE.Line(geometry, material)` 渲染了 `LineGeometry`，GPU按线元件绘制了粗线几何中的三角片边，结果出现许多细线段。
- `LineMaterial` 还需要设置屏幕分辨率（`material.resolution`），否则线宽与走样会异常，但“很多线”主要由未使用 `Line2` 引起。

## 修改方案
- 引入 `Line2`：`import { Line2, LineGeometry, LineMaterial } from 'three/examples/jsm/Addons'`。
- 用 `Line2` 替换实例化：`const line = new Line2(geometry, material)`，并添加到 `chinaMap`。
- 设置分辨率：在创建或拿到渲染器尺寸处执行 `material.resolution.set(width, height)`；窗口尺寸变化时同步更新。
- 点数据：若 `Addons` 版本不支持 `geometry.setFromPoints(pointsArr)`，用 `geometry.setPositions(pointsArr.flatMap(p => [p.x, p.y, p.z]))`。
- 可选：如果希望线宽随世界单位缩放，改用 `new LineMaterial({ color, linewidth, worldUnits: true })`，按地图比例调整 `linewidth`。

## 验证与调整
- 运行场景，确认北京-上海之间只渲染一条粗曲线，无额外线段。
- 调整 `linewidth` 以匹配视觉需求；在 resize 时更新 `material.resolution` 保持线宽稳定。
- 如需虚线效果，调用 `line.computeLineDistances()` 并在 `LineMaterial` 开启 `dashed` 与相关参数。