import { createElement } from './createElement'
import { SketchRenderer } from '../reconciler'

function flush(container) {
  // Get the input
  const paper = container.document

  // Top level render call to flush <Main /> component's children
  paper.render()

  return container
}

function render(element, path) {
  const container = createElement('MAIN')

  // Path is required to attach the canvas to a DOM node
  container.ref = path

  const node = SketchRenderer.createContainer(container)

  SketchRenderer.updateContainer(element, node, null)

  const output = flush(container)

  return output
}

export { render }
