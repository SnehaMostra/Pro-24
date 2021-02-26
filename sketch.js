
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer,plane,stone1,rubber,plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(350,350);
	plane = new Plane(600,height,1200,20);
	stone1 = new Stone(700,320,70,70);
	rubber = new Rubber(700,100);
  sand1 = new Sand(600,600);
  sand2 = new Sand(598,600);
  sand3 = new Sand(596,600);
  sand4 = new Sand(594,600);
  sand5 = new Sand(592,600);
  sand6 = new Sand(590,600);
  sand7 = new Sand(588,600);
  sand8 = new Sand(586,600);
  iron = new Iron (500,650);
  

	rubberBody = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
    World.add(world, rubberBody);

  sand1Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand1Body);

  sand2Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand2Body);

  sand3Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand3Body);

  sand4Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand4Body);

  sand5Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand5Body);

  sand6Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand6Body);

  sand7Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand7Body);

  sand8Body = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
  World.add(world, sand8Body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rubber.x=rubberBody.position.x;
  rubber.y=rubberBody.position.y;

  sand1.x=sand1Body.position.x;
  sand1.y=sand1Body.position.y;

  sand2.x=sand2Body.position.x;
  sand2.y=sand2Body.position.y;

  sand3.x=sand3Body.position.x;
  sand3.y=sand3Body.position.y;

  sand4.x=sand4Body.position.x;
  sand4.y=sand4Body.position.y;

  sand5.x=sand5Body.position.x;
  sand5.y=sand5Body.position.y;

  sand6.x=sand6Body.position.x;
  sand6.y=sand6Body.position.y;

  sand7.x=sand7Body.position.x;
  sand7.y=sand7Body.position.y;

  sand8.x=sand8Body.position.x;
  sand8.y=sand8Body.position.y;
    
  hammer.display();
  plane.display();
  stone1.display();
  rubber.display();
  sand1.display();
  iron.display();

  drawSprites();
 
}



