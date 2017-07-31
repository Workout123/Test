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

    $("#dropdown").data("min",$("select#dropdown option").eq(0).val());
    $("#dropdown").data("max",$("select#dropdown option").eq($("select#dropdown option").length-1).val());

  }

  window.addEventListener("load",init);
})()
