function setup() {
  createCanvas(1200, 800);
  background(255);
}

function draw() {
  fill(random(255),150);
  stroke(random(255),50);
  circle(random(width),random(height), random(20));

}