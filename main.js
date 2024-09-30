let boardGame = document.getElementById("boardGame")

let rebootnator 


function starGame() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.insert()

    rebootnator.move()

}                                                                                                                   

starGame()

console.log(boardGame)


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
    
    } console.log(event)
})