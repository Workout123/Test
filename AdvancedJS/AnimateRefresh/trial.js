function DoEverything()
{
  var pos = 0;

  var MoveText = document.getElementById("TextToMove");
  MoveText.style.position="relative";
  MoveText.style.left='0px'

  function Animate(val)
  {
    //console.log(val);
    MoveText.style.left=val+'px';
  }
  return {
    CallAnimate: function() {
      //console.log("in here");
      Animate(++pos);
    },
    CallRefresh: function() {
      //console.log("refreshing..");
      Animate(0);
    }

  }
}

function SetMotion()
{
  var Motion = DoEverything();
  setInterval(Motion.CallAnimate, 5);
  //Motion.CallRefresh();
  return Motion;
}

function SetStop()
{
  //Motion.CallRefresh();
  var isMotion=SetMotion();
  console.log(isMotion);
}
