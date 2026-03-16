'use strict';

// SECCIÓN DE QUERY-SELECTOR
const gameForm = document.querySelector('.js__gameForm');
const playerMove = document.querySelector('.js__playerMove');
const choosePlayBtn = document.querySelector('.js__choosePlayBtn');
const matchResult = document.querySelector('.js__matchResult');
const startGameBtn = document.querySelector('.js__startGameBtn');

// SECCIÓN DE DATOS

// SECCIÓN DE FUNCIONES
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.
// Obtener un número aleatorio
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function createAuraMove() {
  const auraNumber = getRandomNumber(9);

  if (auraNumber <= 3) {
    return 'rock';
  } else if (auraNumber >= 7) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos
function startGame() {
  gameForm.classList.remove('hidden');
  startGameBtn.classList.add('hidden');
}

function chooseMovement(event) {
  event.preventDefault();

  const player = playerMove.value;
  const auraMove = createAuraMove();
  console.log(player);
  console.log(auraMove);

  checkWinner(player, auraMove);
}

function checkWinner(player, aura) {
  if (player === aura) {
    // empate
  } else {
    if (
      (player === 'rock' && aura === 'scissors') ||
      (player === 'paper' && aura === 'rock') ||
      (player === 'scissors' && aura === 'paper')
    ) {
      matchResult.innerHTML = `Jugador gana`;
    } else if (
      (player === 'rock' && aura === 'paper') ||
      (player === 'paper' && aura === 'scissors') ||
      (player === 'scissors' && aura === 'rock')
    ) {
      matchResult.innerHTML = `jugador pierde`;
    }
  }
}

// SECCIÓN DE EVENTOS
startGameBtn.addEventListener('click', startGame);
choosePlayBtn.addEventListener('click', chooseMovement);
// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
