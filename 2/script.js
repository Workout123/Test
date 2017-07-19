$(document).ready(function()
{
  $.ajax({ url: "data.json", success: function(result)
  {
    var str = "";
    for(var city in result) {
      str = str + "<option value="+ city.toString() +">" + city + "</option>";
    }
    $("#select").append(str).change(function()
    {
      $("#description").html(result[this.value]);
    });
  } })
}
);
