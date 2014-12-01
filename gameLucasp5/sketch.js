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

//eleccion del indice de  fotos/sonidos
var animals = [];
var stub;
var extension;
var num;
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
  for (var i = 0; i != QTY; print("Idx: #" + i)
    , animals[i] = loadImage(PATH + i++ + EXT));
}


function setup() {
  createCanvas(1024, 680);
  fill(0);
  textSize(28);
  background(255);
  animal("animals/animal",".jpg",numberOfAnimals);
}

function draw() {
  //background(255);
  //display photo
  displayPhoto();
  //display score
  text("SCORE: " + score, margin, margin * 2);
}

function animal(stub, extension, num) {
  for (var i = 0; i < numberOfAnimals; i++) {
    loadImage(stub + i + extension, getImage);
    print(stub + i + extension);
  }
}

function getImage(img) {
  animals.push(img);
}
function displayPhoto() {
  
  if (currentPhoto >= animals.length) return;
  
    print("number of photos: " + currentPhoto +" and " + animals.length);
    //print(visualizePhoto);
 
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