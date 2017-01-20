$( document ).ready(function()
{
	var desclabel = $("<label/>");
		
	$.ajax({
		url : "../base/cities.json",
		type : "GET" 
	}).done(function(cities){
		for (var city in cities){
			if (cities.hasOwnProperty(city))
			{	
				(function(cty){
					var cache;
					var description;
					var link = "../base/"+cities[cty];
					
					var div = $("<div/>").appendTo("body");
					var lab = $("<label/>").html(cty).appendTo(div);
					var but = $("<input/>",{
						type : "button",
						value : "CLICK"
					}).on( "click", function(e){
						if(cache)
						{
							desclabel.html( cache ).appendTo(div);
						}
						else{
							$.ajax({
								url: link,
								type:"GET"
							}).done(function(cjson){
								console.log("Ajax Call");
								var description = cjson["desc"];
								desclabel.html( description ).appendTo(div);
								cache = description;
							});	
						}	
					}).appendTo(div);
				})(city);	
			}
		}
	});
});

