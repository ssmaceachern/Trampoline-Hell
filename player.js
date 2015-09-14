/**
 * @author Sean
 */

var Player = function(x, y){
	this.x = x;
	this.y = y;
	this.w = 2;
	this.h = 4;
	
	this.moveSpeed = 1/30;
	this.horizontalSpeed = 1;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_GRAY_DARK );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_GRAY_DARK );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};

Player.prototype.Update = function(){
	this.y += Player.moveSpeed;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	this.y = 0;
};