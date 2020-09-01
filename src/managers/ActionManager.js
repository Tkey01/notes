import { CreatingLink, ChangingLink, MovingNode, DeleteNode } from '../actions'

export class ActionManager {
  constructor() {
    this.actions = {
      creatingLink: new CreatingLink(),
      changingLink: new ChangingLink(),
      movingNode: new MovingNode(),
      deleteNode: new DeleteNode(),
    }
  }

  dispatch({ type, name, payload }) {
    if (type) {
      this.actions[name][type]({ ...payload })
    } else {
      this.actions[name].execute({ ...payload })
    }
  }
}
