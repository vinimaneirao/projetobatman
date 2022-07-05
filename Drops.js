class drop{

    constructor(x,y){
        var options={
            friction: 0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        //this.x = x;
        //this.y = y;
        //this.body.setCollider("elipse",0,0,5);
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        

       fill("blue");
       ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 5, 5);

    }

    yale(){
        if(this.body.position.y > 700){
            Matter.Body.setPosition(this.body,{x:Math.round(random(1,400)), y: Math.round(random(0,300))})
        }
    }
}