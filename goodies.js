class Goodies {
    constructor(type) {
        // declarar type
        this.type = type
        //
        this.height = 50
        this.width = 50
        this.y = 0
        this.x = Math.floor(Math.random() * (700 - this.width))
        this.directionY = 1
        this.speed = 1
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 20)
        // Asignar color basandonos en el goodie type
        this.color = this.getColorByType(type)
        //
}
    // NUEVO Añadir metodo > switch para asignar un color a cada goodie type
    getColorByType(type) {
        switch (type) {
            case 'slimSalad':
                return 'greenyellow'
            case 'speedCoffee':
                return 'brown'
            case 'flatEgg':
                return 'purple'
            default:
                return 'green'
        }
    }

    //------------------------------------------------------------

    insert() {
        // Clase CSS basada en el tipo
        this.sprite.setAttribute('class', this.type)
        //
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        // Asignar color al div
        this.sprite.style.backgroundColor = this.color
        //
        boardGame.appendChild(this.sprite)
}

    remove() {
        boardGame.removeChild(this.sprite)
        clearInterval(this.interval)
}

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

    effect() {
        const originWidth = rebootnator.width
        const originHeight = rebootnator.height
        const originSpeed = rebootnator.speed

        switch (this.type) {
            case 'slimSalad':
                rebootnator.width = 50
                rebootnator.sprite.style.width = rebootnator.width + 'px' // Actualizar el estilo
                break;
            case 'speedCoffee':
                rebootnator.speed = 10
                break;
            case 'flatEgg':
                rebootnator.height = 50
                rebootnator.sprite.style.height = rebootnator.height + 'px' // Actualizar el estilo
                break;
        }

//METER FLATEGG COMO BURGUER, Y HACER QUE SEA UN "GOODIE" NEGATIVO (modificar solo width)

        //timeout para devolver al jugador a su estado original pasados 5s
        setTimeout(function () {
            rebootnator.width = originWidth
            rebootnator.sprite.style.width = rebootnator.width + 'px'

            rebootnator.height = originHeight;
            rebootnator.sprite.style.height = rebootnator.height + 'px'
    
            rebootnator.speed = originSpeed
        }, 5000)
}

    checkCollision() {
        if (this.x < rebootnator.x + rebootnator.width &&
            this.y < rebootnator.y + rebootnator.height &&
            this.x + this.width > rebootnator.x &&
            this.y + this.height > rebootnator.y) {
            this.effect() // Llamamos a los effect al detectar la colisión
            this.remove()
        }
}
}