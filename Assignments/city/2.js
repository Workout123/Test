	
window.onload = init;
var timer;

function init()
{

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
			//div.innerHTML=city+

			var but = document.createElement("input");
			but.setAttribute("type", "button");
			but.setAttribute("value", city);
			but.addEventListener("click",function(e){	

				var array=[];
				for(var i = 0; i< 20000000; i++)
				{
					array[array.length] = i;
				}		
				e = e || event;
				//console.log(array[7800]);
				var target = e.target || e.srcElement;
				//console.log(cities[target.value]);
				
				desc.innerHTML = cities[target.value];
				target.parentNode.appendChild(desc);
			},false);			
			//but.setAttribute("onclick",func);	
			//but["onclick"] = func;
			div.appendChild(but);
		}
	}
	//body.innerHTML +=  "<br><br>";
	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));
	
	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Warp");
	but.addEventListener("click",warp,false);			
	body.appendChild(but);

	var but = document.createElement("input");
	but.setAttribute("type", "button");
	but.setAttribute("value","Stop");
	but.addEventListener("click",stop,false);			
	body.appendChild(but);


	//body.innerHTML +=  "<br><br>";
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
function warp(e)
{	
		
	var ds = document.getElementById("deathstar");
	var tstamp = Math.floor(Date.now());
	function start()
	{
		//console.log(ds.offsetLeft + 100 +"px");
		if(ds.offsetLeft >= document.body.offsetWidth)
		{
			ds.style.left = "-"+ ds.offsetWidth+"px";
			interval = Math.floor(Date.now() ) - tstamp;
			tstamp = Math.floor(Date.now() );
			console.log("Interval"+interval);
		}
		else
		{
			ds.style.left = ds.offsetLeft + 20 +"px";	
		}	
		
		timer = setTimeout(start,100);
	}
	timer = setTimeout(start,100);
}	
function stop()
{
	clearTimeout(timer);
}