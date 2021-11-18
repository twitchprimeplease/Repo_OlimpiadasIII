let collectables = [];
let enemigos = [];
let puntos = 0;

let mat = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

let pacman = new Pacman(75, 75, 1, 1, mat);

function setup() {
  createCanvas(1200, 650);
  console.log(mat);
  valoresIniciales();

}

function valoresIniciales () {
pacman = new Pacman(75, 75, 1, 1, mat);
collectables.splice(collectables);
collectables.push(new Bolitas(75, 125));
collectables.push(new Bolitas(75, 225));
collectables.push(new Bolitas(75, 425));
collectables.push(new Bolitas(75, 525));
collectables.push(new Bolitas(125, 75));
collectables.push(new Bolitas(325, 75));
collectables.push(new Bolitas(525, 75));
collectables.push(new Bolitas(625, 75));
collectables.push(new Bolitas(725, 75));
collectables.push(new Bolitas(825, 75));
collectables.push(new Bolitas(925, 75));
collectables.push(new Bolitas(1025, 75));
collectables.push(new Bolitas(1125, 75));
collectables.push(new Bolitas(325, 175));
collectables.push(new Bolitas(225, 75));
collectables.push(new Bolitas(525, 175));
collectables.push(new Bolitas(225, 175));
collectables.push(new Bolitas(725, 175));
collectables.push(new Bolitas(925, 175));
collectables.push(new Bolitas(1125, 175));
collectables.push(new Bolitas(175, 225));
collectables.push(new Bolitas(225, 275));
collectables.push(new Bolitas(225, 375));
collectables.push(new Bolitas(175, 425));
collectables.push(new Bolitas(225, 475));
collectables.push(new Bolitas(225, 575));
collectables.push(new Bolitas(125, 575));
collectables.push(new Bolitas(325, 575));
collectables.push(new Bolitas(325, 475));
collectables.push(new Bolitas(325, 375));
collectables.push(new Bolitas(325, 275));
collectables.push(new Bolitas(425, 575));
collectables.push(new Bolitas(425, 475));
collectables.push(new Bolitas(375, 425));
collectables.push(new Bolitas(425, 375));
collectables.push(new Bolitas(425, 275));
collectables.push(new Bolitas(425, 175));
collectables.push(new Bolitas(425, 75));
collectables.push(new Bolitas(375, 225));
collectables.push(new Bolitas(475, 225));
collectables.push(new Bolitas(575, 225));
collectables.push(new Bolitas(675, 225));
collectables.push(new Bolitas(775, 225));
collectables.push(new Bolitas(875, 225));
collectables.push(new Bolitas(975, 225));
collectables.push(new Bolitas(1075, 225));
collectables.push(new Bolitas(975, 125));
collectables.push(new Bolitas(475, 125));
collectables.push(new Bolitas(475, 425));
collectables.push(new Bolitas(575, 425));
collectables.push(new Bolitas(525, 475));
collectables.push(new Bolitas(525, 575));
collectables.push(new Bolitas(625, 575));
collectables.push(new Bolitas(725, 575));
collectables.push(new Bolitas(825, 575));
collectables.push(new Bolitas(925, 575));
collectables.push(new Bolitas(1025, 575));
collectables.push(new Bolitas(1125, 575));
collectables.push(new Bolitas(675, 425));
collectables.push(new Bolitas(775, 425));
collectables.push(new Bolitas(875, 425));
collectables.push(new Bolitas(975, 425));
collectables.push(new Bolitas(1075, 425));
collectables.push(new Bolitas(725, 475));
collectables.push(new Bolitas(925, 475));
collectables.push(new Bolitas(1125, 475));
collectables.push(new Bolitas(475, 525));
collectables.push(new Bolitas(775, 325));
collectables.push(new Bolitas(875, 325));
collectables.push(new Bolitas(975, 325));
collectables.push(new Bolitas(975, 525));

collectables.push(new Fantasmitas(505, 305, 6, 10, mat));
collectables.push(new Fantasmitas(555, 305, 6, 11, mat));
collectables.push(new Fantasmitas(605, 305, 6, 12, mat));
collectables.push(new Fantasmitas(655, 305, 6, 13, mat));

}

function draw() {
  noStroke();
  background(220);
  mostrarTerreno();
  pacman.show();
  mostrarCollectables(mat);
  resetJuego();

}

function keyPressed() {
  pacman.move()
}

function resetJuego() {
  for (let index = 0; index < collectables.length; index++) {
    const colectable = collectables[index];
    if (colectable instanceof Fantasmitas) {
      if (dist(pacman.getX(), pacman.getY(), colectable.getX(), colectable.getY()) < 40) {
        valoresIniciales();
      } 
    }
  }
}

function mostrarCollectables(mat) {
  for (let index = 0; index < collectables.length; index++) {
    const colectable = collectables[index];
    colectable.show();

    if (colectable instanceof Fantasmitas) {
      if (frameCount % 15 == 0) {
        colectable.move(mat);
      }
    }

  }
}


function seleccionarColor(fila, columna) {
  switch (mat[fila][columna]) {
    case 0:
      // libre
      fill(0);
      break;
    case 1:
      // obstaculo
      fill(0, 0, 255);
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


  verificarInteraccion();
}

function verificarInteraccion() {
  for (let index = 0; index < collectables.length; index++) {
    const colectable = collectables[index];
    if (dist(pacman.getX(), pacman.getY(), colectable.getX(), colectable.getY()) < 25) {
      puntos += colectable.getPuntos();
      collectables.splice(index, 1);
      break;
    }
  }
}