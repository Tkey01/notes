import { Line } from '../components/Line'
import { rc, stateManager } from '../'
import { Circle } from '../components/Circle'

export class CreatingLink {
  constructor() {
    this.line = null
    this.circleStart = null
    this.circleEnd = null
    this.rectangleStart = null
    this.rectangleEnd = null
  }

  start({ connectPoint, mouseX, mouseY }) {
    this.rectangleStart = connectPoint.rectangle
    this.line = new Line({
      x1: connectPoint.x,
      y1: connectPoint.y,
      x2: mouseX,
      y2: mouseY,
      rectangleStart: this.rectangleStart,
    })
    this.circleStart = new Circle({
      x: connectPoint.x,
      y: connectPoint.y,
      radius: 7,
      line: this.line,
    })
    this.line.circleStart = this.circleStart

    rc.add(this.line)
    rc.add(this.circleStart)
  }

  processing({ mouseX, mouseY }) {
    this.line.move({ x2: mouseX, y2: mouseY })
  }

  stop({ mouseX, mouseY }) {
    const overElement = stateManager.getOverElement(mouseX, mouseY)

    if (overElement && overElement.type === 'connectPoint') {
      this.rectangleEnd = overElement.rectangle
      this.circleEnd = new Circle({
        x: overElement.x,
        y: overElement.y,
        radius: 7,
        line: this.line,
      })
      this.line.rectangleEnd = this.rectangleEnd
      this.line.circleEnd = this.circleEnd

      this.rectangleStart.addChild(this.line)
      this.rectangleStart.addChild(this.circleStart)

      this.rectangleEnd.addChild(this.line)
      this.rectangleEnd.addChild(this.circleEnd)

      rc.add(this.circleEnd)
    } else {
      rc.remove(this.line)
      rc.remove(this.circleStart)
    }

    rc.render()
    this.resetState()
  }

  resetState() {
    this.line = null
    this.circleStart = null
    this.circleEnd = null
    this.rectangleStart = null
    this.rectangleEnd = null
  }
}
