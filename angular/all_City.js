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
      
      $("#city").on("change",function(){
        var path = "http://localhost/test/"+document.getElementById("city").value+".json";
        console.log(path);
        $.getJSON(path, function (data) {
          console.log(" success");
          document.getElementById("cit").innerHTML = data.desc;
        });
      });
    });
  }

  function refresh(){
  //  $('#city option[value!="0"]').remove();
    $("#city").empty();
    $("#city").remove();
    getJson();
  }
});




