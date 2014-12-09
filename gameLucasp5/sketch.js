/////////////////////
//cpb 24nov2014
//p5.js
/////////////////////

/////////////////////////////////////////////////
var score = 0;
var sound = false;
var gren = 0;
var verde = 50;
var estela = 4;
var transparency = 126;
var selectionA = null;
var rojo = 50;
var estelaR = 4;

//load buttons
var b;
var ph; //load photo
var c; //reload phto
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
  print("Generando el indice*******");
  generate(9); 
  //load images
  print("cargando imagenes*******");
  for (var i = 0; i != numberOfAnimals; print(path + i)
    , animals[i] = loadImage(path + i++ + extension));
  //load sounds  
  print("cargando sonido*******");
  for (var h = 0; h != numberOfAnimals; print(trackNameList[numbers[h]])  
    ,sample[h] = loadSound("sounds/" + trackNameList[numbers[h++]]));
}


function setup() {
  createCanvas(1024, 680);
  background(0);
  frameRate(8);
  sonar();
  //photo(); // de momento lo quito
  reg();
  print(score + ' ' + gren + ' ' + selectionA + ' ' + sound)
}

//http://stackoverflow.com/questions/15584716/unique-random-number-generator-javascript
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

//BOTONES
function sonar(){
 b = createButton('SOUNDS');
 b.position(int(widthX+margin*2),int(margin));
 b.mousePressed(animalSound);
}
function photo(){
 ph = createButton('LOAD IMAGE');
 ph.position(int(widthX+margin*6),int(margin));
 ph.mousePressed(displayPhoto);
}
function reg(){
 c = createButton('RELOAD IMAGE');
 c.position(int(widthX+margin*12),int(margin));
 c.mousePressed(regenerate)
 
}
//RECARGA IMAGENES
function regenerate(){
  //Reincio todos los contadores
   numbers.length = 0; //http://davidwalsh.name/empty-array
   animals.length = 0;
   sample.length = 0;
   gren = 0;
   selectionA = null;
   preload();
   //setTimeout(displayPhoto,5000);
}


function draw() {
  //display score
  background(0);
  fill(0);
  noStroke();
  rect(0, 0, 182, 50); // fondo del marcador
  fill(255);
  textSize(28);
  text("SCORE: " + score, margin, margin * 2);

  displayPhoto();
 //puntero grande
  noFill();
   stroke(255,153,0,126);
  strokeWeight(10);
   ellipse(mouseX,mouseY,100,100)
if (gren == 3 && (selectionA != null)) {
    //congratulations
   noFill();
   verde += 12;
    estela += 4;
    transparency -= 2;
    //print(transparency);
    stroke(0,255,0,transparency);
    strokeWeight(estela);
    ellipse(mouseX,mouseY,verde,verde)
    if(verde >= 400){
      //reinicio ellipse verde
      gren = 0;
      verde = 50;
      estela = 4;
      transparency = 126;
      //selectionA = 100;
    }
   }
   else if ((gren == 2) && selectionA != null )
   {
    noFill();
    rojo += 12;
    estelaR += 4;
    transparency -= 2;
    stroke(255,0,0,transparency);
    strokeWeight(estelaR);
    //print(estela);
    ellipse(mouseX,mouseY,rojo,rojo);
    if(rojo >= 400){
      //reinicio ellipse roja
      gren = 0;
      rojo = 50;
      estelaR = 4;
      transparency = 126;
      //selectionA = 100;
    }
   }
  
}

function displayPhoto() {
  for(h = 0; h !=numberOfAnimals;h++ ){
    image(animals[numbers[h]], onSeeX, marginY, widthX, heightY);
    //recuadro a las fotos
    stroke(0);
    strokeWeight(2);
    noFill();
    rect(onSeeX, marginY, widthX, heightY);

    currentPhoto++;
    onSeeX += (widthX + margin);
    if ((onSeeX + widthX) >= (width - margin)) {
      onSeeX = margin;
      marginY += (heightY + margin);
    }
  }
    if (currentPhoto == numberOfAnimals) {
      marginY = 100;
      currentPhoto = 0;
      onSeeX = margin;
      h = 0;
      print('hache: ' + h);
     //noLoop();
    }
  
}

