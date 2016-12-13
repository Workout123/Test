(function(){
var places=["Bangalore","Chennai","Hyderabad"];
var description=["Bangalore, officially known as Bengaluru is the capital of the Indian state of Karnataka..","Chennai, formerly known as Madras is the capital of the Indian state of Tamil Nadu..","Hyderabad is the capital of the southern Indian state of Telangana.."];
var position=[150,200,250];

function show_description(i)
{
  function inner_print()
  {
     document.getElementById("text").innerHTML=description[i];
     document.getElementById("text").style.top=position[i] + 'px';
  }
  return inner_print;
}

function move_object() 
{
  var val = 10;
  var object = document.getElementById("object");    
  function inner_move() 
  {
    var stop = setInterval(call, 10);
    function call()
    {
      if (val == 800)
      {
      clearTimeout(stop);
      }
      else 
      {
      val++; 
      object.style.left = val + 'px';  
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
