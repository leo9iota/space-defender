import Enemy from './classes/Enemy.js';

function spawnEnemies(canvasContext, canvasElement, enemies) {
  setInterval(() => {
    const radius = 30;
    const x = Math.random() < 0.5 ? 0 - radius : canvasElement.width + radius;
    const y = Math.random() < 0.5 ? 0 - radius : canvasElement.height + radius;
    const color = 'green';

    const angle = Math.atan2(canvasElement.height / 2 - y, canvasElement.width / 2 - x);

    const velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle),
    };

    enemies.push(new Enemy(x, y, radius, color, velocity, canvasContext));

    console.log(enemies);
  }, 1000);
}

export { spawnEnemies };
