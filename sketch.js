var imgFundo,Fundo;
var rato,gato;
var imgRato0,imgRato1,imgGato0,imgGato1;

function preload() {
    //carregue as imagens aqui
    imgFundo = loadImage("images/garden.png");
    imgRato0 = loadImage("images/mouse1.png");
    imgRato1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    imgRato3 = loadImage("images/mouse4.png");
    imgGato0 = loadImage("images/cat1.png");
    imgGato1 = loadAnimation("images/cat2.png","images/cat3.png");
    imgGato3 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    //Fundo.createSprite(100,800);
    //Fundo.adImage("imgFundo",imgFundo);
    
    gato = createSprite(870,600);
    gato.addAnimation("gatoSentado",imgGato0);
    gato.scale = 0.1

    rato = createSprite(470,600);
    rato.addAnimation("ratoSentado",imgRato0)
    rato.scale = 0.1

    Fundo = createSprite(750,400);
    Fundo.addImage("FundoDaTela",imgFundo);
    Fundo.scale = 1;

}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x - rato.x < (gato.width - rato.width) / 2 ){
        gato.velocityX = 0;
        gato.scale = 0.2;
        gato.addAnimation("gato4",imgGato3);
        gato.changeAnimation("gato4");
        rato.addAnimation("rato4",imgRato3);
        rato.changeAnimation("rato4");
        gato.x = 550;
    }

    Fundo.depth = rato.depth;
    Fundo.depth = Fundo.depth - 1;
    Fundo.depth = gato.depth;
    Fundo.depth = Fundo.depth - 1;

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

    if(keyCode === LEFT_ARROW){
        rato.addAnimation("ratoProvocando",imgRato1);
        rato.changeAnimation("ratoProvocando");
        gato.addAnimation("gatoAndando",imgGato1);
        gato.changeAnimation("gatoAndando");
        gato.velocityX = -5;
    }



}
