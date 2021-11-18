class Pacman {
    constructor(x, y, fila, columna, mat) {
        this.x = x;
        this.y = y;
        this.fila = fila;
        this.columna = columna;
        this.mat = mat;
    }


    show() {
            noStroke();
            fill(255, 255, 0);
            circle(this.x, this.y, 40);
            stroke(0);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


move () {

    switch (key) {
      case 'a':
        if (this.columna - 1 >= 0 && this.mat[this.fila][this.columna - 1] === 0) {
          this.x -= 50;
          this.columna--;
        }
        break;
      case 'd':
        if (this.columna + 1 < this.mat[0].length && mat[this.fila][this.columna + 1] === 0) {
          this.x += 50;
          this.columna++;
        }
        break;
      case 'w':
        if (this.fila - 1 >= 0 && this.mat[this.fila - 1][this.columna] === 0) {
          this.y -= 50;
          this.fila--;
        }
        break;
      case 's':
        if (this.fila + 1 < mat[0].length && mat[this.fila + 1][this.columna] === 0) {
          this.y += 50;
          this.fila++;
        }
        break;
    }
}
}


