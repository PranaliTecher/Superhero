class Box {
    constructor(x,y,width,height) {
       var options = {
         'restitution':0.8,
        'friction':1.0,
        'density':20,
       }

       this.box = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world,this.box);
    }

    display() {
       var pos = this.box.position;
       var Angle = this.box.angle;
       
       push();
        translate(pos.x,pos.y);
        rotate(Angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(3);
        stroke(0);
        rect(0,0,this.width,this.height);
       pop();
    }
}