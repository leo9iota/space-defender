import Bullet from './classes/Bullet.js';

function eventListener(canvasContext, xCanvasCenter, yCanvasCenter, bullets) {
  addEventListener('click', (event) => {
    console.log(bullets); // Print bullet array
    
    const bulletAngle = Math.atan2(event.clientY - yCanvasCenter, event.clientX - xCanvasCenter);

    // Increase bullet velocity by specific factor (5 times)
    const bulletVelocity = {
      x: Math.cos(bulletAngle) * 5,
      y: Math.sin(bulletAngle) * 5,
    };

    bullets.push(new Bullet(xCanvasCenter, yCanvasCenter, 5, 'white', bulletVelocity, canvasContext));
  });
}

export { eventListener };
