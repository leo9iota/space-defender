import Player from './classes/Player.js';

import { eventListener } from './eventListener.js';
import { createAnimation } from './createAnimation.js';
import { spawnEnemies } from './spawnEnemies.js';

// Constants for setting up canvas
const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

// Set the canvas width and height to match browser window
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// Constants for defining the center of the canvas
const xCanvasCenter = canvasElement.width / 2;
const yCanvasCenter = canvasElement.height / 2;

// Arrays for storing the bullets and enemies
const bullets = [];
const enemies = [];

// Player Instance
const player = new Player(xCanvasCenter, yCanvasCenter, 30, 'blue', canvasContext);
player.draw();

// -----------------------------------------------------------------------------------

eventListener(xCanvasCenter, yCanvasCenter, bullets, canvasContext);
createAnimation(canvasContext, canvasElement, player, bullets, enemies);
spawnEnemies(enemies, canvasContext);
