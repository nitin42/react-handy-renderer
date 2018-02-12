function setStrokes(processing, props) {
  processing.strokeWeight(props.weight);
  processing.stroke(props.color);
}

function setAppearance(scribble, { document }, props) {
  scribble.roughness = props.roughness || document.props.roughness || 1;
  scribble.bowing = props.bowing || document.props.bowing || 1;
  scribble.maxOffset = props.maxOffset || document.props.maxOffset || 2;
}

export {
  setStrokes,
  setAppearance
}
