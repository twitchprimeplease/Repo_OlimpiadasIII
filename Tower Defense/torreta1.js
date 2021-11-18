class Torreta1 {
    constructor(x, y, isTorreta, image1, image2, balas) {
        this.x = x;
        this.y = y;
        this.image1 = image1;
        this.image2 = image2;
        this.isTorreta = isTorreta;
        this.balas = balas;
    }
    show() {
        switch (this.isTorreta) {

            case 0:

                break;

            case 1:

                imageMode(CENTER);
                image(this.image1, this.x, this.y, 50, 50);
                imageMode(CORNER);

                break;

            case 2:

                imageMode(CENTER);
                image(this.image2, this.x, this.y, 50, 50);
                imageMode(CORNER);

                break;
        }



    }



    shoot() {
        if (this.isTorreta == 0) {
        } else {
            if (frameCount % 60 == 0) {
                this.balas.push(new Balas(this.x, this.y, 5))
            }

            for (let i = 0; i < balas.length; i++) {
                this.balas[i].show()
                this.balas[i].move()
            }
        }

    }
}