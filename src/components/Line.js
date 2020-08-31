import { ctx } from '..'
import shortid from 'shortid'

export class Line {
  constructor(props) {
    this.x1 = props.x1
    this.y1 = props.y1
    this.x2 = props.x2
    this.y2 = props.y2

    this.rectangleStart = props.rectangleStart
    this.rectangleEnd = props.rectangleEnd
    this.circleStart = props.circleStart
    this.circleEnd = props.circleEnd
    this.zIndex = 0
    this.type = 'line'
    this._id = props._id || shortid.generate()
  }

  draw() {
    ctx.beginPath()

    ctx.moveTo(this.x1, this.y1)
    ctx.lineTo(this.x2, this.y2)
    ctx.stroke()
  }

  move({ x1 = this.x1, x2 = this.x2, y1 = this.y1, y2 = this.y2 }) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }

  isMouseOver() {
    return false
  }
}
