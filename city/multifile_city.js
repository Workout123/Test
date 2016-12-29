(function(){
  function create(){
  var dropdown=document.createElement("select");
  dropdown.setAttribute("id","dropdown");
  document.body.appendChild(dropdown);
  $.getJSON('http://localhost/city/cityname.json',function (data)
  {
  for(var i=0;i<data.city.length;i++){
    var option=document.createElement("option");
    option.text=data.city[i];
    dropdown.appendChild(option);
  }
});
}

function display()
{
  var description;
        var val=document.getElementById("dropdown").value;
        if ( display.cache[val] ) { 
          console.log("From cache");
          description = display.cache[val]; 
          document.getElementById("print").innerHTML=description;
      } else { 
        var file='http://localhost/city/'+val+'.json';
        $.getJSON(file,function (data){
           display.cache[val] = data.desc;
           console.log("From Server:"+data.desc);
           document.getElementById("print").innerHTML=data.desc;
          });
  } 
}
create();
display.cache={};
$("#dropdown").on("change",display);
})();
 