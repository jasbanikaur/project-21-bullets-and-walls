 var wall, thickness;
 var speed, weight, bullet;

 function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,300/2);
  

 thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white";
 bullet.velocityX=speed;

 }
 

 function draw() {
  background("black");  
  drawSprites();

  if(hasCollided( bullet, wall )){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
    if(damage>10){
     wall.shapeColor=color(0,255,0);
    }
    }


 }
 
 function hasCollided( bullet , wall ){


 

  bulletRightEdge= bullet.x = bullet.x + width;
  wallLeftEdge= wall.x;
  if(bulletRightEdge>=wallLeftEdge){
 return true;
  }
  return false;
 
 }



