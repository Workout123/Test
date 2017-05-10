(
	function()
{
var places= []
places[0]=["bangalore","garden city"]
places[1]=["chennai","capital of tn"]
places[2]=["delhi","capital"]
}

function display(i)

{
	return function(){
	//var desc=document.createTextNode(places[i][1]);
	 document.getElementById("demo1").innerHTML=places[i][1];
         };
}

myFunction();
function myFunction() {
	document.getElementById("demo").append("the cities are as follows");
	var x = document.createElement("BR");
	document.getElementById("demo").appendChild(x);
	var y = document.createElement("BR");
document.getElementById("demo").appendChild(y);

var i;
	for(i=0;i<3;i++)
	{
		
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(places[i][0]);
    btn.appendChild(t);
    btn.setAttribute("id","btn"+i.tostring());
    btn.setAttribute("class","buttons")
   document.getElementById("demo").appendChild(btn);


//document.getElementById("demo").innerHTML=btn;
    var x = document.createElement("P");
    var t = document.createTextNode("   ");
    x.appendChild(t);
    document.getElementById("demo").appendChild(x);

     document.getElementById("bu"+i.tostring()).addEventListener("click",display(i));

   }
})();