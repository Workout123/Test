"use strict";
(function()

  {
    var city_description = {};

    var createSelectTagForCities = function()
    {
      var descriptionNode, select, defaultOption, options, city;

      descriptionNode = document.getElementById("description");
      select = document.createElement("select");
      defaultOption = document.createElement("option");
      setAttributes(defaultOption, { disabled: true, selected: true, value: ""});
      defaultOption.appendChild(document.createTextNode('Select City'));

      select.appendChild(defaultOption);

      for(city in city_description)
      {
        options = document.createElement("option");
        options.value = city.toString();
        options.innerHTML = city;
        select.appendChild(options);
      }

      select.addEventListener("change", function(ev)
        {
          var selectNode, selected;

          selectNode = ev && ev.target;
          if(selectNode)
          {
            selected = selectNode.options[selectNode.selectedIndex];
            descriptionNode.innerHTML = city_description[selected.value];
          }
        }, false);

      document.body.appendChild(select);
    };



    function setAttributes(element, attributes)
    {
        if(element)
        {
          attributes = attributes || {};
          for(var attr in attributes)
          {
            element.setAttribute(attr, attributes[attr]);
          }
        }
    }

    function fetchJsonData()
    {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function()
      {
          if (this.readyState == 4 && this.status == 200)
          {
            city_description = JSON.parse(xhr.responseText);
            xhr.close();
            createSelectTagForCities();
          }
      }
      xhr.open("GET","data.json",true);
      xhr.send();
    }

    window.onload = fetchJsonData;
}

)()
