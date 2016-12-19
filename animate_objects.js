(function(){
  function move()
  {
    var b=document.getElementsByClassName("button");
    var j=0;
    function inner_move()
    {
      if(j<b.length)
      { 
        $(b[j]).animate({left: "500px"},"slow",inner_move);
        j++;
      }
      //setTimeout(inner_move,0);
    }
    return inner_move;
  }
  function add_event()
  {
    button.addEventListener("click",move());
  }
  function animate_button()
  {
    var button = document.createElement("button");
    button.setAttribute("id","button");
    button.innerHTML = "click here";
    var body=document.getElementById("button_column"); 
    body.appendChild(button);
    var linebreak = document.createElement("br");
    body.appendChild(linebreak);
  }
  function create_button()
  {
    var buttons=0;   
    function split_task()
    {
      if(buttons>=500)
      {
        clearTimeout(stop);
      }
      else
      {
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
      }
      var stop=setTimeout(split_task,0); 
    }
  split_task();
}
animate_button();
create_button();
add_event();
})();