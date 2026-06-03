class Pig{
   constructor(x,y,image){
     this.body = Bodies.circle(x,y,28,{
      restitution: 0.3,
      render:{
           sprite:{
           texture: image,
            xScale: 0.09,
            yScale: 0.09,
        }
      }
     });
     
   }
   addToWorld(world){
       Composite.add(world,this.body);
     }
}