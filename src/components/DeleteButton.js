import { stateManager, actionManager } from '..'

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
    const mouseX = event.pageX
    const mouseY = event.pageY
    const overElement = stateManager.getOverElement(mouseX, mouseY)
    const currentState = stateManager.actionState

    if (overElement.type === 'rectangle' && !currentState) {
      actionManager.dispatch({
        name: 'deleteNode',
        payload: { rectangle: overElement },
      })
    }
  }
}
