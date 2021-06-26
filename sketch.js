const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  rope.visiblity = "false";
  monster = new Monster(1100,550,300);

  box1 = new Box(800, 120, 70, 70);
  box2 = new Box(800, 150, 70, 70);
  box3 = new Box(800, 130, 70, 70);
  box4 = new Box(800, 200, 70, 70);
  box5 = new Box(800,400,70,70);
  box6 = new Box(800,350,70,70);
  box7 = new Box(800,300,70,70);

  box8 = new Box(870,600,50,50);
  box9 = new Box(870,540,50,50);
  box10 = new Box(870,500,50,50);
  box11 = new Box(870,450,50,50);
  box12 = new Box(870,400,50,50);
  box13 = new Box(870,350,50,50);

  box14 = new Box(730,600,50,50);
  box15 = new Box(730,540,50,50);
  box16 = new Box(730,500,50,50);
  box17 = new Box(730,450,50,50);
  box18 = new Box(730,400,50,50);
  box19 = new Box(730,350,50,50);
  box20 = new Box(730,300,50,50);

}

function draw() {
  background(bg);
  Engine.update(engine);

  textSize(25);
  fill("red");
  stroke("black")
  text("Drag the Superhero to defeat the Monster",300,50);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}
