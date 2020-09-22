var movingrect,fixedrect
 
var ball1,ball2,ball3,ball4

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

 ball1=createSprite(30,30,20,20)
 ball1.shapeColor=("yellow")
 ball2=createSprite(60,30,20,20)
 ball2.shapeColor=("yellow")
 ball3=createSprite(90,30,20,20)
 ball3.shapeColor=("yellow")
 ball3.velocityX=2
 ball3.velocityY=-2
 ball4=createSprite(120,30,20,20)
 ball4.shapeColor=("yellow")
 
 
}

function draw() {
  background(1); 
  movingrect.y=mouseY
  movingrect.x=mouseX 
  

     if( istouching(movingrect,ball1)){
     movingrect.shapeColor=("blue")
     ball1.shapeColor=("green")
     }
     else{
      movingrect.shapeColor="red"
      ball1.shapeColor="yellow"
    }
    bounceoff(movingrect,ball3)

  drawSprites();
}
