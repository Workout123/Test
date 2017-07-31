"use strict";
(function($){
  $.fn.addTooltip = function()
  {
    if(!jQuery().applyCustomStyle)
      return this;

    $("#price_tag").after("<div id='tooltip'></div>");

    $(".custombutton").click(function(ev)
    {
      var $button = $(ev.target);
      var $quantity = parseInt($("#centerbox").html());

      if($button.hasClass("minus") && $quantity <= $("#dropdown").data("min"))
      {
          $button.addClass("grayout").blur();
          $("#tooltip").html("Quantity can't be less than "+ $("#centerbox").html()).css({left:ev.pageX,top:ev.pageY}).show();
      }
      else if($button.hasClass("plus") && $quantity >= $("#dropdown").data("max"))
      {
        $button.addClass("grayout").blur();
        $("#tooltip").html("Quantity can't be more than "+ $("#centerbox").html()).css({left:ev.pageX,top:ev.pageY}).show();
      }
      else
      {
        $(".custombutton").removeClass("grayout");
        $("#tooltip").hide();
      }
    })
    .mouseover(function(ev){
      if($(ev.target).hasClass("grayout"))
      {
        $("#tooltip").css({left:ev.pageX ,top:ev.pageY}).show();
      }
    })
    .mouseout(function(){
      $("#tooltip").hide();
    });
  }
})(jQuery)
