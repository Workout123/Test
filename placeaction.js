(function(){
var places=["Bangalore","Chennai","Hyderabad"];
var description=["Bangalore, officially known as Bengaluru is the capital of the Indian state of Karnataka..","Chennai, formerly known as Madras is the capital of the Indian state of Tamil Nadu..","Hyderabad is the capital of the southern Indian state of Telangana.."];

function show_description(i)
{
  function inner_print()
  {
     document.getElementById("description").innerHTML=description[i];
  }
  return inner_print;
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
create_button();
})();
