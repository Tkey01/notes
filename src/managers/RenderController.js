import { ctx, globalSizes } from '..'

export class RenderController {
  constructor() {
    this.figures = []
  }

  render() {
    ctx.clearRect(0, 0, globalSizes.width, globalSizes.height)

    const length = this.figures.length
    for (let i = length - 1; i >= 0; i--) {
      this.figures[i].draw()
    }
  }

  add(element) {
    this.figures.push(element)
    this.figures.sort((figure1, figure2) => figure2.zIndex - figure1.zIndex)
  }

  remove(element) {
    const index = this.figures.findIndex((figure) => figure === element)
    this.figures.splice(index, 1)
  }
}
