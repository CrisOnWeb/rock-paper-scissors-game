'use strict';

// SECCIÓN DE QUERY-SELECTOR
const gameForm = document.querySelector('.js__gameForm');
const playerMove = document.querySelector('.js__playerMove');
const choosePlayBtn = document.querySelector('.js__choosePlayBtn');
const playAgainBtn = document.querySelector('.js__playAgainBtn');
const matchResult = document.querySelector('.js__matchResult');
const startGameBtn = document.querySelector('.js__startGameBtn');
const countersContainer = document.querySelector('.js__countersContainer');
const playerCounter = document.querySelector('.js__playerCounter');
const auraCounter = document.querySelector('.js__auraCounter');
const tiesCounter = document.querySelector('.js__tiesCounter');
const endGameMessage = document.querySelector('.js__endGameMessage');
const auraComments = document.querySelector('.js__auraComments');

// SECCIÓN DE DATOS

//Mensajes de AURA
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

// Contadores de rondas
let playerWins = 0;
let auraWins = 0;
let ties = 0;

// SECCIÓN DE FUNCIONES
// Obtener un número aleatorio
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Crear movimiento AURA
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

// Comprobar ganador
function checkWinner(player, aura) {
  // Hacemos visibles los contadores
  countersContainer.classList.remove('hidden');

  if (player === aura) {
    matchResult.innerHTML = `¡Empate!`;

    const message = getRandomItem(tieMessages);
    auraComments.innerHTML = message;

    ties++;
    tiesCounter.innerHTML = ties;
  } else {
    if (
      (player === 'rock' && aura === 'scissors') ||
      (player === 'paper' && aura === 'rock') ||
      (player === 'scissors' && aura === 'paper')
    ) {
      matchResult.innerHTML = `¡Has ganado a A.U.R.A.!`;

      const message = getRandomItem(playerWinMessages);
      auraComments.innerHTML = message;

      playerWins++;
      playerCounter.innerHTML = playerWins;
    } else if (
      (player === 'rock' && aura === 'paper') ||
      (player === 'paper' && aura === 'scissors') ||
      (player === 'scissors' && aura === 'rock')
    ) {
      matchResult.innerHTML = `¡A.U.R.A. te ha ganado!`;

      const message = getRandomItem(auraWinMessages);
      auraComments.innerHTML = message;

      auraWins++;
      auraCounter.innerHTML = auraWins;
    }
  }

  if (ties + playerWins + auraWins === 10) {
    gameForm.classList.add('hidden');
    playAgainBtn.classList.remove('hidden');
    endGameMessage.classList.remove('hidden');
    if (playerWins === auraWins) {
      matchResult.innerHTML = '¡A.U.R.A. Y TÚ HABÉIS EMPATADO!';
      auraComments.innerHTML =
        '[A.U.R.A.]: Eres una digna competidora, sorprendentemente...';
    } else if (playerWins > auraWins) {
      matchResult.innerHTML = '¡HAS GANADO A A.U.R.A., ENHORABUENA!';
      auraComments.innerHTML =
        '[A.U.R.A.]: Está claro que hoy es tu día de suerte.';
    } else {
      matchResult.innerHTML =
        'HAS PERDIDO, A VER QUIÉN AGUANTA A A.U.R.A. AHORA...';
      auraComments.innerHTML =
        '[A.U.R.A.]: Nada inesperado, por algo soy imbatible.\n [A.U.R.A.]: Ahora no le eches la culpa a Mercurio retrógado.';
    }
  }
}

// Crear número aleatorio
function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Volver a los datos iniciales
function resetData() {
  gameForm.reset();
  playerWins = 0;
  auraWins = 0;
  ties = 0;
  matchResult.innerHTML = '¡A la mejor de 10!';
  playerCounter.innerHTML = '0';
  auraCounter.innerHTML = '0';
  tiesCounter.innerHTML = '0';
  endGameMessage.classList.add('hidden');
  auraComments.innerHTML = initialAuraMessage;
}

// SECCIÓN DE FUNCIONES DE EVENTOS
// Crear dinámica botón de inicio de juego
function startGame() {
  gameForm.classList.remove('hidden');
  startGameBtn.classList.add('hidden');
  matchResult.innerHTML = '¡A la mejor de 10!';
  auraComments.innerHTML = '[A.U.R.A.]: Elige tu arma, humana.';
}

// Crear dinámica botón de elegir movimiento
function chooseMovement(event) {
  event.preventDefault();

  const player = playerMove.value;
  const auraMove = createAuraMove();
  console.log(player);
  console.log(auraMove);

  checkWinner(player, auraMove);
}

function playAgain() {
  resetData();
  gameForm.classList.remove('hidden');
  playAgainBtn.classList.add('hidden');
}

// SECCIÓN DE EVENTOS
startGameBtn.addEventListener('click', startGame);
choosePlayBtn.addEventListener('click', chooseMovement);
playAgainBtn.addEventListener('click', playAgain);

// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Mensaje inicial de AURA
auraComments.innerHTML = initialAuraMessage;
