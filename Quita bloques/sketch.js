class Barritas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largo = 10;
    this.ancho = 100;
  }
  createBar() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.ancho, this.largo);
    noFill();
  }
  moving(my) {
    this.x = my;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  createBar2() {
    fill(0, 0, 0);
    rect(this.x - 100, this.y, this.ancho, this.largo);
    noFill();
  }
  moving(my) {
    this.x = my;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }


}

class Pelotuda {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = -25;
    this.direccionX = -1;
    this.direccionY = -1;

  }
  createpelotuda() {
    fill(242, 93, 80);
    circle(this.x, this.y, this.diameter);
    noFill();
  }
  correpelotuda() {
    this.x += 5 * this.direccionX;
    this.y += 5 * this.direccionY;
    if (this.y < 0) {
      this.direccionY *= -1;

    }

    if (this.y > 900) {
      this.y = 450;
      this.x = 450;

    }

  }
  validatepelotudaI(derbar) {

    if (this.x > derbar.x && this.x < derbar.x + derbar.ancho && this.y > derbar.y && this.y < derbar.y + derbar.largo) {
      return true
    } else {
      return false
    }
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

}


class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largo = 75;
    this.ancho = 45;
    this.direccionX = 1;
  }
  createEnemy() {
    fill(191, 19, 225);
    rect(this.x, this.y, this.largo, this.ancho);


  }
  validateContact(bolita) {
    if (dist(this.x, this.y, bolita.getX(), bolita.getY()) < 35) {
      return true
    } else {
      return false
    }

  }

  desplazar() {
    this.x += 5 * this.direccionX;
    if (this.x == 775 || this.x == 0) {
      this.direccionX *= -1;
      this.y += 120;
    }

  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}


class Puntaje {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  plusA(Pelotuda) {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text(this.a, 100, 100);
    if (Pelotuda.getX() > 900) {
      bolita.direccionX *= -1;
    }

  }

  plusB(Pelotuda) {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text(this.b, 800, 100);
    if (Pelotuda.getX() < 0) {
      bolita.direccionX *= -1;
    }

  }
}








let army = [];
let derbar;



function validarBulletContact(bolita) {
  for (let enemy = 0; enemy < army.length; enemy++) {
    if (army[enemy].validateContact(bolita)) {
      console.log("Bullet");
      army.splice(enemy, 1);
      bolita.direccionY *= -1;
      puntosB.b += 10;
    }

  }


}


function setup() {
  createCanvas(900, 900);

  derbar = new Barritas(500, 800);
  derbar2 = new Barritas(derbar.getX-100, 800);
  bolita = new Pelotuda(450, 450);
  puntosA = new Puntaje();
  puntosB = new Puntaje();




  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 2; j++) {
      army.push(new Enemy(50 + (100 * i), 50 + (60 * j)))


    }
  }

}

function draw() {
  background(220);
  derbar.createBar();
  derbar2.createBar2();
  bolita.createpelotuda();
  bolita.correpelotuda();
  puntosA.plusA(bolita);
  contactoPositivo();
  puntosB.plusB(bolita);


  validarBulletContact(bolita);


  army.forEach(enemy => {
    enemy.createEnemy();

  });

}

function contactoPositivo() {
  if (bolita.validatepelotudaI(derbar)) {
    console.log("Barra");
    if (bolita.getX >= (derbar.getX + 5)) {
      bolita.direccionX *= -1;
    }
    bolita.direccionY *= -1;

  }
}

function contactoNegativo() {
  if (bolita.validatepelotudaI(derbar2)) {
    console.log("Barra");
    bolita.direccionX *= -1;
    
    bolita.direccionY *= -1;

  }
}

function mouseMoved() {
  derbar.moving(mouseX);

}

function keyPressed() {

}

