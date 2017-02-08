var ball;
var player;
var p1abc;
var p2abc;

function setup() {

    var cnv = createCanvas(1000,500);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    ball = new ball();
    player = new player();
     p1abc = select('#player1');
     p2abc = select('#player2');

}

function draw() {

    p1abc.html("Player 1 : " + ball.p1points);
    p2abc.html("Player 2 : " + ball.p2points);
    background(150);
    ball.bordercheck();
    ball.show();
    player.show();
    player.update();
    ball.update();
    line(width/2, 0, width/2, height);

}