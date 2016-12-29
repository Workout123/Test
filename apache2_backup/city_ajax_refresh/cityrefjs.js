$(document).ready(function(){

	$.getJSON('http://localhost/citylist.json',function(data){populateCityList(data,"dropdown","city");});

	$("#refresh").click(function(){
				console.log("refresh clicked");
				$("#dropdown").html('');
				$.getJSON('http://localhost/citylist.json',function(data){populateCityList(data,"dropdown","city");});
			});

	function populateCityList(data,dropdownboxid,city)
	{
		var dropdownbox=$('#'+dropdownboxid);
		for(var i in data.city)
		{
			console.log(data.city[i].key);
			$("<option />", {value: data.city[i].key , text: data.city[i].key }).appendTo(dropdownbox);
		}
	}

       $('#get-data').click(function () {
    		var showData = $('#show-data');
		$.getJSON('http://localhost/citylist.json',function (data)
    				{
				      var cityname=$("#dropdown")[0].value;
				      for(var i in data.city)	
				      {
				        if(data.city[i].key == cityname)
				          showData.text(data.city[i].value);
      				      }
    				});
	});

});
