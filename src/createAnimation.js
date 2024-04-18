import Explosion from './classes/Explosion.js';

import { animateTo } from './animateTo.js';

let animationId;

function createAnimation(canvasContext, canvasElement, player, bullets, enemies, explosions) {
  animationId = requestAnimationFrame(() =>
    createAnimation(canvasContext, canvasElement, player, bullets, enemies, explosions)
  );

  // Fill canvas background and create fade effect with RGBA
  canvasContext.fillStyle = 'rgba(0, 0, 0, 0.1)';

  canvasContext.fillRect(0, 0, canvasElement.width, canvasElement.height);

  // Draw the player
  player.draw();

  explosions.forEach((explosion) => {
    explosion.update();
  });

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
        // Generate explosion
        for (let i = 0; i < 8; i++) {
          explosions.push(
            new Explosion(
              bullet.x,
              bullet.y,
              3,
              enemy.color,
              { x: Math.random() - 0.5, y: Math.random() - 0.5 }, // Call Math.random() to get a random number
              canvasContext
            )
          );
        }

        // Shrink enemy radius on bullet collision
        if (enemy.radius - 10 > 5) {
          animateTo(enemy, 250, { radius: enemy.radius - 10 });

          setTimeout(() => {
            bullets.splice(bulletIndex, 1);
          }, 0);
        } else {
          // Wait for next frame to start removing enemy from array to fix flash effect
          setTimeout(() => {
            enemies.splice(enemyIndex, 1);
            bullets.splice(bulletIndex, 1);
          }, 0);
        }
      }
    });
  });
}

export { createAnimation };
