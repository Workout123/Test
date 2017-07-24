(function(){
  var timer = 0;
  var ball = null;
  var startTime = Date.now();
  console.log("Begin: ",startTime);

  function init()
  {
      ball = document.getElementById("ball");

      document.getElementById("load").addEventListener("click",function(){
        var arr = [];
        for(var i=0;i<5000;i++)
        {
          arr[i] = i**i;
          console.log(i);
        }
      });

      handleMovement();
  }

  function handleMovement()
  {
    timer = setTimeout(handleMovement, 10);

    var currentTime = Date.now();
    var diff = currentTime - startTime;
    var pixelsToMove = diff / 10;
    ball.style.left = pixelsToMove % (window.innerWidth - ball.offsetWidth + 20) + "px";
  }

  window.onload = init;
})()
