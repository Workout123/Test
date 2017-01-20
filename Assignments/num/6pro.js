
window.onload = function init(){
	var body = document.getElementsByTagName("BODY")[0];

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

	var app = angular.module("app",[]);
	app.factory("animFact",function(){
		return {
			conductor: function(target){
				(function animate(){
					if (target.offsetLeft > document.body.offsetWidth/4){
						return ; 
					}
					target.style.left = target.offsetLeft + 20 + "px";
					target.timer = setTimeout(animate,100);
				})();	
			}
		}
	});
	app.controller("simpleCtrl",function($scope,animFact){
		$scope.orchestrate= function(){
			var i = 1;  
			var num = document.getElementById("num"+i);	
			console.log("yes");
			(function loop(){
				animFact.conductor(num)
					.then(function(){
					cur = num;
					i++;
					num = document.getElementById("num"+i);
					loop();
				});
			})();
		}	
	});
	


}
