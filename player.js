class Rebootnator{
    static score = 0
    constructor(x, y){
        this.x = x
        this.y = y
        this.health = 3
        this.lives = 3
        this.width = 100
        this.height = 100
        this.directionX = 0   // Si es 1 es der ; Si es -1 es izq
        this.speed = 5
        this.sprite = document.createElement('div')
    }

    insert ()  {
        this.sprite.setAttribute('id', 'rebootnator')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        boardGame.appendChild(this.sprite)
 
    }

    move() {

    }

}


