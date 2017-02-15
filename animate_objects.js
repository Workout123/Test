(function(){
  function move()
  {
    var b=document.getElementsByClassName("button");
    var j=-1;
    function inner_move()
    {
      if(j<=b.length)
      { 
        j++;
        $(b[j]).animate({left: "500px"},"slow",inner_move);
      }
      //setTimeout(inner_move,0);
    }
    return inner_move;
  }
  function add_event()
  {
    var animate=document.getElementById("click here");
    var refresh=document.getElementById("refresh");
    animate.addEventListener("click",move());
    refresh.addEventListener("click",function(){location.reload();});
  }
  function animate_button()
  {
    var arr=["click here","refresh"];
    for(k=0;k<arr.length;k++)
    {
    var button = document.createElement("button");
    button.setAttribute("id",arr[k]);
    button.innerHTML = arr[k];
    document.body.appendChild(button);
    }
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