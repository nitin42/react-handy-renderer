import {
  Paper,
  Rectangle,
  Main,
  Ellipse,
  Line,
  RoundedRect,
  Curve
} from '../primitives'

function createElement(type, props, root) {
  const COMPONENTS = {
    MAIN: () => new Main(),
    RECTANGLE: () => new Rectangle(root, props),
    PAPER: () => new Paper(root, props),
    ELLIPSE: () => new Ellipse(root, props),
    LINE: () => new Line(root, props),
    ROUNDEDRECT: () => new RoundedRect(root, props),
    CURVE: () => new Curve(root, props),
    default: undefined,
  }

  return COMPONENTS[type]() || COMPONENTS.default
}

export { createElement }
