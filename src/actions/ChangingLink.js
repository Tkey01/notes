import { rc, stateManager } from '..'
import { Circle } from '../components/Circle'

export class ChangingLink {
  constructor() {
    this.circleEnd = null
    this.line = null
    this.type = null
  }

  start({ circle }) {
    this.line = circle.line
    this.type = this.line.circleStart === circle ? 'Start' : 'End'

    rc.remove(circle)
  }

  processing({ mouseX, mouseY }) {
    if (this.type === 'Start') {
      this.line.move({ x1: mouseX, y1: mouseY })
    } else {
      this.line.move({ x2: mouseX, y2: mouseY })
    }
  }

  changeLink(newCircle, bindableRect) {
    this.line[`rectangle${this.type}`].removeChild(this.line)
    this.line[`rectangle${this.type}`].removeChild(
      this.line[`circle${this.type}`],
    )

    this.line[`circle${this.type}`] = newCircle
    this.line[`rectangle${this.type}`] = bindableRect

    bindableRect.addChild(this.line)
    bindableRect.addChild(newCircle)
  }

  stop({ mouseX, mouseY }) {
    const overElement = stateManager.getOverElement(mouseX, mouseY)

    if (
      overElement &&
      overElement.type === 'connectPoint' &&
      overElement.rectangle !==
        (this.type === 'Start'
          ? this.line.rectangleEnd
          : this.line.rectangleStart)
    ) {
      const newCircle = new Circle({
        x: overElement.x,
        y: overElement.y,
        radius: 7,
        line: this.line,
      })

      this.changeLink(newCircle, overElement.rectangle)

      rc.add(newCircle)
    } else {
      this.line.rectangleStart.removeChild(this.line)
      this.line.rectangleStart.removeChild(this.line.circleStart)

      this.line.rectangleEnd.removeChild(this.line)
      this.line.rectangleEnd.removeChild(this.line.circleEnd)

      rc.remove(this.line)

      if (this.type === 'Start') {
        rc.remove(this.line.circleEnd)
      } else {
        rc.remove(this.line.circleStart)
      }
    }

    rc.render()
    this.resetState()
  }

  resetState() {
    this.line = null
    this.type = null
  }
}
