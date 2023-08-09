export interface PositionOption {
  startX?: number
  startY?: number
}

/**
 * 用于绘制前移动坐标轴，并且会在绘制完恢复状态
 * @param ctx
 * @param drawFn
 * @param options
 */
export function drawFromPosition(
  ctx: CanvasRenderingContext2D,
  drawFn: (ctx: CanvasRenderingContext2D) => void,
  options?: PositionOption
) {
  const { startX = 0, startY = 0 } = options || {}
  // 保存初始状态
  ctx.save()
  // 移动起点
  ctx.translate(startX, startY)
  drawFn(ctx)
  // 恢复
  ctx.restore()
}
