
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var dustbinObj, paperObject,groundObject,

var World;




function setup() {
	createCanvas(1600,700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

paperObject=new paper(200,450,70)
groundObject=new ground(width/2,670,width,20)
dustbinObj= dustbin(1200,650);



	paper = new Paper(100,600,10);


	ground = new Ground(400,680,800,20);

	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20)
	rightSide = new Dustbin(670,620,20,100)

	var render = Render.create({
		element:document.body,
		engine: engine,
        options: {
			width: 1600,
			height:700,
			wireframes: false
		}
	});

	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
Engine.update(engine);

paperObject.display();
groundObject.display();
dustbinObj.diplay();


paper.display();

ground.display();




leftSide.display();
bottom.display();
rightSide.display();





  drawSprites();
 
};

function KeyPreessed(){
	if(KeyCode === UP_ARROW){
		matter.body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
	}
}

