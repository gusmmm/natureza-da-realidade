let hue = 0;

function setup() {
  createCanvas(1200, 800);
  background(0);
}

function draw() {
  let r = random(20, 100);
  let x = random(width);
  let y = random(height);
  let innerColor = color(hue, 100, 100);
  let outerColor = color(hue, 50, 100);
  
  fill(outerColor);
  stroke(outerColor);
  ellipse(x, y, r, r);
  
  hue += 0.5;
  if (hue > 255) {
    hue = 0;
  }
}
