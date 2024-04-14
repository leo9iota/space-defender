import Player from './classes/Player.js';
import Bullet from './classes/Bullet.js';
import Enemy from './classes/Enemy.js';

import { createAnimation } from './createAnimation.js';
import { eventListener } from './eventListener.js';

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

// Event listener for shooting bullets
eventListener(xCanvasCenter, yCanvasCenter, bullets, canvasContext)
createAnimation(canvasContext, canvasElement, player, bullets);
