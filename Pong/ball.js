
function ball() {
    this.x = 500;
    this.y = 250;
    this.velx = 6;
    this.vely = random(-4,4);
    this.p1points = 0;
    this.p2points = 0;


 this.show = function() {
  ellipse(this.x, this.y, 60, 60);
  fill(1);
 }

 this.update = function() {
    this.x += this.velx;
    this.y += this.vely;
 }

 this.bordercheck = function() {

    if (this.x >= 970) {
        this.x = 500;
        this.y = 250;
        this.velx = -8;
        this.vely = random(-4, 4);
        this.p1points += 1;
    }
    if (this.x <= 30) {
        this.x = 500;
        this.y = 250;
        this.velx = 8;
        this.vely = random(-4, 4);
        this.p2points += 1;
    }
    if (this.y >= 470) {
        this.vely = -4;
    }
    if (this.y <= 30) {
        this.vely = 6;
    }
    if (collideRectCircle(player.p1x, player.p1y, 10, 150, this.x, this.y, 60, 60)) {
        this.velx = 8;
        this.vely = -4;
    }
    if (collideRectCircle(player.p1x, player.p1y + 50, 10, 100, this.x, this.y, 60, 60)) {
        this.velx = 8;
        this.vely = 0;
    }
    if (collideRectCircle(player.p1x, player.p1y + 100, 10, 50, this.x, this.y, 60, 60)) {
        this.velx = 8;
        this.vely = 4;
    }



    if (collideRectCircle(player.p2x, player.p2y, 10, 150, this.x, this.y, 60, 60)) {
        this.velx = -6;
        this.vely = -4;
    }
    if (collideRectCircle(player.p2x, player.p2y + 50, 10, 100, this.x, this.y, 60, 60)) {
        this.velx = -10;
        this.vely = 0;
    }
    if (collideRectCircle(player.p2x, player.p2y + 100, 10, 50, this.x, this.y, 60, 60)) {
        this.velx = -6;
        this.vely = 4;
    }
 }

}