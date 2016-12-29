
(function(){
  function create(){
  var dropdown=document.createElement("select");
  dropdown.text="select a city";
  dropdown.setAttribute("id","dropdown");
  document.body.appendChild(dropdown);
  var button=document.createElement("button");
  button.innerHTML="refresh";
  document.body.appendChild(button);
  button.addEventListener("click",refresh);
}
function options()
{
  $.getJSON('http://localhost/city/description.json',function (data)
  {
  for(var i=0;i<data.desc.length;i++){
    var option=document.createElement("option");
    option.text=data.desc[i].key;
    option.setAttribute("value",data.desc[i].value);
    dropdown.appendChild(option);
  }
});
  
}
function refresh()
{
  $(dropdown).empty();

  options();
}
function display()
{
      $("#dropdown").on("change",function(){
        var val=document.getElementById("dropdown").value;      
        document.getElementById("print").innerHTML=val;
      });
}
create();
options();
display();
})();