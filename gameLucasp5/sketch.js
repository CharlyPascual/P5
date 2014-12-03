/////////////////////
//cpb 24nov2014
//p5.js
/////////////////////

/////////////////////////////////////////////////
var score = 0;
////////////////////////
var numberOfAnimals = 9; // number of photos to show
var numberIndice = 8; // 0,1,2....
var numberLoadAnimals = 9; // number of photos to choose

//loading photos
var animals = [];
var path = "animals/animal";
var extension = ".jpg";

//loading sound track
sample = [];
var trackNameList = ["0lion.wav", "1elephant.wav", "2tiger.wav", "3gorila.wav", 
  "4wolf.wav", "5bear.wav", "6buffalo.wav", "7horse.wav", "8lince.wav"]
h = 0;
/////////////////////////////////////////////////
//fotos animales , posiciones
var margin = (1024 / 100) * 2;
var currentPhoto = 0; // index arrays photos
var onSeeX = margin;
var onSeeY = margin;
var widthX = 300; //width photo
var heightY = 169; //height photo
var marginY = 100;
//fin_fotos
/////////////////////////////////////////////////
function preload() {
  for (var i = 0; i != numberOfAnimals; print("IdxP: #" + i)
    , animals[i] = loadImage(path + i++ + extension));
    
  for (var h = 0; h != numberOfAnimals; print("IdxS: #" + h)  
    ,sample[h] = loadSound("sounds/" + trackNameList[h++]));
}


function setup() {
  createCanvas(1024, 680);
  fill(0);
  textSize(28);
  background(255);
  sample[5].loop();
}

function draw() {
  //background(255);
  //display photo
  displayPhoto();
  //display score
  text("SCORE: " + score, margin, margin * 2);
}

function displayPhoto() {
    image(animals[currentPhoto++], onSeeX, marginY, widthX, heightY);

    onSeeX += (widthX + margin);
    if ((onSeeX + widthX) >= (width - margin)) {
      onSeeX = margin;
      marginY += (heightY + margin);
    }
    if (currentPhoto == numberOfAnimals) {
      marginY = 100;
     noLoop();
    }
}