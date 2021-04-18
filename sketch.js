const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgImg,snowBody,snowImg,snow,snowImg2,bg

function preload(){
  bgImg=loadImage("snow3.jpg")
  snowImg=loadImage("snow4.webp")
  snowImg2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  bg=createSprite(400,200)
  bg.addImage("l",bgImg)
  
  bg.scale=1

}

function draw() {
  background(0);  
  bg.velocityX=-1
  if(bg.x<350){ 
   bg.velocityX=0
    bg.x=bg.x+3
  }
  Engine.update(engine);
  snoe()
 
  drawSprites();
  
}

function snoe(){
  if(frameCount%80===0){
  snow=createSprite(Math.round(random(0,750)),0,0)
  snow.scale=0.1
 snow.velocityY=1
  snow.addImage("l",snowImg)
  
  
 // snowBody=Bodies.rectangle(snow.x,snow.y,50,50,{isStatic:false,friction:0.1,restitution:0.5})
 // World.add(world,snowBody)
 // snow.x=snowBody.position.x
// snow.y=snowBody.position.y
  }
}