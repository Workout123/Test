(function(){
  function create_button()
  {
    var buttons=0;
    var stop=setInterval(split_task,10);
  function split_task()
  {
    if(buttons>100000000)
      clearInterval(stop);
    var start=new Date();
    var curtime="Starttime:"+start.getHours()+":"+start.getMinutes()+":"+start.getSeconds()+":"+start.getMilliseconds();
    console.log(curtime);
  for(var i=0;i<100;i++)
  {
    var button = document.createElement("button");
    button.setAttribute("class","button");
    button.innerHTML = buttons;
    var body=document.getElementById("button_column"); 
    body.appendChild(button);
    var linebreak = document.createElement("br");
    body.appendChild(linebreak);
    buttons++;
  }
      var end=new Date();
      var curtime="Endtime:"+end.getHours()+":"+end.getMinutes()+":"+end.getSeconds()+":"+end.getMilliseconds();
      console.log(curtime);
  }
}
create_button();
})();