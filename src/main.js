import Player from './classes/Player.js';
import Bullet from './classes/Bullet.js';

// Constants for setting up canvas
const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

// Set the canvas width and height to match browser window
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// Constants for defining the center of the canvas
const xCanvasCenter = canvasElement.width / 2;
const yCanvasCenter = canvasElement.height / 2;

// Array for storing the bullets
const bullets = [];

// Player Instance
const player = new Player(xCanvasCenter, yCanvasCenter, 30, 'blue', canvasContext);
player.draw();

// Bullet Instance
const bullet = new Bullet(xCanvasCenter, yCanvasCenter, 5, 'red', { x: 1, y: 1 }, canvasContext);

// -----------------------------------------------------------------------------

function animate() {
  requestAnimationFrame(animate);

  bullets.forEach((bullet) => {
    bullet.update();
  });
}

// Event listener for shooting bullets
addEventListener('click', (event) => {
  const bulletAngle = Math.atan2(event.clientY - yCanvasCenter, event.clientX - xCanvasCenter);

  const bulletVelocity = {
    x: Math.cos(bulletAngle),
    y: Math.sin(bulletAngle),
  };

  bullets.push(new Bullet(xCanvasCenter, yCanvasCenter, 5, 'red', bulletVelocity, canvasContext));
});

animate();
