let circles = [];

window.addEventListener('resize', () =>resizeCanvas(window.innerWidth, window.innerHeight), true)

function setup() {
 
  createCanvas(window.innerWidth, window.innerHeight); //window.height or something recall setup if size changes delete old canvas on reset
  for (let i = 0; i < 20; i++) {
    circles.push(new Circle(random(width), random(height), random(30, 60)));
  }
}

function draw() {
  background(255);
  for (let circle of circles) {
    circle.move();
    circle.bounce();
    circle.display();
  }
}

class Circle {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.d = diameter;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.gray = random(0, 255);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.x - this.d / 2 < 0 || this.x + this.d / 2 > width) {
      this.vx = -this.vx;
    }
    if (this.y - this.d / 2 < 0 || this.y + this.d / 2 > height) {
      this.vy = -this.vy;
    }
  }

  display() {
    fill(this.gray);
    noStroke();
    ellipse(this.x, this.y, this.d);
  }
}