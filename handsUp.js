class HandsUp{
    constructor (){
        this.height = 50
        this.width = 8
        this.y = rebootnator.y - this.height
        this.x = rebootnator.x + rebootnator.width / 2 - this.width / 2
        this.directionY = -1
        this.speed = 10
        this.sprite = document.createElement("div")
        this.interval = setInterval(this.move.bind(this), 20)
    }

    insert(){
        this.sprite.setAttribute("class", "handsUp")
        this.sprite.style.width = this.width + "px"
        this.sprite.style.height = this.height + "px"
        this.sprite.style.top = this.y + "px"
        this.sprite.style.left = this.x + "px"
        boardGame.appendChild(this.sprite)

    }

    move(){
        let newY = this.y + this.speed * this.directionY
        // this.checkCollision(this)
        if (newY >= 0 && newY <= 800 - this.height){
            this.y = newY
            this.sprite.style.top = this.y + "px"
        } else {
            this.remove()
        }
    }

    remove (){
        boardGame.removeChild(this.sprite)
        clearInterval(this.interval)
    }
    

}