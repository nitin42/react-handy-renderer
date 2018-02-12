const Scribble = require('scribble-fork')

class Main {
  constructor() {
    this.scribble = p => new Scribble(p)
  }
}

export { Main }
