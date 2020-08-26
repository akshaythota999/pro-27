class paper
{
    constructor (){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.paper2=Bodies.circle(150,690,10,options)
        World.add(world,this.paper2)
    }
    display()
}
