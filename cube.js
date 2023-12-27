const canvas = document.querySelector('#canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.lineCap

// Square

const drawSquare = (x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x + size, y + size);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x, y);
  ctx.closePath();

  ctx.fillStyle = "green";
  ctx.fill();
}

drawSquare(50, 50, 50);

// Cube

const drawSide = (x, y, size) => { 
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size/2, y - 10);
  ctx.lineTo(x + size/2, y + size - 10);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x, y);
  ctx.closePath();
  
  // ctx.stroke();

  ctx.fillStyle = "red";
  ctx.fill();
}

drawSide(100, 50, 50);

const drawTop = (x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size/2, y - 10);
  ctx.lineTo(x + size/2 + size, y - 10);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x, y);
  ctx.closePath();

  ctx.fillStyle = "blue";
  ctx.fill();
}

drawTop(50, 50, 50);

