var PROJECT1 = {}

PROJECT1.main = function()
{
  //console.log("main..");
  var city_description = {
                  Bengaluru : "Description of Bengauru...",
                  Chennai : "Description of Chennai.."
                };

  var getDescriptionTag = function()
  {
    return document.getElementById("description");
  }

  var showDescription = function()
  {
    console.log(this);
    getDescriptionTag().innerHTML = city_description[this.value];
  }

  var createSelectTagForCities = function()
  {
    //console.log("create..");
    var select = document.createElement("select");

    for(var city in city_description)
    {
      var options = document.createElement("option");
      options.value = city.toString();
      options.innerHTML = city;
      options.addEventListener("click", showDescription, false);
      select.appendChild(options);
    }

    var descriptionDiv = getDescriptionTag();
    document.body.insertBefore(select,descriptionDiv);

  }();


}
