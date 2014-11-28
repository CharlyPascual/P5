/////////////////////
//cpb 24nov2014
/////////////////////

/////////////////////////////////////////////////
var h = 0; //future variable global indice del sistemas de eleccion, 
var score = 0;
////////////////////////
var numberOfAnimals = 9; // number of photos to show
var numberIndice = 8; // 0,1,2....
var numberLoadAnimals = 9; // number of photos to choose

//eleccion del indice de  fotos/sonidos
var animals = [];
var stub, extension, num;
/////////////////////////////////////////////////
//fotos animales , posiciones
var margin = (1024 / 100) * 2;
var visualizePhoto = true; // switch show photos

var currentPhoto = 0; // index arrays de photos
var onSeeX = margin;
var onSeeY = margin;
var widthX = 300; //width photo de cada foto
var heightY = 169; //height photo
var marginY = 100;
var selectionA = 0; // ojo lo he cambiado si no le doy un varlor por defecto tiene 0
var selectionB = 100; // y no funcionaria bien los botones
//fin_fotos
/////////////////////////////////////////////////


function setup() {
  createCanvas(1024, 680);
  animals = Animal("animals/animal", ".jpg", numberOfAnimals);

}

function draw() {
  //display photo
  displayPhoto();
  //display score
  fill(0);
  textSize(28);
  text("SCORE: " + score, margin, margin * 2);

}

function Animal(stub, extension, num) {
  for (var i = 0; i < numberOfAnimals ; i++) {

    loadImage(stub + i + extension, getImage);
    print(stub + i + extension);
  }
  return animals;
}

function getImage(img) {
  animals.push(img);
}

function displayPhoto() {
  if (visualizePhoto) {
    print(" numero de fotos: " + currentPhoto);
    //print(visualizePhoto);

    //image(animals[numbers[h]], onSeeX, marginY, animals[0].width, animals[0].height);
    image(animals[h], onSeeX, marginY, widthX, heightY);

    h += 1;
    onSeeX += widthX + margin;
    if ((onSeeX + widthX) >= (width - margin)) {
      onSeeX = margin;
      marginY += (heightY + margin);
    }
    currentPhoto += 1;
    if (currentPhoto >= numberOfAnimals) {
      visualizePhoto = !visualizePhoto;
      //print(visualizePhoto);
      marginY = 100;
    }
  }
}