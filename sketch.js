const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rod;
var pendulum;
var chain;

function setup(){
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    rod = new Rod(200,50,200,20);
    pendulum = new Pendulum(200,200,50,50);

    chain = new Chain(rod.body,pendulum.body);
}



function draw(){
  background(255);
  Engine.update(engine);

  rod.display();
  pendulum.display();
  chain.display();

  
}