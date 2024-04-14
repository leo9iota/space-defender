function createAnimation(canvasContext, canvasElement, player, bullets, enemies) {
  requestAnimationFrame(() => createAnimation(canvasContext, canvasElement, player, bullets, enemies));

  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

  player.draw();

  bullets.forEach((bullet) => {
    bullet.update();
  });

  enemies.forEach((enemy) => {
    enemy.update();
  });
}

export { createAnimation };
