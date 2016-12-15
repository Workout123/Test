
(function() {

	var cities = ["Chennai", "Bangalore","Bombay","Delhi","London","Trichy"];
	var desc = [];
	var left = 0;
	var top = 50;
	var id;
	var count =0;
	var arr = [];
	for(var i=0;i<cities.length;i++){
	        desc[i]="This is "+cities[i];
	}

	function disp(i,top){
		return function(){
			document.getElementById("cit").innerHTML = desc[i];
			var ele = document.getElementById("para");
			ele.style.left = left + "px";
			ele.style.top = top + "px";
		};
	}

	function animation(){
		return function(){
			var ele1 = document.getElementById("1");
			var ele2 = document.getElementById("2");
			var step = 0;
			var lefts = 0;
			var left2 = 0;
			var left3 = 0;
			
			var diff_time = 0;
			var current;
			var curr_time;
			var start = new Date();
			console.log("ani start->" + start.getTime());
			var start_time = start.getTime();
			diff_time = start_time;
			console.log("in animation" + step + " left -> " + lefts);
			id = setInterval( function main(){
				ele1.style.left = lefts + "px";
				lefts = lefts+1;
				if(lefts >1000){
					lefts = 0;
				}

				var i=0;
				if(count < 10){
					for(i=count*1000000;i<(count*1000000)+1000000;i++){
				 		arr[i]=i;
				 	}
				 	console.log(" i: " + i);
				 }
				
				ele2.style.left = left2 + "px";	
				left2 = left2 + 1;	
				current = new Date();
				curr_time = current.getTime();
				var diff = (curr_time - diff_time);
				if(left2 < (diff)/16){
					left2 += ((diff)/16 - left2);
				}
				console.log(left2);
				if(left2 >1000){
					console.log("2 4m 1st");
					left2 = 0;
					diff_time = curr_time;

				}
				
				 
				console.log(lefts + " PP " + left2 );
				count +=1;	
			} , 16);
		}
	}

	function aniStop(){
		return function(){
			clearInterval(id);
		}
	}

	myFunction();
	function myFunction() {
		for(var i=0;i<cities.length;i++){
			var br = document.createElement("br");
			var x = document.createElement("BUTTON");
			var t = document.createTextNode(cities[i]);
			x.appendChild(t);
			x.setAttribute("id","bu"+i.toString());
			x.setAttribute("class","buttonS");
			var wrap=document.getElementById("leftside");
			wrap.appendChild(x);
			wrap.appendChild(br);
			//left = left + (i*50);
			top = top + (i*10);
			document.getElementById("bu"+i.toString()).addEventListener("click",disp(i,top));

		}
		var wrap=document.getElementById("leftside");
		var x = document.createElement("BUTTON");
		var x1 = document.createElement("BUTTON");
		var t = document.createTextNode("start");
		var t1 = document.createTextNode("stop");
		x.appendChild(t);
		x1.appendChild(t1);
		x.setAttribute("id","start");
		x1.setAttribute("id","stop");
		wrap.appendChild(x);
		wrap.appendChild(x1);
		document.getElementById("start").addEventListener("click",animation());
		document.getElementById("stop").addEventListener("click",aniStop());
	}
}) ();

