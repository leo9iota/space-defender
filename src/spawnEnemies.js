import Enemy from './classes/Enemy.js';

function spawnEnemies(enemies, canvasContext) {
  setInterval(() => {
    const x = 100;
    const y = 100;
    const radius = 30;
    const color = 'green';
    const velocity = {
      x: 1,
      y: 1,
    };

    enemies.push(new Enemy(x, y, radius, color, velocity, canvasContext));

    console.log(enemies);
  }, 1000);
}

export { spawnEnemies };
