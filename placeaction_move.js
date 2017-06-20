(function(){
var places=["Bangalore","Chennai","Hyderabad"];
var description=["Bangalore, officially known as Bengaluru is the capital of the Indian state of Karnataka..","Chennai, formerly known as Madras is the capital of the Indian state of Tamil Nadu..","Hyderabad is the capital of the southern Indian state of Telangana.."];
var position=[150,200,250];

function show_description(i)
{
  function inner_print()
  {
     var start=new Date();
      var curtime="Starttime:"+start.getHours()+":"+start.getMinutes()+":"+start.getSeconds()+":"+start.getMilliseconds();
      console.log("button click:"+curtime);
      var list=[];
      for(var j=0;j<100000000;j++)
      {
        list[j]=j;
      }
     document.getElementById("text").innerHTML=description[i];
     document.getElementById("text").style.top=position[i] + 'px';
      var end=new Date();
      var curtime="Endtime:"+end.getHours()+":"+end.getMinutes()+":"+end.getSeconds()+":"+end.getMilliseconds();
      console.log("button click:"+curtime);
  }

  return inner_print;
}

function move_object() 
{
  var val = 0;
  var object = document.getElementById("object");    
  function inner_move() 
  {
    var start=new Date();
  var starttime="Starttime:"+start.getHours()+":"+start.getMinutes()+":"+start.getSeconds()+":"+start.getMilliseconds();
  console.log("Move start:"+starttime);
    var stop = setInterval(call, 20);
    function call()
    { 
      var current=new Date();
      var currenttime="Starttime:"+current.getHours()+":"+current.getMinutes()+":"+current.getSeconds()+":"+current.getMilliseconds();
      console.log("Move current:"+currenttime);
      var lag=(current.getTime()-start.getTime());
      console.log("lag:"+lag+"current:"+current.getTime()+"start:"+start.getTime());
      console.log("Value each time:"+val);
      if (val >= 800)
      {
      clearTimeout(stop);
      }
      else 
      {
      val++; 
      object.style.left = val + 'px';  
      }
      if (val<(lag/20)) 
      {
        val+=((lag/20)-val);
        object.style.left = val + 'px';
        console.log("value changed:"+val);
      } 
    }
  }
  return inner_move;
}

function create_button()
{
  for(var i=0;i<places.length;i++)
  {
    var button = document.createElement("button");
    button.setAttribute("class","button");
    button.innerHTML = places[i];
    var body=document.getElementById("button_column"); 
    body.appendChild(button);
    var linebreak = document.createElement("br");
    body.appendChild(linebreak);
    button.addEventListener("click",show_description(i));
  }
}
function move_button()
{
    var button = document.createElement("button");
    button.setAttribute("class","button");
    button.innerHTML = "Click here to move";
    var body=document.getElementById("button_column"); 
    body.appendChild(button);
    var linebreak = document.createElement("br");
    body.appendChild(linebreak);
    button.addEventListener("click",move_object());
}
create_button();
move_button();
})();
