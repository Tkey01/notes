import { rc, connectPoint } from '..'
import { Circle } from '../components/Circle'
import { Rect } from '../components/Rect'
import { Line } from '../components/Line'

export class LoadManager {
  loadConnectPoint(figure) {
    return new Circle({
      x: figure.x,
      y: figure.y,
      radius: figure.radius,
      startAngle: figure.startAngle,
      endAngle: figure.endAngle,
      _id: figure._id,

      type: figure.type,
    })
  }

  loadLine(figure) {
    return new Line({
      x1: figure.x1,
      y1: figure.y1,
      x2: figure.x2,
      y2: figure.y2,
      zIndex: figure.zIndex,
      _id: figure._id,

      rectangleStart: figure.rectangleStart,
      rectangleEnd: figure.rectangleEnd,
      circleStart: figure.circleStart,
      circleEnd: figure.circleEnd,
      type: figure.type,
    })
  }

  loadRectangle(figure) {
    console.log(figure.text)
    return new Rect({
      x: figure.x,
      y: figure.y,
      w: figure.w,
      h: figure.h,
      text: figure.text,
      _id: figure._id,

      points: figure.points,
      lines: figure.lines,
      type: figure.type,
    })
  }

  loadCircle(figure) {
    return new Circle({
      x: figure.x,
      y: figure.y,
      radius: figure.radius,
      startAngle: figure.startAngle,
      endAngle: figure.endAngle,
      line: figure.line,
      _id: figure._id,

      type: figure.type,
    })
  }

  findFigure(id, figures) {
    return figures.find((figure) => figure._id === id)
  }

  loadRectangleChildrens(figure, figures) {
    figure.points = figure.points.map((id) =>
      this.findFigure(id, figures, 'rect'),
    )
    figure.lines = figure.lines.map((id) =>
      this.findFigure(id, figures, 'rect'),
    )
  }

  loadLineChildrens(figure, figures) {
    figure.rectangleStart = this.findFigure(figure.rectangleStart, figures)
    figure.rectangleEnd = this.findFigure(figure.rectangleEnd, figures)
    figure.circleStart = this.findFigure(figure.circleStart, figures)
    figure.circleEnd = this.findFigure(figure.circleEnd, figures)
  }

  loadCircleChildrens(figure, figures) {
    figure.line = this.findFigure(figure.line, figures)
  }

  loadChildrens(figure, figures) {
    if (figure.type === 'rectangle') {
      this.loadRectangleChildrens(figure, figures)
    } else if (figure.type === 'line') {
      this.loadLineChildrens(figure, figures)
    } else if (figure.type === 'circle') {
      this.loadCircleChildrens(figure, figures)
    }
  }

  loadFigure(figure) {
    return this[`load${figure.type[0].toUpperCase() + figure.type.slice(1)}`](
      figure,
    )
  }

  load() {
    document.querySelectorAll('.rect-input').forEach((item) => item.remove())
    document.querySelectorAll('.delete-btn').forEach((item) => item.remove())

    const savedData = JSON.parse(window.localStorage.getItem('save'))
    const newFigures = savedData.map((figure) => this.loadFigure(figure))

    newFigures.forEach((figure) => this.loadChildrens(figure, newFigures))

    connectPoint.circle = newFigures.find(
      (figure) => figure.type === 'connectPoint',
    )
    rc.figures = newFigures
    rc.render()
  }
}
