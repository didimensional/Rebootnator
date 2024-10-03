// PANTALLAS
let startScreen = document.getElementsByClassName('startScreenContainer')[0]
let loadingScreen = document.getElementsByClassName('loadingScreenContainer')[0]
let gameOverScreen = document.getElementsByClassName('gameOverScreenContainer')[0]
let winScreen = document.getElementsByClassName('winScreenContainer')[0]
let creditsScreen = document.getElementsByClassName('creditsScreenContainer')[0]
let kahootScreen = document.getElementsByClassName('speechBalloonContainer')[0]
let boardGame = document.getElementById("boardGame");


let restartButtonGameOver = document.getElementsByClassName('restartButton')[0]
let buttonStartGame = document.getElementsByClassName('startButton')[0]
let continueAfterWinBtn = document.getElementsByClassName('continueButton')[0]
let buttonCredits = document.getElementsByClassName('creditsButton')[0]
let buttonFromCreditsToStart = document.getElementsByClassName('menuButton')[0]
let kahootTrueBtn = document.getElementsByClassName('answerTrue')[0]
let kahootFalseBtn = document.getElementsByClassName('answerFalse')[0]

let scoreNumber = document.getElementsByClassName('scoreNumber')[0]
let heartContador = 0

let live1 = document.getElementsByClassName('live1')[0]
let live2 = document.getElementsByClassName('live2')[0]
let live3 = document.getElementsByClassName('live3')[0]

// SONIDOS

let musicMenu = new Audio('/Sounds/MUSIC MENU.mp3')
let musicGame = new Audio('/Sounds/MUSIC GAME.mp3')
let musicGameOver = new Audio('/Sounds/MUSIC GAME OVER.mp3')
let musicKahoot = new Audio('/Sounds/MUSIC KAHOOT.mp3')
let musicKahootWin = new Audio('/Sounds/MUSIC KAHOOT WIN.mp3')
let deadEnemy = new Audio('/Sounds/FX DEAD ENEMY.mp3')
let goddieEat = new Audio('/Sounds/FX GOODIE EAT.mp3')
let characterShoot = new Audio('/Sounds/FX SHOOT.mp3')


// Esto es viejo


// let startView = document.getElementById("start");
// let restartView = document.getElementById("restart");

// let heartCounter = document.getElementById("health");

// let buttonStart = document.getElementById("btn-start");
// let buttonEnd = document.getElementById("btn-end");


// Esto se mantiene

let rebootnator;
let moveRebootnatorInterval;

let enemy;
let enemiesSpawnInterval;

let goodie;
let enemies = [];
let goodies = [];
let goodieSpawnInterval;

let handsUp;

let scoreWinCondition = 1000


function startGame() {
  scoreNumber.innerText = 0

  live1.style.display = 'inline-block'
  live2.style.display = 'inline-block'
  live3.style.display = 'inline-block'


  newPlayer();
  newEnemies();
  newGoodies();
}

function gameWorking() {
  if (rebootnator.lives > 0 && Rebootnator.score <= scoreWinCondition) {
    rebootnator.move();
  } else if (rebootnator.lives > 0 && Rebootnator.score > scoreWinCondition) {
    winGame()
  } else {
    endGame()
  }
}

function showCredits () {
  startScreen.style.display = 'none'
  creditsScreen.style.display = 'block'
}

function backToStartMenu () {
  startScreen.style.display = 'block'
  creditsScreen.style.display = 'none'
}

function winGame() {
  clearInterval(moveRebootnatorInterval);
  clearInterval(goodieSpawnInterval);
  clearInterval(enemiesSpawnInterval);

  rebootnator.remove();

  enemies.forEach(function (enemy, index) {
    enemy.remove();
  });

  goodies.forEach(function (goodie, index) {
    goodie.remove();
  });


  goodies = [];
  enemies = [];


  heartContador = 0

  Rebootnator.score = 0

  HandsUp.counter = 0

  showKahootScreen()
}

function endGame() {
  clearInterval(moveRebootnatorInterval);
  clearInterval(goodieSpawnInterval);
  clearInterval(enemiesSpawnInterval);

  rebootnator.remove();

  enemies.forEach(function (enemy, index) {
    enemy.remove();
  });

  goodies.forEach(function (goodie, index) {
    goodie.remove();
  });


  goodies = [];
  enemies = [];


  heartContador = 0

  Rebootnator.score = 0

  HandsUp.counter = 0


  showGameOverFromBoard()

}

