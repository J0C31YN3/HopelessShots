"use strict";
var $ = function(id) 
{
	return document.getElementById(id); 
};

var navigate = 
{
    showForm: function() 
	{
        $("registration_form").setAttribute("class","show");
        $("registration_result").setAttribute("class","hide");
    },
	
    showResults: function() 
	{
        $("registration_form").setAttribute("class","hide");
        $("registration_result").setAttribute("class","show");
    }
};

function listBoxResult()
{
	var spanresult = document.getElementById("deal_error");
	spanresult.value = "";
	var x = document.getElementById("packageDeal");
	for(var i=0; i<x.options.length; i++)
	{
		if(x.options[i].selected === true)
		{
			spanresult.value += x.options[i].value + " ";
			document.getElementById("deal_error").innerHTML = spanresult.value;
			document.getElementById("deal_error").style.color = "light blue";
		}
	}
						
	if(document.getElementById("deal_error").value == "")
	{
		document.getElementById("deal_error").innerHTML= "* Please select atleast one list item!";
		document.getElementById("deal_error").style.color="red";
	}
};
	