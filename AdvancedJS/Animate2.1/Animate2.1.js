function DoEverything()
{
  var pos = 0;
  var list=new Array(1);
  var MoveText = document.getElementById("TextToMove");
  MoveText.style.position="relative";
  MoveText.style.left='0px'

  function Animate()
  {
    //console.log(val);
    //pos++;
    NewElement();
    MoveText.style.left=pos+'px';
  }

  function NewElement()
  {
    var start=performance.now();
    for(var j=0; j<200; j++)
      console.log(list.push(j++));
    var stop=performance.now();
    pos+=stop-start;
    //console.log(JumpByX);
  }
  return {
    CallAnimate: function() {
      //console.log("in here");
      //NewElement();
      Animate();
    }

  }
}

function SetMotion()
{
  Motion = DoEverything();
  //if(flag==0)
  setInterval(Motion.CallAnimate, 5);
  //Motion.CallRefresh();
  //return Motion;
}
