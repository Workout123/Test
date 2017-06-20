$(document).ready(function(){

	$.getJSON('http://localhost/json_files/citylist.json',function(data){populateCityList(data,"dropdown","city");});

	$("#refresh").click(function(){
				$("#dropdown").html('');
				$('#show-data').html('');
				$.getJSON('http://localhost/json_files/citylist.json',function(data){populateCityList(data,"dropdown","city");});
			});

	function populateCityList(data,dropdownboxid,city)
	{
		var dropdownbox=$('#'+dropdownboxid);
		for(var i in data.cities)
		{
			$("<option />", {value: data.cities[i] , text: data.cities[i] }).appendTo(dropdownbox);
		}
	}

       $('#get-data').click(function () {
    		var showData = $('#show-data');
			console.log("button clicked");
			chkcache.cache={};
			chkcache($("#dropdown")[0].value);
    		function chkcache(name)
    		{
    			console.log("in func");
    			var results;

  				if ( chkcache.cache[name] ) {
  					console.log("in if");
    					results = chkcache.cache[name];
    					showData.text(results);
  				} else {
  					console.log("in else");
  						$.getJSON('http://localhost/json_files/citylist.json',function (data)
    					{
				      		var cityname=$("#dropdown")[0].value;				      
				      		for(var i in data.cities)	
				      		{
				        		if(data.cities[i] == cityname)
				        		{
				        			$.getJSON('http://localhost/json_files/'+cityname+'.json',function(data2)
				        																{
				        																	console.log("data desc[: "+data2.descp);
				        																	showData.text(data2.descp);
				        																	results=data2.descp;
				        																	chkcache.cache[name]=results;
				        																}
				        			);
				        		}
      				  		}
    					});
  				}

  				return results;

    		}
    		
		    
	});

});
