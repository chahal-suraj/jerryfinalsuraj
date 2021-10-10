var tom,tomImg,tomImg2,tomImg3;
var jerry,jerryImg,jerryImg2;
var ground,groundImg;

function preload() {
    tomImg=loadImage("images/cat1.png");
    tomImg2=loadImage("images/cat2.png","images/cat3.png");
    tomImg3=loadImage("images/cat4.png");
    jerryImg=loadImage("images/mouse1.png");
    jerryImg2=loadImage("images/mouse2.png","images/mouse3.png");
    backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    ground=createSprite(500,400,1000,800);
    ground.addImage(backgroundImg);
    tom=createSprite(700,600,50,50);
    tom.addImage(tomImg);
    tom.scale=0.09;
    jerry=createSprite(200,600,50,50);
    jerry.addImage(jerryImg);
    jerry.scale=0.09;
}

function draw() {

    background(255);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addImage("cat4.png",tomImg3);
        tom.changeImage(tomImg3);
        tom.x=300
        tom.scale=0.2;
    }
    keyPressed()
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.addImage(tomImg2);;
    tom.changeImage(tomImg2);
    jerry.frameDelay=25;
    tom.velocityX=-5
}

}
