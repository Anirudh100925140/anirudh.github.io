// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//creating a class ball
class Ball {
  constructor (x, y, velX, velY, color, size){
    this.x = x; //horizontal position
    this.y = y; //vertical osition
    this.velX = velX; //velocity x added to codinate x  when we animate our ball
    this.velY  = velY;//velocity y added to codinate y
    this.color = color; // fill ball shape with given colour.
    this.size = size; //radious of ball 
  }
  //creating draw function
  drawBall(){
    ctx.beginPath(); //starts to draw
    ctx.fillStyle = this.color; //fills color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//a simple math fundyion.
    ctx.fill();//finish drawing

  }
  //create update function
  updateBalls() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
  }
  
 


//creating some balls
const balls = [];


while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}
//creating loop function
function loop(){
  //run necessary function
  for(let i = 0; i < balls.length; i++){
    balls[i].drawBall();
    balls[i].updateBalls();

  }
  //CALLING LOOP FUNCTION OVER AND OVER AGAIN
  //and make animation smooth
  requestAnimationFrame(loop);
}
//finally call the loop function once to start
loop();

