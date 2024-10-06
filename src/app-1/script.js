

// ball
let xPos, xDir; // 공의 x축 위치와 진행 방향
let yPos, yDir; // 공의 y축 위치와 진행 방향
let diam;
let speed; // 공의 속도

// pad
let padX
let padWidth; 

// bricks
let bricks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function setup() {
  createCanvas(600, 600);
  variableInitialization()
}


function draw() {
  background(128);

  ballDrawingMovement();
  padDrawingMovement();
  ballBouncing();
  
  bricksDrawing();
  bricksBallCollision();

}

function bricksDrawing(){
  let i = 0;
  while(i < bricks.length){
    if ( bricks[i] === 1) {
      fill(0, 255, 0);
      stroke(0);
    }
    else {
      noStroke();
      fill(128);
    }
    rect(i*50, 0, 50, 50); 
    i++;
  }
}

function bricksBallCollision(){
  // when the ball hits the bricks
  if ( yPos < 50 && bricks[int(xPos/50)] === 1) {
    yDir *= -1;
    bricks[int(xPos/50)] = 0;
  }
}

function variableInitialization(){
  speed = 4;
  xPos = width / 2; // 공을 화면의 중심에서 출발
  xDir = speed;
  yPos = height / 2;
  yDir = speed;
  diam = 50;
  padWidth = 200;
}

function ballDrawingMovement(){
  fill(255, 255, 0);
  ellipse(xPos, yPos, diam, diam);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
}

function padDrawingMovement(){
  padX = mouseX - padWidth/2;
  fill(0, 255, 0)
  rect(padX, height-30, padWidth, 30);
}

function ballBouncing(){
  if ( xPos - diam/2 < 0) xDir = xDir * -1; 
  if ( xPos + diam/2 > width) xDir *=  -1;

  if ( yPos - diam/2 < 0) yDir *= -1; 
  if ( yPos + diam/2 > height) yDir *=  -1;

  // ball bouncing with pad
  if ( xPos > padX && xPos < padX + padWidth && yPos > height - 30 - diam/2){
         yDir *= -1;
  }
}
