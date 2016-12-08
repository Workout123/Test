function givedetailsParis()
{
 //var cityChoosed=document.getElementsByName("cityname");
// var i;
// for(i=0;i<cityChoosed.length;i++)
// {
//	if(cityChoosed[i].id=="paris")
//	{
		document.getElementById("part2").innerHTML="Paris is a major european city and a gloabel centere for art,fashion and culture.";
//	}
//	else if (cityChoosed[i].id=="germany")
//	{
//		document.getElementById("part2").innerHTML="germany is western european city with landscape of forests,north sea beaches.";
//	}

// }
}
function givedetailsGermany()
{
	document.getElementById("part2").innerHTML="germany is western european city with landscape of forests,north sea beaches.";
}
function givedetailsLondon()
{
        document.getElementById("part2").innerHTML="London the capital of england is a 21st century city.";
}
function givedetails(clickedbutton)
{
	if(clickedbutton=="paris")
		document.getElementById("part2").innerHTML="Paris is a major european city and a gloabel centere for art,fashion and culture.";
	else if(clickedbutton=="germany")
		document.getElementById("part2").innerHTML="germany is western european city with landscape of forests,north sea beaches.";
	else if(clickedbutton=="london")
		document.getElementById("part2").innerHTML="London the capital of england is a 21st century city.";

}

