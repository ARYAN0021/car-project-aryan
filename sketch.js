
var car , wall;
var speed,weight;



function setup() {
  createCanvas(800,500);

  speed=random(55,90);
  weight=random(400,700);

car = createSprite(50,200,50,50);
car.velocityX=speed;
car.addImage(carImage)
wall=createSprite(700,200,60,height/2);
wall.shapeColor= ("purple");


}

function draw() {
  background("black");  

if(wall.x-car.x<(car.width + wall.width)/2){
  car.velocityX=0;
  var  deformation  =  0.5*weight*speed*speed/22500;
if(deformation>180 ){
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}
textSize(20);
fill("white");
text("Speed: "+speed+"km/h",10,40);
text("Weight: "+weight+"kg",400,40);
text("Deformation: "+deformation,200,480);


}


  drawSprites();
}