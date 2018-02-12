import { renderShape } from './shape'

class Line {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render = (p, scribble) => {
    renderShape(
      'scribbleLine',
      { root: this.root, props: this.props },
      { p, scribble }
    )
  }
}

export { Line }
