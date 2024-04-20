import Particle from './classes/Particle.js';

import { animateTo } from './animateTo.js';

let animationId;
const gameOverlay = document.querySelector('#game-overlay-container');

// Constants for scoring system and game overlay
const scoreValue = document.querySelector('#score-value');
const gameOverlayScore = document.querySelector('#game-overlay-score');

// Player score
let playerScore = 0;

function createAnimation(canvasContext, canvasElement, player, bullets, enemies, particles) {
  animationId = requestAnimationFrame(() =>
    createAnimation(canvasContext, canvasElement, player, bullets, enemies, particles)
  );

  // Fill canvas background and create fade effect with RGBA
  canvasContext.fillStyle = 'rgba(0, 0, 0, 0.1)';

  canvasContext.fillRect(0, 0, canvasElement.width, canvasElement.height);

  // Draw the player
  player.draw();

  // Create explosion animation
  particles.forEach((particle, particleIndex) => {
    if (particle.alpha <= 0) {
      // Access alpha property of explosion object
      particles.splice(particleIndex, 1);
    } else {
      particle.update();
    }
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
      gameOverlay.style.display = 'flex';
      gameOverlayScore.innerHTML = playerScore;
    }

    bullets.forEach((bullet, bulletIndex) => {
      // Get Euclidean distance between bullet and enemy
      const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);

      // Check for collision between bullet and enemy.
      // If they overlap (distance between centers is less than sum of radii),
      // remove both from their respective arrays.
      if (distance - enemy.radius - bullet.radius < 1) {
        // Add explosion particles
        for (let i = 0; i < enemy.radius * 2; i++) {
          particles.push(
            new Particle(
              bullet.x,
              bullet.y,
              Math.random() * 2,
              enemy.color,
              {
                x: (Math.random() - 0.5) * (Math.random() * 5),
                y: (Math.random() - 0.5) * (Math.random() * 5),
              },
              canvasContext
            )
          );
        }

        // Shrink enemy radius on bullet collision
        if (enemy.radius - 10 > 5) {
          // Increase player score value
          playerScore += 100;
          scoreValue.innerHTML = playerScore;

          animateTo(enemy, 250, { radius: enemy.radius - 10 });

          setTimeout(() => {
            bullets.splice(bulletIndex, 1);
          }, 0);
        } else {
          // Player score increase when enemy is killed and removed from canvas
          playerScore += 250;
          scoreValue.innerHTML = playerScore;

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
