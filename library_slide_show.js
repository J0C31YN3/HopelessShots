"use strict"
var slideshow =
{
	timer: null,
	nodes: 
	{
		image: null, 
		caption: null
	},
	
	img:
	{
		cache: [],
		counter: 0
	},
	
	play: true,
	speed: 2000,
	
	loadImages: function(slides)
	{
		var image;
		
		for(var i in slides)
		{
			//preload image, copy title properties, and save in array
				image = new Image();
				image.src = slides[i].href;
				this.img.cache.push(image);
		}
		return this;
	},
	
	startSlideShow: function()
	{
		if(arguments.length === 2)
		{
			this.nodes.image = arguments[0];
			this.nodes.caption = arguments[1];
		}
		
		//setInterval is invoked normally, so 'this' in displayNextImage
			//will be the window object or undefined. Use bind to make sure 'this'
				//in displayNextImage is the slideshow object instead.
			
			this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
			
			return this;
	},
	
	displayNextImage: function()
	{
		this.img.counter = ++this.img.counter % this.img.cache.length;
		var image = this.img.cache[this.img.counter];
		this.nodes.image.src = image.src;
	},
};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	