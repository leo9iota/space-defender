import Player from './classes/Player.js';

import { eventListener } from './eventListener.js';
import { createAnimation } from './createAnimation.js';
import { spawnEnemies } from './spawnEnemies.js';

// Constants for setting up canvas
const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

// Start game button
const startGameButton = document.querySelector('#start-game-button');

// Game overlay and score
const scoreValue = document.querySelector('#score-value');
const gameOverlay = document.querySelector('#game-overlay-container');
const gameOverlayScore = document.querySelector('#game-overlay-score');

// Set the canvas width and height to match browser window
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// Constants for defining the center of the canvas
const xCanvasCenter = canvasElement.width / 2;
const yCanvasCenter = canvasElement.height / 2;

// Player Instance
let player = new Player(xCanvasCenter, yCanvasCenter, 15, 'white', canvasContext);

// Arrays for storing the bullets and enemies
let bullets = [];
let enemies = [];
let particles = [];

function resetGame() {
  player = new Player(xCanvasCenter, yCanvasCenter, 15, 'white', canvasContext);
  bullets = [];
  enemies = [];
  particles = [];
  playerScore = 0;
  scoreValue.innerHTML = 0;
  gameOverlayScore.innerHTML = 0;
}

// -----------------------------------------------------------------------------------

startGameButton.addEventListener('click', () => {
  resetGame();
  eventListener(canvasContext, xCanvasCenter, yCanvasCenter, bullets);
  createAnimation(canvasContext, canvasElement, player, bullets, enemies, particles);
  spawnEnemies(canvasContext, canvasElement, enemies);
  gameOverlay.style.display = 'none';
});
