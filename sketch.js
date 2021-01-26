const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero , ground , rope;
var engine,world;

function preload() {
  backgroundImg = loadImage("Images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,500,800,10);
  hero = new Hero(340,300,500);
  rope = new Fly(hero.body,{ x:340, y:50 })
  monster = new Monster(1000,425,70);
  platform = new Ground(1000,500,1,1);

   //Tower1
    block1 = new Block(700,470,50,50);
    block2 = new Block(700,420,50,50);
    block3 = new Block(700,370,50,50);
    block4 = new Block(700,320,50,50);
    block5 = new Block(700,270,50,50);
    block6 = new Block(700,220,50,50);
    block7 = new Block(700,170,50,50);
    block8 = new Block(700,120,50,50);
  
    //Tower2
    block9 = new Block(760,470,50,50);
    block10 = new Block(760,420,50,50);
    block11 = new Block(760,370,50,50);
    block12 = new Block(760,320,50,50);
    block13 = new Block(760,270,50,50);
    block14 = new Block(760,220,50,50);
    block15 = new Block(760,170,50,50);
    block16 = new Block(760,120,50,50);
    block17 = new Block(760,70,50,50);

    //Tower3
    Block1 = new Block(640,470,50,50);
    Block2 = new Block(640,420,50,50);
    Block3 = new Block(640,370,50,50);
    Block4 = new Block(640,320,50,50);
    Block5 = new Block(640,270,50,50);
    Block6 = new Block(640,220,50,50);
    Block7 = new Block(640,170,50,50);
    Block8 = new Block(640,120,50,50);
    Block9 = new Block(640,70,50,50);

    //Tower4
    Block10 = new Block(580,470,50,50);
    Block11 = new Block(580,420,50,50);
    Block12 = new Block(580,370,50,50);
    Block13 = new Block(580,320,50,50);
    Block14 = new Block(580,270,50,50);
    Block15 = new Block(580,220,50,50);
    Block16 = new Block(580,170,50,50);
    Block17 = new Block(580,120,50,50);
    Block18 = new Block(580,70,50,50);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  
   ground.display();
   hero.display();
   rope.display();
   monster.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();

   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();

   Block1.display();
   Block2.display();
   Block3.display();
   Block4.display();
   Block5.display();
   Block6.display();
   Block7.display();
   Block8.display();
   Block9.display();

   Block10.display();
   Block11.display();
   Block12.display();
   Block13.display();
   Block14.display();
   Block15.display();
   Block16.display();
   Block17.display();
   Block18.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(hero.body,hero.body.position,{x:10000,y:-10000})
    }
}
