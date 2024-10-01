let boardGame = document.getElementById("boardGame")
let startView = document.getElementById('start')
let restartView = document.getElementById('restart')
let score = document.getElementById('score')

let buttonStart = document.getElementById('btn-start')
let buttonEnd = document.getElementById('btn-end')


let rebootnator
let moveRebootnatorInterval


let enemy
let enemies = []
let enemiesSpawnInterval

let goodie
let goodies = []
let goodieSpawnInterval

let handsUp

function startGame() {
    newPlayer()
    newEnemies()
    newGoodies()
}

/*
function gameWorking (){

    if (reebootnator.lives > 0){
        rebootnator.move()

    } else { 
        endGame() } 
}
*/


function newPlayer() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.goodies = []
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

function newGoodies() {
    goodieSpawnInterval = setInterval(function () {
        const types = ['slimSalad', 'speedCoffee', 'flatEgg']
        const randomType = types[Math.floor(Math.random() * types.length)] 
        let goodie = new Goodies(randomType)
        goodie.insert()
        goodies.push(goodie)
    }, 6000)

    //PENDIENTE: añadir un pop / shift al array para borrar (ver enemies.js) -> A LA COLISION

}

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
    rebootnator.directionX= 0
})


buttonStart.addEventListener('click' , function (event) {
    startGame()
})

buttonEnd.addEventListener('click', function (event) {
    endGame()
})



function endGame () {
    clearInterval(moveRebootnatorInterval)
    clearInterval(goodieSpawnInterval)
    clearInterval(enemiesSpawnInterval)
    
    rebootnator.remove()

    enemies.forEach(function(element,index){
        element.remove()
    })

    goodies.forEach(function(element, index){
        element.remove()
    })
    
}


