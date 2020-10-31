class Polygon {
    constructor(x, y, r){
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':2.1
    }
  
    this.body = Bodies.circle(x,y,r/2, options);
    this.x=x;
    this.y=y;
    this.r=r;
    World.add(world, this.body);
    }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   
    ellipseMode(RADIUS);
    strokeWeight(3);
    
    fill(255,0,255);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
  }