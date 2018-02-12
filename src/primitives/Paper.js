const p5 = require('p5')

class Paper {
  children = []

  constructor(root, props) {
    this.root = root
    this.props = props
  }

  appendChild(child) {
    this.children.push(child)
  }

  removeChild(child) {
    this.children = this.children.filter(c => c !== child);
  }

  startDrawing = () => {
    const sketch = new p5(p => {
      const scribble = this.root.scribble(p)
      scribble.bowing = this.props.bowing
      scribble.roughness = this.props.roughness

      p.setup = () => {
        p.randomSeed(10)
        p.createCanvas(this.props.width, this.props.height)
        for (let i = 0; i < this.children.length; i += 1) {
          this.children[i].render(p, scribble)
        }
      }
    }, this.root.ref)

    return sketch
  }

  render() {
    this.startDrawing()
  }
}

export { Paper }
