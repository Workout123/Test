"use strict";
(function( $ ){
  $.fn.applyCustomStyle = function()
  {
    this.addClass("hide");
    var $selectedObject = this;
    var $centerBox = $("<div>",{id:"centerbox"});

    var $dataMin = Number.MAX_VALUE;
    var $dataMax = 0;
    $("select#dropdown option").each(function(){
      var $value = parseInt($(this).val());
      if($value > $dataMax) $dataMax = $value;
      if($value < $dataMin) $dataMin = $value;
    })
    $centerBox.html(this.val());

    var $negButton = $("<input>",{type:"button","class":"custombutton",value:"-"});
    this.after($negButton, $centerBox, $negButton.clone().val("+"));

    $(".custombutton").click(function()
    {
      var $price = parseInt($centerBox.html());
      var $finalPrice = null;

      if(this.value == "+" && $price < $dataMax)
        $finalPrice = $price + 1;
      else if(this.value == "-" && $price > $dataMin)
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
