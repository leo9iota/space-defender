class Particle {
  constructor(x, y, radius, color, velocity, canvasContext) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
    this.canvasContext = canvasContext;
  }

  draw() {
    this.canvasContext.save();
    this.canvasContext.globalAlpha = this.alpha;
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.fill();
    this.canvasContext.restore();
  }

  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
    this.alpha -= 0.01; 
  }
}

export default Particle;
