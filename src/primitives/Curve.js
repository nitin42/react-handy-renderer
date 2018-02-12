import { renderShape } from './shape'

class Curve {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render = (p, scribble) => {
    renderShape(
      'scribbleCurve',
      { root: this.root, props: this.props },
      { p, scribble }
    )
  }
}

export { Curve }
