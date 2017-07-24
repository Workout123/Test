(function(){
  var timer = 0;
  var timeoutDuration = 10;
  var offset = 1;
  var ball = null;
  var ballMovingRight = true;

  function init()
  {
    ball = document.getElementById("ball");
    timer = setTimeout(moveRight, timeoutDuration);

    ball.addEventListener("click",function(){
      if(timer)
      {
        clearTimeout(timer);
        timer = null;
      }
      else
      {
        if(ballMovingRight)
          timer = setTimeout(moveRight, timeoutDuration);
        else
          timer = setTimeout(moveLeft, timeoutDuration);
      }
    });

    document.getElementById("load").addEventListener("click",function(){
      var arr = [];
      for(var i=0;i<5000;i++)
      {
        arr[i] = i**i;
        console.log(i);
      }
    });
  }
  
  function moveRight()
  {
    ballMovingRight = true;
    if( (ball.offsetLeft + ball.offsetWidth) < window.innerWidth)
    {
      ball.style.left = ball.offsetLeft + offset + "px";
      timer = setTimeout(moveRight,timeoutDuration);
    }
    else
    {
      clearTimeout(timer);
      timer = setTimeout(moveLeft, timeoutDuration);
    }
  }

  function moveLeft()
  {
    ballMovingRight = false;
    if( ball.offsetLeft > 0 )
    {
      ball.style.left = ball.offsetLeft - offset + "px";
      timer = setTimeout(moveLeft, timeoutDuration);
    }
    else
    {
      clearTimeout(timer);
      timer = setTimeout(moveRight, timeoutDuration);
    }
  }

  window.onload = init;
})()
