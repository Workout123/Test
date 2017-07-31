(function(){

  var init = function(){

    if(jQuery().applyCustomStyle)
      $("#dropdown").applyCustomStyle()
    if(jQuery().addTooltip)
      $("#dropdown").addTooltip();

  }

  window.addEventListener("load",init);
})()
