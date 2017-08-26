var s;var scl=20;
var food;
function setup() {
//createCanvas(window.innerWidth-30,window.innerHeight-20);
createCanvas(600,600);
frameRate(20);
pickLocation();

s=new Snake();
food=createVector(random(width),random(height));
}

function draw() {
  background(51);
  s.update();
  s.show();
  if(s.eat(food)){
	  pickLocation();
	  }
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
  
}
function pickLocation(){
	var cols=floor(width/scl);
	var rows=floor(height/scl);
	food= createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}
function keyPressed(){
if(keyCode===UP_ARROW){
s.dir(0,-1);
	
}else if(keyCode===DOWN_ARROW){
	s.dir(0,1);
}else if(keyCode===RIGHT_ARROW){
	s.dir(1,0);
}else if(keyCode===LEFT_ARROW){
	s.dir(-1,0);
}


	
}
function Snake(){
	
	this.x=0;
	this.y=0;
	this.xspeed=1;
	this.yspeed=0;
	this.update=function(){
		this.x=this.x+this.xspeed;
		this.y=this.y+this.yspeed;
		this.x=constrain(this.x,0,width-scl);
		this.y=constrain(this.y,0,height-scl);
		}
	this.show=function(){
		fill(255);
		rect(this.x,this.y,scl,scl);
		
		}
  this.dir=function(x,y){
	  this.xspeed=this.xspeed+x;
	  this.yspeed=this.yspeed+y;
	  }	
	 this.eat=function(pos){
		 var d=dist(this.x,this.y,pos.x,pos.y);
		
		 console.log(d);
		 if(d<1){
			 return true;
			 }else{
			 return false;
			 }
		 } 		
		
	}
