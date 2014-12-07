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

//load index
var numbers = [];

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
  //load images
  for (var i = 0; i != numberOfAnimals; print("IdxP: #" + i)
    , animals[i] = loadImage(path + i++ + extension));
  //load sounds  
  for (var h = 0; h != numberOfAnimals; print("IdxS: #" + h)  
    ,sample[h] = loadSound("sounds/" + trackNameList[h++]));
}


function setup() {
  createCanvas(1024, 680);
  fill(0);
  textSize(28);
  background(255);
  //sample[int(random(5))].loop();
  
  generate(9);
  
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
            n = Math.floor(Math.random()*9+1);
        while(numbers.indexOf(n) !== -1)
            print(n);
       numbers[i] = n;
    }
    return numbers;
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





