(
function()
{
	$(document).ready(function()
	{
    	$("#b1").click(function()
    	{
    		console.log("here");
    		var cnt=0;
			var margint=20;
			var totalelements=30;

			function repeatme()
			{
				if(cnt<totalelements)
				{
				console.log("in repeat me: ");
				var dummy=document.createElement("div");
				var k=document.createTextNode(cnt);
				dummy.setAttribute("id","tmp");
				dummy.style.position="absolute";
				dummy.style.height="10px";
				dummy.style.width="150px";
				dummy.style.top=margint;
				margint+=15;
				dummy.appendChild(k);
				cnt++;
				
				var bd=document.getElementById("d1").appendChild(dummy);

				$(dummy).animate({left: '300px'},1000,repeatme);
				console.log("after 500 animate : "+dummy.style.left);
				$(dummy).animate({left: '500px' },1000,function(){console.log("after 300 animate : "+dummy.style.left);});
				}				
			}
			return repeatme;
    	}());

    	$("#refresh").click(function() 
    		{
    			console.log("refresh clicked");
    			location.reload(true);
    		});
	});
}

)();



