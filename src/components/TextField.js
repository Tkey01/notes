import shortid from 'shortid'

export class TextField {
  constructor(props) {
    this.x = props.x
    this.y = props.y
    this.content = props.content || ''
    this.onChange = this.onChange.bind(this)
    this._id = shortid.generate()

    this.createElement(props)
  }

  createElement(props) {
    this.element = document.createElement('label')
    this.element.style.cssText = `
      position: fixed;
      left: ${props.x}px;
      top: ${props.y}px;
      width: ${props.w}px;
      height: ${props.h}px;
    `
    this.element.insertAdjacentHTML(
      'beforeend',
      `
      <span class="mdc-text-field__ripple"></span>
      <span class="mdc-floating-label" id="my-label">заметОЧКа</span>
      <input
        type="text"
        class="mdc-text-field__input"
        aria-labelledby="my-label"
      />
      <span class="mdc-line-ripple"></span>
    `,
    )
    this.element.classList.add(
      'rect-input',
      'mdc-text-field',
      'mdc-text-field--outlined',
    )
    this.input = this.element.querySelector('input')
    this.input.value = this.content
    this.input.addEventListener('input', this.onChange)

    document.body.appendChild(this.element)
    window.mdc.textField.MDCTextField.attachTo(this.element)
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
