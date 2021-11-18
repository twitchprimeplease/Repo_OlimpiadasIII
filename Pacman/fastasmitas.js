class Fantasmitas {
    constructor(x, y, fila, columna, mat, puntos = 100) {
      this.x = x;
      this.y = y;
      this.fila = fila;
      this.columna = columna;
      this.mat = mat;
    }
  
    show() {
      fill(255, 0, 0);
      rect(this.x, this.y, 40, 40);
    }
  
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  
    getPuntos() {
      return this.puntos;
    }
  
    move(mat) {
      let dir = parseInt(random(4));
      switch (dir) {
        case 0:
          if (this.columna - 1 >= 0 && this.mat[this.fila][this.columna - 1] === 0) {
            this.x -= 50;
            this.columna--;
          }
          break;
        case 1:
          if (this.columna + 1 < this.mat[0].length && this.mat[this.fila][this.columna + 1] === 0) {
            this.x += 50;
            this.columna++;
          }
          break;
        case 2:
          if (this.fila - 1 >= 0 && this.mat[this.fila - 1][this.columna] === 0) {
            this.y -= 50;
            this.fila--;
          }
          break;
        case 3:
          if (this.fila + 1 < this.mat[0].length && this.mat[this.fila + 1][this.columna] === 0) {
            this.y += 50;
            this.fila++;
          }
          break;
      }
    }
  
  }