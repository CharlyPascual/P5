
var numOfAnimals = 9;
var animals = [];
animals[numOfAnimals] = new Animal();
var currentAnimal = 0;
function setup() {
  createCanvas(1024,680);
  for(var i = 0; i < animals.length; i++)
  {
    var animalName = "animals/animal" + i + ".jpg";
    animals[i] = loadImage(animalName);
    println(animalName);
  }
}

function draw() {
  background(128);
  image(animals[currentAnimal],0,0);
  currentAnimal++;
  if(currentAnimal >= animals.length)
  {
  currentAnimal = 0;
  }
}

function Animal(){
  
}