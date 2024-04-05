const canvasElement = document.querySelector('canvas');
const canvas = canvasElement.getContext('2d');

canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

const xCanvasCenter = canvasElement.width / 2;
const yCanvasCenter = canvasElement.height / 2;

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvas.fillStyle = this.color;
    canvas.fill();
  }
}

class Bullet {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvas.fillStyle = this.color;
    canvas.fill();
  }
}

const player = new Player(xCanvasCenter, yCanvasCenter, 30, 'blue');
player.draw();
