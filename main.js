// PANTALLAS
let startScreen = document.getElementsByClassName('startScreenContainer')[0]
let loadingScreen = document.getElementsByClassName('loadingScreenContainer')[0]
let gameOverScreen = document.getElementsByClassName('gameOverScreenContainer')[0]
let winScreen = document.getElementsByClassName('winScreenContainer')[0]

let boardGame = document.getElementById("boardGame");

let restartButtonGameOver = document.getElementsByClassName('restartButton')[0]
let buttonStartGame = document.getElementsByClassName('startButton')[0]
let continueAfterWinBtn = document.getElementsByClassName('continueButton')[0]

let scoreNumber = document.getElementsByClassName('scoreNumber')[0]
let heartContador = 0

let live1 = document.getElementsByClassName('live1')[0]
let live2 = document.getElementsByClassName('live2')[0]
let live3 = document.getElementsByClassName('live3')[0]

// SONIDOS

let musicMenu = new Audio('./Sounds/MUSIC_MENU.mp3') // done
musicMenu.loop = true
let musicGame = new Audio('./Sounds/MUSIC_GAME.mp3') // done
musicGame.loop = true
let musicGameOver = new Audio('./Sounds/MUSIC_GAME_OVER.mp3') // done
let musicKahoot = new Audio('./Sounds/MUSIC_KAHOOT.mp3')
musicKahoot.loop = true
let musicKahootWin = new Audio('./Sounds/MUSIC_KAHOOT_WIN.mp3')
let deadEnemy = new Audio('./Sounds/FX DEAD_ENEMY.mp3') // done
let goddieEat = new Audio('./Sounds/FX_GOODIE_EAT.mp3') // done
let characterShoot = new Audio('./Sounds/FX_SHOOT.mp3') // done


let rebootnator;
let moveRebootnatorInterval;

let enemy;
let enemiesSpawnInterval;

let goodie;
let enemies = [];
let goodies = [];
let goodieSpawnInterval;

let handsUp;

function startGame() {
  scoreNumber.innerText = 0

  live1.style.display = 'inline-block'
  live2.style.display = 'inline-block'
  live3.style.display = 'inline-block'


  newPlayer();
  newEnemies();
  newGoodies();
  HandsUp.counter
}

function gameWorking() {
  if (rebootnator.lives > 0 && Rebootnator.score <= 5000) {
    rebootnator.move();
    musicGame.play()
  } else if (rebootnator.lives > 0 && Rebootnator.score > 5000) {
    winGame()
  } else {
    endGame()
  }
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

  musicGame.pause()
  musicGame.currentTime = 0
  
  showWinScreen()
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

  musicGame.pause();
  musicGame.currentTime = 0;

  showGameOverFromBoard()

}

function showloading() {
  startScreen.style.display = 'none'
  loadingScreen.style.display = 'block'
  musicMenu.play();
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
  musicGameOver.play()
}

function restartGameOver() {
  gameOverScreen.style.display = 'none'
  boardGame.style.display = 'block'
  musicGameOver.pause()
  musicGameOver.currentTime = 0
  startGame()
}

function showWinScreen() {
  boardGame.style.display = 'none'
  winScreen.style.display = 'block'
}

function showBoardFromWin() {
  winScreen.style.display = 'none'
  boardGame.style.display = 'block'
  startGame()
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

// buttonStart.addEventListener("click", function (event) {
//   startGame();
// });

// buttonEnd.addEventListener("click", function (event) {
//   endGame();
// });

restartButtonGameOver.addEventListener('click', function (event) {
  restartGameOver()
})


continueAfterWinBtn.addEventListener('click', function (event) {
  showBoardFromWin()
})