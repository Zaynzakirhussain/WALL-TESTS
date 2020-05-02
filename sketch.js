var man,man1,man2,hand1,hand2,eye,eye1,leg,leg1,gun,gun1,thickness,wall,bul,bullets;

function setup() {
  createCanvas(1365,650);
  man = createSprite(150, 200, 25, 25);
  man.shapeColor = "black";
  hand1 = createSprite(165, 198, 20, 5);
  hand1.shapeColor = "black";
  hand1.rotation = 5; 
  hand2 = createSprite(135,200,20,5);
  hand2.shapeColor = "black";
  hand2.rotation = -35;
  eye = createSprite(145,194,7,7);
  eye.shapeColor = "white";
  eye1 = createSprite(156,194,7,7);
  eye1.shapeColor = "white";
  leg = createSprite(145,215,5,20);
  leg.shapeColor = "black";
  leg = createSprite(156,215,5,20);
  leg.shapeColor = "black"; 
  gun = createSprite(175,200,4,10);
  gun.shapeColor = "black"; 
  gun1 = createSprite(175,195,15,7);
  gun1.shapeColor = "black";
  bul = createSprite(185,195,11,5.5);
  bul.shapeColor = "yellow";
  bul.visible = false;
  thickness = random(6,27);
  wall = createSprite(1300,200,thickness,63);
  wall.shapeColor = "brown";
  bullets = 40;
}

function draw() {
  background("white");
console.log(thickness);

  text("press space to shoot",650,100);
  text("press refresh to change walls",650,120);
  text("if the colour of the wall changes then its not safe",650,250);
  text("if doesn't then you're safe",670,270);
  
  if(keyDown("space")){
    bul.visible = true;
    bul.velocityX = 19;
    if(bul.x >= 1200){
      bul = createSprite(185,195,11,5.5);
      bul.shapeColor = "yellow";
      bul.visible = false;
    }
  }
bul.collide(wall);
 if(bul.collide(wall) && (wall.width<22) && ((wall.width = 7) || (wall.width = 9) ||( wall.width = 10) ||( wall.width = 11 )||  (wall.width = 12) || ((wall.width >= 13) || (wall.width = 14) ||( wall.width = 15) ||( wall.width = 16 )||  (wall.width = 17) || (wall.width = 18) ||( wall.width = 19) ||( wall.width = 20 )||  (wall.width = 21)))){
   wall.shapeColor = "red";
   bul.velocityX = 0;
   bul.x = 1300;
   text("The wall has been DESTROYED!!",1100,150);
 }
 
  if (bul.collide(wall) && (wall.width>21) && (wall.width<28) ) {
 // wall.shapeColor = "green";
  text("The BEST of the BEST!!",1100,150);
  bul.x = 1300;
}

  drawSprites();
}  
function collide(bul,wall){
  if (bul.x - wall.x < wall.width/2 +bul.width/2
    && wall.x - bul.x < wall.width/2 + bul.width/2) {
      bul.velocityX = 0;
     // wall.velocityX = 0;
 }
}