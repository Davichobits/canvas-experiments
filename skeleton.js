const canvas = document.querySelector('#canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const skeletonImg = new Image();
skeletonImg.src = './sprites/Skeleton_Idle.png';

let numberColumns = 11;
let numberRows = 1;
let frameWidth = skeletonImg.width / numberColumns;
let frameHeight = skeletonImg.height / numberRows;
let currentFrame = 0;

skeletonImg.onload = () => ctx.drawImage(skeletonImg, 0, 0, skeletonImg.width, skeletonImg.height, 0, 0, skeletonImg.width * 4, skeletonImg.height * 4);

//FIXME: corregir el siguiente codigo para que se muestre el sprite
// setInterval(()=>{
//   currentFrame++;
//   console.log(currentFrame)
//   // Make the frames loop
//   let maxFrame = numberColumns * numberRows - 1;
//   if (currentFrame > maxFrame){
//       currentFrame = 0;
//   }
//   // Update rows and columns
//   let column = currentFrame % numberColumns;
//   let row = Math.floor(currentFrame / numberColumns);
//   // Clear and draw
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(skeletonImg, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, frameWidth *4 , frameHeight*4);
// }, 100);


//FIXME: corregir el siguiente codigo para que se muestre el sprite
// const animation = () => {
//   currentFrame++;
//   console.log('animation')

//   // Make the frames loop
//   let maxFrame = numberColumns * numberRows - 1;
//   if (currentFrame > maxFrame){
//       currentFrame = 0;
//   }

//   // Update rows and columns
//   let column = currentFrame % numberColumns;
//   let row = Math.floor(currentFrame / numberColumns);

//   // Clear and draw
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(skeletonImg, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, frameWidth *4 , frameHeight*4);
//   requestAnimationFrame(animation);
// }
// animation();

//TODO: Documentar
// skeletonImg.addEventListener('load', () => {
//     ctx.drawImage(skeletonImg, 0, 0);
// });

// skeletonImg.onload = () => ctx.drawImage(skeletonImg, 0, 0, skeletonImg.width, skeletonImg.height, 0, 0, skeletonImg.width * 4, skeletonImg.height * 4);