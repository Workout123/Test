
window.onload = function init(){
	var body = document.getElementsByTagName("BODY")[0];
	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Start");
	console.log(typeof init);
	//but.setAttribute("is","start");
	but.addEventListener("click",function(e){
		for (var i = 1; i < 13; i++)
		{		
			(function (){
				var prev = i - 1;
				var target = document.getElementById("num"+i);
				var prevTarget = document.getElementById("num"+prev);	
				console.log(prevTarget);
				(function animate(){
					var width = document.body.offsetWidth;
					var offset = target.offsetLeft;	
					if (offset > width/2){
						return;
					}
					if (prevTarget) 
					{
						if(prevTarget.offsetLeft > width/8)
							target.style.left = offset + 20 + "px";
						target.timer = setTimeout(animate,100);						
					}	
					else if(target){
						target.style.left = offset + 20 + "px";
						target.timer = setTimeout(animate,100);
					}
				})();
			})();	

		}	
	},false);
	body.appendChild(but);
	
	var but1 = document.createElement("input");
	but1.setAttribute("type", "button");
	but1.setAttribute("value", "Reset");
	but1.addEventListener("click", function(e){
		for (var i = 1; i < 13; i++)
		{
			var num = document.getElementById("num"+i);
			clearTimeout(num.timer);
			num.style.left = "1em";
		}

	},false);
	body.appendChild(but1)
	for (var i = 1; i < 13; i++)
	{
		var num = document.createElement("h4");
		num.innerHTML = i;
		num.style.left = "1em";
		num.style.position = "absolute";
		num.id = "num"+i;
		num.style.top = num.offsetTop + i*25 +"px"; 
		num.timer = 0; 
		body.appendChild(num);
	}
}
