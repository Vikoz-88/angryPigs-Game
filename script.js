var bird1 = document.getElementById("bird1");
var bird2 = document.getElementById("bird2");
var bird3 = document.getElementById("bird3");
var pig = document.getElementById("pig");
var fon = document.getElementById("fon");
var time = document.getElementById("time");
var score = document.getElementById("score");
var play = document.getElementById("start");


var img = document.getElementsByTagName('img'); // клик
original="";
or="";
for (var i=0; i<img.length; i++){
	img[i].onclick = function(){
		original=this.src;
		or=this.parentNode.id;
		this.src = 'images/bang.png';

var sc = parseInt(score.innerHTML);// очки
	if(this==img[0]){
   score.innerHTML = ""+(sc+10)+"";
}
	if(this==img[1]){
   score.innerHTML =  ""+(sc+50)+"";
}
	if(this==img[2]){
   score.innerHTML =  ""+(sc+20)+"";
}
	if(this==img[3]){
   score.innerHTML =  ""+(sc-50)+"";
}

	}

}



//-------Таймер и Движение всех птиц

var points = false; 
var time_p = 31;
var time_m = 1;

start.onclick = function(){
var bar = setInterval(function(){
	if(parseInt(time.innerHTML)==0){
		clearInterval(bar);
		clearInterval(inter);
		points = true;
		start.innerHTML = "LOOSER!!!";
		if(parseInt(score.innerHTML)<100){
			start.innerHTML = "LOOSER!!!";
		}else{
			start.innerHTML = "WINNER!!!";
		}

	}else{
	time_m++;
	time.innerHTML = ""+time_p - time_m+"";
	start.innerHTML = "Времени осталось :"+time.innerHTML+"";
	}
	},1000);

Math.rand = function (a,b){
 	  return  Math.round(Math.random()*(b)+ a);
 }
 
	var inter = setInterval(function(){
	var bird = document.getElementsByClassName('bird');
	for(var i=0; i<bird.length; i++){		
	 
         bird[i].style.left = Math.rand(0 , window.innerWidth-130)+'px';
	     bird[i].style.top = Math.rand(0 , window.innerHeight-130)+'px';
	     if(or!=""){
	     	console.log(document.getElementById(or).getElementsByTagName('img').src)
	     	document.getElementById(or).getElementsByTagName('img')[0].src = original;
	    }
	}}, 1500);

	
	}













//-----------------------------------










/*Math.rand = function (a,b){
 	  return  Math.round(Math.random()*(b)+ a);
 }
 
function moveBirds(interval){
	this.interval = interval || 1200;
	var bird = document.getElementsByClassName('bird');
	for(var i=0; i<bird.length; i++){		
	 
         bird[i].style.left = Math.rand(0 , window.innerWidth-130)+'px';
	     bird[i].style.top = Math.rand(0 , window.innerHeight-130)+'px';

	    
	}}
	setInterval(function(){
		this.moveBirds() 
	}, this.interval);
	
}

var move1 = moveBirds();*/