function animalSound(){     
  selectionA = int(random(0, numberOfAnimals)); //seleciono un sonido de animal
    print("sound selectionA: "+ selectionA+" [ "+ trackNameList[numbers[selectionA]] + "]");
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
  println("x: " + mouseX + " y: " + mouseY);

 //var green = false;
  
  if ((mouseX >= margin && mouseX <= widthX + margin)
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA === 0)) {
    score += 1;
   gren = 3;
  }
  else if ((mouseX >= margin && mouseX <= widthX + margin)
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA !== 0 && selectionA != null)){
    gren = 2;
    score -= 1;

  }

  if ((mouseX >= 2*margin + widthX)
    &&(mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA == 1)) {
    score += 1;
    gren = 3;
  }
    else if ((mouseX >= 2*margin + widthX)
    &&(mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA != 1 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if ((mouseX >= 2*margin + 2*widthX + margin)
    &&(mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA == 2)) {
    score += 1;
    gren = 3;
  }
    else if ((mouseX >= 2*margin + 2*widthX + margin)
    &&(mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY && mouseY <= marginY + heightY)
    &&(selectionA != 2 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if ((mouseX >= margin && mouseX <= widthX + margin) 
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 3)) {
    score += 1;
    gren = 3;
  }
    else if ((mouseX >= margin && mouseX <= widthX + margin) 
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA != 3 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if ((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 4)) {
    score += 1;
    gren = 3;
  }
    else if ((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA != 4 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if ((mouseX >= 3*margin + 2*widthX)  && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA == 5)) {
    score += 1;
    gren = 3;
  }
    else if ((mouseX >= 3*margin + 2*widthX)  && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + heightY + margin && mouseY <= marginY + 2*heightY + margin)
    &&(selectionA != 5 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if (((mouseX >= margin) && (mouseX <= widthX + margin)) 
    &&(mouseY >= marginY + 2*(heightY + margin) && mouseY <= marginY + 3*heightY + 2*margin)
    &&(selectionA == 6)) {
    score += 1;
    gren = 3;
  }
    else if (((mouseX >= margin) && (mouseX <= widthX + margin)) 
    &&(mouseY >= marginY + 2*(heightY + margin) && mouseY <= marginY + 3*heightY + 2*margin)
    &&(selectionA != 6 && selectionA != null)){
    gren = 2;
  score -= 1;
  }

  if (((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA == 7))) {
    score += 1;
    gren = 3;
  }
    else if (((mouseX >= 2*margin + widthX) && (mouseX <= 2 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA != 7 && selectionA != null))){
    gren = 2;
  score -= 1;
  }

  if (((mouseX >= 3*margin + 2*widthX) && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA == 8))) {
    score += 1;
    gren = 3;
  }
    else if (((mouseX >= 3*margin + 2*widthX) && (mouseX <= 3 * (widthX + margin))
    &&(mouseY >= marginY + 2*(heightY + margin) && (mouseY <= marginY + 3*heightY + 2*margin))
    &&(selectionA != 8 && selectionA != null))){
    gren = 2;
  score -= 1;
  }

  print('aciertos: ' + score);
  print('gren OK: ' + gren);
  print('Seleccion: ' + selectionA);
  print('Hay sonido: ' + sound);
  return false;
}//generarlo para cada foto 9 en total

function congratulations () {
 
  var estela = 4;
 // alert("hola");
  //for (var i = 6; i < 200; i++) {
   
    noFill();
    strokeWeight(estela);
    ellipse(mouseX,mouseY,50,50)
//  };
  // body...
}
