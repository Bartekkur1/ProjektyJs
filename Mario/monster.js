function monster() {

    this.x = [550];
    this.y = [500, 100];
    this.velx = -2;
    alive = true;
    this.r = 40;

    this.show = function() {
        noStroke();
        fill('black');
        rect(this.x[0], this.y[0], this.r, this.r);
    }

    this.move = function() {

        if(alive == true) {
            this.x[0] += this.velx;
            if (this.x[0] <= 200) {
                this.velx = 2;
            }
            if (this.x[0] >= 550) 
                this.velx = -2;
            }
        }


    
    this.checkcollision = function() {

        if (collideRectRect(this.x[0] + 5, this.y[0], 30, 2, player.x, player.y, 40, 40)) {
            player.vely = -7;
            alive = false;
            this.x[0] = 0;
            this.y[0] = 0;
            this.r = 0;
        } 

        if (collideRectRect(this.x[0], this.y[0], 5, 40, player.x, player.y, 40, 40)) {
            player.x = 50;
            player.r = 0;
        }
        if (collideRectRect(this.x[0] + 35, this.y[0], 5, 40, player.x, player.y, 40, 40)) {
            player.x = 50;
            player.r = 0;
        }
    }

}