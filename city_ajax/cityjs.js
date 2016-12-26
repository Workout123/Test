$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('http://localhost/citylist.json',function (data)
    {

      var cityname = document.getElementById("myList").value;
      
      for(var i in data.city)
      {
        console.log("single data: "+data.city[i].key); 
        if(data.city[i].key == cityname)
        {
         // showData.text('You choosed '+cityname+'\n  Descp: '+data.city[i].value);
          showData.text(data.city[i].value);
        }
      }
    });

    showData.text('Loading the JSON file....');
  });
});

