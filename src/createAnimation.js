let animationId;

function createAnimation(canvasContext, canvasElement, player, bullets, enemies) {
  animationId = requestAnimationFrame(() =>
    createAnimation(canvasContext, canvasElement, player, bullets, enemies)
  );

  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

  player.draw();

  bullets.forEach((bullet) => {
    bullet.update();
  });

  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();

    const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y);

    // End game
    if (distance - enemy.radius - player.radius < 1) {
      cancelAnimationFrame(animationId);
    }

    bullets.forEach((bullet, bulletIndex) => {
      // Get Euclidean distance between bullet and enemy
      const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);

      // Check for collision between bullet and enemy.
      // If they overlap (distance between centers is less than sum of radii),
      // remove both from their respective arrays.
      if (distance - enemy.radius - bullet.radius < 1) {
        // Wait for next frame to start removing enemy from array to fix flash effect
        setTimeout(() => {
          enemies.splice(enemyIndex, 1);
          bullets.splice(bulletIndex, 1);
        }, 0);
      }
    });
  });
}

export { createAnimation };
