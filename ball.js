class Ball{
	constructor(x,y,d,sx,sy){
		this.x=x;
		this.y=y;
		this.d=d;
		this.sx=sx;
		this.sy=sy;
	
	}

	display(){
		circle(this.x,this.y,this.d);
	}

	move(){
	    this.y +=this.sy;
	    this.x +=this.sx;
	} 

	update(){
    	
		if (this.y < this.d/2 || this.y > windowHeight - this.d) {
		  this.sy *= -1;
		}

  	}

  	reset(){
    this.x = 1000;
    this.y = 500;
  	}




}