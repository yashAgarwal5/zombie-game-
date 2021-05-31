class zombieRight {
    constructor(x, y) {
      this.zombie=createSprite(x,y,40,50);
      this.width = 40;
      this.height = 50;
      this.x=x;
      this.y=y;
      this.image=loadImage("zombie2.png");
     
    }
    display(){
      zombieR.add(this.zombie);
      this.zombie.scale=0.10;
  this.zombie.velocityX=1.950;
  console.log(this.zombie.width, this.zombie.height)
  this.zombie.debug=false;
  this.zombie.setCollider("rectangle",0,0,400,650)
  this.zombie.addImage(this.image);
  zombieGroup.add(this.zombie);
  
 //this.zombie.velocityY= 2
    }
  };
  