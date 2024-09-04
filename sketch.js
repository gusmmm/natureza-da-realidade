let circles = [];
let hue = 0;
let explosionTimer = 0;

function setup() {
  createCanvas(1200, 800);
  background(0);
}

function draw() {
  background(0);
  
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    c.y += c.speed;
    
    if (c.y > height) {
      // Change color to simulate a solar explosion
      c.outerColor = color(hue, 0, 255);
      c.innerColor = color(hue, 0, 255);
      explosionTimer = 0;
    } else {
      explosionTimer += 1;
      if (explosionTimer > 50) {
        // Remove the circle after 0.5 seconds
        circles.splice(i, 1);
      } else {
        fill(c.outerColor);
        stroke(c.outerColor);
        ellipse(c.x, c.y, c.r * 2, c.r * 2);
      }
    }
  }
  
  hue += 0.5;
  if (hue > 255) {
    hue = 0;
  }
  
  // Add new circles at random intervals
  if (random(1) < 0.1) {
    let c = {
      x: random(width),
      y: 0,
      r: random(20, 100),
      speed: random(1, 5),
      innerColor: color(hue, 100, 100),
      outerColor: color(hue, 50, 100)
    };
    circles.push(c);
  }
}
