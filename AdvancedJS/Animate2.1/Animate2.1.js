var MoveText=null, animate;
var getval, flag=0, i=1;
var JumpByx;

var list=new Array(1);

function NewElement()
{
  var start=performance.now();
  for(j=0; j<200; j++)
    doc.innerHTML+=list.push(i++);
  doc.innerHTML+="\n";
  var stop=performance.now();
  return stop-start;
  //clearTimeOut(AnimateText);
}
//initial values
function initialize()
{
  MoveText = document.getElementById('RollOverText');
  MoveText.style.position= 'relative';
  MoveText.style.left = '0px';
}

function MoveRight(x)
{
  MoveText.style.left = parseInt(MoveText.style.left) + x + 'px';
}

/*function MoveLeft()
{
  MoveText.style.left = parseInt(MoveText.style.left) - 10 + 'px';
}*/

function AnimateText()
{
  getval = parseInt(MoveText.style.left);
  //setInterval(AnimateText, 100);
  JumpByx=NewElement();
  //NewElement();
  //Boundary conditions
  //if(getval<=1200)
    MoveRight(JumpByx);

  //else
  //{
    /*MoveLeft();
    flag=1;
    if(getval<0)
      flag=0;*/
      //initialize();
  //}
  //animate=setInterval(AnimateText, timetowait);
  animate=setInterval(AnimateText, 70);
  //document.write(MoveText.style.left);
}

window.onload=initialize;
