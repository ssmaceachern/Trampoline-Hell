/**
 * @author Sean
 */

var Wall = function(x, y, width, height){
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.name = "Wall";
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
	PS.spriteMove(this.sprite, this.x, this.y);
};

GameObject.prototype.impart(Wall);

Wall.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};
