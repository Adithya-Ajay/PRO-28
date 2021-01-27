class Chain{
    constructor(body1,point){
        var options = {
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.05

        }
        
        this.rope = Constraint.create(options)

        World.add(world,this.rope)

    }
    display(){
        strokeWeight(5)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    }
}