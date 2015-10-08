/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Indicator = function(){
	this.player = Game.GetObjectByName("Player");
	this.target = Game.GetObjectByName("Trampoline");
	
	this.x = this.target.x;
	this.y = this.target.y;
	this.w = 3;
	this.h = 2;
	this.name = "Indicator";
	
	/*
	 * Load the player sprite
	 */
	this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
};

GameObject.prototype.impart(Indicator);

Indicator.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
	}
	
	if(this.player.y < 16)
	{
		PS.spriteShow ( this.sprite, true );
	}else if(this.sprite != null){
		PS.spriteShow ( this.sprite, false );
	}
};

Indicator.prototype.Update = function(){
	
	if(this.player == undefined || this.player == null){
		this.player = Game.GetObjectByName("Player");
		this.target = Game.GetObjectByName("Trampoline");
	}
	
	this.x = this.target.x + 1;
	this.y = Math.floor(this.player.y) + 13;	
	
	//PS.debug("Y Position:" + this.y + "\n");
};