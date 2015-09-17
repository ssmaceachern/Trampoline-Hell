/**
 * @author Sean
 */

var Player = function(x, y){
	this.x = x;
	this.y = y;
	this.w = 2;
	this.h = 4;
	this.name = "Player";
	
	this.moveSpeed = 1/30;
	this.horizontalSpeed = 1;
	
	this.bounce_count = 0;
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
	//this.y = 0;
	//PS.debug("Collision\n");
	var colliding_object = Level.getObjectbySprite(s2);
	PS.debug(colliding_object.name);
	PS.debug(s2);
	if (colliding_object.name == "Trampoline"){
		PS.debug("collided with tramp");
		Player.moveSpeed = Player.moveSpeed * -1;
	}
	if (colliding_object.name == "Wall"){
		if (this.x > 15){
			--this.x;
		}
		else if(this.x < 15){
			++this.x;
		}
	}
};