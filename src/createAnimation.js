let animationId;

function createAnimation(canvasContext, canvasElement, player, bullets, enemies) {
  animationId = requestAnimationFrame(() =>
    createAnimation(canvasContext, canvasElement, player, bullets, enemies)
  );

  // Fill canvas background and create fade effect with RGBA
  canvasContext.fillStyle = 'rgba(0, 0, 0, 0.1)';

  canvasContext.fillRect(0, 0, canvasElement.width, canvasElement.height);

  player.draw();

  // Bullet animation loop
  bullets.forEach((bullet, bulletIndex) => {
    bullet.update();

    // Remove bullets from edges of canvas
    if (
      bullet.x + bullet.radius < 0 ||
      bullet.x - bullet.radius > canvasElement.width ||
      bullet.y + bullet.radius < 0 ||
      bullet.y - bullet.radius > canvasElement.height
    ) {
      setTimeout(() => {
        bullets.splice(bulletIndex, 1);
        console.log('Bullet off-screen removed!');
      }, 0);
    }
  });

  // Enemies animation loop
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
        // Shrink enemy radius on bullet collision
        if (enemy.radius - 5 > 10) {
          enemy.radius -= 10;
          setTimeout(() => {
            bullets.splice(bulletIndex, 1);
          }, 0);
        } else {
          // Wait for next frame to start removing enemy from array to fix flash effect
          setTimeout(() => {
            enemies.splice(enemyIndex, 1);
            bullets.splice(bulletIndex, 1);
            console.log('Bullet collided with enemy!');
          }, 0);
        }
      }
    });
  });
}

export { createAnimation };
