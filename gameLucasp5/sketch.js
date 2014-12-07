/////////////////////
//cpb 24nov2014
//p5.js
/////////////////////

/////////////////////////////////////////////////
var score = 0;

//load buttos
var input, b, soundplay;
var ph;
////////////////////////
var numberOfAnimals = 9; // number of photos to show
var numberIndice = 8; // 0,1,2....
var numberLoadAnimals = 9; // number of photos to choose

//load index
var numbers = [];
h = 0; //indexador a 0
//loading photos
var animals = [];
var path = "animals/animal";
var extension = ".jpg";

//loading sound track
sample = [];
var trackNameList = ["0lion.wav", "1elephant.wav", "2tiger.wav", "3gorila.wav", 
  "4wolf.wav", "5bear.wav", "6buffalo.wav", "7horse.wav", "8lince.wav"]
/////////////////////////////////////////////////
//Positions photos
var margin = (1024 / 100) * 2;
var currentPhoto = 0; // index arrays photos
var onSeeX = margin;
var onSeeY = margin;
var widthX = 300; //width photo
var heightY = 169; //height photo
var marginY = 100;
//end_photos
/////////////////////////////////////////////////
function preload() {
  //genero el indice aleatorio para asociar sonidos y imagenes
  generate(9); 
  //load images
  for (var i = 0; i != numberOfAnimals; print(path + i)
    , animals[i] = loadImage(path + i++ + extension));
  //load sounds  
  
  for (var h = 0; h != numberOfAnimals; print(trackNameList[numbers[h]])  
    ,sample[h] = loadSound("sounds/" + trackNameList[numbers[h++]]));
}


function setup() {
  createCanvas(1024, 680);
  //fill(0);
  //textSize(28);
  background(0);
  //sample[int(random(5))].loop();
  
  sonar();
  photo();
}
//http://stackoverflow.com/questions/15584716/unique-random-number-generator-javascript
//the while loop is a do/while. Which means it will run the inline 
//statement and setting the n to a random number, before checking 
//the criterium. The criterium evaluates if there is such a value 
//in the array. indexOf(n) returns the integer key for the value of 
//n if it exists in the array, otherwise it returns -1. Thus, running 
//the loop again if indexOf does not return -1.

function generate(length)
{
    
  var n;
  for(var i=0; i<length; i++)
  {
    do
        n = Math.floor(Math.random()*9);
    while(numbers.indexOf(n) !== -1)
    print(i+' '+n);
    numbers[i] = n;
  }
  return numbers;
}

function sonar(){
 b = createButton('SOUNDS');
 b.position(int(widthX+margin*2),int(margin));
 b.mousePressed(animalSound);
}
function photo(){
 b = createButton('LOAD PHOTOA');
 b.position(int(widthX+margin*6),int(margin));
 b.mousePressed(displayPhoto);
}

function draw() {
  //displayPhoto();
  //display score
  fill(0);
  noStroke();
  rect(0, 0, 182, 50); // fondo del marcador
  fill(255);
  textSize(28);
  text("SCORE: " + score, margin, margin * 2);

}




function displayPhoto() {
  for(h = 0; h !=numberOfAnimals;h++ ){
    image(animals[numbers[h]], onSeeX, marginY, widthX, heightY);
    currentPhoto++;
    onSeeX += (widthX + margin);
    if ((onSeeX + widthX) >= (width - margin)) {
      onSeeX = margin;
      marginY += (heightY + margin);
    }
  }
    if (currentPhoto == numberOfAnimals) {
      marginY = 100;
      //currentPhoto = 0;
      //onSeeX = margin;
      //h = 0;
     //noLoop();
    }
  
}

function animalSound(){       
  selectionA = int(random(0, numberOfAnimals)); //seleciono un sonido de animal
    print("sonido selectionA: "+ selectionA+" [ "+ trackNameList[numbers[selectionA]] + "]");
    switch(selectionA)
    {
    case 0:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 1:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 2:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 3:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 4:
     // sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 5:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 6:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 7:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 8:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    case 9:
      //sample[selectionA].cue(0);
      sample[selectionA].play();
      break;
    }
}
function mousePressed() {
  //float d = dist(margin+widthX/2, 100+heightY/2, mouseX, mouseY);
  //onSeeX += widthX + margin;
  println("x: " + mouseX + " y: " + mouseY);
 
  
  if ((mouseX >= margin && mouseX <= widthX + margin)
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA === 0)) {
    score += 1;
  
  }
  if ((mouseX >= 2*margin + widthX)
    &&(mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA == 1)) {
    score += 1;
    
  }
  if ((mouseX >= 2*margin + 2*widthX + margin)
    &&(mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA == 2)) {
    score += 1;
  }

  if ((mouseX >= margin && mouseX <= widthX + margin) 
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 3)) {
    score += 1;
  
  }
  if ((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 4)) {
    score += 1;
  }
  if ((mouseX >= 3*margin + 2*widthX)  && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 5)) {
    score += 1;
  }/////
  if (((mouseX >= margin) && (mouseX <= widthX + margin)) 
    &&(mouseY >= marginY + 2*(heightY + margin) && mouseY <= marginY + 3*heightY + 2*margin)
    &&(selectionA == 6)) {
    score += 1;
  }
  if (((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA == 7))) {
    score += 1;
  }
  if (((mouseX >= 3*margin + 2*widthX) && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA == 8))) {
    score += 1;
  }
  print(score);
  return false;
}//generarlo para cada foto 9 en total




