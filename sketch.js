let circles = [];
let hue = 0;

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
      // Split the circle into 10 smaller circles
      for (let j = 0; j < 10; j++) {
        let newC = {
          x: c.x,
          y: c.y,
          r: c.r / 3,
          speed: c.speed / 3,
          innerColor: color(hue, 100, 100),
          outerColor: color(hue, 50, 100)
        };
        circles.push(newC);
      }
      // Remove the original circle
      circles.splice(i, 1);
    } else {
      fill(c.outerColor);
      stroke(c.outerColor);
      ellipse(c.x, c.y, c.r * 2, c.r * 2);
    }
  }
  
  hue += 0.5;
  if (hue > 255) {
    hue = 0;
  }
}

function mousePressed() {
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
