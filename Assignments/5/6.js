
window.onload = init;
function init()
{
	var  timerarray = [timer1,timer2,timer3,timer4,timer5,timer6,timer7,timer8,timer9,timer10,timer11,timer12];
	var body = document.getElementsByTagName("BODY")[0];

	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Start");
	but.setAttribute("is","start");
		 
	but.addEventListener("click",function(e){
		e = e || event;
		var target = e.target || e.srcElement;
		target = target.nextSibling.nextSibling;
		//console.log("");
	//	var target = document.getElementById("num1");	
		var count = 1;
		var timercount = 1; 
		(function animate(){
			
			target = document.getElementById("num"+count);
			console.log("here",target.offsetLeft);
			if(target.offsetLeft < 0)
			{
				console.log("init");		
			}	
			if (target.offsetLeft > document.body.offsetWidth/2){
				return;
				//console.log(target.innerHTML);
			}
			if (target.offsetLeft > document.body.offsetWidth/4){
				count++;
				animate();///////////////////////////////////////////////////fix the timer
			}
			if(target){
				//console.log(target.offsetLeft);
				target.style.left = target.offsetLeft + 20 + "px";
				timerarray[timercount] = setTimeout(animate,100);	
			}	

		})();

	},false);
	body.appendChild(but);
	
	var but1 = document.createElement("input");
	but1.setAttribute("type", "button");
	but1.setAttribute("value", "Reset");
	but1.addEventListener("click", function(e){
		clearTimeout(timer);
		e = e || event;
		var target = e.target || e.srcElement;
		num = target.nextSibling;
		for (var i = 1; i < 13; i++)
		{
			num.style.left = "-1em"; 
			num = num.nextSibling;
		}

	},false);
	body.appendChild(but1)
	for (var i = 1; i < 13; i++)
	{
		var num = document.createElement("h4");
		num.innerHTML = i;
		//num.style.display = "none";
		num.style.left = "-1em";
		num.style.position = "absolute";
		num.id = "num"+i;
		num.style.top = num.offsetTop + i*25 +"px"; 
		body.appendChild(num);
	}


}
