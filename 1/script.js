"use strict";
var PROJECT1 = {}

PROJECT1.main = function()
{
  //console.log("main..");
  var city_description = {
                  Bengaluru : "Description of Bengauru...",
                  Chennai : "Description of Chennai.."
                };

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
      });
    document.body.appendChild(select);

  }();

  function setAttributes(element, attributes={})
  {
      if(element)
      {
        for(var attr in attributes)
        {
          element.setAttribute(attr, attributes[attr]);
        }
      }
  }


}
