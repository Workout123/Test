function DoEverything()
{
  var pos = 0;
  var MoveText=null;

  function Initialize(Stringval)
  {
    MoveText = document.getElementById(Stringval);
    MoveText.style.position="relative";
    MoveText.style.left='0px';
  }

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
    CallInitialize: function(Stringval) {
      //console.log("refreshing..");
      Initialize(Stringval);
    },
    GetPosition: function() {
      return pos;
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
  var NumList=new Array("TextToMove1", "TextToMove2", "TextToMove3", "TextToMove4");
  Motion=new Array();
  for(var i=0; i<NumList.length; i++)
  {
    Motion[i]=DoEverything();
    Motion[i].CallInitialize(NumList[i]);
  }
  //Motion = DoEverything();
  function AnimateAll()
  {
    for(var i=0; i<NumList.length-1; i++)
    {
      Motion[0].CallAnimate();
      if(Motion[i].GetPosition()>600)
        Motion[i+1].CallAnimate();
    }
  }
  //if(flag==0)
  setInterval(AnimateAll, 5);
  //Motion.CallRefresh();
  return Motion();
}

function SetRefresh()
{
  var isMotion=SetMotion();
  for(i=0; i<4; i++)
    isMotion[i].CallRefresh();
}
