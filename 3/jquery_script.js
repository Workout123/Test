"use strict";
(function(){
  $(document).ready(function(){
    var width = $(window).width() - $("#ball").width();
    var right = true;

    function moveRight()
    {
      right = true;
      $("#ball").animate({left: width},timeToMove(),function()
        {
          setTimeout(moveLeft, 50);
        });
    }

    function moveLeft()
    {
      right = false;
      $("#ball").animate({left: 0},timeToMove(),function()
        {
          setTimeout(moveRight, 50);
        });
    }

    function timeToMove()
    {
        var winWidth = $(window).width();
        var ballLeftOffset = parseInt($("#ball").css("left"));
        var distanceToMove = 0;

        if(right)
          distanceToMove = winWidth-ballLeftOffset;
        else
          distanceToMove = ballLeftOffset;

        return distanceToMove * 5;
    }

    $("#ball").click(function()
      {
        if( $("#ball").is(":animated"))
          $("#ball").stop();
        else
        {
          if(right)
            setTimeout(moveRight, 50);
          else
            setTimeout(moveLeft, 50);
        }
      });

    $("#ball").dblclick( function()
      {
        $("#ball").css("left","0px");
        $("#ball").stop();
      });

    setTimeout(moveRight,100);

  });
})()
