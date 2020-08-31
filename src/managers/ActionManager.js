import { CreatingLink, ChangingLink, MovingNode } from '../actions'

export class ActionManager {
  constructor() {
    this.actions = {
      creatingLink: new CreatingLink(),
      changingLink: new ChangingLink(),
      movingNode: new MovingNode(),
    }
  }

  dispatch({ type, name, payload }) {
    this.actions[name][type]({ ...payload })
  }
}
