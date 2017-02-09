function DoEverything()
{
  var pos = 0;

  var MoveText = document.getElementById("TextToMove");
  MoveText.style.position="relative";
  MoveText.style.left='0px'

  function Animate()
  {
    //console.log(val);
    pos++;
    MoveText.style.left=pos+'px';
  }
  return {
    CallAnimate: function() {
      //console.log("in here");
      Animate();
    },
    CallRefresh: function() {
      //console.log("refreshing..");
      pos=0;
      Animate();
    }

  }
}

function SetMotion()
{
  var Motion = DoEverything();
  //if(flag==0)
  setInterval(Motion.CallAnimate, 5);
  //Motion.CallRefresh();
  return Motion();
}

function SetStop()
{
  var isMotion=SetMotion();
  isMotion.CallRefresh();
}
