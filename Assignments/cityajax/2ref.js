$( document ).ready(function()
{
	var cities;
	var dropdown = $("<select/>",{
		id : "dropid"
	}).appendTo("body");

	var desclabel = $("<label/>").appendTo("body");
	$("body").append("<br/>").append("<br/>");

	function refresh(){
		$.ajax({
			url : "../base/cities.json",
			type : "GET" 
		}).done(function(cities){
			for (var city in cities){
				var option = $("<option/>").attr("value",city).html(city).data("cache","").appendTo(dropdown);
			}
			dropdown.on( "change", function(e){
				var sel =  $("#dropid option:selected");
				var link = "../base/"+cities[sel.attr("value")];
				var cache = sel.data("cache");
				//console.log(cache);	
				if (cache)
				{
					console.log("cache");
					desclabel.html( cache );
				}
				else{
					$.ajax({
						url: link,
						type:"GET"
					}).done(function(cjson){
						console.log("Ajax Call");
						var description = cjson["desc"];
						desclabel.html( description );
						sel.data("cache",description);
					});	
				}	
			});
		});	
	}
	refresh();
	$("<input/>").attr({
		value:"refresh",
		type: "button"
	}).appendTo("body")
	.on("click",function(){
		dropdown.empty();
		refresh();
	})

	
});

