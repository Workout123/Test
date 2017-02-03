function DoEverything()
{
  var MoveText = document.getElementById("TextToMove");
  MoveText.style.position="relative";
  MoveText.style.left='0px';
  var pos = 0;

  function Animate()
  {
      pos++;
      MoveText.style.left = pos + 'px';
  }
  return Animate;
}

function SetMotion()
{
  Motion=DoEverything;
  setInterval(DoEverything(), 5);

}
