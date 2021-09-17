const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground1,zombie,breakButton
var ground2
var bridge,backgroundImage
var jointPoint
var stones=[]
var zombie1,zombie2,zombie3,zombie4

function preload()
{

zombie1.loadImage("./assets/zombie.png")
zombie2.loadImage("./assets/zombie.png")

zombie3.loadImage("./assets/zombie.png")
zombie4.loadImage("./assets/zombie.png")


backgroundImage  = loadImage("./assets/background.png")
}

function setup() {
 // createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground1 = new Ground(0,height/2+50,300,100)
ground2 = new Ground(width,height/2+50,300,100)
bridge = new Bridge(20,{x:width/2-400,y:height/2})
jointPoint=new Ground(width-400,height/2+10,40,20)
Matter.Composite.add(bridge.body,jointPoint)
jointLink = new Link(bridge,jointPoint)

for(var i = 0; i<=8;i=i+1){
 var x=random(width/2-200,width/2+300)
 var y=random(-10,140)
stone = new Stone(x,y,80)
stones.push(stone)

zombie = createSprite(width / 2, height - 110)
zombie.scale = 0.1
zombie.velocity = 10


breakButton = createButton("")
breakButton.position(width - 200,height /2 - 50)
breakButton.mousePressed(handleButtonPress)
}
}

function draw() {
  background(51)
 image(backgroundImage,0,0,windowHeight,windowHeight)
  Engine.update(engine);
  ground1.show()
  ground2.show()
  bridge.show()
  for(var s of stones){
 s.show()


  }
  drawSprite()
}
function handleButtonPress() {

jointLink.detach()

setTimeout(() => {

bridge.break()

}, 1500)


}