function showloading() {
  startScreen.style.display = 'none'
  loadingScreen.style.display = 'block'
  setTimeout(function () {
    loadingScreen.style.display = 'none'
    boardGame.style.display = 'block'
    startGame()
  }, 4500)
}
function showGameOverFromBoard() {
  boardGame.style.display = 'none'
  gameOverScreen.style.display = 'block'
}

function showGameOverFromKahoot() {
  rebootnator.remove()
  kahootScreen.style.display = 'none'
  boardGame.style.display = 'none'
  gameOverScreen.style.display = 'block'
}

function restartGameOver() {
  gameOverScreen.style.display = 'none'
  boardGame.style.display = 'block'
  startGame()
}

function showWinScreen() {
  boardGame.style.display = 'none'
  kahootScreen.style.display = 'none'
  winScreen.style.display = 'block'
  rebootnator.remove()
}

function showBoardFromWin() {
  winScreen.style.display = 'none'
  boardGame.style.display = 'block'
  startGame()
}

function showKahootScreen() {
  kahootScreen.style.display = 'block'
  newPlayer()
}

function newPlayer() {
  rebootnator = new Rebootnator(300, 630);
  rebootnator.insert();
  moveRebootnatorInterval = setInterval(gameWorking, 5);
}

function newEnemies() {
  enemiesSpawnInterval = setInterval(function () {
    const enemyTypes = ['jsEnemy', 'htmlEnemy', 'cssEnemy', 'airconEnemy', 'gamechairEnemy', 'playstationEnemy', 'skullEnemy']
    const decider = enemyTypes[Math.floor(Math.random() * enemyTypes.length)]
    enemy = new Enemy(decider);
    enemy.insert();
    enemies.push(enemy);
  }, 500);
}

function newGoodies() {
  goodieSpawnInterval = setInterval(function () {
    const types = ["slimSalad", "speedCoffee", "thickBurger"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    goodie = new Goodies(randomType);
    goodie.insert();
    goodies.push(goodie);
  }, 6000);
}

function fireHandsUp() {

  handsUp = new HandsUp();
  handsUp.insert();
  HandsUp.counter++
}

function hideHearts() {

  if (heartContador === 0) {

    live3.style.display = 'none'
    console.log('elimino primer corazon')
  } else if (heartContador === 1) {
    live2.style.display = 'none'
    console.log('elimino el segundo corazón')
  } else if (heartContador === 2) {
    live1.style.display = 'none'
    console.log('elimino el tercer corazon')
  }
}

buttonStartGame.addEventListener('click', function (event) {
  showloading()
})


window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      rebootnator.directionX = -1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorRight");
      rebootnator.sprite.classList.add("rebootnatorLeft");
      break;

    case "d":
      rebootnator.directionX = 1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorLeft");
      rebootnator.sprite.classList.add("rebootnatorRight");
      break;

    case "A":
      rebootnator.directionX = -1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorRight");
      rebootnator.sprite.classList.add("rebootnatorLeft");
      break;

    case "D":
      rebootnator.directionX = 1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorLeft");
      rebootnator.sprite.classList.add("rebootnatorRight");
      break;

    case "ArrowLeft":
      rebootnator.directionX = -1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator")
      rebootnator.sprite.classList.remove("rebootnatorRight");
      rebootnator.sprite.classList.add("rebootnatorLeft");
      break;

    case "ArrowRight":
      rebootnator.directionX = 1;
      rebootnator.move();
      rebootnator.sprite.classList.remove("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorLeft");
      rebootnator.sprite.classList.add("rebootnatorRight");
      break;

    case " ":
      if (HandsUp.counter < 3) {
        fireHandsUp();
      }
      break;
  }
});

window.addEventListener("keyup", function (event) {
  rebootnator.directionX = 0;
  rebootnator.sprite.classList.remove("rebootnatorRight");
  rebootnator.sprite.classList.remove("rebootnatorLeft");
  rebootnator.sprite.classList.add("rebootnator");

});

restartButtonGameOver.addEventListener('click', function (event) {
  restartGameOver()
})


continueAfterWinBtn.addEventListener('click', function (event) {
  showBoardFromWin()
})

buttonCredits.addEventListener('click', function (event) {
  showCredits()
})

buttonFromCreditsToStart.addEventListener('click', function (event) {
  backToStartMenu()
})

kahootFalseBtn.addEventListener('click', function (event) {
  showGameOverFromKahoot()
})

kahootTrueBtn.addEventListener('click', function (event) {
  showWinScreen()
})