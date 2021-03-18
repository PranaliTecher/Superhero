class Chain {
    constructor(bodyA,pointB) {
       var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness:1.2,
           length:450
       }

       this.pointB = pointB;
       this.chain = Constraint.create(options);
       World.add(world,this.chain);
    }
  
    

    display() {
       // if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
      
            stroke(48, 22, 8);
            strokeWeight(0);
      
            line(pointB.x, pointB.y, pointA.x, pointA.y);
      
            pop();
       //   }
        }
    }


/*class Chain {
    constructor(bodyA,pointB) {

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);  
        }
    }
}*/
