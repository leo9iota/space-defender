import Player from './Player.js';
import Bullet from './Bullet.js';

const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

// Set the canvas width and height to match browser window
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// Constants for defining the center of the canvas
const xCanvasCenter = canvasElement.width / 2;
const yCanvasCenter = canvasElement.height / 2;

const player = new Player(xCanvasCenter, yCanvasCenter, 30, 'blue', canvasContext);
player.draw();

const bullet = new Bullet();
bullet.draw();

addEventListener('click', () => {
 
})
