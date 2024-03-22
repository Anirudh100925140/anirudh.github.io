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
    this.velX = velX; //velocity x added to codinate x  when we animate our ball
    this.velY = velY;//velocity y added to codinate y
    this.color = color; // fill ball shape with given colour.
    this.size = size; //radious of ball 
  }
}