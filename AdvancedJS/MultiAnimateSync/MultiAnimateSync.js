var MoveText=new Array();
var ThisText=null;
var getval=new Array();

//MoveText[0]=new Object();

//initial values
function initialize()
{

  MoveText[0] = document.getElementById('RollOverText1');
  MoveText[0].style.position= 'relative';
  MoveText[0].style.left = '0px';


  MoveText[1] = document.getElementById('RollOverText2');
  MoveText[1].style.position= 'relative';
  MoveText[1].style.left = '0px';

  MoveText[2] = document.getElementById('RollOverText3');
  MoveText[2].style.position= 'relative';
  MoveText[2].style.left = '0px';

  MoveText[3] = document.getElementById('RollOverText4');
  MoveText[3].style.position= 'relative';
  MoveText[3].style.left = '0px';
}

function MoveRight(ThisText)
{
  ThisText.style.left = parseInt(ThisText.style.left) + 10 + 'px';
}

/*function MoveLeft(ThisText)
{
  ThisText.style.left = parseInt(ThisText.style.left) - 10 + 'px';
}*/

function AnimateText()
{
  //setInterval(AnimateText, 1000);
  for(var i=0; i<4; i++)
  {
    getval[i] = parseInt(MoveText[i].style.left);
  }

  //MoveRight(MoveText[0]);
  //Boundary conditions
  //if(getval<=1200 && flag==0)
  for(var i=0; i<3; i++)
  {
    MoveRight(MoveText[0]);
    if(getval[i]>600)
      MoveRight(MoveText[i+1]);
  }


  setTimeout(AnimateText, 70);
  //document.write(MoveText.style.left);
}

window.onload=initialize;
