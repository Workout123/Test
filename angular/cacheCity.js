$(document).ready(function () {
  var wrapl = document.getElementById("leftside");
  var br = document.createElement("br");
  var x1 = document.createElement("BUTTON");
  var t1 = document.createTextNode("refresh");
  x1.appendChild(t1);
  x1.addEventListener('click',refresh);
  document.body.appendChild(x1);
    
  var drop = document.createElement("select");
  drop.setAttribute("id","city");
  getJson();

  function getJson(){
    $.getJSON('http://localhost/test/allCity.json', function (data) {
      wrapl.append(drop);
      var op = new Option();
      op.value = "";
      op.text = "select city";
      drop.options.add(op);
      for(var i in data.items){
        var op = new Option();
        op.value = data.items[i];
        op.text = data.items[i];
        drop.options.add(op);
      }
      display.cache = {};
    
      $("#city").on("change",function(){display(document.getElementById("city").value)});
 
      function display(name){
        var results;
        if(display.cache[name]){
          results = display.cache[name];
          console.log("in cache");
          document.getElementById("cit").innerHTML = results;
        }else{
          var path = "http://localhost/test/"+name+".json";
          $.getJSON(path, function (data) {
            results = data.desc;
            display.cache[name] = results;
            document.getElementById("cit").innerHTML = results;
          });
        }      	
      }
    });
  }

  function refresh(){
    $('#city option[value!="0"]').remove();
    $("#city").remove();
    getJson();
  }
});
