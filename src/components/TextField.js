import shortid from 'shortid'

export class TextField {
  constructor(props) {
    this.x = props.x
    this.y = props.y
    this.content = props.content || ''
    this.element = document.createElement('input')
    this.onChange = this.onChange.bind(this)

    this.element.style.cssText = `
      position: fixed;
      left: ${props.x}px;
      top: ${props.y}px;
      width: ${props.w}px;
      height: ${props.h}px;
    `
    this.element.classList.add('rect-input')
    this.element.type = 'text'
    this.element.value = this.content
    this.element.addEventListener('input', this.onChange)

    this._id = shortid.generate()

    document.body.appendChild(this.element)
  }

  move(x, y) {
    this.x = x
    this.y = y

    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
  }

  onChange(event) {
    this.content = event.target.value
  }
}
