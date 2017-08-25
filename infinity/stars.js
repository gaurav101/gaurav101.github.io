function Star (){
	//   -
	this.x=random(-width,width);
	this.y=random(-height,height);
	this.z=random(width);
	this.pz=this.z;
	this.update=function(){
		
		this.z=this.z-15;
		if(this.z<1){
			this.z=width;
			this.x=random(-width,width);
			this.y=random(-height,height);
		}
		};
 	this.show=function(){
		fill(255);
		noStroke();
		speed=map(mouseX,0,width,50);
		var sx=map(this.x/this.z,0,1,0,width);
		var sy=map(this.y/this.z,0,1,0,height);
		var r=map(this.z,0,width,16,0);
		var px=map(this.x/this.pz,0,1,0,width);
		var py=map(this.y/this.pz,0,1,0,height);
		ellipse(sx,sy,r,r);
		this.pz=this.z;
		stroke(255);
		line(px,py,sx,sy);
	}
}
