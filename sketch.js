var bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

speed = random(55, 90);
weight = random(400, 1500);

bullet=createSprite(50, 200, 50, 50);

wall=createSprite(1500, 200, 60, 200);
wall.shapeColor=color(80, 80, 80);

bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);



if(wall.x - bullet.x < (bullet.width + wall.width)/2){

  bullet.velovityX = 0

  var deformation = 0.5 * width * speed * speed/22509;

  if(deformation > 180)
  {bullet.shapeColor=color(255, 0, 0)}

if(deformation<100 && deformation>100){
  bullet.shapeColor=color(230, 230, 0)
}

if(deformation<100){
  bullet.shapeColor=color(0, 255, 0)
}
}

  drawSprites();
}