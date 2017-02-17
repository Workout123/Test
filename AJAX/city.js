(
  function()
  {
    $(document).ready(function()
    {
      $("#city").change(function()
      {
        var selectval=document.getElementById("city").value;
        var val;
        //console.log(selectval);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
          if (this.readyState == 4 && this.status == 200)
          {
            myObj = JSON.parse(this.responseText);
            //document.getElementById("demo").innerHTML = myObj.city[0].name;
            for(col in myObj.city)
              if(selectval==myObj.city[col].name)
              {
                document.getElementById("demo").innerHTML = myObj.city[col].description;
                break;
              }
            //document.getElementById("demo").innerHTML=val;
          }
        };
        xmlhttp.open("GET", "city.json", true);
        xmlhttp.send();
      });
    });

    //var opt = selectval.options[selectval.selectedIndex];
    //console.log("in here");
    //console.log(selectval);
  }
)();
