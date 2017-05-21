// tura danego gracza 1 = gracz nr1 2 = gracz nr2
int gracz = 1;
// tablica przechowująca X albo O 
String[] kwadrat = new String[10];

void setup() {
  size(600,600);
  // ✖ - X // ○ - O //
  // nadpisywanie calej tablicy spacjami
  for(int i = 0; i < 10; i++){
    kwadrat[i] = " ";
  }
}

void draw() {
  background(0);
  textSize(130);
  //  wygenerowanie planszy //
  for(int i = 0; i < 3; i++){
    for(int j = 0; j < 3; j++){
      noFill();
      stroke(150);
      rect(i * 200, j * 200, 200, 200);
    }
  }
  
  text("" + kwadrat[1] , 50, 140);
  text("" + kwadrat[2] , 240, 140);
  text("" + kwadrat[3] , 440, 140);
  text("" + kwadrat[4] , 50, 340);
  text("" + kwadrat[5] , 240, 340);
  text("" + kwadrat[6] , 440, 340);
  text("" + kwadrat[7] , 40, 540);
  text("" + kwadrat[8] , 240, 540);
  text("" + kwadrat[9] , 440, 540);
  
}  

void mouseClicked(){
  //--------------------------------------------//
  // kwadrat nr1
  if(mouseX < 200 && mouseY < 200){
    if(gracz == 1 && kwadrat[1] == " "){
      kwadrat[1] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[1] == " ") {
      kwadrat[1] = "○"; 
      gracz = 1;
    }
  }
  // kwadrat nr2
  if(mouseX > 200 && mouseX < 400 && mouseY < 200){
    if(gracz == 1 && kwadrat[2] == " "){
      kwadrat[2] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[2] == " ") {
      kwadrat[2] = "○"; 
      gracz = 1;
    }
  }
  // kwadrat nr3
  if(mouseX > 400 && mouseX < 600 && mouseY < 200){
    if(gracz == 1 && kwadrat[3] == " "){
      kwadrat[3] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[3] == " ") {
      kwadrat[3] = "○"; 
      gracz = 1;
    }   
  }
  //--------------------------------------------//
  // kwadrat nr4
  if(mouseY > 200 && mouseX < 200 && mouseY < 400){
    if(gracz == 1 && kwadrat[4] == " "){
      kwadrat[4] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[4] == " ") {
      kwadrat[4] = "○"; 
      gracz = 1;
    }
  }

   // kwadrat nr5
  if(mouseX > 200 && mouseY > 200 && mouseX < 400 && mouseY < 400){
    if(gracz == 1 && kwadrat[5] == " "){
      kwadrat[5] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[5] == " ") {
      kwadrat[5] = "○"; 
      gracz = 1;
    } 
  }
   // kwadrat nr6
  if(mouseX > 400 && mouseY > 200 && mouseX < 600 && mouseY < 400){
    if(gracz == 1 && kwadrat[6] == " "){
      kwadrat[6] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[6] == " ") {
      kwadrat[6] = "○"; 
      gracz = 1;
    }
  }
  //--------------------------------------------//
   // kwadrat nr7
  if(mouseY > 400 && mouseX < 200 && mouseY < 600){
    if(gracz == 1 && kwadrat[7] == " "){
      kwadrat[7] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[7] == " ") {
      kwadrat[7] = "○"; 
      gracz = 1;
    }
  }
   // kwadrat nr8
  if(mouseX > 200 && mouseY > 400 && mouseX < 400 && mouseY < 600){
    if(gracz == 1 && kwadrat[8] == " "){
      kwadrat[8] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[8] == " ") {
      kwadrat[8] = "○"; 
      gracz = 1;
    } 
  }
   // kwadrat nr9
  if(mouseX > 400 && mouseY > 400 && mouseX < 600 && mouseY < 600){
    if(gracz == 1 && kwadrat[9] == " "){
      kwadrat[9] = "✖";
      gracz = 2;
    } else if(gracz == 2 && kwadrat[9] == " ") {
      kwadrat[9] = "○"; 
      gracz = 1;
    }
  }
  //--------------------------------------------//
}