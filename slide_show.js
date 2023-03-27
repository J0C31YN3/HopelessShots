"use strict"
var $ = function(id)
{
	return document.getElementById(id);
};

window.onload = function()
{
	var slides =
	[
		{
			href: "images/marySunflower.jpg", 
		},
		
		{
			href: "images/witchDeja.jpg", 
		},
		
		{
			href: "images/rainbow.jpg", 
		},
		
		{
			href: "images/sucker.jpg", 
		},
		
		{
			href: "images/fairyLights.jpg", 
		},
	];
	
	slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
};