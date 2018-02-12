import { setStrokes, setAppearance } from '../styles/strokes'

class Curve {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render(p, scribble) {
    const { weight, color, c1, c2, c3, c4 } = this.props
    setAppearance(scribble, this.root, this.props)
    setStrokes(p, this.props)
    scribble.scribbleCurve(c1.x, c1.y, c2.x, c2.y, c3.x, c3.y, c4.x, c4.y)
  }
}

export { Curve }
