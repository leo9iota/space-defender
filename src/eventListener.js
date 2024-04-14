import Bullet from './classes/Bullet.js'

export function eventListener(xCanvasCenter, yCanvasCenter, bullets, canvasContext) {
  addEventListener('click', (event) => {
    const bulletAngle = Math.atan2(event.clientY - yCanvasCenter, event.clientX - xCanvasCenter);

    const bulletVelocity = {
      x: Math.cos(bulletAngle),
      y: Math.sin(bulletAngle),
    };

    bullets.push(new Bullet(xCanvasCenter, yCanvasCenter, 5, 'red', bulletVelocity, canvasContext));
  });
}
