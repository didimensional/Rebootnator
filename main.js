let boardGame = document.getElementById("boardGame")

let rebootnator 

let moveRebootnatorInterval

let enemy

function startGame() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.insert()

    //rebootnator.move()

    moveRebootnatorInterval = setInterval(function(){
    rebootnator.move()
    },10)

    enemy = new Enemy()
    enemy.insert()
    enemy.move()
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
            //Aqui falta linkar con el metodo de disparar
            break;
    
    }
})

window.addEventListener('keyup', function (event){
    rebootnator.directionX = 0
})


startGame()

