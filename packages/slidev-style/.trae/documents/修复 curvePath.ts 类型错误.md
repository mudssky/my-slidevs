## 原因说明
- `CurvePath` 是泛型：`CurvePath<T extends Vector>`。未指定 `T` 时，类型被宽化为 `THREE.Vector` 的联合（`Vector2 | Vector3`）。
- 你的路径里全是 2D 曲线（`LineCurve(Vector2)`、`EllipseCurve(Vector2)`），但由于未标注泛型，`curvePath.getPoints(20)` 推断为 `(Vector2 | Vector3)[]`。
- `BufferGeometry.setFromPoints` 的签名是 `setFromPoints(points: Vector2[] | Vector3[])`，它需要纯 `Vector2[]` 或纯 `Vector3[]`，联合数组不满足，导致类型错误发生在 `curvePath.ts:20`。

## 修复方案
1. 显式标注 `CurvePath` 泛型为 `Vector2`，让推断收敛到 `Vector2[]`：
   ```ts
   const curvePath = new THREE.CurvePath<THREE.Vector2>()
   const pointsArr = curvePath.getPoints(20)
   geometry.setFromPoints(pointsArr)
   ```
2. 如需最小改动，可以在调用处断言（不推荐，丢失类型安全）：
   ```ts
   geometry.setFromPoints(pointsArr as THREE.Vector2[])
   ```
3. 若要在 3D 空间中使用 Z 轴，可把 `Vector2` 映射为 `Vector3`：
   ```ts
   const points3 = pointsArr.map(p => new THREE.Vector3(p.x, p.y, 0))
   geometry.setFromPoints(points3)
   ```

## 验证计划
- 运行类型检查，确认 `curvePath.ts:20` 不再报错。
- 渲染一条 `Line`，确保几何正确（`Vector2[]` 情况下 Z=0）。