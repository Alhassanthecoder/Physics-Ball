var wall
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1920, 965);


	ball_options = {
		IsStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	
	let img = createImg(
		"right.png"
	);
	img.position(100, 50);
	img.mouseClicked(vforce && hforce)
	img.size(50, 50)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(400, 200, 20, ball_options,);
	World.add(world, ball);

	rightWall = new Wall(width / 2, 670, width, 20)
	leftWall = new Wall(1100, 600, 20, 120)
	leftWall2 = new Wall(1500, 600, 20, 120)
	World.add(world, rightWall)
	World.add(world, leftWall)
	World.add(world, leftWall2)

	
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS)
	background(50);

	rightWall.show()
	leftWall.show()
	leftWall2.show()
	ellipse(ball.position.x, ball.position.y, 20, 20)
	drawSprites();


}

function hforce() {
	Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 58, y: 0 })

}

function vforce() {
	Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 5 })

}

