class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        var randR = Math.round(random(0, 255));
        var randG = Math.round(random(0, 255));
        var randB = Math.round(random(0, 255));

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        fill(color(randR, randG, randB));
        ellipse(0,0,this.r,this.r);
        pop();
    }

};