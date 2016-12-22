(
	function()
	{
x = 9;    // this referes to global "window" object here in the browser
var module = {
  x: 81,
  getX: function(k,q) { 
  	console.log("k: "+k+" q:"+q);
  	return this.x; }
};
var retrieveX = module.getX;
retrieveX();
retrieveX();
var boundGetX = retrieveX.bind(module,3,2)(3,2);
//boundGetX();

hi();
function hi()
{
	console.log("pop");
}

	}
)();
