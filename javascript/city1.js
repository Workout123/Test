
 (function() {
 
 	var cities = ["Bangalore", "Chennai","Kochi","NewYork","London"];
 var descri = ["garden city of india","capital of tamil nadu","queen of the arabian sea","one of the biggest city of US","capital of UK"];
 
var desc=[];
/*
desc[0]="garden city of india";
desc[1]="capital of tamil nadu";
desc[2]="queen of the arabian sea";
desc[3]="one of the biggest city of US";
desc[4]="capital of UK";*/
 	for(var i=0;i<cities.length;i++){
        desc[i]="This is "+cities[i] + ". " + "It is the " + descri[i];

 }
 
 	function disp(i){
 		return function(){
 		//	var t = document.createTextNode(desc[i]);
 		document.getElementById("demo2").innerHTML=desc[i];
 		};
 	}
 
 	myFunction();
 	function myFunction() {
 		for(var i=0;i<cities.length;i++){
 			var br = document.createElement("br");
 			var b=document.createElement("br");
 			var x = document.createElement("BUTTON");
 			var t = document.createTextNode(cities[i]);
 			x.appendChild(t);
 			x.setAttribute("id","bu"+i.toString());
 			x.setAttribute("class","btn");
 			var wrap=document.getElementById("demo");
 			wrap.appendChild(x);
 			wrap.appendChild(br);
 			wrap.appendChild(b);
 			document.getElementById("bu"+i.toString()).addEventListener("click",disp(i));
 		}
 
 	}
 }) ();