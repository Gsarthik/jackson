var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){

  //pre-Load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-2.png","Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  
//create a path sprite
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//create a Runner sprite
boy = createSprite(180,360,30,30);
boy.addAnimation("boyrunning",boyImg);
boy.scale = 0.05;

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;


}

function draw() {
  background(0);
  path.velocityY = 4;

  boy.x=World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide (leftBoundary);
  boy.collide (rightBoundary);

  if(path.y > 400){
    path.y = height/2;
  }
 
  if(boy.x<-200){
    boy.x = 250;
  }
 
  drawSprites();
}
