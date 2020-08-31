import { Circle } from '../components/Circle'
import { rc } from '..'
import { recognizeSide } from '../utils'

export class ConnectPoint {
  constructor() {
    this.circle = new Circle({
      x: 0,
      y: 0,
      radius: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      type: 'connectPoint',
    })
    rc.add(this.circle)
  }

  calculateNewConnectPoint(mouseX, mouseY) {
    const rectangle = rc.figures
      .filter((figure) => figure.type === 'rectangle')
      .find((rect) => rect.isMouseOverConnectPoint(mouseX, mouseY))

    if (rectangle) {
      const side = recognizeSide(rectangle, { x: mouseX, y: mouseY })

      if (side === 'left') {
        this.circle.x = rectangle.x
        this.circle.y = mouseY
      } else if (side === 'right') {
        this.circle.x = rectangle.x + rectangle.w
        this.circle.y = mouseY
      } else if (side === 'top') {
        this.circle.x = mouseX
        this.circle.y = rectangle.y
      } else if (side === 'bottom') {
        this.circle.x = mouseX
        this.circle.y = rectangle.y + rectangle.h
      }

      this.circle.rectangle = rectangle
      this.circle.radius = 7
    } else {
      this.circle.rectangle = null
      this.circle.radius = 0
    }
  }
}
