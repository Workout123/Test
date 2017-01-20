$( document ).ready(function(){
	var  timer;
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
	
	var desc = $("<label></label>");
	for (var city in cities){
		if (cities.hasOwnProperty(city))
		{
			var div = $("<div></div>");
			$("body").append(div);
			var but = $("<input/>",{
				type : "button",
				value : city	
			}).on("click",function(e){
				var ds = $("#deathstar");
				var array=[];
				if(timer)
				{	
					clearTimeout(timer);
					var tstamp1 = Date.now();
					for(var i = 0; i< 20000000; i++)
					{
						array[array.length] = i*i^i;
					}
					var tstamp2 = Date.now();
					var steps = (tstamp2 -tstamp1)/100;
					var jump = ds.offset().left + 20 * steps; 
					ds.css("left",jump);
					$("#warpbut").trigger("click");
				}
				target = $(e.target);
				desc.html(cities[target.attr("value")]);
				target.after(desc);
			});			
			div.append(but);
		}
	}
	
	$("body").append("<br>").append("<br>");
	var tstamp;
	tstamp = Date.now();
	var but = $("<input/>",{
		type : "button",
		value : "Warp",
		id : "warpbut"	
	});
	but.on("click",function(e){
		var ds = $("#deathstar");
 		var imgStart = -ds.width();
 		
		(function start(){
			if(ds.offset().left >= document.body.offsetWidth)
			{
				ds.css("left", imgStart);
				interval = Date.now()  - tstamp;
				tstamp = Date.now() ;
				console.log("Interval "+interval);
			}
			else
			{	
				ds.animate({
 					left : "+=20"
				},100);
			}	
			timer = setTimeout(start,100);
		})();
	});			
	
	$("body").append(but);
	var but = $("<input/>",{
		type : "button",
		value : "Stop"	
	}).on("click",function(e){
		clearTimeout(timer);
		timer = 0;	
	});
	
	$("body").append(but).append("<br>").append("<br>");
	
	var img = $("<img/>",
	{
		id : "deathstar",
		src : "deathstar.png"
	}).css({
		width : "15%",
		height : "15%",
		display : "block",
		position : "absolute"	
	}).appendTo("body");
	
});
