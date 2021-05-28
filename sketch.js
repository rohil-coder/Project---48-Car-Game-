//Ma'am nothing is appearing up in this game from Visual Studio Code.
//How can I make the obstacles to come from both left and right edges.
var bg, bgImg;
var car, carImg;
var obstacle, obstacleImg;
var gameState = "play";
var score = 0;
var death = 0;
var gameOver, gameOverImg;

function setup()
{
    createCanvas(400, 400);
    bg = createSprite = (200, 200, 400, 400);
    bg.addImage(bgImg);
    car = createSprite(200, 360, 20, 20);
    car.addImage(carImg);
    car.scale = 0.75;
    gameOver = createSprite(200, 200, 20, 20);
    gameOver.addImage(gameOverImg);
}

function preload()
{
    bgImg = loadImage("Desert_1.png");
    carImg = loadImage("Motorcycle_1.png");
    gameOverImg = loadImage("GameOver_1.png");
    obstacleImg = loadImage("Bowlingball_1.png");
}

function draw()
{
  createEdgeSprites();
  background = "bg";
  textSize(18);
  if(gameState === "play")
  {
   if(keyWentDown("up"))
  {
    car.velocityY = -10;
  }
  if(keyWentUp("up"))
  {
    car.velocityY = 0; 
  }
  if(keyWentDown("down"))
  {
    car.velocityY = 10;
  }
  if(keyWentUp("down"))
  {
    car.velocityY = 0; 
  }
  if(car.y < 10 || car.y > 380)
  {
    car.y = 360;
  }
  score = Math.round(World.frameCount/20);
  spawnObstacles();
  gameOver.visible = false;
  if(obstacle.isTouching(car))
  {
    car.y = 360;
    car.x = 200;
    death = death + 1;
    obstacle.destroy();
  }
  car.bounceOff(leftEdge);
  car.bounce(rightEdge);
  }
  drawSprites();
  text("Deaths : " + death, 300, 20);
  text("Score : " + score, 300, 40);
  if (death === 10) {
  gameState = "over";
  gameOver.visible = true;
  gameOver.addImage(gameOverImg);
  car.x = 200;
  car.y = 380;
  car.velocityY = 0;
  }
  
}
function spawnObstacles()
{
  if (frameCount % 20 === 0) {
    obstacle = createSprite(20, 30, 40, 50);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.1;
    obstacle.velocityX = 20;
    obstacle.depth = car.depth;
    //obstacle.x = Math.round(random(20, 380));
    obstacle.y = Math.round(random(20, 380));
    
  }
}
