
window.onload = function init(){
	var body = document.getElementsByTagName("BODY")[0];
	
	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Start");
	but.setAttribute("is","start");
	but.addEventListener("click",orchestrate,false);
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

	function orchestrate(){
		var i = 1;  
		var num = document.getElementById("num"+i);	
		function conductor( target,cb ){
			console.log(target,cb);
			var triggerNext = 0;
			(function animate(){
				if (target.offsetLeft > document.body.offsetWidth/2){
					return;
				}
				if (target.offsetLeft > document.body.offsetWidth/4 && triggerNext == 0 ){
					triggerNext = 1;
					cb();
				}
				target.style.left = target.offsetLeft + 20 + "px";
				target.timer = setTimeout(animate,100);
			})();	
		}
		conductor(num,function cb(){
			i++;
			num = document.getElementById("num"+i);
			if(num){
				conductor(num,cb);
			}
		});
			
	}


}
