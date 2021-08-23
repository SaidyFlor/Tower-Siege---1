class Ground{

    constructor(x,y,w,h){
        var ground_options={
            isStatic : true //JSON - key value pair
          }
          this.w = w;
          this.h  =h;
          this.ground = Bodies.rectangle(x,y,w,h,ground_options);
          World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}


//universe - Engine
//earth  = World
//objects = Bodies