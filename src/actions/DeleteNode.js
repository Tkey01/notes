import { rc } from '..'

export class DeleteNode {
  constructor() {
    this.deleteNode = null
  }

  execute({ rectangle }) {
    this.deleteNode = rectangle

    this.deleteNode.lines.forEach((line) => {
      const isFromStart = line.rectangleStart === this.deleteNode

      if (isFromStart) {
        line.rectangleEnd.removeChild(line)
        line.rectangleEnd.removeChild(line.circleEnd)
      } else {
        line.rectangleStart.removeChild(line)
        line.rectangleStart.removeChild(line.circleStart)
      }

      rc.remove(line)
      rc.remove(line.circleStart)
      rc.remove(line.circleEnd)
    })

    this.deleteNode.textField.element.remove()
    this.deleteNode.deleteButton.element.remove()
    rc.remove(this.deleteNode)
    rc.render()
  }
}
