function createAnimation(canvasContext, canvasElement, player, bullets, enemies) {
  requestAnimationFrame(() =>
    createAnimation(canvasContext, canvasElement, player, bullets, enemies)
  );

  // Clear bullet trail
  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

  player.draw();

  bullets.forEach((bullet) => {
    bullet.update();
  });

  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();

    bullets.forEach((bullet, bulletIndex) => {
      // Get Euclidean distance between bullet and enemy
      const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);

      // Check for collision between bullet and enemy.
      // If they overlap (distance between centers is less than sum of radii),
      // remove both from their respective arrays.
      if (distance - enemy.radius - bullet.radius < 1) {
        // Fix flashing effect on collision
        setTimeout(() => {
          enemies.splice(enemyIndex, 1);
          bullets.splice(bulletIndex, 1);
        }, 0);
      }
    });
  });
}

export { createAnimation };
