
(function() {

	var cities = ["Chennai", "Bangalore","Bombay","Delhi","London","Trichy"];
	var desc = [];
	var left = 0;
	var top = 50;
	var id;
	for(var i=0;i<cities.length;i++){
	        desc[i]="This is "+cities[i];
	}

	function disp(i,top){
		return function(){
			document.getElementById("cit").innerHTML = desc[i];
			var ele = document.getElementById("para");
			ele.style.left = left + "px";
			ele.style.top = top + "px";
		};
	}

	function animation(){
		return function(){
			var ele = document.getElementById("ani");
			var step = 0;
			var lefts = 0;
			console.log("in animation" + step + " left -> " + lefts);
			id = setInterval( function(){
				//console.log(id);
				ele.style.left = lefts + "px";
				lefts = lefts+50;
				if(lefts >1000){
				//	alert (lefts);
					lefts = 0;
				}	
			}, 1000);
		}
	}

	function aniStop(){
		return function(){
		//alert("stop->" + id);
		clearInterval(id);
	}
	}

	myFunction();
	function myFunction() {
		for(var i=0;i<cities.length;i++){
			var br = document.createElement("br");
			var x = document.createElement("BUTTON");
			var t = document.createTextNode(cities[i]);
			x.appendChild(t);
			x.setAttribute("id","bu"+i.toString());
			x.setAttribute("class","buttonS");
			var wrap=document.getElementById("leftside");
			wrap.appendChild(x);
			wrap.appendChild(br);
			//left = left + (i*50);
			top = top + (i*10);
			document.getElementById("bu"+i.toString()).addEventListener("click",disp(i,top));

		}
		var wrap=document.getElementById("leftside");
		var x = document.createElement("BUTTON");
		var x1 = document.createElement("BUTTON");
		var t = document.createTextNode("start");
		var t1 = document.createTextNode("stop");
		x.appendChild(t);
		x1.appendChild(t1);
		x.setAttribute("id","start");
		x1.setAttribute("id","stop");
		wrap.appendChild(x);
		wrap.appendChild(x1);
		document.getElementById("start").addEventListener("click",animation());
		document.getElementById("stop").addEventListener("click",aniStop());
	}
}) ();

