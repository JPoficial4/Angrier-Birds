class Pig {
   constructor(x, y, image) {
     this.body = Bodies.circle(x, y, 28, {
      restitution: 0.3,
      label: "pig",
      render: {
           sprite: {
            texture: image,
            xScale: 0.09,
            yScale: 0.09,
        }
      }
     });
     this.alpha = 1
     this.fading = false
     this.removed = false
   }

   addToWorld(world) {
     Composite.add(world, this.body);
   }


   draw(ctx) {
     if(this.removed) return;
      var larguraFrame = 900;
      var alturaFrame = 900;

      var xSprite = 0;
      var ySprite = this.altura * alturaFrame

      ctx.save()

      ctx.globalAlpha = this.alpha
      ctx.translate(this.body,position.x, this.body.position.y)
      ctx.rotate(this.body.angle);

      ctx.drawImage(
        this.image,
        xSprite,
        ySprite,
        larguraFrame,
        alturaFrame,
        -45,
        -45,
        90,
        90
      );
      ctx.restore();  
   }

   
   animate() {
  
   }
}
