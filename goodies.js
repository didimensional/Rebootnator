class Goodies {
    constructor() {
        this.height = 50
        this.width = 50
        this.y = 0
        this.x = Math.floor(Math.random() * (700 - this.width))
        this.directionY = 1
        this.speed = 1
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 20)
}

    insert() {
        this.sprite.setAttribute('class', 'goodies')
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

    // checkTypeGoodies () {}
    
    move() {
        let newY = this.y + this.speed * this.directionY
        this.checkCollision()
        if (newY >= 0 && newY <= 800 - this.height) {
            this.y = newY
            this.sprite.style.top = this.y + 'px'
        } else {
            this.remove()
        }
}

    checkCollision() {
            if (this.x < rebootnator.x + rebootnator.width &&
                this.y < rebootnator.y + rebootnator.height &&
                this.x + this.width > rebootnator.x &&
                this.y + this.height > rebootnator.y) {
                this.remove()
                // HACE FALTA METER UN COMPORTAMIENTO PARA QUE LE AUMENTE LA VIDA
            }
        }
}