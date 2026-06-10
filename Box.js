class Box{
   constructor(x,y,width,height,image){
     this.body = Bodies.rectangle(x,y,width,height,{
        restitution: 0.2,
        friction: 1,
        density: 1,
      render:{
        sprite:{
           texture: image,
            xScale: 0.5,
            yScale: 0.5,
        }
      }
     });
   }
   addToWorld(world){
       Composite.add(world,this.body);
     }
}