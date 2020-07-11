
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var packageBody,grnd,ppr;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new dust(510,384.5,60,10);
	dustbin2 = new dust(476,350,10,60);
	dustbin3 = new dust(544,350,10,60);
	grnd = new ground(300,400,800,20);
    ppr = new paper(100,100,15);


	
  
}


function draw() {
 
  background(0);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  grnd.display();
  ppr.display();

}

function keyPressed(){
   if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ppr.body,ppr.body.position,{x:  28 , y: -30});
   }
}


