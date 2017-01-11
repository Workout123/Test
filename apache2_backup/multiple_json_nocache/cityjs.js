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
				        																}
				        			);
				        }
      				  }
    				});
	});

});
