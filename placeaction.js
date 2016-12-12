(function(){
var places=["bangalore","chennai","Hyderabad"];
var description=["Bangalore, officially known as Bengaluru is the capital of the Indian state of Karnataka..","Chennai, formerly known as Madras is the capital of the Indian state of Tamil Nadu..","Hyderabad is the capital of the southern Indian state of Telangana.."];

function show_description(i)
{
 return function(){ document.getElementById("print").innerHTML=description[i];};
}

function create_button()
{
for(var i=0;i<places.length;i++)
{
var button = document.createElement("button");
button.setAttribute("class","button");
button.innerHTML = places[i];
var body = document.getElementById("body");
body.appendChild(button);
var linebreak = document.createElement("br");
body.appendChild(linebreak);
button.addEventListener("click",show_description(i));
}
}
 create_button();

var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", "buttonstyle.css");
}
)();
