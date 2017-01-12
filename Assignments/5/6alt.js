
window.onload = function init(){
	var body = document.getElementsByTagName("BODY")[0];
	
	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Start");
	but.setAttribute("is","start");
	but.addEventListener("click",function(e){
		var event = new CustomEvent("anim");
		num1.dispatchEvent(event);				
	},false);
	body.appendChild(but);
	
	var but1 = document.createElement("input");
	but1.setAttribute("type", "button");
	but1.setAttribute("value", "Reset");
	but1.addEventListener("click", function(e){
		e = e || event;
		var target = e.target || e.srcElement;
		num = target.nextSibling;
		for (var i = 1; i < 13; i++)
		{
			clearTimeout(num.timer);
			num.style.left = "-1em"; 
			num = num.nextSibling;

		}

	},false);
	body.appendChild(but1)
	for (var i = 1; i < 13; i++)
	{
		var num = document.createElement("h4");
		num.innerHTML = i;
		num.style.left = "-1em";
		num.style.position = "absolute";
		num.id = "num"+i;
		num.style.top = num.offsetTop + i*25 +"px"; 
		num.timer = 0; 
		num.addEventListener("anim",function(e){
			e = e || event;
			var target = e.target || e.srcElement;  ///i dint declare with a var here, which wasted half my day.
			var target = this;
			var triggerNext = 0;
			
			(function animate(){	
				if (target.offsetLeft > document.body.offsetWidth/2){
					return;
				}
				if (target.offsetLeft > document.body.offsetWidth/4 && triggerNext == 0 && target.nextSibling){
					triggerNext = 1;
					
					var event = new CustomEvent("anim");
					target.nextSibling.dispatchEvent(event);
				}
				if(target){
					target.style.left = target.offsetLeft + 20 + "px";
					target.timer = setTimeout(animate,100);
				}
			})();

		},false);
		body.appendChild(num);
	}


}
