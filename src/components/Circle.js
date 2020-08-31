import { ctx } from '../'
import { recognizeSide } from '../utils'
import shortid from 'shortid'

export class Circle {
  constructor(props) {
    this.x = props.x
    this.y = props.y
    this.radius = props.radius
    this.startAngle = props.startAngle || 0
    this.endAngle = props.endAngle || Math.PI * 2

    this.type = props.type || 'circle'
    this.line = props.line || null
    this.rectangle = props.rectangle || null
    this.zIndex = props.type === 'connectPoint' ? 2 : 3
    this._id = props._id || shortid.generate()
  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.type === 'circle' ? '#91ede4' : 'red'
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle)
    ctx.fill()
    ctx.fillStyle = '#faf378'
  }

  move(x, y) {
    this.x = x
    this.y = y
  }

  isMouseOver(mouseX, mouseY) {
    if (this.type === 'connectPoint' && this.rectangle) {
      return !!recognizeSide(this.rectangle, { x: mouseX, y: mouseY })
    }

    return (
      Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2) <=
      Math.pow(this.radius, 2)
    )
  }
}
