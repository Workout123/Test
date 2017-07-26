"use strict";
(function(){

  var costPerItem = 314;

  var init = function()
  {
    var dropdown = document.getElementById("dropdown");
    var total = document.getElementById("total");
    total.innerHTML = dropdown.value * costPerItem;
    $("#dropdown").change(function(){
      total.innerHTML = costPerItem * this.value;
    });
  }

  window.addEventListener("load",init);
})()
