class Bird{
   constructor(x,y,image){
     this.body = Bodies.circle(x,y,25,{
      restitution: 0.6,
      density: 0.01,
      render:{
           sprite:{
           texture: image,
            xScale: 0.3,
            yScale: 0.3,
        }
      }
     });
   }
   addToWorld(world){
       Composite.add(world,this.body);
     }
}