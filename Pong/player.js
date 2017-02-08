function player() {

    this.p1y = 160;
    this.p2y = 160;
    this.p1x = 50;
    this.p2x = 950;

    this.show = function() {
        rect(this.p1x, this.p1y, 10, 150);
        rect(this.p2x, this.p2y, 10, 150);
        fill(1);
    }
    
    this.update = function() {


        if (keyIsDown(87) && this.p1y >= 0) {
            this.p1y -= 5;
        }
        if (keyIsDown(83) && this.p1y <= 380) {
            this.p1y += 5;
        }
        if (keyIsDown(UP_ARROW) && this.p2y >= 0) {
            this.p2y -= 5;
        }
        if (keyIsDown(DOWN_ARROW) && this.p2y <= 380) {
            this.p2y += 5;
        }
        
    }

}