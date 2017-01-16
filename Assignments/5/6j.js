$( document ).ready(function(){
	
	var but = $("<input/>",{
		type : "button",
		value : "Start"	
	}).on("click",function(e){
		var i = 1
		var repeat = 14;	
		var wid = $(document).width(); 
		(function newNumber()
		{
			if (i < repeat)
			{	
				console.log(i);
				var h4 = $("<h4/>",{
					id : "num"+i
				}).css({
					left: "1em",
					position: "absolute",
					top: i*25 ,
				}).html(i).insertAfter("#but2").animate({
					left : wid/4
				},2000);
				i++;
				newNumber();
				h4.animate({
					left : wid/2
				},2000);
				
				
							
			}
			else
			{
				return;
			}	
		})();
		
		
	});
	$("body").append(but);

	var but = $("<input/>",{
		type : "button",
		value : "Reset"	,
		id : "but2"
	}).on("click",function(e){
		var target = e.target ;
		num = target.nextSibling;
		for (var i = 1; i < 13; i++)
		{
			clearTimeout(num.timer);
			num.style.left = "-1em"; 
			num = num.nextSibling;
		}
	});
	$("body").append(but);



});
