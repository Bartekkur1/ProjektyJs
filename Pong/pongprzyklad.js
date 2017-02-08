var velocityx = 5;
var velocityy = 2;
var posx = 50;
var posy = 200;
var playerspeed = 0;



function setup() {
    createCanvas(1000,500);
    fill(0);
}

function draw() {
  background(255);
  rect(0, 0, 999, 499);
  rect(20, 20, 20, 120);
  fill(255);
  ellipse(posx, posy, 55, 55);
  fill(255);
  posx += velocityx;
  posy += velocityy;
    if (posx >= 1000) {
        velocityx = -5;
    }
     if (posx <= 0) {
            velocityx = 5;
    }
    if (posy >= 500) {
        velocityy = velocityy * -1;
    }
    if (posy <= 0) {
        velocityy = velocityy * -1;
    }
}





