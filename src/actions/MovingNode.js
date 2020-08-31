import { rc } from '..'

export class MovingNode {
  constructor() {
    this.rectangle = null
  }

  start({ rectangle, mouseX, mouseY }) {
    this.rectangle = rectangle
    this.startCoords = {
      rectangle: {
        x: this.rectangle.x,
        y: this.rectangle.y,
      },
      lines: this.rectangle.lines.map((line) => ({
        x1: line.x1,
        x2: line.x2,
        y1: line.y1,
        y2: line.y2,
      })),
      points: this.rectangle.points.map((point) => ({
        x: point.x,
        y: point.y,
      })),
      mouse: {
        x: mouseX,
        y: mouseY,
      },
      textField: {
        x: this.rectangle.textField.x,
        y: this.rectangle.textField.y,
      },
    }
  }

  processing({ mouseX, mouseY }) {
    const diff1 = mouseX - this.startCoords.mouse.x
    const diff2 = mouseY - this.startCoords.mouse.y

    this.rectangle.lines.forEach((line, i) => {
      if (line.rectangleStart === this.rectangle) {
        line.move({
          x1: this.startCoords.lines[i].x1 + diff1,
          y1: this.startCoords.lines[i].y1 + diff2,
        })
      } else {
        line.move({
          x2: this.startCoords.lines[i].x2 + diff1,
          y2: this.startCoords.lines[i].y2 + diff2,
        })
      }
    })

    this.rectangle.points.forEach((point, i) => {
      point.move(
        this.startCoords.points[i].x + diff1,
        this.startCoords.points[i].y + diff2,
      )
    })

    this.rectangle.textField.move(
      this.startCoords.textField.x + diff1,
      this.startCoords.textField.y + diff2,
    )

    this.rectangle.move(
      this.startCoords.rectangle.x + diff1,
      this.startCoords.rectangle.y + diff2,
    )
  }

  stop() {
    this.resetState()
    rc.render()
  }

  resetState() {
    this.rectangle = null
    this.startCoords = null
  }
}
