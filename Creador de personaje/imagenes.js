class Imagenes {
    constructor(image){
        this.image = image;
    }
    
    show(){
        imageMode(CENTER);
        image(this.image, 580, 430, 450, 530);
        imageMode(CORNER);
    }
}