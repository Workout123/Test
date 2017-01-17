
window.onload = (function(){
	
	var cities = {
		"Bangalore" : "Was the garden City",
		"Delhi" : "Don't expect Breakfast Food",
		"Mangalore" : "The Greatest City",
		"Gotham" : "Haunted by bat person",
		"New York" : "Hotspot for alien atacks and what not",
		"Miami" : "The city inspired by Vice city",
		"Mordor": "one city to rule them all",
		"chennai" :"Filler",
		"Dubai"   :"Filler City"
	};
	var body = document.getElementsByTagName("body")[0];
	var desc = document.createElement("label");
	for (var city in cities){
		if (cities.hasOwnProperty(city))
		{
			var div = document.createElement("div");
			body.appendChild(div);
			var lab = document.createElement("label");
			lab.innerHTML = city;
			div.appendChild(lab);

			var but = document.createElement("input");
			but.setAttribute("type", "button");
			but.setAttribute("value", "CLICK");
			//but.setAttribute("city",city);
			but.addEventListener("click",function(e){
				var target = this;
				//console.log(cities[city]);
				desc.innerHTML = cities[target.previousSibling.innerHTML];
				target.parentNode.appendChild(desc);
			},false);			
			//but.setAttribute("onclick",func);	
			//but["onclick"] = func;
			div.appendChild(but);
		}
	}
})();
