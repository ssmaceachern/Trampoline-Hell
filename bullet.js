/**
 * @author Sean
 */

var Bullet = function(x, y, width, height){
	GameObject.call(this, x, y, width, height, "Bullet");
	
	this.moveSpeed = 1/30;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor (this.sprite, PS.COLOR_BLUE);
	PS.spriteMove(this.sprite, this.x, this.y);
};

GameObject.prototype.impart(Bullet);

Bullet.prototype.Draw = function(offsetX, offsetY){
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

Bullet.prototype.Update = function(){
	
	this.y += this.moveSpeed;
	
};
