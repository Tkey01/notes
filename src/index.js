import { RenderController } from './managers/RenderController'
import { StateManager } from './managers/StateManager'
import { ActionManager } from './managers/ActionManager'
import { ConnectPoint } from './managers/ConnectPoint'
import { Rect } from './components/Rect'
import './styles/main.css'
import { SaveManager } from './managers/SaveManager'
import { LoadManager } from './managers/LoadManager'

const canvas = document.querySelector('.canvas')

export const ctx = canvas.getContext('2d')
export const globalSizes = {}

export const rc = new RenderController()
export const stateManager = new StateManager()
export const connectPoint = new ConnectPoint()
const actionManager = new ActionManager()
const saveManager = new SaveManager()
const loadManager = new LoadManager()

canvas.addEventListener('mousedown', (event) => {
  const mouseX = event.pageX
  const mouseY = event.pageY

  const overElement = stateManager.getOverElement(mouseX, mouseY)

  if (overElement) {
    switch (overElement.type) {
      case 'connectPoint':
        actionManager.dispatch({
          type: 'start',
          name: 'creatingLink',
          payload: {
            mouseX,
            mouseY,
            connectPoint: overElement,
          },
        })
        stateManager.actionState = 'creatingLink'
        break
      case 'circle':
        actionManager.dispatch({
          type: 'start',
          name: 'changingLink',
          payload: { circle: overElement },
        })
        stateManager.actionState = 'changingLink'
        break
      case 'rectangle':
        actionManager.dispatch({
          type: 'start',
          name: 'movingNode',
          payload: { mouseX, mouseY, rectangle: overElement },
        })
        stateManager.actionState = 'movingNode'
        break
    }
  }
})

canvas.addEventListener('mousemove', (event) => {
  const mouseX = event.pageX
  const mouseY = event.pageY
  const actionState = stateManager.actionState

  connectPoint.calculateNewConnectPoint(mouseX, mouseY)

  if (actionState) {
    actionManager.dispatch({
      type: 'processing',
      name: actionState,
      payload: { mouseX, mouseY },
    })
  }

  rc.render()
})

canvas.addEventListener('mouseup', (event) => {
  const mouseX = event.pageX
  const mouseY = event.pageY

  const actionState = stateManager.actionState

  if (actionState) {
    actionManager.dispatch({
      type: 'stop',
      name: actionState,
      payload: { mouseX, mouseY },
    })
    stateManager.actionState = null
  }
})

document.querySelector('.add').addEventListener('click', () => {
  const rect = new Rect({
    x: globalSizes.width / 2 - 50,
    y: globalSizes.height / 2 - 50,
    w: 100,
    h: 100,
  })

  rc.add(rect)
  rc.render()
})

document.querySelector('.save').addEventListener('click', () => {
  saveManager.save()
})

document.querySelector('.load').addEventListener('click', () => {
  loadManager.load()
})

const init = () => {
  canvas.width = globalSizes.width = window.innerWidth
  canvas.height = globalSizes.height = window.innerHeight

  ctx.lineWidth = 4
  ctx.strokeStyle = '#333'
  ctx.fillStyle = '#faf378'

  rc.render()
}

window.addEventListener('resize', init, false)

const rect1 = new Rect({
  x: 50,
  y: 50,
  w: 100,
  h: 100,
})

const rect2 = new Rect({
  x: 500,
  y: 500,
  w: 100,
  h: 100,
})

rc.add(rect1)
rc.add(rect2)

init()
window.mdc.textField.MDCTextField.attachTo(
  document.querySelector('.mdc-text-field'),
)
