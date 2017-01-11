(
	function()
	{
		console.log("in fucntion");
		jQuery.extend(
		{
    		xyz: function()
    			{
        			console.log('xyz');
    			}
		});
		console.log($.xyz());

		jQuery.extend(
		{
    		xyz: function()
    			{
        			console.log('xyz');
    			}
		});
		console.log($.xyz());

	}
)();