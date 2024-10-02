// PANTALLAS
let startScreen = document.getElementsByClassName('startScreenContainer')[0]


let loadingScreen = document.getElementsByClassName('loadingScreenContainer')[0]

let boardGame = document.getElementById("boardGame");

let gameOverScreen = document.getElementsByClassName('gameOverScreenContainer')[0]

let winScreen = document.getElementsByClassName('winScreenContainer')[0]

let buttonStartGame = document.getElementsByClassName('startButton')[0]




// Esto es viejo


let startView = document.getElementById("start");
let restartView = document.getElementById("restart");

let score = document.getElementById("score");

let heartCounter = document.getElementById("health");

let buttonStart = document.getElementById("btn-start");
let buttonEnd = document.getElementById("btn-end");


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







function startGame() {
  newPlayer();
  newEnemies();
  newGoodies();
}

function gameWorking() {
  if (rebootnator.lives > 0) {
    rebootnator.move();
  } else {
    endGame();
 }
}

function newPlayer() {
  rebootnator = new Rebootnator(300, 630);
  rebootnator.insert();
  moveRebootnatorInterval = setInterval(gameWorking, 5);
}

function newEnemies() {
  enemiesSpawnInterval = setInterval(function () {
    enemy = new Enemy();
    /*
            const enemyTypes = ['js', 'html', 'css']
            const decider = enemyTypes[Math.floor(Math.random() * enemyTypes)] 
            */
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
}

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
      fireHandsUp();
      break;
  }
});

window.addEventListener("keyup", function (event) {
  rebootnator.directionX = 0;
  rebootnator.sprite.classList.remove("rebootnatorRight");
  rebootnator.sprite.classList.remove("rebootnatorLeft");
  rebootnator.sprite.classList.add("rebootnator");

});

buttonStart.addEventListener("click", function (event) {
  startGame();
});

buttonEnd.addEventListener("click", function (event) {
  endGame();
});

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

  console.log("FIN DE JUEGO");
}
