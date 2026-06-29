
// Pegando as ferramentas principais do Matter.js
var Engine = Matter.Engine;
var Render = Matter.Render;
var Runner = Matter.Runner;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
var Constraint = Matter.Constraint 
var Body = Matter.Body;
var Events = Matter.Events;

var pigAtingido = false
var jogoFinalizado = false
var tempoLancamento = 0

// Criando o cérebro da física
var engine = Engine.create();

// Pegando o mundo da física
var world = engine.world;

// Criando a tela do jogo
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 2000,
    height: 1000,
    wireframes: false,
    background: "assets/fundo.png.png"
  }
});

// Criando o chão fixo
var ground = Bodies.rectangle(500,850,3000,300,{
  isStatic: true,
  render: {
     sprite:{
           texture: "assets/chao.png.png",
            xScale: 1.7,
            yScale: 3,
        }
  }
});

var slingY = 540;
var birdBack = 25;
var slingX = 150 - birdBack;

var bird = new Bird(slingX,slingY)

var slingPoint = { x:slingX,y:slingY }


var bird = new Bird(200,600,"assets/redbird.png")
var pig1 = new Pig(1500,600,"assets/porco.png")
var pig2 = new Pig(900,400,"assets/porco.png")
var pig3 = new Pig(1400,400,"assets/porco.png")
var pig4 = new Pig(1200,400,"assets/porco.png")
var pig5 = new Pig(1100,400,"assets/porco.png")
var pig6 = new Pig(1000,400,"assets/porco.png")
var pig7 = new Pig(1900,400,"assets/porco.png")
var slingshot = new SlingShot(
  bird.body,
  { x: slingX, y: slingY },
  {
    x: 150,
y:540,
  forkLeftOffsetX: 20, forkLeftOffsetY: 30, 
  forkRightOffsetX: 60, forkRightOffsetY: 30 } 
)
var box1 = new Box(680,600,50,100,"assets/caixa.png.png");
var box2 = new Box(650,600,50,50,"assets/caixalonga.png.png");
var box3 = new Box(850,600,50,100,"assets/caixa.png.png");
var box4 = new Box(650,550,50,50,"assets/caixalonga.png.png");
var box5 = new Box(650,500,50,50,"assets/caixalonga.png.png");
var box6 = new Box(650,450,50,50,"assets/caixalonga.png.png");
var box7 = new Box(650,400,50,50,"assets/caixalonga.png.png");
var box8 = new Box(1550,600,50,100,"assets/caixa.png.png");
var box9 = new Box(1550,500,50,100,"assets/caixa.png.png");
var box10 = new Box(1000,600,50,100,"assets/caixa.png.png");
var box11 = new Box(1100,600,50,100,"assets/caixa.png.png");
var box12 = new Box(500,600,50,100,"assets/caixa.png.png");
var box13 = new Box(500,500,50,100,"assets/caixa.png.png");
var box14 = new Box(500,400,50,100,"assets/caixa.png.png");
var box15 = new Box(1000,600,50,100,"assets/caixa.png.png");
var box16 = new Box(700,600,50,100,"assets/caixa.png.png");
var box17 = new Box(1000,500,50,100,"assets/caixa.png.png");
var box18 = new Box(1000,400,50,100,"assets/caixa.png.png");
var box19 = new Box(1000,300,50,100,"assets/caixa.png.png");
var box20 = new Box(800,500,50,100,"assets/caixa.png.png");
var box21 = new Box(800,400,50,100,"assets/caixa.png.png");
var box22 = new Box(750,600,50,100,"assets/caixalonga.png.png");
var box23 = new Box(400,600,50,100,"assets/caixalonga.png.png");
var box24 = new Box(650,600,50,100,"assets/caixalonga.png.png");
var box25 = new Box(850,600,50,100,"assets/caixalonga.png.png");
var box26 = new Box(900,600,50,100,"assets/caixalonga.png.png");
var box27 = new Box(1200,600,50,100,"assets/caixalonga.png.png");
var box28 = new Box(1300,600,50,100,"assets/caixalonga.png.png");
var box29 = new Box(1350,600,50,100,"assets/caixalonga.png.png");
var box30 = new Box(1400,600,50,100,"assets/caixalonga.png.png");
var box31 = new Box(1400,500,50,100,"assets/caixalonga.png.png");
var box32 = new Box(500,600,50,100,"assets/caixalonga.png.png");
var box33 = new Box(900,500,50,100,"assets/caixalonga.png.png");
var box34 = new Box(600,600,50,100,"assets/caixalonga.png.png");
var trajectory = [];



