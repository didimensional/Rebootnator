let startScreen = document.getElementsByClassName('startScreenContainer')[0]
let loadingScreen = document.getElementsByClassName('loadingScreenContainer')[0]
let gameOverScreen = document.getElementsByClassName('gameOverScreenContainer')[0]
let winScreen = document.getElementsByClassName('winScreenContainer')[0]
let creditsScreen = document.getElementsByClassName('creditsScreenContainer')[0]
let kahootScreen = document.getElementsByClassName('speechBalloonContainer')[0]
let boardGame = document.getElementById("boardGame");
let howToPlayScreen = document.getElementsByClassName('howToPlayScreenContainer')[0]

let restartButtonGameOver = document.getElementsByClassName('restartButton')[0]
let buttonStartGame = document.getElementsByClassName('startButton')[0]
let continueAfterWinBtn = document.getElementsByClassName('continueButton')[0]
let buttonCredits = document.getElementsByClassName('creditsButton')[0]
let buttonFromCreditsToStart = document.getElementsByClassName('menuButton')[0]
let buttonFromControlsToStart = document.getElementsByClassName('menuButton')[1]
let kahootTrueBtn = document.getElementsByClassName('answerTrue')[0]
let kahootFalseBtn = document.getElementsByClassName('answerFalse')[0] 
let controlsBtn = document.getElementsByClassName('controlsButton')[0]

let scoreNumber = document.getElementsByClassName('scoreNumber')[0]
let heartCounter = 0
let live1 = document.getElementsByClassName('live1')[0]
let live2 = document.getElementsByClassName('live2')[0]
let live3 = document.getElementsByClassName('live3')[0]

let musicMenu = new Audio('./Sounds/MUSIC_MENU.mp3')
musicMenu.loop = true
let musicGame = new Audio('./Sounds/MUSIC_GAME.mp3')
musicGame.loop = true
let musicGameOver = new Audio('./Sounds/MUSIC_GAME_OVER.mp3')
let musicKahoot = new Audio('./Sounds/MUSIC_KAHOOT.mp3')
musicKahoot.loop = true
let musicWin = new Audio('./Sounds/MUSIC_KAHOOT_WIN.mp3')
let deadEnemy = new Audio('./Sounds/FX_DEAD_ENEMY.mp3')
let goddieEat = new Audio('./Sounds/FX_GOODIE_EAT.mp3')
let characterShoot = new Audio('./Sounds/FX_SHOOT.mp3')

let rebootnator;
let enemy;
let goodie;
let enemies = [];
let goodies = [];
let handsUp;
let moveRebootnatorInterval;
let enemiesSpawnInterval;
let goodieSpawnInterval;

let scoreWinCondition = 20000

let moveRebootnatorIntervalFixed = 5

function startGame() {
  scoreNumber.innerText = 0
  live1.style.display = 'inline-block'
  live2.style.display = 'inline-block'
  live3.style.display = 'inline-block'
  musicGame.play()
  newPlayer();
  newEnemies();
  newGoodies();
}
function gameWorking() {
  if (rebootnator.lives > 0 && Rebootnator.score <= scoreWinCondition) { rebootnator.move();
  } else if (rebootnator.lives > 0 && Rebootnator.score > scoreWinCondition) { winGame()
  } else { endGame()}
}
function winGame() {
  clearInterval(moveRebootnatorInterval);
  clearInterval(goodieSpawnInterval);
  clearInterval(enemiesSpawnInterval);
  rebootnator.remove();
  enemies.forEach(function (enemy, index) {enemy.remove();});
  goodies.forEach(function (goodie, index) {goodie.remove();});
  goodies = [];
  enemies = [];
  heartCounter = 0
  Rebootnator.score = 0
  HandsUp.counter = 0
  musicGame.pause()
  musicGame.currentTime = 0
  showKahootScreen()
}
function showKahootScreen() {
  kahootScreen.style.display = 'block'
  musicKahoot.play()
}
kahootFalseBtn.addEventListener('click', function (event) {
  musicKahoot.pause()
  musicKahoot.currentTime = 0
  showGameOverFromKahoot()
})
kahootTrueBtn.addEventListener('click', function (event) {
  musicKahoot.pause()
  musicKahoot.currentTime = 0
  showWinScreen()
})
function showGameOverFromKahoot() {
  kahootScreen.style.display = 'none'
  boardGame.style.display = 'none'
  gameOverScreen.style.display = 'block'
  musicGame.pause()
  musicGame.currentTime = 0
  musicGameOver.play()
}
function showWinScreen() {
  boardGame.style.display = 'none'
  kahootScreen.style.display = 'none'
  winScreen.style.display = 'block'
  musicKahoot.pause()
  musicKahoot.currentTime = 0
  musicWin.play()
}
function showCredits () {
  startScreen.style.display = 'none'
  creditsScreen.style.display = 'block'
}
function backToStartMenu () {
  startScreen.style.display = 'block'
  creditsScreen.style.display = 'none'
  howToPlayScreen.style.display = 'none'
}
function endGame() {
  clearInterval(moveRebootnatorInterval);
  clearInterval(goodieSpawnInterval);
  clearInterval(enemiesSpawnInterval);
  rebootnator.remove()
  enemies.forEach(function (enemy, index) {
    enemy.remove();
  });
  goodies.forEach(function (goodie, index) {
    goodie.remove();
  });
  goodies = [];
  enemies = [];
  heartCounter = 0
  Rebootnator.score = 0
  HandsUp.counter = 0
  startScreen
  showGameOverFromBoard()
}
function showloading() {
  startScreen.style.display = 'none'
  loadingScreen.style.display = 'block'
  musicMenu.play()
  setTimeout(function () {
    loadingScreen.style.display = 'none'
    boardGame.style.display = 'block'
    startGame()
    musicMenu.pause()
  }, 4500)
}
function showGameOverFromBoard() {
  boardGame.style.display = 'none'
  gameOverScreen.style.display = 'block'
  musicGame.pause()
  musicGame.currentTime = 0
  musicGameOver.play()
}
function restartGameOver() {
  gameOverScreen.style.display = 'none'
  boardGame.style.display = 'block'
  musicGameOver.pause()
  musicGameOver.currentTime = 0
  startGame()
}
function showBoardFromWin() {
  winScreen.style.display = 'none'
  boardGame.style.display = 'block'
  startGame()
}
function newPlayer() {
  rebootnator = new Rebootnator(300, 630);
  rebootnator.insert();
  moveRebootnatorInterval = setInterval(gameWorking, moveRebootnatorIntervalFixed);
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
  }, 3000);
}
function fireHandsUp() {
  handsUp = new HandsUp();
  handsUp.insert();
  HandsUp.counter++
  characterShoot.play ()
}
function hideHearts() {
  if (heartCounter === 0) {
    live3.style.display = 'none'
  } else if (heartCounter === 1) {
    live2.style.display = 'none'
  } else if (heartCounter === 2) {
    live1.style.display = 'none'
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
        fireHandsUp();}
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
buttonFromControlsToStart.addEventListener('click', function (event) {
  backToStartMenu()
})
function showHowToplayScreen() {
  startScreen.style.display = 'none'
  howToPlayScreen.style.display = 'block'
}
controlsBtn.addEventListener('click', function (event) {
  showHowToplayScreen()
})