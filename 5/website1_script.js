"use strict";
(function(){
  var dropdown = null;
  var priceTag = null
  var total = null;

  var init = function()
  {
    dropdown = document.getElementById("dropdown");
    total = document.getElementById("total");
    priceTag = document.getElementById("price_tag");

    customizeSelect();
    customizePrizeTag();
  }

  var customizeSelect = function()
  {
    dropdown.style.cssText = ";-webkit-appearance: none;width: 50px;height:50px;text-align-last:center;font-weight: bold; float:left;"

    //click on the select tag should no linger give dropdown
    dropdown.addEventListener("mousedown",function(ev){ ev.preventDefault(); });

    //creating - button on the left of the select
    var buttonLeft = createButton("-");
    buttonLeft.addEventListener("click",function(){
      if(dropdown.value > 1)
      {
        $("#dropdown").val(parseInt(dropdown.value) - 1).trigger("change");
      }
    });
    container.insertBefore(buttonLeft,dropdown);

    //creating + button on the right of the select
    var buttonRight = createButton("+");
    buttonRight.addEventListener("click",function(ev){
      if(dropdown.value < 10)
      {
        $("#dropdown").val(parseInt(dropdown.value) + 1).trigger("change");
      }
    });

    //container.insertBefore(buttonRight,priceTag);
    dropdown.parentNode.insertBefore(buttonRight,dropdown.nextSibling);

  }

  var customizePrizeTag = function()
  {
    priceTag.style.cssText = ";text-align:center; clear:both; font-size:120%; padding: 10px;";
  }

  var createButton = function(innerText)
  {
    var button = document.createElement("input");
    button.type="button";
    button.style.cssText = ";background-color: #4CAF50; width:40px; height:40px;margin: 0 auto;border: none; text-align: center; display: inline-block; font-size: 20px; float:left;margin: 5px;";
    button.value = innerText;
    return button;
  }

  window.addEventListener("load",init);
})()
