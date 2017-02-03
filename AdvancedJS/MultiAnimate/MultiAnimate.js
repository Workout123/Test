var MoveText=null;
var getval, flag=0;

//initial values
function initialize()
{
  MoveText = document.getElementById('RollOverText');
  MoveText.style.position= 'relative';
  MoveText.style.left = '0px';

  MoveText2 = document.getElementById('RollOverText2');
  MoveText2.style.position= 'relative';
  MoveText2.style.left = '0px';
}

function MoveRight()
{
  MoveText.style.left = parseInt(MoveText.style.left) + 10 + 'px';
  MoveText2.style.left = parseInt(MoveText.style.left) + 10 + 'px';
}

function MoveLeft()
{
  MoveText.style.left = parseInt(MoveText.style.left) - 10 + 'px';
  MoveText2.style.left = parseInt(MoveText.style.left) - 10 + 'px';
}

function AnimateText()
{
  getval = parseInt(MoveText.style.left);
  //setInterval(AnimateText, 100);

  //Boundary conditions
  if(getval<=1200 && flag==0)
    MoveRight();

  else
  {
    MoveLeft();
    flag=1;
    if(getval<0)
      flag=0;
  }
  setTimeout(AnimateText, 70);
  //document.write(MoveText.style.left);
}

window.onload=initialize;
