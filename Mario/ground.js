function ground() {

    this.x = -1;
    this.y = 500;

    this.show = function() {
        noStroke();
        fill(0, 255, 100);
        rect(this.x, this.y + 40, 801, 120);
    }

}