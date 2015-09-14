/**
 * @author Sean
 */

var Trampoline = function(x, y){
	this.x = x;
	this.y = y;
	this.w = 4;
	this.h = 2;
	this.name = "Trampoline";
	
	this.moveSpeed = 1;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
};

GameObject.prototype.impart(Trampoline);

Trampoline.prototype.Update = function(){
	
};

Trampoline.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};