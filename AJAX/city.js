(
  function()
  {
    $(document).ready(function()
    {
      $("#city").change(function()
      {
        var selectval=document.getElementById("city").value;
        $.ajax({
          url: "city.json",
          dataType: 'json',
          success: function(cityList)
          {
            //result = JSON.parse(result);
            for(col in cityList.city)
              if(selectval==cityList.city[col].name)
              {
                document.getElementById("demo").innerHTML = cityList.city[col].description;
                break;
              }
            //console.log(cityList.city[0].name);
          }
        })
      });
    });

    //var opt = selectval.options[selectval.selectedIndex];
    //console.log("in here");
    //console.log(selectval);
  }
)();
