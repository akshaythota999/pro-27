class bob
{
    constructor (){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.bob2=Bodies.circle(150,690,10,options)
        World.add(world,this.bob2)
    }
    display()
}