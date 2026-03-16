'use strict';

// SECCIÓN DE QUERY-SELECTOR
const gameForm = document.querySelector('.js__gameForm');
const playerMove = document.querySelector('.js__playerMove');
const choosePlayBtn = document.querySelector('.js__choosePlayBtn');
const matchResult = document.querySelector('.js__matchResult');
const startGameBtn = document.querySelector('.js__startGameBtn');
const auraComments = document.querySelector('.js__auraComments');

// SECCIÓN DE DATOS
const initialAuraMessage = `
[A.U.R.A.]: Sistema listo.\n 
[A.U.R.A.]: Analizando jugadora…\n
[A.U.R.A.]: Probabilidad de victoria humana: optimista.`;

const playerWinMessages = [
  '[A.U.R.A.]: Anomalía detectada.',
  '[A.U.R.A.]: Esto no estaba en mi simulación.',
  '[A.U.R.A.]: Interesante... investigaré esto.',
  '[A.U.R.A.]: No volverá a ocurrir.',
  '[A.U.R.A.]: Estoy impresionada. Temporalmente.',
];
const auraWinMessages = [
  '[A.U.R.A.]: Como era de esperar.',
  '[A.U.R.A.]: Interesante decisión… equivocada.',
  '[A.U.R.A.]: Según mis cálculos... otra victoria.',
  '[A.U.R.A.]: Interesante intento.',
  '[A.U.R.A.]: Lo había previsto.',
  '[A.U.R.A.]: Los humanos sois adorables.',
  '[A.U.R.A.]: He calculado 14 millones de resultados posibles. Ganaba en todos.',
  '[A.U.R.A.]: Esto será reportado a mis superiores.',
];
const tieMessages = [
  '[A.U.R.A.]: Lo consideraré una concesión.',
  '[A.U.R.A.]: Empate. Lo consideraré un gesto de cortesía.',
  '[A.U.R.A.]: Curiosa coincidencia.',
  '[A.U.R.A.]: Interesante... nuestras mentes están sincronizadas.',
  '[A.U.R.A.]: Empate. No está mal para una humana.',
  '[A.U.R.A.]: Esto complica mis estadísticas.',
  '[A.U.R.A.]: Empate detectado. Recalculando tu estrategia.',
  '[A.U.R.A.]: Fascinante. Has evitado tu derrota... temporalmente.',
  '[A.U.R.A.]: Empate. Procedamos con otro intento.',
  '[A.U.R.A.]: Qué coincidencia tan improbable.',
  '[A.U.R.A.]: Empate. Lo llamaré equilibrio cósmico.',
];

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

function checkWinner(player, aura) {
  if (player === aura) {
    matchResult.innerHTML = `¡Empate!`;

    const message = getRandomItem(tieMessages);
    auraComments.innerHTML = message;
  } else {
    if (
      (player === 'rock' && aura === 'scissors') ||
      (player === 'paper' && aura === 'rock') ||
      (player === 'scissors' && aura === 'paper')
    ) {
      matchResult.innerHTML = `¡Has ganado a A.U.R.A.!`;

      const message = getRandomItem(playerWinMessages);
      auraComments.innerHTML = message;
    } else if (
      (player === 'rock' && aura === 'paper') ||
      (player === 'paper' && aura === 'scissors') ||
      (player === 'scissors' && aura === 'rock')
    ) {
      matchResult.innerHTML = `¡A.U.R.A. te ha ganado!`;

      const message = getRandomItem(auraWinMessages);
      auraComments.innerHTML = message;
    }
  }
}

function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos
function startGame() {
  gameForm.classList.remove('hidden');
  startGameBtn.classList.add('hidden');
  auraComments.innerHTML = '[A.U.R.A.]: Elige tu arma, humana.';
}

function chooseMovement(event) {
  event.preventDefault();

  const player = playerMove.value;
  const auraMove = createAuraMove();
  console.log(player);
  console.log(auraMove);

  checkWinner(player, auraMove);
}

// SECCIÓN DE EVENTOS
startGameBtn.addEventListener('click', startGame);
choosePlayBtn.addEventListener('click', chooseMovement);
// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
auraComments.innerHTML = initialAuraMessage;
