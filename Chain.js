class Chain {
    constructor(bodyA,bodyB){
        var options={
            stiffness:0.7,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB

        }

        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(20);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}