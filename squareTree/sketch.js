var x = 0;
var y = 0;
var w = [];
var slider;

function setup() {
    createCanvas(800, 800);
    background(200);
    slider = createSlider(0, 400, 200);
}

function draw() {
    noFill();
    background(200);
    translate(width/2,height/2);
    w[0] = slider.value();
    for(var i = 0; i <= 100; i++) 
    {
        rotate(PI/4);
        w[i + 1] = sqrt(sq(w[i]) + sq(w[i]))
        rect(x - w[i]/2,y - w[i]/2,w[i],w[i])
    }
}
