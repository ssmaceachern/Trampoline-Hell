/**
 * @author Sean
 */

var Trampoline = function(x, y){
	this.x = x;
	this.y = y;
	this.w = 4;
	this.h = 2;
	this.name = "Trampoline";
	
	this.moveSpeed = 1/30;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
};

GameObject.prototype.impart(Trampoline);

Trampoline.prototype.Update = function(){
	if (this.x + this.moveSpeed > 28 || this.x + this.moveSpeed < 1){
		this.moveSpeed = this.moveSpeed * -1;
	}
	this.x += this.moveSpeed;
};

Trampoline.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};
/*
Trampoline.prototype.Collision = function(s1, p1, s2, p2, type){
	var CollidingObject = Level.prototype.getObjectBySprite(s2);
	PS.debug(CollidingObject.name);
	if(CollidingObject.name == "Wall"){
		this.moveSpeed *= -1;
	}
	
};
*/