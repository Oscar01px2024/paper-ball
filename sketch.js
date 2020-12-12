
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400,400,1000,10);
dustbin1 = new Dustbin(500,350,100,20);
dustbin2 = new Dustbin(550,350,20,50);
dustbin3 = new Dustbin(450,350,20,50);
paper1 = new Paper(50,200,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {

		paper1.applyForce(paper1.body,paper.body.position,{x:85,y:-85})
	}
}


