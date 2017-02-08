var odliczanie = 6;
var GameTimer = 11;
var Cookies = 0;
var x = 0;
var y = 0;
var img;
var button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage("assets/cookie.png")
    x = random(0,width - 130);
    y = random(0,height  - 130);
    button = createButton('PLAY AGAIN');
    button.size(200,70);    
}

function draw() {
    textSize(32);
    if(odliczanie >= 1){
        background(200);
        text("GET READY START IN : " + odliczanie, width/2 - 200, height/2);
        if(frameCount % 60 == 1){
            odliczanie -= 1;
        }
    }
    if(GameTimer >= 1 && odliczanie == 0){
        background(200);
        text("TIME LEFT : " + GameTimer, 10, 30);
        text("COOKIES : " + Cookies, 10, 60);
        image(img, x - 130, y - 130);
        if(frameCount % 60 == 1){
            GameTimer -= 1;
        }
        if(collidePointCircle(mouseX,mouseY, x, y, 260) && mouseIsPressed){
            newCookie();
            Cookies += 1;
        }
    }
    if(GameTimer ==  0 && odliczanie == 0){
        textSize(40);
        button.position(width/2 - 160, height/2 + 80);
        button.mousePressed(GameReset);
        text("Game Over!", width/2 - 180, height/2);
        text("Your Score : " + Cookies, width/2 - 200, height/2 + 40);
        newCookie();
    }
}
function newCookie() {
    x = random(0,width - 130);
    y = random(0,height  - 130);
    image(img, x - 130, y - 130);
}

function GameReset() {
    odliczanie = 5;
    GameTimer = 11;
    Cookies = 0;
    button.position(-200,-200);
}