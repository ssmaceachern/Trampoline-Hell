/**
 * @author Sean
 */

var Player = function(x, y, level){
	this.x = x;
	this.y = y;
	this.w = 2;
	this.h = 4;
	this.name = "Player";
	
	this.level = level;
	
	this.moveSpeed = 1/30;
	this.ySpeed = 1/30;
	this.yMaxSpeed = 2;
	this.yAcceleration = 1/600;
	
	this.horizontalSpeed = 1;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_GRAY_DARK );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	level.addObject(this);
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
	if(Player.ySpeed < Player.yMaxSpeed){
		Player.ySpeed += Player.yAcceleration;
	}
	
	this.y += Player.ySpeed;
	//PS.debug("Player Y Position:" + this.y + "\n");
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	//this.y = 0;
	//PS.debug("Collision\n");
	
	// if(Level != null){
		var CollidingObject = this.level.getObjectBySprite(s2);
		if(CollidingObject.name == "Trampoline"){
			 Player.ySpeed = Player.ySpeed * -1.2;
		}
		
		if(CollidingObject.name == "Wall"){
			 Player.ySpeed = 0;
			 Player.yAcceleration = 0;
		}
		
		if(CollidingObject.name == "Spawnable"){
			if(Player.ySpeed < 0){
				if(CollidingObject.type == 0){
					Player.ySpeed = (Player.ySpeed * 1.1);
				}
				else{
					Player.ySpeed = (Player.ySpeed / 1.5);
				}
				//this.level.removeObject(CollidingObject);
				//PS.spriteDelete(CollidingObject.sprite);
			}
		}
	// }
	
};