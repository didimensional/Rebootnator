let boardGame = document.getElementById("boardGame")

let rebootnator 


function starGame() {
    rebootnator = new Rebootnator(300, 700)
    rebootnator.insert()

}                                                                                                                   

starGame()
console.log(boardGame)


window.addEventListener('keydown', function (event) {

    switch (event.key.toLowerCase()) {

        case 'a':
            rebootnator.directionX = -1
            break;
        
        case 'd':
            rebootnator.directionX = 1
            break;

        case 'ArrowLeft':
            rebootnator.directionX = -1
            break;
            
        case 'ArrowRight':
            rebootnator.directionX = 1
            break;

        case ' ':
            //Aqui falta linkar con el metodo de disparar
            break;
    
    } console.log(event)
})