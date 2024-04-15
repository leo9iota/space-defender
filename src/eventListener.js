import Bullet from './classes/Bullet.js';

function eventListener(canvasContext, xCanvasCenter, yCanvasCenter, bullets) {
  addEventListener('click', (event) => {
    const bulletAngle = Math.atan2(event.clientY - yCanvasCenter, event.clientX - xCanvasCenter);

    const bulletVelocity = {
      x: Math.cos(bulletAngle),
      y: Math.sin(bulletAngle),
    };

    bullets.push(new Bullet(xCanvasCenter, yCanvasCenter, 5, 'red', bulletVelocity, canvasContext));
  });
}

export { eventListener };
