class TorretaUnitaria {
    constructor(x, y, image, tipoDeTorreta){
        this.x = x;
        this.y = y;
        this.image = image;
        this.tipoDeTorreta = tipoDeTorreta;
    }
    show(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 70, 100);
        imageMode(CORNER);
    }

    shoot () {
        
    }
}