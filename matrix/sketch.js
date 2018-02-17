


var symbolSize=26;
var streams=[];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  var x=0;
  for(var i=0;i<=width/symbolSize;i++){
    stream=new Stream();

    stream.generateSymbols(x,random(-1000,0));
    streams.push(stream);
    x+=symbolSize+15;

  }


  textSize(symbolSize);
}

function draw() {
  background(0,150);
  streams.forEach(function(stream){
      stream.rander();
  })


}

function Symbol(x,y,speed,first){
this.x=x;
this.y=y;
this.speed=speed;
this.value;
this.first=first;
this.switchInterval=round(random(1,100));
this.setToRandomSymbol=function(){
  if(frameCount % this.switchInterval==0){
    this.value=String.fromCharCode(
      2309 + round(random(0,100))
    );
  }


}
this.rander=function(){
  fill(0,255,70);
  text(this.value,this.x,this.y);
  this.rain();
  this.setToRandomSymbol();
}

this.rain=function(){
if(this.y>=height){
  this.y=0;
}else{
  this.y+=this.speed;
}



}


}


function Stream (){
  this.symbols=[];
  this.totalSymbols=round(random(5,50));
  this.speed=random(1,8);
  this.generateSymbols=function(x,y){
    var first=round(random(0,4))==1;
    for(var i=0;i<=this.totalSymbols;i++){
      var symbol=new Symbol(x,y,this.speed,first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y-=symbolSize;
      first=false;
    }
  }
  this.rander=function(){

    this.symbols.forEach(function(symbol){
      if(symbol.first){
        fill(180,255,180);
      }else{
          fill(0,255,70);
      }

      text(symbol.value,symbol.x,symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
