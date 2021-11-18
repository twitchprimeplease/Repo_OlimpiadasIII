let cabello = [];
let acc = [];
let chaqueta = [];
let ropa = [];
let ropaslide;
let chaquetaslide;
let accslide;
let cabelloslide;
let cuerpo;
let fondo;
let titulo;
let boton = [];

function setup() {
  createCanvas(1200, 700);

  titulo = new Titulo(loadImage("./images/Titulo.png"))
  fondo = new Imagenes(loadImage("./images/Fondo.jpg"));
  cuerpo = new Imagenes(loadImage("./images/Cuerpo.png"));
  
  cabelloslide = 1
  accslide = 1
  ropaslide = 1
  chaquetaslide = 1;

  ropa[0] = new Imagenes(loadImage("/images/ropa/Ropa.png"));
  ropa[1] = new Imagenes(loadImage("/images/ropa/Ropa.png"));
  ropa[2] = new Imagenes(loadImage("/images/ropa/Ropa1.png"));
  ropa[3] = new Imagenes(loadImage("/images/ropa/Ropa2.png"));
  ropa[4] = new Imagenes(loadImage("/images/ropa/Ropa3.png"));
  ropa[5] = new Imagenes(loadImage("/images/ropa/Ropa4.png"));
  ropa[6] = new Imagenes(loadImage("/images/ropa/Ropa5.png"));
  ropa[7] = new Imagenes(loadImage("/images/ropa/Ropa5.png"));

  chaqueta[0] = new Imagenes(loadImage("./images/chaqueta/Chaqueta.png"));
  chaqueta[1] = new Imagenes(loadImage("./images/chaqueta/Chaqueta.png"));
  chaqueta[2] = new Imagenes(loadImage("./images/chaqueta/Chaqueta1.png"));
  chaqueta[3] = new Imagenes(loadImage("./images/chaqueta/Chaqueta2.png"));
  chaqueta[4] = new Imagenes(loadImage("./images/chaqueta/Chaqueta3.png"));
  chaqueta[5] = new Imagenes(loadImage("./images/chaqueta/Chaqueta4.png"));
  chaqueta[6] = new Imagenes(loadImage("./images/chaqueta/Chaqueta5.png"));
  chaqueta[7] = new Imagenes(loadImage("./images/chaqueta/Chaqueta5.png"));

  cabello[0] = new Imagenes(loadImage("./images/cabello/Pelo.png"));
  cabello[1] = new Imagenes(loadImage("./images/cabello/Pelo.png"));
  cabello[2] = new Imagenes(loadImage("./images/cabello/Pelo1.png"));
  cabello[3] = new Imagenes(loadImage("./images/cabello/Pelo2.png"));
  cabello[4] = new Imagenes(loadImage("./images/cabello/Pelo3.png"));
  cabello[5] = new Imagenes(loadImage("./images/cabello/Pelo4.png"));
  cabello[6] = new Imagenes(loadImage("./images/cabello/Pelo5.png"));
  cabello[7] = new Imagenes(loadImage("./images/cabello/Pelo5.png"));

  acc[0] = new Imagenes(loadImage("./images/acc/Acc.png"));
  acc[1] = new Imagenes(loadImage("./images/acc/Acc.png"));
  acc[2] = new Imagenes(loadImage("./images/acc/Acc1.png"));
  acc[3] = new Imagenes(loadImage("./images/acc/Acc2.png"));
  acc[4] = new Imagenes(loadImage("./images/acc/Acc3.png"));
  acc[5] = new Imagenes(loadImage("./images/acc/Acc4.png"));
  acc[6] = new Imagenes(loadImage("./images/acc/Acc5.png"));
  acc[7] = new Imagenes(loadImage("./images/acc/Acc5.png"));
  
  
  for (let i = 0; i < 4; i++) {
    boton[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      boton[i][j] = new Boton((720*i)+220,(80*j)+330, 50);
    }
  }
}

function draw() {
  background(255);
  titulo.show();
  fondo.show();
  cuerpo.show();
  acc[accslide].show();
  cabello[cabelloslide].show();
  ropa[ropaslide].show();
  chaqueta[chaquetaslide].show();


  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      boton[i][j].show();
    }
  }

  if (cabelloslide === 7) {
    cabelloslide = 1;
  }
  if (cabelloslide === 0) {
    cabelloslide = 6;
  }
  if (accslide === 7) {
    accslide = 1;
  }
  if (accslide === 0) {
    accslide = 6;
  }
  if (ropaslide === 7) {
    ropaslide = 1;
  }
  if (ropaslide === 0) {
    ropaslide = 6;
  }
  if (chaquetaslide === 7) {
    chaquetaslide = 1;
  }
  if (chaquetaslide === 0) {
    chaquetaslide = 6;
  }  

}

function mousePressed() {
  
  if (boton[0][0].click(mouseX,mouseY)) {
    cabelloslide--;
  }
  if (boton[1][0].click(mouseX,mouseY)) {
    cabelloslide++;
  }
  if (boton[0][1].click(mouseX,mouseY)) {
    accslide--;
  }
  if (boton[1][1].click(mouseX,mouseY)) {
    accslide++;
  }
  if (boton[0][2].click(mouseX,mouseY)) {
    ropaslide--;
  }
  if (boton[1][2].click(mouseX,mouseY)) {
    ropaslide++;
  }
  if (boton[0][3].click(mouseX,mouseY)) {
    chaquetaslide--;
  }
  if (boton[1][3].click(mouseX,mouseY)) {
    chaquetaslide++;
  }
 
}

