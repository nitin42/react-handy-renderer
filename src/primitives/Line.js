import { setStrokes, setAppearance } from '../styles/strokes'

class Line {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render(p, scribble) {
    const { from, to } = this.props
    setAppearance(scribble, this.root, this.props)
    setStrokes(p, this.props)
    scribble.scribbleLine(from.x, from.y, to.x, to.y)
  }
}

export { Line }
