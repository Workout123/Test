(
function()
{
	var b=document.getElementById("b1");
	b.addEventListener('click',animate());

	function animate()
	{
		var b2=document.createElement("button");
	        b2.addEventListener('click',function(){cleartime();});
       		var t=document.createTextNode("Click to Stop");
	        b2.appendChild(t);
	        document.getElementsByTagName("body")[0].appendChild(b2);

		var i=0;
		var arr=[];
		var margint=10;
		var marginl=10;
		var chnl=[];
		for(i=0 ; i<100000000; i++)
		{
			arr[i]=document.createElement("div");
			arr[i].innerHTML="qwertyqwertyqwerty";
			arr[i].style.position="absolute";
			arr[i].style.top=margint+'px';
			arr[i].style.left=marginl+'px';
			chnl[i]=marginl;
			margint+=10;
			document.getElementById("d1").appendChild(arr[i]);
		}
		var stopper=[]; 
		function  inner()
		{
			//alert("here : "+arr.length);
			for(var i=0;i<arr.length;i++)
			{
				stopper[i]=setInterval(moveit(i),10);
			}
			console.log("set interval triggered for all");
		}

		function moveit(ll)
                {
			function inner2()
			{
                     if(chnl[ll] === 1000)
                            chnl[ll]=0;
                     chnl[ll]+=1;
                     arr[ll].style.left=chnl[ll]+'px';
		if(ll===1)
                     console.log("ll: "+ll+"chnl: "+chnl[ll]+" time: "+new Date().getTime());
			}
			return inner2;
                }

		function cleartime()
		{
			for(var i=0;i<arr.length;i++)
			{
				clearInterval(stopper[i]);
//				console.log("stopped: "+i);
			}
		}
		return inner;
	} 
}
)();
