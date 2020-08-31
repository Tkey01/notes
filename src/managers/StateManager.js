import { rc } from '..'

export class StateManager {
  constructor() {
    this.actionState = null
  }

  getOverElement(mouseX, mouseY) {
    const figure = rc.figures.find((figure) => {
      return figure.isMouseOver(mouseX, mouseY)
    })
    return figure
  }
}
