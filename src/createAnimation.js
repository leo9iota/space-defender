export function createAnimation(canvasContext, canvasElement, player, bullets) {
  requestAnimationFrame(() => createAnimation(canvasContext, canvasElement, player, bullets));

  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

  player.draw();

  bullets.forEach((bullet) => {
    bullet.update();
  });
}
