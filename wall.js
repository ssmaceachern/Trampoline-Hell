/**
 * @author Sean
 */

var Wall = function(x, y, width, height){
	GameObject.call(this, x, y, width, height, "Wall");
	
	this.moveSpeed = 1/30;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor (this.sprite, PS.COLOR_RED);
	PS.spriteMove(this.sprite, this.x, this.y);
};

GameObject.prototype.impart(Wall);

Wall.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		//PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};

Wall.prototype.Update = function(){
	
	//PS.debug(this.x +", " + this.y + "\n");
	
};
