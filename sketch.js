var player;

function setup() {
  createCanvas(400, 400);
  background("white");
  player=createSprite(200,200,20,20);
  
}

function draw() {


  if(KeyIsDown(DOWN_ARROW))
  {
    background('red');
 }

 if(KeyIsDown(UP_ARROW)){
   background('yellow')
 }

 if(KeyIsDown(RIGHT_ARROW)){
  background('blue')
}

if(KeyIsDown(LEFT_ARROW)){
  background('Green')

}
drawSprites();
}