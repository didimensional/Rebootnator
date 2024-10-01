class Enemy {
    constructor() {
        this.height = 100
        this.width = 100
        this.y = 0
        this.x = Math.floor(Math.random() * (700 - this.width))
        this.directionY = 1   // Si es 1 es der ; Si es -1 es izq
        this.speed = 2
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 10)
    }

    insert(){
        this.sprite.setAttribute('class', 'enemies')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        boardGame.appendChild(this.sprite)
    }

    remove() {
        boardGame.removeChild(this.sprite)
        clearInterval(this.interval)
    }

    move(){
        let newY = this.y + this.speed * this.directionY
        this.checkCollision()
        if (newY >= 0 && newY <= 800 - this.height){
            this.y = newY
            this.sprite.style.top = this.y + 'px'
        } else {
            enemies.shift()
            this.remove()
            Rebootnator.score -= 1
            score.innerText = "SCORE: " + Rebootnator.score
            // console.log(Rebootnator.score)
        } 
    }

    checkCollision() {
            if (rebootnator.lives < 0) {
                console.log('MUERTO')
            }
        enemies.forEach(function(enemy, index){
            if (enemy.x < rebootnator.x + rebootnator.width && 
                enemy.y < rebootnator.y + rebootnator.height &&
                enemy.x + enemy.width > rebootnator.x &&
                enemy.y + enemy.height > rebootnator.y) {
                    enemy.remove()
                    enemies.splice(index, 1)
                    rebootnator.lives -= 1
                    heartCounter.removeChild(heartCounter.lastChild)
                    console.log('CURRENT LIFE IS : ' + rebootnator.lives)
                    console.log(rebootnator.lives)
                }    
        })
    }

}

