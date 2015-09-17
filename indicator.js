/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Indicator = function(player, trampoline, level){
	this.player = player;
	this.target = trampoline;
	
	this.x = this.target.x;
	this.y = this.target.y;
	this.w = 3;
	this.h = 3;
	this.name = "Indicator";
	
	this.level = level;
	
	/*
	 * Load the player sprite
	 */
	this.imageID = PS.imageLoad("indicator.png", this.spriteLoader.bind(this), 4);
	
	level.addObject(this);
};

GameObject.prototype.impart(Indicator);

Indicator.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;	
	
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
			this.imageID = PS.imageLoad("indicator.png", this.spriteLoader.bind(this), 4);
	}
};

Indicator.prototype.Update = function(){
	
	if(this.player.y > 0)
	{
		this.x = this.target.x + 1;
		this.y = this.player.y + 5;	
	}
	
	
	//PS.debug("Player Y Position:" + this.y + "\n");
};

Indicator.prototype.setLevel = function(level)
{
	this.level = level;
};