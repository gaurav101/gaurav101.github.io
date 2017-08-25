var stars=[];
var speed;

function setup() {
createCanvas(window.innerWidth,window.innerHeight);
for(var i=0;i<2000;i++){
	stars[i]=new Star();
}
}

function draw() {
  background(0);
  translate(width/2,height/2);
  for(var i=0;i<stars.length;i++){
  stars[i].update();
  stars[i].show();
  }
}
