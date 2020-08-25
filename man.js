class Man extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.Visiblity = 255;
    this.image = loadImage("pics/man1.png");
    this.screamSound = loadSound("pics/scream.mp3")
    var engine = {
      friction:50,
      restitution:2
    }
  }

  display(){
  /*  console.log(this.body.speed); */
    if(this.body.speed < 4){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     } 
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
      this.screamSound.play();
    }
   }

  
};