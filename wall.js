/**
 * @author Sean
 */

var Wall = function(x, y, width, height, level){
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.name = "Wall";
	
	this.level = level;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	level.addObject(this);
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
