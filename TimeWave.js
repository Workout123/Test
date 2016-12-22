
(function() {
	
	var br = document.createElement("br");
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Test");
	x.appendChild(t);
	var x1 = document.createElement("BUTTON");
	var t1 = document.createTextNode("refresh");
	x1.appendChild(t1);
	var wrap=document.getElementById("leftside");
	x.addEventListener('click',createEle);
	x1.addEventListener('click',refresh);
	document.body.appendChild(x);
	document.body.appendChild(br);
	document.body.appendChild(x1);


	function createEle(){
		//alert(" in createEle ");
		var arr = [];
		var count =0;
		var margtop=20;
		var margleft=10;
		var chnl=[];
		var stopper=[]; 
		var interval = 10;
		var id, id2;


		id = setTimeout(element(),0);
		function element(){
		//	console.log(" ELEMENT");
			return function(){
		//	console.log (" in ele : " + count);
			if(count < 2){
				for(var i=(count*interval);i<(count*interval) + interval ;i++){
					arr[i] = document.createElement("div");
					arr[i].setAttribute("id",i.toString());
					arr[i].setAttribute("class", "arr");
					arr[i].innerHTML = " asdf ";
					arr[i].style.position="absolute";
					arr[i].style.top=margtop+'px';
					chnl[i]=margleft;
					margtop+=10;
					wrap.appendChild(arr[i]);
			}
			count ++;
			console.log("in element : " + count);
			setTimeout(element(),0);
		} else{
			clearTimeout(id);
			id2 = setTimeout(moveit(0),0);
		}
		};
	}
	
	function moveit(j){
		function inner2(){
			console.log("in moveit : " + j);
			if(j< arr.length){
				var start = new Date();
				var start_time = start.getTime();
				document.getElementById(j.toString()).innerHTML = " PIR ";
				$(arr[j]).animate({left: "250px"},'fast',inner2);
				j++;
				$(arr[j-1]).animate({left: "500px"},'fast');
    	   		}else{
       				clearTimeout(id2);
       			}
       		}
			return inner2;
		};
	}

	

	function refresh(){
		console.log("refreshed");
		$(".arr").stop();
		$(".arr").remove();
		//$("#leftside").removeClass("arr");
	}
	 
}) ();

