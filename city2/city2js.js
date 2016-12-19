(
function() 
{
	var clist={};
	clist["london"] = {des: "Welcome to Visit London , your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information.",
			   x  : 100,
			   y  : 150
			  };
	clist["paris"]  = {des: "Every year as summer draws to a close, Paris museums and galleries come up with new ways for visitors to experience art and history and explore our changing planet. This autumn a strong line-up of fascinating exhibitions, staged in over 100 museums, invites us to discover the rich diversity of the world around us.",
			   x  : 110,
			   y  : 200
			  };	
	clist["germay"] = {des: "As Europe's largest economy and second most populous nation (after Russia), Germany is a key member of the continent's economic, political, and defense organizations. ",
			   x  :  120,
			   y  :  250
			  };

	function getdes(k)
	{
		return clist[k].des;
	}
	function getx(k)
	{
		return clist[k].x;
	}
	function gety(k)
	{	
		return clist[k].y;
	}

	var nme=document.getElementById("nme");
	var names=Object.keys(clist);
	var body=document.getElementsByTagName("body")[0];

	for(var i in names)
	{
		var b=document.createElement("BUTTON");
		var t=document.createTextNode(names[i]);
		b.appendChild(t);

		nme.appendChild(b);
		var brk=document.createElement("br");
		nme.appendChild(brk);
		var brk2=document.createElement("br");
		nme.appendChild(brk2);		
//alert(""+names[i]);
		b.addEventListener("click",create_handler(names[i]));
//b.addEventListener("click",function(){alert("names : "+i);document.getElementById("puthere").innerHTML=get(names[i])});

	}

	function create_handler(id) {
//		alert("in handler : "+id);
		return function()
			{
//				alert("inner func: "+id+ " x:  "+getx(id)+"  y: "+gety(id));
				document.getElementById("docss").style.position="absolute";
				document.getElementById("docss").style.top=getx(id)+"px";
				document.getElementById("docss").style.right=gety(id)+"px";
 				document.getElementById("docss").innerHTML=getdes(id);
			};
//		alert("after dec in context of outer");
	}

}
)();
	
