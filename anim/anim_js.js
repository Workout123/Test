(
function()
{
  var b=document.getElementById("b1");
  b.addEventListener('click',animateit());
  
 function animateit()
  {
	var i1;
	var b2=document.createElement("button");
	b2.addEventListener('click',function(){cleartime();});
	var t=document.createTextNode("Click to Stop");
	b2.appendChild(t);
	document.getElementsByTagName("body")[0].appendChild(b2);

        var ob=document.getElementById("d1");
        var posrg=20;
        function inner()
        {
              posrg+=1;
              ob.style.left=posrg+'px';
              i1= setTimeout(inner,10);
        }
	function cleartime()
	{
		var d="i"+"1";
		clearTimeout(d);					
	}
	return inner;
   }

})();
