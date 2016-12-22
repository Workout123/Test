(
function()
{

	$(document).ready(function()
	{

		function repeatme(totalelements)
		{
			var cnt=0;
			var margint=20;
			function inner()
			{
				if(cnt<totalelements)
				{
				var dummy=document.createElement("div");
				var k=document.createTextNode(cnt);
				dummy.setAttribute("id","tmp");
				dummy.setAttribute("class","an1");
				dummy.style.position="absolute";
				dummy.style.height="10px";
				dummy.style.width="150px";
				dummy.style.top=margint;
				margint+=15;
				dummy.appendChild(k);
				cnt++;
				
				var bd=document.getElementById("d1").appendChild(dummy);

				$(dummy).animate({left: '300px'},1000,inner);
				$(dummy).animate({left: '500px' },1000);
				}				
			}
			return inner;	
		}
		
    	$("#b1").click(repeatme(10));

    	$("#refresh").click(function(){
    		console.log("refresh clicked");
    			//$(".an1").stop(true,true);
    			$(".an1").clearQueue();		
    			$(".an1").stop();
    			$("#d1").empty();
    			repeatme(10)();
    		});
	});
}

)();



