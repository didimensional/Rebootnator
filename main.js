let boardGame = document.getElementById("boardGame")

let rebootnator

let moveRebootnatorInterval

let handsUp

let enemies = []

let enemiesSpawnInterval

let enemy

let goodie

let goodies = []

let goodieSpawnInterval

function startGame() {
    newPlayer()
    newEnemies()
    newGoodies()
}

function newPlayer() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.insert()
    moveRebootnatorInterval = setInterval(function () {
        rebootnator.move()
    }, 10)
}

function newEnemies() {
    enemiesSpawnInterval = setInterval(function () {
        enemy = new Enemy()
        enemy.insert()
        enemies.push(enemy)
    }, 500)
}
// NUEVO newGoodies! --------------------------
function newGoodies() {
    goodieSpawnInterval = setInterval(function () {
        const types = ['slimSalad', 'speedCoffee', 'thickBurger']
        const randomType = types[Math.floor(Math.random() * types.length)] // Seleccionar un tipo al azar
        let goodie = new Goodies(randomType)
        goodie.insert()
        goodies.push(goodie)
    }, 6000)

    //PENDIENTE: añadir un pop / shift al array para borrar (ver enemies.js)

}
//--------------------------------------------
/*-------------------------------
function newGoodies() {
    goodieSpawnInterval = setInterval(function () {
        goodie = new Goodies()
        goodie.insert()
        goodies.push(goodie)
    }, 10000)
}
------------------------------ */
function fireHandsUp() {
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

window.addEventListener('keyup', function (event) {
    rebootnator.directionX = 0
})

startGame()



