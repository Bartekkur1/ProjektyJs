function player() {

    this.grav = 0.5;
    this.vely = 0;
    this.velx = 0;
    this.x = 50;
    this.y = 500;
    this.jumpt = 0;
    this.r = 40;

    this.show = function() {
        noStroke();
        fill('red');
        rect(this.x, this.y, this.r, this.r);
    }
    
    this.update = function() {

        this.y += this.vely;
        this.x -= this.velx;
        this.velx = 0;

        if(collideRectRect(this.x, this.y, 40, 40, ground.x, ground.y, 801, 50)) {
         this.jumpt = 0;
            } else {
                this.vely += this.grav;
                this.y += this.vely;
            }
                    if(this.y >= ground.y) {
                        this.y = ground.y;
                        this.vely = 0;
                    }

                if (keyIsDown(LEFT_ARROW) && this.x >= 0) {
                    this.velx = +5;
                }
                if (keyIsDown(RIGHT_ARROW) && this.x <= 750) {
                    this.velx = -5;
                }

                if (keyIsDown(32) && this.y == ground.y) {
                    this.vely -= 7;
                }

           } 
}

    
