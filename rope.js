class ground
{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}


        }
        this.rope1=constraint.create(options)
        World.add(world,this.rope1)
    }
    display()
}