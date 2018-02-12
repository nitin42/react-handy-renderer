import { setAppearance } from '../styles/strokes'

class Ellipse {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  // 'red', [R, G, B, A], 0-255
  setColor(p, props) {
    if (typeof props.color === 'string') {
      return p.stroke(props.color)
    } else if (Array.isArray(props.color)) {
      return p.stroke(
        props.color[0],
        props.color[1],
        props.color[2],
        props.color[3]
      )
    } else if (typeof props.color === 'number') {
      return p.stroke(props.color)
    }
  }

  render(p, scribble) {
    setAppearance(scribble, this.root, this.props)
    p.strokeWeight(this.props.weight)
    this.setColor(p, this.props)
    this.props.fill ? p.fill(this.props.fill) : null
    scribble.scribbleEllipse(
      this.props.position.x,
      this.props.position.y,
      this.props.width,
      this.props.height
    )
  }
}

export { Ellipse }