// Colocando o chão no mundo
Composite.add(world, ground);



// Colocando os objetos no mundo
bird.addToWorld(world);
pig1.addToWorld(world);
pig2.addToWorld(world);
pig3.addToWorld(world);
pig4.addToWorld(world);
pig5.addToWorld(world);
pig6.addToWorld(world);
pig7.addToWorld(world);
slingshot.addToWorld(world)
box1.addToWorld(world);
box2.addToWorld(world);
box3.addToWorld(world);
box4.addToWorld(world);
box5.addToWorld(world);
box6.addToWorld(world);
box7.addToWorld(world);
box8.addToWorld(world);
box9.addToWorld(world);
box10.addToWorld(world);
box11.addToWorld(world);
box12.addToWorld(world);
box13.addToWorld(world);
box14.addToWorld(world);
box15.addToWorld(world);
box16.addToWorld(world);
box17.addToWorld(world);
box18.addToWorld(world);
box19.addToWorld(world);
box20.addToWorld(world);
box21.addToWorld(world);
box22.addToWorld(world);
box23.addToWorld(world);
box24.addToWorld(world);
box25.addToWorld(world);
box26.addToWorld(world);
box27.addToWorld(world);
box28.addToWorld(world);
box29.addToWorld(world);
box30.addToWorld(world);
box31.addToWorld(world);
box32.addToWorld(world);
box33.addToWorld(world);
box34.addToWorld(world);

var painelFinal = document.createElement("div");
painelFinal.style.position = "absolute"
painelFinal.style.top = "50%"
painelFinal.style.left = "50%"
painelFinal.style.transform = "translate(-50% , -50%)"
painelFinal.style.backgroundColor = "rgba(0,0,0,0.85)"
painelFinal.style.color = "white"
painelFinal.style.padding = "25px"
painelFinal.style.borderRadius = "15px"
painelFinal.style.textAlign = "center"
painelFinal.style.fontFamily = "Arial"
painelFinal.style.display = "none"
painelFinal.style.zIndex = "10"

document.body.appendChild(painelFinal);

function mostrarTelaFinal(){

  jogoFinalizado = true

  painelFinal.innerHTML = `
  <h1 style = "margin-top:0;">Você Venceu!<h1/>
   

  <img = 
  src ="assets/Continuar.png"
  onClick="proximaFase()"
  style="width:120px; cursor:pointer; margin:10px
  >

  <img = 
  src ="assets/Voltar.png"
  onClick="reiniciarJogo()"
  style="width:120px; cursor:pointer; margin:10px
  >

  `;
  painelFinal.style.display = "block";


}

function proximaFase () {
  alert("Erro: Eu tive preguiça de faser outra fase!")
}

function reiniciarJogo (){
  location.reload();
}

function resetarPassaro (){
  if (pigAtingido || jogoFinalizado){
    return;
  }
  Composite.remove(world,bird.body);

  bird = new Bird(200,600,"assets/redbird.png")
  bird.addToWorld(world);

  slingshot.attach(bird.body,world)
  
  trajectory = [];
  tempoLancamento = 0;
}

function verificarResetDoPassaro(){

  if(slingshot.isAttached()){
    return;
  }
  if(pigAtingido || jogoFinalizado){
    return;
  }

  var agora = Date.now();
  var tempoPassado = agora - tempoLancamento;

  var saiuDaTela = 
  bird.body.position.x > 2000 ||
  bird.body.position.y > 1000 ||
  bird.body.position.x < - 100;

  var parou = 
  bird.body.speed < 1 &&
  tempoPassado > 2500;

  if(saiuDaTela || parou){
    resetarPassaro();
  }
}

