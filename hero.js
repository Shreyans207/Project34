class Hero{
    constructor(x, y, r) {
        var options = {
            'restitution':0.0,
            'density':1.0,
            isStatc : true,
        }
        this.body = Bodies.circle(x, y,r/3, options);
        this.r = r;
        this.image = loadImage("Images/Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,400,200);
        pop();
      }
}