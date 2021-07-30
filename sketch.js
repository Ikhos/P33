var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle; 
var turn = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,70));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,170));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,270));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,370));
  }

  /*var j = 50;
  while (j <=width-10) {
    j=j+50
  }
  var w = 90;
  do{
    w=w+1;
  } while(w<=100);*/
  
}

function draw() {
  background("black");
  textSize(20);
  text("Score: " + score, width/6, 30);
  fill('blue');
  text("500", 25, 600);
  fill('green');
  text("200", 105, 600);
  text("200", 185, 600);
  fill('yellow');
  text("100", 265, 600);
  text("100", 345, 600);
  text("100", 425, 600);
  text("100", 505, 600);
  fill('green');
  text("200", 585, 600);
  text("200", 665, 600);
  fill('blue');
  text("500", 745, 600);
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  //create the particles using frameCount
  

  //display the particles 
  for (var w = 0; w < particles.length; w++) {
    particles[w].display();
    particle = particles[w];
  }

  if(turn === 6){
    fill("black");
    rect(400, 400, 1000, 1000);
    textSize(80);
    fill("white");
    text("Game Over", width/3, height/2);
    textSize(32);
    text("Final Score: " + score, width/3, height/3);
  }

  //scorePlus();
}

function mousePressed() {
  if(gameState!== "end" && turn < 6){
    particles.push(new Particles(/*x*/ Math.round(random(width - 500, width/2 + 100)), /*y*/ 0));
    turn++;
  }
}

function scorePlus() {
  if(particle.body.position.y <= 580) {
    if(particle.body.position.x <= 75){
      particle = null;
      score = score+500;
    }
    if(particle.body.position.x >= 76 && particle.body.position.x <= 235){
      particle = null;
      score = score+200;
    }
    if(particle.body.position.x >= 236 && particle.body.position.x <= 555){
      particle = null;
      score = score+100;
    }
    if(particle.body.position.x >= 556 && particle.body.position.x <= 715){
      particle = null;
      score = score+200;
    }
    if(particle.body.position.x >= 716 && particle.body.position.x <= 235){
      particle = null;
      score = score+500;
    }
  }
} 