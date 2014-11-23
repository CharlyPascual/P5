var can = function (a){
  a.setup = function(){
    a.createCanvas(640,480);
    a.smooth();
    a.noStroke();
    a.background(200);
  }
  a.draw = function(){
     if (a.mouseIsPressed) {
    a.fill(a.random(255),0,0);
    }
    else
    {
      a.fill(a.random(255));
    }
    a.ellipse(a.mouseX, a.mouseY, 80, 80);
    
    //a.rect(0,0,a.width,a.height);
  }
}
var myp5 = new p5 (can,'centro');

var conb = function (b){
  b.setup = function(){
    b.createCanvas(640,480);
    b.smooth();
    b.noStroke();
    b.background(200);
    b.rectMode(b.CENTER);
  }
  b.draw = function(){
     if (b.mouseIsPressed) {
    b.fill(b.random(255),0,0);
    }
    else
    {
      b.fill(b.random(255));
    }
    b.rect(b.mouseX, b.mouseY, 80, 80);
    
    //a.rect(0,0,a.width,a.height);
  }
}
var myp5 = new p5 (conb,'derecha');
