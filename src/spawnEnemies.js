import Enemy from './classes/Enemy.js';

function spawnEnemies(canvasContext, canvasElement, enemies) {
  setInterval(() => {
    let x, y;
    const radius = Math.random() * (30 - 10) + 10;
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvasElement.width + radius;
      y = Math.random() * canvasElement.height;
    } else {
      x = Math.random() * canvasElement.width;
      y = Math.random() < 0.5 ? 0 - radius : canvasElement.height + radius;
    }

    // Calculate trajectory path of enemies
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
