const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

const colors = ["#ff0000", "#00ff00", "#0000ff"];

function rondomColor(colorArray) {
  const randomEl = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomEl];
}
setInterval(newColor, 1000);

function newColor() {
  let color = rondomColor(colors);
  canvas.style.backgroundColor = color;
}
