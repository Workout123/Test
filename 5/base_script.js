"use strict";
(function(){

  var costPerItem = 564;

  var init = function()
  {
    var dropdown = document.getElementById("dropdown");
    var total = document.getElementById("total");
    total.innerHTML = dropdown.value * costPerItem;
    // dropdown.addEventListener("change",function(ev){
    //   console.log("changing price..");
    //   total.innerHTML = costPerItem * this.value;
    // });

    // $("#dropdown").change(function(){
    //   total.innerHTML = costPerItem * this.value;
    // });

    dropdown.onchange = function(ev){
      total.innerHTML = costPerItem * this.value;
    }
  }

  window.addEventListener("load",init);
})()
