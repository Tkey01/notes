import { ctx } from '../'
import { recognizeSide } from '../utils'
import { TextField } from './TextField'
import shortid from 'shortid'

export class Rect {
  constructor(props) {
    this.x = props.x
    this.y = props.y
    this.w = props.w
    this.h = props.h

    this.type = 'rectangle'
    this.lines = props.lines || []
    this.points = props.points || []
    this.zIndex = 1
    this.textField = new TextField({
      x: props.x,
      y: props.y + props.h + 20,
      w: props.w,
      h: 20,
      content: props.text || '',
    })
    this._id = props._id || shortid.generate()
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  move(x, y) {
    this.x = x
    this.y = y
  }

  isMouseOver(mouseX, mouseY) {
    return (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    )
  }

  isMouseOverConnectPoint(mouseX, mouseY) {
    const side = recognizeSide(this, { x: mouseX, y: mouseY })

    if (side) {
      return true
    }

    return false
  }

  addChild(element) {
    if (element.type === 'circle') {
      this.points.push(element)
    } else {
      this.lines.push(element)
    }
  }

  removeChild(element) {
    if (element.type === 'circle') {
      const findIndex = this.points.findIndex((point) => point === element)
      this.points.splice(findIndex, 1)
    } else {
      const findIndex = this.lines.findIndex((line) => line === element)
      this.lines.splice(findIndex, 1)
    }
  }
}
