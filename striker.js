class Striker extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("pics/egg1.png");
  }
   
  display() {
   super.display();
  // console.log(this.body);
  }
}
