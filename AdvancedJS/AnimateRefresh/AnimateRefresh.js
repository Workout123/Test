function DoEverything()
{
  var MoveText = document.getElementById("TextToMove");
  MoveText.style.position="relative";
  MoveText.style.left='0px';
  var pos = 0;

  function Animate(val)
  {
      //pos++;
      MoveText.style.left = val + 'px';
  }

  return {
    CallAnimate: function()
    {
      Animate(pos++);
    },
    CallRefresh: function()
    {
      return Animate(0);
    }
  };
}

function SetMotion()
{
  var Motion=DoEverything;
  var value=setInterval(Motion.CallAnimate(), 5);
  return Motion
}

function SetRefresh()
{
  DoEverything.Refresh();
}
