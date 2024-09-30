let boardGame = document.getElementById("boardGame")

let rebootnator 

function newPlayer() {
    rebootnator = new Rebootnator(275, 650)
    rebootnator.insert()
}

newPlayer()
console.log(boardGame)