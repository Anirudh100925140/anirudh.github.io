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
    this.x = x //horizontal position
    this.y = y; //vertical osition
    this.velx = velx; //velocity x added to codinate x  when we animate our ball
    this.vely = vely;//velocity y added to codinate y
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
  updateBall(){
    if(this.x + this,size >= width || this.x - this.size <=0){
      this.velx = this.velx;
    }
    if(this.y + this,size >= height || this.y - this.size <=0){
      this.vely = this.vely;
    }
    this.x += this.velx;
    this.y += this.vely;

  }
}

//creating some balls
const balls = [];
while(balls.length < 25){
  const ball = new Ball(50,100, 5, 5, 20, 'rgb(0, 55, 0)');
  balls.push(ball);
}