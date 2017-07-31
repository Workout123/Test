"use strict";
(function( $ ){
  $.fn.applyCustomStyle = function()
  {
    if(!this.is("select")) return this;

    this.addClass("hide");
    var $selectedObject = this;
    var $centerBox = $("<div>",{id:"centerbox"});

    var $dataMin = parseInt(this.data("min"));
    var $dataMax = parseInt(this.data("max"));

    $centerBox.html(this.val());

    var $negButton = $("<input>",{type:"button","class":"custombutton minus",value:"-"});
    var $posButton = $("<input>",{type:"button","class":"custombutton plus",value:"+" });
    this.after($negButton, $centerBox, $posButton );

    $(".custombutton").click(function(ev)
    {
      var $price = parseInt($centerBox.html());
      var $finalPrice = null;

      if($(this).hasClass("plus") && $price < $dataMax)
        $finalPrice = $price + 1;
      else if($(this).hasClass("minus") && $price > $dataMin)
        $finalPrice = $price - 1;

      if($finalPrice != null)
      {
        $centerBox.html($finalPrice);
        $selectedObject.val($finalPrice).trigger("change");
      }
    });
    return this;
  }
})(jQuery)
