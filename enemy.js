class Enemy {
    constructor(decider) {
        this.type = decider
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
        this.sprite.setAttribute("class", this.type)
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
            if (this.type === 'jsEnemy' || 
                this.type === 'htmlEnemy' || 
                this.type === 'cssEnemy' ) {
                    Rebootnator.score -= 200
                    scoreNumber.innerText = Rebootnator.score
                    enemies.shift()
                    this.remove()

            } else if (this.type === 'airconEnemy' || 
                    this.type === 'gamechairEnemy' || 
                    this.type === 'playstationEnemy' ||
                    this.type === 'skullEnemy') {
                        Rebootnator.score -= 50
                         scoreNumber.innerText = Rebootnator.score
                         enemies.shift()
                        this.remove()
                    }
        }
    }

    checkCollision() {
        enemies.forEach(function(enemy, index){
            if (enemy.x < rebootnator.x + rebootnator.width && 
                enemy.y < rebootnator.y + rebootnator.height &&
                enemy.x + enemy.width > rebootnator.x &&
                enemy.y + enemy.height > rebootnator.y) {
                    enemy.remove()
                    enemies.splice(index, 1)


                    rebootnator.lives -= 1
                    
                    heartCounter.innerText = "LIVES: " + rebootnator.lives

                    // AQUI HAY QUE BORRAR CORAZONES
                    hideHearts()
                    heartContador ++
                    console.log(heartContador)

            }
        })
    }

}


