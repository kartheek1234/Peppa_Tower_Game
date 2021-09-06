var tower, towerImage, door, doorImage, doorGroup, climber, climberImage, climberGroup, ghost, ghostImage, invisible, invisibleGroup, gameState="play", spookySound;
var score=0;

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("peppapig_1.png");
  spookySound=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
  tower= createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=2;
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage);
  ghost.scale=0.4;
  doorGroup=new Group();
  climberGroup=new Group();
  invisibleGroup=new Group();
}

function draw(){
  background("black");
  
  if(gameState==="play"){

    
    
  if(keyDown("right")){
    ghost.x=ghost.x+5;
    
  }
   
  if(keyDown("left")){
    ghost.x=ghost.x-5;  
  }

  if(keyDown("space")){
    ghost.velocityY=-5;   
  }
  
  ghost.velocityY=ghost.velocityY+0.5;
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
  
  if(tower.y>600){
    tower.y=300;
  }
  
  if(ghost.isTouching(invisibleGroup)||ghost.y>600){
    ghost.destroy();
    gameState="end";
  }

  
  
  doors();
  drawSprites();
    
    
  }
  
  if(gameState==="end"){
    textSize(20);
    fill("red");
    text("GAME OVER, HAPPY B'DAY MANVI :)",100,300);
    
  }
  
}

function doors(){
  if(frameCount%200===0){
    door=createSprite(Math.round(random(120,400)),10);
    door.addImage("door",doorImage);
    climber=createSprite(door.x,70);
    climber.addImage("climbers",climberImage);
    climber.velocityY=2;
    climber.lifetime=300;
    climberGroup.add(climber);
    door.velocityY=2;
    door.lifetime=300;
    doorGroup.add(door);
    ghost.depth=door.depth;
    ghost.depth+=1;
    invisible=createSprite(climber.x,80,80,10);
    invisible.velocityY=2;
    invisible.visible=false;
    invisibleGroup.add(invisible);
    invisibleGroup.add(invisible);
    
  }
    
  
  
}


