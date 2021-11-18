class Bolitas {
    constructor(x, y, fila, columna, puntos = 50) {
      this.x = x;
      this.y = y;
      this.fila = fila;
      this.columna = columna;
      this.puntos = puntos;
    }
  
    show() {
      fill(255, 255, 0);
      circle(this.x, this.y, 10);
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
  
  }