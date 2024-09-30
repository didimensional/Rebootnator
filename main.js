let boardGame = document.getElementById("boardGame")

let rebootnator 

let moveRebootnatorInterval

let enemies = []

let enemiesSpawnInterval

let enemy

let handsUp

function startGame() {
    newPlayer()
    newEnemies()
}                  

function newPlayer() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.insert()
    moveRebootnatorInterval = setInterval(function () {
        rebootnator.move()
    }, 10)
}

function newEnemies() {
    enemiesSpawnInterval = setInterval(function(){
        enemy = new Enemy()
        enemy.insert()
        enemies.push(enemy)
    }, 1000)
}

function fireHandsUp(){
    handsUp = new HandsUp()
    handsUp.insert()
}

window.addEventListener('keydown', function (event) {

    switch (event.key) {

        case 'a':
            rebootnator.directionX = -1
            rebootnator.move()
            break;
        
        case 'd':
            rebootnator.directionX = 1
            rebootnator.move()
            break;

        case 'A':
            rebootnator.directionX = -1
            rebootnator.move()
            break;

        case 'D':
            rebootnator.directionX = 1
            rebootnator.move()
            break;

        case 'ArrowLeft':
            rebootnator.directionX = -1
            rebootnator.move()
            break;
            
        case 'ArrowRight':
            rebootnator.directionX = 1
            rebootnator.move()
            break;

        case ' ':
            fireHandsUp()
            break;
    
    }
})

window.addEventListener('keyup', function (event){
    rebootnator.directionX = 0
})


startGame()



