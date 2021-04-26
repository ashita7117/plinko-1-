const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;


}

var particle = [];
var plinko = [];
var division = [];
var divisionHeight = 300;
for (var k = 0; k<=innerWidth;k=k+80){
  division.push(new Divisor(k, 800 - divisionHeight/2,10,divisionHeight));
}

function draw() {
  background(255,255,255);  
  drawSprites();
}