var movYp1;
var movYp2;
var movSpeed;
var speedX;
var speedY;
let score1 = -1;
let score2 = 0;
var min1;
var min2;

alert("Da click en aceptar para comenzar el juego, tiene algunos errores en las colisiones de las paletas :(");
function setup(){
	createCanvas(windowWidth,windowHeight);
	movYp1=height/2;
	movYp2=height/2;
	movSpeed=10;
	speedX=10;
    speedY=10;
    b=new Ball(width,height,20,8,8);
    p1=new Paleta(15,movYp1,20,100);
    p2=new Paleta(width-25,movYp2,20,100);
  	
}

function draw(){
	

	background("#D9D3F1");
	strokeWeight(3);
	line(width/2,0,width/2,height);
	textSize(20);
  	text("Player 1",windowWidth/4,50)
  	text(score1,(windowWidth/4)+25,25);
   	text("Player 2",width-(width/4),50)
  	text(score2,width-(width/4)+25,25);
	p1.display();
	p2.display();
	moveP1();
	moveP2();
	b.display();
  	b.move();
  	b.update();
  	
  	
  	//puntos
	if (b.x>=width){
	    score1++
	    b.reset();   
	    
	}
	  
	if (b.x<=0){
	    score2++;
	    b.reset();
	        
	}
		//colision con errores

	if(b.x>=(p2.x-p2.w) && b.y<=(p2.y+50) && b.y>=(p2.y-50)){
	    b.sx *=-1;
	    
	}
	  
	if(b.x<=(p1.x+p1.w) && b.y<=(p1.y+50) && b.y>=(p1.y-50)){
	    b.sx *=-1;
	   
	}
//ganador
	if(score1==5 ){

		alert("El ganador es Player 1")
		reset();
		redraw();
	}
	if(score2==5){
		alert("El ganador es Player 2")
		reset();
		redraw();
	}
	

}
//reinicia juego
function reset(){
	score1=0;
	score2=0;
	b.reset();
	b.display();
}


//mover paletas
function moveP1() {
	if ((keyIsDown('83')) && (movYp1<=windowHeight-p1.h)) {
	     p1.y=movYp1 +=movSpeed;
	}
	if ((keyIsDown('87'))  && (movYp1>=0)){
		p1.y=movYp1 -= movSpeed;
	}
	  
}

function moveP2() {
	if ((keyIsDown(DOWN_ARROW)) && (movYp2<=windowHeight-p2.h)){
	     p2.y=movYp2 +=movSpeed;
	}
	if ((keyIsDown(UP_ARROW)) && (movYp2>=0)) {
	    p2.y=movYp2 -= movSpeed;
	}
	  
		
}









