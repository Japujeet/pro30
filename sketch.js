const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
   
}

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,700,800,20);
    ground2 = new Ground(300,400,200,20);
    ground3 = new Ground(600,300,150,20);

    box_1 = new Box(300,380,30,30);
    box_2 = new Box(270,380,30,30);
    box_3 = new Box(240,380,30,30);
    box_4 = new Box(330,380,30,30);
    box_5 = new Box(360,380,30,30);
    box_6 = new Box(300,345,30,30);
    box_7 = new Box(270,345,30,30);
    box_8 = new Box(330,345,30,30);
    box_9 = new Box(300,310,30,30);
    box_10= new Box(600,280,30,30);
    box_11= new Box(600,245,30,30);
    box_12= new Box(570,280,30,30);
    box_13= new Box(630,280,30,30);
    
    polygon_1 = new Poly(100,300);
   
    sling1 = new SlingShot(polygon_1.body,{x:100,y:300});
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground1.display();
    ground2.display();
    ground3.display();

    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    box_7.display();
    box_8.display();
    box_9.display();
    box_10.display();
    box_11.display();
    box_12.display();
    box_13.display();
    
    sling1.display();

    polygon_1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon_1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(polygon_1.body);
    }
}