//DECLARING VARIABLES AND CONSTANTS
var helicopter_moving, helicopterSprite;
var packageSprite,packageIMG, packageBody;
var back, backImage;
var box1, box2, box3, box_horizontal, box_vertical;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//LOADING ANIMATIONS AND IMAGES
	helicopter_moving = loadAnimation("helicopter1.png", "helicopter2.png");
	packageIMG = loadImage("package.png");
	backImage = loadImage("background.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//CREATING SPRITES
	back = createSprite(400, 350, 800, 700);
	back.addImage(backImage);
	back.scale = 0.7

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addAnimation("helicopter", helicopter_moving);
	helicopterSprite.scale = 1.3;

	//CREATING ENGINE AND WORLD
	engine = Engine.create();
	world = engine.world;

	//CREATING PACKAGE
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	//adding package to world
	World.add(world, packageBody);

	Engine.run(engine);
  
	box1 = new Box(400, 690, 200, 20);
	box2 = new Box(510, 650, 20, 100);
	box3 = new Box(310, 650, 20, 100);
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 

	drawSprites();

	//displaying the boxes
	box1.display();
	box2.display();
	box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



