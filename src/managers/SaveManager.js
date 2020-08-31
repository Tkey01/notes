import { rc } from '..'

export class SaveManager {
  constructor() {}

  saveConnectPoint(figure) {
    return {
      x: figure.x,
      y: figure.y,
      radius: figure.radius,
      startAngle: figure.startAngle,
      endAngle: figure.endAngle,
      _id: figure._id,

      type: figure.type,
    }
  }

  saveLine(figure) {
    return {
      x1: figure.x1,
      y1: figure.y1,
      x2: figure.x2,
      y2: figure.y2,
      zIndex: figure.zIndex,
      _id: figure._id,

      rectangleStart: figure.rectangleStart._id,
      rectangleEnd: figure.rectangleEnd._id,
      circleStart: figure.circleStart._id,
      circleEnd: figure.circleEnd._id,
      type: figure.type,
    }
  }

  saveRectangle(figure) {
    console.log('save rectangle - ', figure.textField)
    return {
      x: figure.x,
      y: figure.y,
      w: figure.w,
      h: figure.h,
      text: figure.textField.content,
      _id: figure._id,

      points: figure.points.map((point) => point._id),
      lines: figure.lines.map((line) => line._id),
      type: figure.type,
    }
  }

  saveCircle(figure) {
    return {
      x: figure.x,
      y: figure.y,
      radius: figure.radius,
      startAngle: figure.startAngle,
      endAngle: figure.endAngle,
      line: figure.line._id,
      _id: figure._id,

      type: figure.type,
    }
  }

  saveFigure(figure) {
    return this[`save${figure.type[0].toUpperCase() + figure.type.slice(1)}`](
      figure,
    )
  }

  save() {
    const savedArray = rc.figures.map((figure) => this.saveFigure(figure))

    localStorage.setItem('save', JSON.stringify(savedArray))
  }
}
