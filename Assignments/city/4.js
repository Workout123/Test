
window.onload = init;
function init()
{
	var  timer;
	var body = document.getElementsByTagName("BODY")[0];
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

	var desc = document.createElement("label");

	for (var city in cities){
		if (cities.hasOwnProperty(city))
		{
			var div = document.createElement("div");
			body.appendChild(div);

			var but = document.createElement("input");
			but.setAttribute("type", "button");
			but.setAttribute("value", city);
			but.addEventListener("click",function(e){
				//delay();
				var array=[];
				var ds = document.getElementById("deathstar");
				if(timer)
				{	
					clearTimeout(timer);
					var tstamp1 = Date.now();
					for(var i = 0; i< 20000000; i++)
					{
						array[array.length] = i;
					}		
					var tstamp2 = Date.now();
					var steps = (tstamp2 -tstamp1)/100;
					ds.style.left = ds.offsetLeft + 20*steps +"px";
					//start();

					var event = new CustomEvent("click");
					document.getElementById("warpbut").dispatchEvent(event);

				}
				
				e = e || event;
				var target = e.target || e.srcElement;				
				desc.innerHTML = cities[target.value];
				target.parentNode.appendChild(desc);
			},false);			
			div.appendChild(but);
		}
	}
	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));
	
	var tstamp;
	tstamp = Date.now();
	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Warp");
	but.setAttribute("id","warpbut");
	//but.addEventListener("click",warp,false); 
	but.addEventListener("click",function(e){
		

		(function start(){
			var ds = document.getElementById("deathstar");
			if(ds.offsetLeft >= document.body.offsetWidth)
			{
				ds.style.left = "-"+ ds.offsetWidth+"px";
				interval = Date.now()  - tstamp;
				tstamp = Date.now() ;
				console.log("Interval"+interval);
			}
			else
			{
				ds.style.left = ds.offsetLeft + 20 +"px";	
			}	
			timer = setTimeout(start,100);
		})();

	},false);			
	body.appendChild(but);

	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Stop");
	but.addEventListener("click",function(){
		clearTimeout(timer);
		timer = 0;	
	},false);
	body.appendChild(but);


	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));

	
	var img = document.createElement("img");
	img.id = "deathstar";
	img.src = "deathstar.png";
	img.style.width = "20%";
	img.style.height = "20%";
	img.style.display = "block";
	img.style.position = "absolute";
	body.appendChild(img);	

}
