(
function()
{
  var b=document.getElementById("b1");
  b.addEventListener('click',animateit());
  
 function animateit()
  {
	console.log("in animate it");
        var i1;
        var b2=document.createElement("button");
        b2.addEventListener('click',cleartime);
        var t=document.createTextNode("Click to Stop");
        b2.appendChild(t);
        document.getElementsByTagName("body")[0].appendChild(b2);

        var ob=document.getElementById("ob");
	ob.style.position="absolute";
        var posrg=20;
	var start;
        function inner()
        {
	      //console.log("button clicked");
              i1= setInterval(inner2,10);
	      start=new Date().getTime();
        }
	function inner2()
	{
	     var nw=new Date().getTime();
	     var diff=nw-start;
	     console.log("time before : "+start+" time now: "+nw+" diff is : "+diff+" pos now: "+posrg+" pos shud be :"+(diff+posrg));
	     start=nw;
	     //console.log("posrg before: "+posrg);
	     var tmp=posrg+diff;
	     if(tmp>1000)
		tmp=0;
             posrg=tmp;
             ob.style.left=posrg+'px';
	    
	      console.log("pos chnged to  be: "+tmp);

	      for(var i=0;i<100000;i++)
	      {
		var dummy=document.createElement("div");
		var k=document.createTextNode("simple");
		dummy.appendChild(k);
	      }

	}
        function cleartime()
        {
		console.log("stop clicked");
                clearInterval(i1);
        }
        return inner;
   }

})();

