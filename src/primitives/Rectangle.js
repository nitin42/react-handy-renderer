import { setStrokes, setAppearance } from '../styles/strokes'

class Rectangle {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render(p, scribble) {
    setAppearance(scribble, this.root, this.props)
    setStrokes(p, this.props)
    scribble.scribbleRect(
      this.props.position.x,
      this.props.position.y,
      this.props.width,
      this.props.height
    )
  }
}

export { Rectangle }
