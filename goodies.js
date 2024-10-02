class Goodies {
  constructor(type) {
    this.type = type;
    this.height = 100;
    this.width = 100;
    this.y = 0;
    this.x = Math.floor(Math.random() * (700 - this.width));
    this.directionY = 1;
    this.speed = 1;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), 20);
    this.color = this.getColorByType(type);
  }
  getColorByType(type) {
    switch (type) {
      case "slimSalad":
        return "greenyellow";
      case "speedCoffee":
        return "brown";
      case "thickBurger":
        return "purple";
      default:
        return "green";
    }
  }

  insert() {
    this.sprite.setAttribute("class", this.type);
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    boardGame.appendChild(this.sprite);
  }

  remove() {
    boardGame.removeChild(this.sprite);
    clearInterval(this.interval);
  }

  move() {
    let newY = this.y + this.speed * this.directionY;
    this.checkCollision();
    if (newY >= 0 && newY <= 800 - this.height) {
      this.y = newY;
      this.sprite.style.top = this.y + "px";
    } else {
      goodies.shift();
      this.remove();
    }
  }

  effect() {
    const originWidth = rebootnator.width;
    const originHeight = rebootnator.height;
    const originSpeed = rebootnator.speed;

    switch (this.type) {
      case "slimSalad":
        rebootnator.width = 50;
        rebootnator.sprite.style.width = rebootnator.width + "px"; // Actualizar el estilo
        rebootnator.sprite.classList.remove("rebootnator");
        rebootnator.sprite.classList.remove("rebootnatorRight");
        rebootnator.sprite.classList.remove("rebootnatorLeft");
        rebootnator.sprite.classList.add("rebootnatorThin");
        break;
      case "speedCoffee":
        rebootnator.speed = 10;
        break;
      case "thickBurger":
        rebootnator.width = 200;
        rebootnator.height = 75;
        rebootnator.sprite.style.height = rebootnator.height + "px";
        rebootnator.sprite.style.width = rebootnator.width + "px"; // Actualizar el estilo
        rebootnator.sprite.classList.remove("rebootnator");
        rebootnator.sprite.classList.remove("rebootnatorRight");
        rebootnator.sprite.classList.remove("rebootnatorLeft");
        rebootnator.sprite.classList.remove("rebootnatorThin");
        rebootnator.sprite.classList.add("rebootnatorFat");
        break;
    }

    //timeout para devolver al jugador a su estado original pasados 5s
    setTimeout(function () {
      rebootnator.height = originHeight;
      rebootnator.width = originWidth;
      rebootnator.sprite.style.width = rebootnator.width + "px";
      rebootnator.sprite.style.height = rebootnator.height + "px";
      rebootnator.sprite.classList.add("rebootnator");
      rebootnator.sprite.classList.remove("rebootnatorRight");
      rebootnator.sprite.classList.remove("rebootnatorLeft");
      rebootnator.sprite.classList.remove("rebootnatorThin");
      rebootnator.sprite.classList.remove("rebootnatorFat");
      rebootnator.speed = originSpeed;
    }, 5000);
  }

  checkCollision() {
    goodies.forEach(function (goodie, index) {
      if (
        goodie.x < rebootnator.x + rebootnator.width &&
        goodie.y < rebootnator.y + rebootnator.height &&
        goodie.x + goodie.width > rebootnator.x &&
        goodie.y + goodie.height > rebootnator.y
      ) {
        goodie.effect();
        goodie.remove();
        goodies.splice(index, 1);
      }
    });
  }
}
