gameState = 1;
var database;
var cross;
var x = 0;
var y = 0;
var makeImg;
var missImg;


function setup() {
  
    
  if (windowWidth>= 1200) {
    createCanvas(windowWidth,windowHeight);
      screen1 = new Screen();
      screen1.display();
    //console.log("hello screen1")
    }
  else if (windowWidth>=768 && windowWidth<992 && windowWidth<windowHeight){
    createCanvas(width,height);
    screen2 = new Screen2();
    screen2.display();
    //console.log("hello screen2")
  }
    
  
  
  
}

function draw() {
  //console.log(x+" and "+y);
}