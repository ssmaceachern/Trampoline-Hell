/**
 * @author Jonas
 */

var Spawnable = function(x, y, width, height, type, level){
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.name = "Spawnable";
	this.type = type;
	this.level = level;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	if (this.type == 0){
		PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
	}
	else{
		PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
	}
	//PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	level.addObject(this);
};

GameObject.prototype.impart(Spawnable);

Spawnable.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		if (this.type == 0){
			PS.spriteSolidColor(this.sprite, PS.COLOR_YELLOW);
		}
		else{
			PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
		}
		//PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};
