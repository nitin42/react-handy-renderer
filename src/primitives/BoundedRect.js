import { setStrokes, setAppearance } from '../styles/strokes'

class BoundedRect {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render(p, scribble) {
    const { radius, weight, height, width, color, position } = this.props
    setAppearance(scribble, this.root, this.props)
    setStrokes(p, this.props)
    scribble.scribbleRoundedRect(position.x, position.y, width, height, radius)
  }
}

export { BoundedRect }
