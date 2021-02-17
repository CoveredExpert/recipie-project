class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          density:1
      }
      this.body = Bodies.circle(x,y,r,options)
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };