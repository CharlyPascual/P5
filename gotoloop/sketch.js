const animals = [], QTY = 9;
const PATH = 'animals/animal', EXT = '.jpg';
 
function setup() {
  createCanvas(1024, 680);
  background(0);
  requestImages(PATH, EXT, QTY);
}
 
function draw() {
  //if (animals.length < QTY)  return;
  image(animals[7],20,100);
}
 
function requestImages(path, ext, qty) {
  for (var i = 0; i !== qty;loadImage(path + i++ + ext, getImage));
}
 
function getImage(img) {
  animals.push(img);
}