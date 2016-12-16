
(function() {
	var margtop=10;
	var margleft=10;
	var chnl=[];
	var br = document.createElement("br");
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Test");
	x.appendChild(t);
	var x1 = document.createElement("BUTTON");
	var t1 = document.createTextNode("stop");
	x1.appendChild(t1);
	var wrap=document.getElementById("leftside");
	x.addEventListener('click',createEle);
	x1.addEventListener('click',stop);
	document.body.appendChild(x);
	document.body.appendChild(br);
	document.body.appendChild(x1);
	var stopper=[]; 
	var arr = [];
	var count =0;
	var inte = 1000;
	var id;

	function createEle(){
		alert(" in createEle ");
		id = setInterval(animate(),100);
		
	}

	function animate(){
		return function(){
		console.log(" in animate : " + count);
		if(count <= 10000 ){
			for(var i=(count*inte);i<(count*inte) + inte ;i++){
				arr[i] = document.createElement("div");
				arr[i].innerHTML = " asdfg ";
				arr[i].style.position="absolute";
				arr[i].style.top=margtop+'px';
				arr[i].style.left=margleft+'px';
				chnl[i]=margleft;
				margtop+=10;
				wrap.appendChild(arr[i]);
			}
			//for(var i=count*1;i<(count*inte) + inte ;i++){
			//	stopper[i]=setInterval(moveit(i),10);
		//	}
			count += 1;
		} else {
			//alert("set interval triggered for all");
			alert (" arr length : " + arr.length);
			clearInterval(id);
		}
	};
	}

	function moveit(j){
		function inner2(){
            if(chnl[j] === 1000)
                chnl[j]=0;
            chnl[j]+=1;
            arr[j].style.left=chnl[j]+'px';
			if(j===1)
                console.log("j: "+j+"chnl: "+chnl[j]+" time: "+new Date().getTime());
		}
		return inner2;
    }

	function stop(){
		//for(var j=0;j< arr.length;j++){
				clearInterval(id);
		//}
	}
	 
}) ();

