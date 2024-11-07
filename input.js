let inputDirection1 = { x: 0, y: 1 };
let lastInputDirection1 = { x: 0, y: 1 };
let inputDirection2 = { x: 0, y: -1 };
let lastInputDirection2 = { x: 0, y: -1 };
window.addEventListener('keydown', event => {
  if (event.key === "w" && lastInputDirection1.x !== 0) {
    inputDirection1 = { x: 0, y: -1 };
  } else if (event.key === "s" && lastInputDirection1.x !== 0) {
    inputDirection1 = { x: 0, y: 1 };
  } else if (event.key === "d" && lastInputDirection1.y !== 0) {
    inputDirection1 = { x: 1, y: 0 };
  } else if (event.key === "a" && lastInputDirection1.y !== 0) {
    inputDirection1 = { x: -1, y: 0 };
  }

  if (event.key === "ArrowUp" && lastInputDirection2.x !== 0) {
    inputDirection2 = { x: 0, y: -1 };
  } else if (event.key === "ArrowDown" && lastInputDirection2.x !== 0) {
    inputDirection2 = { x: 0, y: 1 };
  } else if (event.key === "ArrowRight" && lastInputDirection2.y !== 0) {
    inputDirection2 = { x: 1, y: 0 };
  } else if (event.key === "ArrowLeft" && lastInputDirection2.y !== 0) {
    inputDirection2 = { x: -1, y: 0 };
  }

})

const getInputDirection1 = () => {
  lastInputDirection1 = inputDirection1;
  return inputDirection1;
}

const getInputDirection2 = () => {
  lastInputDirection2 = inputDirection2;
  return inputDirection2;
}
