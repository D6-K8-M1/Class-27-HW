
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball
var ground
var line1
var line2
var line3
var line4
//var chain1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  

	//Create the Bodies Here.


  Engine.run(engine);
  
  ball = new Ball(200,450,70);
  ground = new Ground(width/2,100, width, 20);
  line1 = new Line(100,310,15,400);
  line2 = new Line(300,310,15,400);
  line3 = new Line(500,310,15,400);
  line4 = new Line(700,310,15,400);
  //chain1 = new Chain(200,400,10,50);


  
}


function draw() {
  rectMode(CENTER);
  background(0);

  




  
  
  ball.display();
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  //chain1.display();

 
}



