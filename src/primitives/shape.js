import { setAppearance } from '../styles/strokes'

function setColor(p, props) {
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

function renderShape(name, { root, props }, { p, scribble }) {
  switch (name) {
    case 'scribbleRoundedRect':
      const { position } = props
      setAppearance(scribble, root, props)
      setColor(p, props)
      p.strokeWeight(props.weight)
      scribble.scribbleRoundedRect(
        position.x,
        position.y,
        props.width,
        props.height,
        props.radius
      )
      break
    case 'scribbleCurve':
      const { c1, c2, c3, c4 } = props
      setAppearance(scribble, root, props)
      setColor(p, props)
      p.strokeWeight(props.weight)
      scribble.scribbleCurve(c1.x, c1.y, c2.x, c2.y, c3.x, c3.y, c4.x, c4.y)
      break
    case 'scribbleLine':
      const { from, to } = props
      setAppearance(scribble, root, props)
      setColor(p, props)
      p.strokeWeight(props.weight)
      scribble.scribbleLine(from.x, from.y, to.x, to.y)
      break
    case 'scribbleRect':
      setAppearance(scribble, root, props)
      setColor(p, props)
      p.strokeWeight(props.weight)
      scribble.scribbleRect(
        props.position.x,
        props.position.y,
        props.width,
        props.height
      )
      break
    case 'scribbleEllipse':
      setAppearance(scribble, root, props)
      p.strokeWeight(props.weight)
      setColor(p, props)
      props.fill ? p.fill(props.fill) : null
      scribble.scribbleEllipse(
        props.position.x,
        props.position.y,
        props.width,
        props.height
      )
      break
    default:
      scribble.scribbleEllipse(50, 50, 60, 60)
  }
}

export { renderShape }
