(
function()
{
	
	var b2=document.createElement("button");
	b2.addEventListener('click',function(){rectify();});
	var t=document.createTextNode("Create Elements");
	b2.appendChild(t);
	document.getElementsByTagName("body")[0].appendChild(b2);

	var b3=document.createElement("button");
	b3.addEventListener('click',function(){clearTimer();});
	var t2=document.createTextNode("Enuf Elements");
	b3.appendChild(t2);
	document.getElementsByTagName("body")[0].appendChild(b3);

	var curele=0;
	var max=100000000;
	var timer;
	var arr=[];
	var margint=10;
	function rectify()
	{
		timer=setInterval(createThem,1000);
		console.log("timer started");
	}
	
	function clearTimer()
	{
		clearInterval(timer);
		console.log("timer stopped");
	}	
	function createThem()
	{
		
		console.log("Next ele to be created : "+curele);
		for(i=0;i<1000;i++)
		{
		  if(curele<max)
		  {
			arr[curele]=document.createElement("div");
			arr[curele].innerHTML="qwerty";
			arr[curele].style.position="absolute";
			arr[curele].style.top=margint+'px';
			arr[curele].style.left='10'+'px';
			margint+=15;
			document.getElementById("d1").appendChild(arr[curele]);
			curele+=1;
		}
		else
			console.log("Max elements created");
		}
	} 

}
)();
