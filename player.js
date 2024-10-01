class Rebootnator {
    static score = 0
    constructor(x, y) {
        this.x = x
        this.y = y
        this.lives = 3
        this.width = 134
        this.height = 164
        this.directionX = 0   // Si es 1 es der ; Si es -1 es izq
        this.speed = 5
        this.sprite = document.createElement('div')
    }

    insert() {
        this.sprite.setAttribute('id', 'rebootnator')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        boardGame.appendChild(this.sprite)

    }


    move() {
        let newX = this.x + this.speed * this.directionX

        if (newX >= 0 && newX <= 700 - this.width) {
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }

    }

    remove() {
        boardGame.removeChild(this.sprite)
        clearInterval(this.interval)
    }

}


