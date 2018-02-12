import { renderShape } from './shape'

class Ellipse {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render = (p, scribble) => {
    renderShape(
      'scribbleEllipse',
      { root: this.root, props: this.props },
      { p, scribble }
    )
  }
}

export { Ellipse }