function atingiuPorco() {
  if(pigAtingido || jogoFinalizado || pig1.removed){
    return;
  }

  pigAtingido = true
  pig1.startFade();


}

startFade();{
  this.fading = false;
  Body.setStatic(this.body , true);
}

updateFade(world, callbackFinal);{
  if(!this.fading || this.removed){
    return;
  }
  this.alpha -= 0.03
  if(this.alpha <= 0 ){
    this.alpha = 0
    this.removed = true
    Composite.remove(world, this.body)

    if(callbackFinal){
      callbackFinal();
    }
  }
}


Events.on(engine, "collisionStart", function(event)){
  if (slingshot.isAttached()){
    return;
  }
  var pairs = event.pairs;
  for (var i = 0; i < pairs.length; i++){
    var bodyA = pairs[i].bodyA;
    var bodyB = pairs[i].bodyB;
    var bateuNoPorco = 
    (bodyA.label === "bird" && bodyB.label === "pig") ||
    (bodyB.label === "bird" && bodyA.label === "pig")
    if(bateuNoPorco){
      atingirPorco();
      break;
    }

  }
}
function verificarColisaoComPorco(){

  if(slingshot.isAttached() || pigAtingido || jogoFinalizado || pig1.removed){
    return;
  }

  var dx = bird.body.position.x - pig1.body.position.x;
  var dy = bird.body.position.y - pig1.body.position.y;
  var raioColisao = 25 + 28

  if(dx*dx + dy * dy <- raioColisao * raioColisao){
    atingirPorco();
  }
}

Events.on(render, "afterRender" , function() { 

  var ctx = render.context

  slingshot.drawBack(ctx);
  if(slingshot.isAttached()){
    slingshot.drawBands(ctx);
  }
 
  

  bird.draw(ctx);
  if(slingshot.isAttached()){
    slingshot.drawPouch(ctx);
  }

  if(!slingshot.isAttached){

    trajectory.push({
      x: bird.body.position.x,
      y: bird.body.position.y,
      life:60
    })
  }

if (!slingshot.isAttached()) {
  trajectory.push({
    x: bird.body.position.x,
    y: bird.body.position.y,
    life: 60
  });
}


for (var i = trajectory.length - 1; i >= 0; i--) {
  var p = trajectory[i];

  ctx.beginPath();
  ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255," + (p.life / 60) + ")";
  ctx.fill();

  p.life--;

  if (p.life <= 0) {
    trajectory.splice(i, 1);
  }
}
  slingshot.drawFront(ctx)

  pig1.draw(ctx);
  pig2.draw(ctx);
  pig3.draw(ctx);
  pig4.draw(ctx);
  pig5.draw(ctx);
  pig6.draw(ctx);
  pig7.draw(ctx);
})

setInterval(function(){

  bird.animate();
  pig1.animate();
  pig2.animate();
  pig3.animate();
  pig4.animate();
  pig5.animate();
  pig6.animate();
  pig7.animate();
} )

var canvas = render.canvas;

function getMousePos(event){
  var rect = canvas.getBoundingClientRect();
  var scaleX = canvas.width / rect.width;
  var scaleY = canvas.height / rect.height;
  return{
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - 
rect.top
) * scaleY
  };
} 

canvas.addEventListener("mousedown",function(event) {
  var pos = getMousePos(event);
  slingshot.tryStartDrag(pos.x , pos.y)
})

canvas.addEventListener("mousemove",function(event) {
  if(!slingshot.dragging){
    return

  }
  var pos = getMousePos(event);
  slingshot.dragTo(pos.x , pos.y)
})

function onMouseRelease(){
  slingshot.release(world)
}

canvas.addEventListener("mouseup",onMouseRelease)
canvas.addEventListener("mouseleave",onMouseRelease)
window.addEventListener("mouseup",onMouseRelease)



// Rodando a tela
Render.run(render);

// Rodando o motor da física
var runner = Runner.create();
Runner.run(runner, engine);
