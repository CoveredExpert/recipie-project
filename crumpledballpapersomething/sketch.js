
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
     ground=new Ground(500,480,1000,10)
	//Create the Bodies Here.
   ball=new Ball(200,200,40)
   dleft= new Dustbin(650,435,20,80)
	dright= new Dustbin(800,435,20,80)
	ddown= new Dustbin(730,460,150,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display()
  ball.display()
  dleft.display()
  dright.display()
  ddown.display()
  drawSprites();
 
}


function keyPressed()  {
if (keyCode === UP_ARROW ){



  Matter.Body.applyForce(ball.body,ball.body.position,{x:190,y:-190});
}





}
