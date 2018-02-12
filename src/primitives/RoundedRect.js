import { renderShape } from './shape'

class RoundedRect {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render = (p, scribble) => {
    renderShape(
      'scribbleRoundedRect',
      { root: this.root, props: this.props },
      { p, scribble }
    )
  }
}

export { RoundedRect }
