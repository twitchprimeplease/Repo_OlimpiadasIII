class Enemigo {
    constructor(x, y, image){
        this.x = x;
        this.y = y;
        this.image = image;
    }

    show(){
        //imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 50);
        //imageMode(CORNER);
    }

    move(){
        this.x+= 2;

    }
}