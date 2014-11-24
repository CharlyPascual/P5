/////////////////////
//cpb 24nov2014
/////////////////////
var numOfAnimals = 9;
var animals = [];
var stub, extension, num;
var currentAnimal = 0;

function setup() {
  createCanvas(1024, 680);
  animals = Animal("animals/animal", ".jpg", numOfAnimals);

}
function draw() {
  background(128);
  image(animals[currentAnimal], 20, 100);
}
function Animal(stub, extension, num) {
  for (var i = 0; i < 9; i++) 
  {
    var animalName = loadImage(stub + i + extension);
    animals = append(animals,animalName);
  }
  return animals;
}
//function getImage(img) {
  //animals.push(img);
//}