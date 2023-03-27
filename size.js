"use strict"
var $ = function(id) 
{
	return document.getElementById(id); 
};

var calculatePricePer = function(pictureType, numOfPrints)
{
	var pricePer = 0;
	
	if(pictureType === "extraSmall")
	{
			pricePer = 2;		
	}
	
	else if(pictureType === "small")
	{
		pricePer = 4;
	}
	
	else if(pictureType === "medium")
	{
		pricePer = 6;
	}
	
	else if(pictureType === "large")
	{
		pricePer = 8;
	}
	
	else if(pictureType === "extraLarge")
	{
		pricePer = 10;
	}
	return pricePer;
}

/*-----------------------------------------------------------------------------------------*/

var processEntries = function()
{
	var total;
	var pricePer;
	
	//get values from page
		var pictureType = $("type").value;
		var numOfPrints = parseFloat($("prints").value);
		
	//call function to get price per photo
		pricePer = calculatePricePer(pictureType, numOfPrints);
		
	//calculate and display new total	
		total = numOfPrints * pricePer;
		
		$("pricePer").value = pricePer.toFixed(2);
		$("total").value = total.toFixed(2);
};

window.onload = function()
{
	$("calculate").onclick = processEntries;
	$("type").focus();
}




























