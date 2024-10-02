// PANTALLAS
let startScreen = document.getElementsByClassName('startScreenContainer')[0]


let loadingScreen = document.getElementsByClassName('loadingScreenContainer')[0]

let boardGame = document.getElementById("boardGame");

let gameOverScreen = document.getElementsByClassName('gameOverScreenContainer')[0]

let winScreen = document.getElementsByClassName('winScreenContainer')[0]

let buttonStartGame = document.getElementsByClassName('startButton')[0]

let scoreNumber = document.getElementsByClassName('scoreNumber')[0]

let live1 = document.getElementsByClassName('live1')[0]
let live2 = document.getElementsByClassName('live2')[0]
let live3 = document.getElementsByClassName('live3')[0]

let heartContador = 0


let restartButtonGameOver = document.getElementsByClassName('restartButton')[0]

// Esto es viejo


let startView = document.getElementById("start");
let restartView = document.getElementById("restart");

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


function showloading(){
  startScreen.style.display = 'none'
  loadingScreen.style.display = 'block'
  setTimeout(function(){
    loadingScreen.style.display = 'none'
    boardGame.style.display = 'block'
    startGame()
  }, 4500)
}

heartCounter
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
  if (rebootnator.lives > 0) {
    rebootnator.move();
  } else {
    endGame();
 }
}

function showGameOverFromBoard() { 
  boardGame.style.display = 'none'
  gameOverScreen.style.display = 'block'
}

function restartGameOver(){
  gameOverScreen.style.display = 'none'
  boardGame.style.display = 'block'
  startGame()
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

  console.log("FIN DE JUEGO");

  heartContador = 0

  showGameOverFromBoard()

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
}

function hideHearts () {

  if (heartContador === 0){

    live1.style.display = 'none'
    console.log('elimino primer corazon')
  } else if (heartContador === 1){
    live2.style.display = 'none'
    console.log('elimino el segundo corazón')
  } else if (heartContador === 2){
    live3.style.display = 'none'
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

restartButtonGameOver.addEventListener('click', function (event) {
  restartGameOver()
})



