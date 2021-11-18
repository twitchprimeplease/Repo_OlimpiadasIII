let enemigos = [];
let torres = [];
let torresIconos = [];
let balas = [];
let torre1Img = [];
let torre2Img = [];
let castilloImg;
let enemigoImg;
let movimiento = false;
let disparo = false;

let mat = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];


function setup() {
  createCanvas(800, 700);
  enemigoImg = loadImage("./images/Enemigo.png")
  torre1Img = loadImage("./images/Torre1.png")
  torre2Img = loadImage("./images/Torre2.png")
  castilloImg = loadImage("./images/Castillo.png")

  enemigos.push(new Enemigo(0, 200, enemigoImg));
  /*  torres.push(new Torreta1(225, 170, 0, torre1Img, torre2Img, balas));
   torres.push(new Torreta1(625, 170, 0, torre1Img, torre2Img, balas));
   torres.push(new Torreta1(425, 270, 0, torre1Img, torre2Img, balas)); */

  //imagenes de torres para que regresen a su origen
   torresIconos.push(new TorretaUnitaria(280, 600, torre1Img, 1));
  torresIconos.push(new TorretaUnitaria(528, 600, torre2Img, 2));

}

function draw() {
  background(255);
  mostrarTerreno();

  fill(173, 129, 17);
  rect(20, 475, 40, 40, 2);

  fill(20);
  textSize(15);
  text("Arrastra las torretas hasta esta área", 80, 500);
  text("Torreta 1", 250, 670);
  text("Torreta 2", 500, 670);



  for (let index = 0; index < enemigos.length; index++) {
    const element = enemigos[index];
    element.show();
    element.move();

  }

  for (let index = 0; index < torres.length; index++) {
    const element = torres[index];
    element.show();
    element.shoot();

  }

  for (let index = 0; index < torresIconos.length; index++) {
    const element = torresIconos[index];
    element.show();

  }


  if (frameCount % 150 === 0) {
    enemigos.push(new Enemigo(random(-80, -10), 200, enemigoImg));

  }


  image(castilloImg, 700, 150, 110, 110);

  disparar();

}



function disparar() {
  for (let bala = 0; bala < balas.length; bala++) {
    for (let enemigo = 0; enemigo < enemigos.length; enemigo++) {
      if(dist(balas[bala].x -25, balas[bala].y - 20, enemigos[enemigo].x, enemigos[enemigo].y) < 15) {
 
    if (enemigos.indexOf(enemigos[enemigo]) !== -1 ) {
        enemigos.splice(enemigos.indexOf(enemigos[enemigo]), 1 );
    }
      }
    }
  }
}



function mousePressed() {
  for (let index = 0; index < torresIconos.length; index++) {

    if (dist(mouseX, mouseY, torresIconos[index].x, torresIconos[index].y) < 50) {
      movimiento = true;
    }
  }
}

function mouseDragged() {
  for (let index = 0; index < torresIconos.length; index++) {
    const element = torresIconos[index];

    if (movimiento) {

      if (dist(mouseX, mouseY, torresIconos[0].x, torresIconos[0].y) < 20) {

        torresIconos[0].x = mouseX;
        torresIconos[0].y = mouseY;

      }

      else if (dist(mouseX, mouseY, torresIconos[1].x, torresIconos[1].y) < 20) {

        torresIconos[1].x = mouseX;
        torresIconos[1].y = mouseY;

      }

    }
  }
}

function mouseReleased() {
  for (let index = 0; index < torresIconos.length; index++) {

    if (dist(mouseX, mouseY, torresIconos[index].x, torresIconos[index].y) < 50) {
      movimiento = false;

      console.log("presion")

      torres.push(new Torreta1(225, 170, 0, torre1Img, torre2Img, balas));
      torres.push(new Torreta1(625, 170, 0, torre1Img, torre2Img, balas));
      torres.push(new Torreta1(425, 170, 0, torre1Img, torre2Img, balas));


      for (let i = 0; i < torres.length; i++) {
        const element = torres[i];

        if (dist(torresIconos[index].x, torresIconos[index].y, torres[i].x, torres[i].y) < 50) {

          torres[i].isTorreta = torresIconos[index].tipoDeTorreta;


        }

      }

      torresIconos[0].x = 280;
      torresIconos[0].y = 600;

      torresIconos[1].x = 528;
      torresIconos[1].y = 600;



    }



  }
}


function seleccionarColor(fila, columna) {
  noStroke();
  switch (mat[fila][columna]) {
    case 0:
      // libre
      fill(250, 183, 0);
      break;
    case 1:
      // obstaculo
      fill(21, 214, 157);
      break;

    case 2:
      // espacio para poner armas
      fill(173, 129, 17);
      break;

    default:
      break;
  }
}

function mostrarTerreno() {
  for (let fila = 0; fila < mat.length; fila++) {
    for (let columna = 0; columna < mat[fila].length; columna++) {
      seleccionarColor(fila, columna);
      rect(columna * 50, fila * 50, 50, 50);
    }
  }
}

