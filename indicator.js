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
	
	if(this.target.y > 35)
	{
		PS.spriteShow ( this.sprite, true );
	}else if(this.sprite != null){
		PS.spriteShow ( this.sprite, false );
	}
};

Indicator.prototype.Update = function(){
	
	this.x = this.target.x + 1;
	this.y = Math.floor(this.player.y) + 13;	
	
	//PS.debug("Y Position:" + this.y + "\n");
};

Indicator.prototype.setLevel = function(level)
{
	this.level = level;
};