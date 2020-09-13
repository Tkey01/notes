import { actionManager } from '..'

export class DeleteButton {
  constructor(props) {
    this.x = props.x
    this.y = props.y
    this.onClick = this.onClick.bind(this)

    this.createElement(props)
  }

  createElement(props) {
    this.element = document.createElement('button')
    this.element.style.cssText = `
      position: fixed;
      left: ${props.x}px;
      top: ${props.y}px;
    `
    this.element.innerText = '×'
    this.element.classList.add('delete-btn')
    this.element.addEventListener('click', this.onClick)

    document.body.appendChild(this.element)
  }

  move(x, y) {
    this.x = x
    this.y = y

    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
  }

  onClick(event) {
    actionManager.dispatch({
      name: 'deleteNode',
      payload: {
        mouseX: event.pageX,
        mouseY: event.pageY,
      },
    })
  }
}
