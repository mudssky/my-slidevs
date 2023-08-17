export interface CanvasDemoProps {
  ctx: CanvasRenderingContext2D
}

export abstract class CanvasDemo {
  ctx: CanvasRenderingContext2D
  constructor(props: CanvasDemoProps) {
    const { ctx } = props
    this.ctx = ctx
  }
  abstract draw(): void
}
