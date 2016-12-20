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
			var totalelements=10;

			function repeatme()
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

				if(cnt<totalelements)
				{
					var bd=document.body.appendChild(dummy);
					$(dummy).animate({left: '500px' },600,repeatme);
					cnt++;
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
