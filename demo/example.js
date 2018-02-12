import React from 'react'
import { render, Paper, Rectangle, Main, Ellipse, Line, BoundedRect, Curve } from '../src'

class App extends React.Component {
  render() {
    return (
      <Paper bowing={0.2} width={600} height={500}>
        <Ellipse
          position={{ x: 480, y: 100 }}
          width={50}
          height={50}
          color="blue" // or color={[10, 10, 10, 20]}
          weight={0.9}
          roughness={3}
          bowing={9}
          fill="magenta"
          maxOffset={10}
        />
        {/* <Curve
          c1={{ x: 30, y: 50 }}
          c2={{ x: 70, y: 90 }}
          c3={{ x: 130, y: 510 }}
          c4={{ x: 230, y: 200 }}
          color="blue"
          weight={2}
          roughness={2}
        /> */}
        {/* <Line
          from={{ x: 230, y: 140 }}
          to={{ x: 530, y: 140 }}
          weight={4}
          color="mistyrose"
          roughness={2}
        /> */}
        {/* <Ellipse
          position={{ x: 480, y: 100 }}
          width={50}
          height={50}
          color="blue" // or color={[10, 10, 10, 20]}
          weight={0.9}
          roughness={3}
          bowing={9}
          maxOffset={10}
        /> */}
        {/* <Rectangle
          position={{ x: 390, y: 100 }}
          width={50}
          height={50}
          color="green"
          weight={1}
          roughness={2.3}
        /> */}
        {/* <BoundedRect
          position={{ x: 300, y: 100 }}
          width={50}
          height={50}
          color="red"
          weight={2}
          radius={2}
          roughness={1.8}
        />
 */}
      </Paper>
    )
  }
}

render(<App />, document.getElementById('container'))
