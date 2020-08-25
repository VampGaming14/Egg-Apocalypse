const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var strikerIMG;
var player;
var gameState = "onSling";
var score = 0;
var cityIMG;
var sound;

function preload(){
 
  cityIMG = loadImage("pics/city.jpg")
  
  
}

function setup() {
  createCanvas(1300,800);
  engine = Engine.create();
  world = engine.world;
 //the ground
  ground = new Ground(650,790,1390,20);
 //the striker
striker = new Striker(1000,400,30,40);
//men on ground
man1 = new Man(700,750);
man2 = new Man(697,750);
man6 = new Man(720,750);
//men on stands
stand1 = new Ground(950,600,90,10);
man3 = new Man(950,599);
stand2 = new Ground(695,653,90,10);
man4 = new Man(695,652);
stand3 = new Ground(800,550,90,10);
man5 = new Man(800,549);
//obstacle
obstacle1 = new Ground(850,580,80,10);
obstacle2 = new Ground(600,550,10,20);
//the sling
sling = new SlingShot(striker.body,{x:200,y:500})
}

function draw() {
  background(cityIMG); 

  noStroke();
  textSize(35)
  fill("white")
  text("Score:  " + score, width-300, 100)
  strokeWeight(4);

if(gameState === "launch"){
  fill("yellow");
  text("Refresh your page to play again and press space to reload the egg", 100,50)
}

  Engine.update(engine); 
  ground.display();
  striker.display();
  sling.display();
  man1.display();
  man2.display();
  man3.display();
  stand1.display();
  man4.display();
  stand2.display();
  stand3.display();
  man5.display();
  man6.display();
  obstacle1.display();
  obstacle2.display();
  
  man1.score();
  man2.score();
  man3.score();
  man4.score();
  man5.score();
  man6.score();
}

function mouseDragged(){
  if(gameState !== "launch"){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  gameState =  "launch";
  score++;
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(striker.body,{x:200,y:500});
    sling.attach(striker.body);
    gameState = "onSling";
  }
}