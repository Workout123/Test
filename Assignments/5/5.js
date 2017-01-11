
window.onload = init;
function init()
{
	var  timer;
	var body = document.getElementsByTagName("BODY")[0];

	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Start");
	but.addEventListener("click",function(e){
		e = e || event;
		var target = e.target || e.srcElement;
		target = target.nextSibling.nextSibling; //I think this is BAD, rather assign unique Id's
		(function animate(){
			if (target.offsetLeft > document.body.offsetWidth/2){
				target = target.nextSibling;
				//console.log(target.innerHTML);
			}
			if(target){
				//console.log(target.offsetLeft);
				target.style.left = target.offsetLeft + 20 + "px";
				timer = setTimeout(animate,100);	
			}
			else{
				//console.log("ret");
				return;
			}
			

		})();

	},false);
	body.appendChild(but);
	
	var but1 = document.createElement("input");
	but1.setAttribute("type", "button");
	but1.setAttribute("value","Reset");
	but1.addEventListener("click",function(e){
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
		num.style.top = num.offsetTop + i*25 +"px"; 
		body.appendChild(num);
	}


}
