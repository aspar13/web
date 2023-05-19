let x = 320;
let y = 180;
let xspeed = 3;
let yspeed = 2;
let r = 25;

let canvas;

function  windowResized() {
  resizeCanvas()
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,100);
  canvas.style('z-index','0');
}

function draw() {
  // background(0);
  noStroke()
  fill('#e89ead')
  clear()
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}