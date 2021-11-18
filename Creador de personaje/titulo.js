class Titulo {
    constructor(image){
        this.image = image;
    }
    
    show(){
        imageMode(CENTER);
        image(this.image, 580, 70);
        imageMode(CORNER);
    }
}