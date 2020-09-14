import { rc } from '..'
import { isWithinBorders } from '../utils'

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
      deleteButton: {
        x: this.rectangle.deleteButton.x,
        y: this.rectangle.deleteButton.y,
      },
      leftBorder: this.rectangle.leftBorder,
      rightBorder: this.rectangle.rightBorder,
      topBorder: this.rectangle.topBorder,
      bottomBorder: this.rectangle.bottomBorder,
    }
  }

  processing({ mouseX, mouseY }) {
    const diff1 = mouseX - this.startCoords.mouse.x
    const diff2 = mouseY - this.startCoords.mouse.y

    const isWithinOtherBorders = rc.figures
      .filter(
        (figure) => figure.type === 'rectangle' && figure !== this.rectangle,
      )
      .some((figure) =>
        isWithinBorders(
          {
            leftBorder: this.startCoords.leftBorder + diff1,
            rightBorder: this.startCoords.rightBorder + diff1,
            topBorder: this.startCoords.topBorder + diff2,
            bottomBorder: this.startCoords.bottomBorder + diff2,
          },
          figure,
        ),
      )

    if (isWithinOtherBorders) {
      return
    }

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

    this.rectangle.deleteButton.move(
      this.startCoords.deleteButton.x + diff1,
      this.startCoords.deleteButton.y + diff2,
    )

    this.rectangle.move(
      this.startCoords.rectangle.x + diff1,
      this.startCoords.rectangle.y + diff2,
    )

    this.rectangle.leftBorder = this.startCoords.leftBorder + diff1
    this.rectangle.rightBorder = this.startCoords.rightBorder + diff1
    this.rectangle.topBorder = this.startCoords.topBorder + diff2
    this.rectangle.bottomBorder = this.startCoords.bottomBorder + diff2
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
