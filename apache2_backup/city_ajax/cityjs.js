
$(document).ready(function () {

  var dropdown=document.createElement("select");
  dropdown.style.position="absolute";
  dropdown.style.height="20px";
  dropdown.style.width="150px";
  dropdown.style.top="20px";
  dropdown.setAttribute("id","myList");
 
$.getJSON('http://localhost/citylist.json',function (data)
    {
      var cityname = document.getElementById("myList").value;
      
      for(var i in data.city)
      {
        console.log("single data: "+data.city[i].key); 
        var opt=document.createElement("option");
        var k=document.createTextNode(data.city[i].key);
        opt.appendChild(k);
        opt.setAttribute("value",data.city[i].key);
        dropdown.appendChild(opt);

      }
    });

   $  ("body")[0].appendChild(dropdown);

  $('#get-data').click(function () {
    var showData = $('#show-data');

   $.getJSON('http://localhost/citylist.json',function (data)
    {

      var cityname=$("#myList")[0].value;
      //alert(cityname);
      
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

