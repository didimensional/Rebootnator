class Enemy {
    constructor() {
        this.height = 50
        this.width = 50
        this.y = 0
        this.x = Math.floor(Math.random() * (700 - this.width))
        this.directionY = 1   // Si es 1 es der ; Si es -1 es izq
        this.speed = 2
        this.sprite = document.createElement('div')
        // this.interval = setInterval(this.move.bind(this), 10)
    }

    insert(){
        this.sprite.setAttribute('class', 'enemies')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this-this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        boardGame.appendChild(this.sprite)
    }
    
}