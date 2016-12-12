
(function() {

	var cities = ["Chennai", "Bangalore","Bombay","Delhi","London","Trichy"];
	var desc = [];
	for(var i=0;i<cities.length;i++){
	        desc[i]="This is "+cities[i];
	}

	function disp(i){
		return function(){
		document.getElementById("cit").innerHTML = desc[i];
		};
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
			document.getElementById("bu"+i.toString()).addEventListener("click",disp(i));
		}

	}
}) ();

