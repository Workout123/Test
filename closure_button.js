(function()
{
var i=5;
function print(i)
{
 document.write("i");
}
var button=document.createElement("button");
button.innerHTML="click here";
var body=document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click",print);
})();
