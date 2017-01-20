$( document ).ready(function()
{
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
	var desc = $("<label/>");

	for (var city in cities){
		if (cities.hasOwnProperty(city))
		{
			(function(cty){
				var div = $("<div/>").appendTo("body");
				var lab = $("<label/>").html(cty).appendTo(div);

				var but = $("<input/>", {
					type : "button",
					value : "CLICK"
				}).on( "click", function(e){
					console.log( cities[cty] );
					desc.html( cities[cty] ).appendTo(div);
				}).appendTo(div);
			})(city);
		}
	}
});

