var ground;
var player;
var monster;
var groundimg;
var mapmove = 0;
var playerstand;



function setup(){

    frameRate(60);
    ground = new ground();
    player = new player();
    monster = new monster();
    createCanvas(800,600);
    groundimg = loadImage("textury/ground.jpg");
    playerstand = loadImage("textury/stand.png");
}

function draw(){

    mapmove += player.velx;
    background(20,200,225);
    textSize(20);
    text("Points : " + player.x, 10, 30);
    image(groundimg, ground.x, ground.y + 40);
    image(playerstand, player.x, player.y);
    //player.show();
    monster.show();
    player.update();
    monster.move();
    monster.checkcollision();


}