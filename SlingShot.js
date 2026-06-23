class SlingShot {

  constructor(body,pointB, options) {

    options = options || {};

    // Corpo do pássaro
    this.body = body;
    this.pointB = pointB;

    this.constraint = Constraint.create({
     bodyA:body,
     pointB:pointB,
     stiffness:options.stifness || 0.04,
     length:options.length || 1,
     render:{
        visible:false
     }
    
    });
    
    // Escala do estilingue
    this.scale = options.scale !== undefined ? options.scale : 1;

    // Posição da madeira
    this.x = options.x !== undefined ? options.x : 150;
    this.y = options.y !== undefined ? options.y : 255;

    // Tamanho das madeiras
    this.forkWidth = 79 * this.scale;
    this.forkHeight = 158 * this.scale;

    // Tamanho do couro
    this.pouchWidth = 75 * this.scale;
    this.pouchHeight = 41 * this.scale;

    // Distância da ponta esquerda do elástico
    var forkLeftOffsetX = 
      options.forkLeftOffsetX !== undefined
      ? options.forkLeftOffsetX
      : 20;

    var forkLeftOffsetY =
      options.forkLeftOffsetY !== undefined
      ? options.forkLeftOffsetY
      : 30;

    // Distância da ponta direita do elástico
    var forkRightOffsetX =
      options.forkRightOffsetX !== undefined
      ? options.forkRightOffsetX
      : 60;

    var forkRightOffsetY =
      options.forkRightOffsetY !== undefined
      ? options.forkRightOffsetY
      : 30;

    // Ponta esquerda do elástico
    this.forkLeft = {
      x: this.x + forkLeftOffsetX * this.scale,
      y: this.y + forkLeftOffsetY * this.scale
    };

    // Ponta direita do elástico
    this.forkRight = {
      x: this.x + forkRightOffsetX * this.scale,
      y: this.y + forkRightOffsetY * this.scale
    };

    // Ajuste do couro em relação ao pássaro
    this.pouchOffsetX = -37 * this.scale;
    this.pouchOffsetY = 18 * this.scale;

    // Imagem da madeira de trás
    this.imageBack = new Image();
    this.imageBack.src = "assets/estilingue_p.png.png";

    // Imagem da madeira da frente
    this.imageFront = new Image();
    this.imageFront.src = "assets/estilingue_g.png.png";

    // Imagem do couro
    this.imageBase = new Image();
    this.imageBase.src = "assets/estilinguefrente.png.png";

    this.attached = true;
    this.dragging = false;
    this.maxStretch =  options.maxStretch || 180;
    this.launchPower =  options.launchPower || 0.17;
    this.grabRadius =  options.grabRadius || 55;
}

  addToWorld(world) {
    Composite.add(world,this.constraint)
  }
    attach(newBody,world){


   this.body = newBody
   this.attached = true
   this.dragging = false

   this.constraint = Constraint.create({
    bodyA: this.body,
    pointB: this.pointB,
    stiffness: 0.04,
    lenght:1,
    render:{
      visible: false
    }
   })
    }
  isAttached(){
    return this.attached
  }

  isOnBird(mouseX,mouseY){
    var dx = mouseX - this.body.position.x;
    var dy = mouseY - this.body.position.y;
    return dx * dx + dy * dy <= this.grabRadius * this.grabRadius;
  }

  tryStartDrag(mouseX,mouseY){
    if(!this.attached || !this.isOnBird(mouseX,mouseY)){
        return false;
    }
    this.dragging = true 
    Body.setVelocity(this.body, {x:0, y:0})
    Body.setAngularVelocity(this.body, 0);
    this.dragTo(mouseX,mouseY);
    return true;
  }

  dragTo(mouseX,mouseY){
    if(!this.dragging || !this.attached){
        return false
    }
    var dx = mouseX - this.pointB.x;
    var dy = mouseY - this.pointB.y;
    var dist = Math.sqrt(dx*dx + dy*dy)

    if(dist > this.maxStretch && dist > 0){
        var scale = this.maxStretch / dist;
        dx *= scale;
        dy *= scale;
    }
    Body.setPosition(this.body,{
        x: this.pointB.x + dx,
        y: this.pointB.y + dy
    });
    Body.setVelocity(this.body, { x: 0,y: 0 })
    Body.setAngularVelocity(this.body,0);

 }

   release(world) {
  if (!this.attached) {
    this.dragging = false;
    return false;
  }
  var estavaArrastando = this.dragging
  this.dragging = false;

  if(!estavaArrastando){
    return false;
  }

  var dX = this.pointB.x - this.body.position.x;
  var dY = this.pointB.y - this.body.position.y;
  var dist = Math.sqrt(dx*dx + dy*dy)
  var minimoArrasto = 15

  if(dist < minimoArrasto){
    Body.setPosition(this.body,{
      x: this.pointB.x,
      y: this.pointB.y
    });
    Body.setVelocity(this.body,{x:0, y:0})
    Body.setAngularVelocity(this.body,0);
    return false;
  }
   this.attached = false;

   var forcaX = this.pointB.x - this.body.position.x
   var forcaY = this.pointB.y - this.body.position.y

   Composite.remove(world, this.constraint)
   this.constraint = null;

   Body.setSleeping(this.body , false)

   Body.setVelocity(this.body , {
    x: forcaX * this.launchPower,
    y: forcaY * this.launchPower
   })

   return true;
} 
    
   
   

  // Madeira de trás
  drawBack(ctx) {

    ctx.drawImage(
      this.imageBack,
      this.x,
      this.y,
      this.forkWidth,
      this.forkHeight
    );

  }

  // Madeira da frente
  drawFront(ctx) {

    ctx.drawImage(
      this.imageFront,
      this.x,
      this.y,
      this.forkWidth,
      this.forkHeight
    );

  }

  // Couro do estilingue
  drawPouch(ctx) {

    var bx = this.body.position.x;
    var by = this.body.position.y;

    ctx.drawImage(
      this.imageBase,
      bx + this.pouchOffsetX,
      by + this.pouchOffsetY,
      this.pouchWidth,
      this.pouchHeight
    );

  }

  // Elásticos visuais
  drawBands(ctx) {

    var birdX = this.body.position.x;
    var birdY = this.body.position.y;

    ctx.strokeStyle = "#4B3619";
    ctx.lineWidth = 6 * this.scale;
    ctx.lineCap = "round";

    // Elástico esquerdo
    ctx.beginPath();
    ctx.moveTo(
      this.forkLeft.x,
      this.forkLeft.y
    );
    ctx.lineTo(
      birdX,
      birdY
    );
    ctx.stroke();

    // Elástico direito
    ctx.beginPath();
    ctx.moveTo(
      this.forkRight.x,
      this.forkRight.y
    );
    ctx.lineTo(
      birdX,
      birdY
    );
    ctx.stroke();

  }

}
