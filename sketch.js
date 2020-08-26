
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobOB=new bob(100,210,10,options)
	bobOB1=new bob(120,210,10,options)
	bobOB2=new bob(140,210,10,options)
	bobOB3=new bob(160,210,10,options)
	bobOB4=new bob(180,210,10,options)
	roof2=new roof(400,10,800,50)
	rope3=new rope(bobOB.body,roof2.body,bobDiameter*2,0)
	rope4=new rope(bobOB1.body,roof2.body,bobDiameter*2,0)
	rope5=new rope(bobOB2.body,roof2.body,bobDiameter*2,0)
	rope6=new rope(bobOB3.body,roof2.body,bobDiameter*2,0)
	rope7=new rope(bobOB4.body,roof2.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof2.display();
  bobOB.display();
  bobOB1.display();
  bobOB2.display();
  bobOB3.display();
  bobOB4.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
drawSprites();
 
}



