const canvas = document.querySelector('#canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
// ctx.imageSmoothingQuality = 'high';

const skeletonImg = new Image();
skeletonImg.src = './sprites/Skeleton Idle.png';
skeletonImg.onload = () => {
  ctx.drawImage(skeletonImg, 0, 0, skeletonImg.width * 2, skeletonImg.height * 2);
};

let numberColumns = 11;
let numberRows = 1;

skeletonImg.width = skeletonImg.width * 2;
skeletonImg.height = skeletonImg.height * 2;

let frameWidth = skeletonImg.width / numberColumns;
let frameHeight = skeletonImg.height / numberRows;

// The sprite image frame starts from 0
let currentFrame = 0;

setInterval(function()
{
    // Pick a new frame
    currentFrame++;

    // Make the frames loop
    let maxFrame = numberColumns * numberRows - 1;
    if (currentFrame > maxFrame){
        currentFrame = 0;
    }

    // Update rows and columns
    let column = currentFrame % numberColumns;
    let row = Math.floor(currentFrame / numberColumns);

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(skeletonImg, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);

//Wait for next step in the loop
}, 100);