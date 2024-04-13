class Player {
  constructor(x, y, radius, color, canvasContext) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvasContext = canvasContext;
  }

  draw(context) {
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.fill();
  }
}

export default Player;
