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
    $.getJSON('http://localhost/test/city.json', function (data) {
      wrapl.append(drop);
      var op = new Option();
      op.value = "";
      op.text = "select city";
      drop.options.add(op);
      for(var i in data.itemgs){
        var op = new Option();
        op.value = data.itemgs[i].value
        op.text = data.itemgs[i].key;
        drop.options.add(op);
      }
      $("#city").on("change",function(){
      	var print = document.getElementById("city").value;      	
      	document.getElementById("cit").innerHTML = print;
      });
    });
  }

  function refresh(){
   // $("#city").find("options").remove().end();
   $('#city option[value!="0"]').remove();
    $("#city").remove();
    getJson();

}
});




