class Monster{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':-2.0,
            'density':1.0,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        this.image = loadImage("Images/Monster-01.png");
        this.deadImage = loadImage("Images/Monster-02.png")
        World.add(world, this.body);
    }
    change(){
   
    }
      display(){
        if(this.body.speed > 2){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.deadImage, 0, 0, 400,250);
            pop();
        }
        else{
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 400,250);
            pop();
      }
    }
}