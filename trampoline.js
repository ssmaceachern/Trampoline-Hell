/**
 * @author Sean
 */

var Trampoline = function(x, y){
	GameObject.call(this, x, y, 11, 2, "Trampoline");
	
	//Random init direction
	this.moveSpeed = 1/30 * (Math.round(Math.random()) * 2 - 1);
	
	/*
	 * Load the trampoline sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	
	Level.trampolines.push(this);
};

GameObject.prototype.impart(Trampoline);

Trampoline.prototype.Update = function(){
	if (this.x > (31 - this.w) || this.x < 2){
		this.moveSpeed = this.moveSpeed * -1;
	}

	this.x += this.moveSpeed;
	
	//PS.debug(this.name + ": " + this.x +", " + this.y + "\n");

	//PS.debug(this.name + ": " + this.x +", " + this.y + "\n");
};

Trampoline.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		//PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};
