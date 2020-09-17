var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 movingrect.shapeColor="red"
 movingrect.velocityX=2
 movingrect.velocityY=-2
 fixedrect=createSprite(200,200,50,50)
 fixedrect.shapeColor="red"
 fixedrect.velocityX=2
 fixedrect.velocityY=-2
}

function draw() {
  background(1); 
  movingrect.y=mouseY
  movingrect.x=mouseX 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="green"
  }
  else{
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
      movingrect.velocityX=movingrect.velocityX*(-1)
      fixedrect.velocityX=fixedrect.velocityX*(-1)
    }
    if(fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
      movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2){
        movingrect.velocityY=movingrect.velocityY*(-1)
      fixedrect.velocityY=fixedrect.velocityY*(-1)
      }
  drawSprites();
}