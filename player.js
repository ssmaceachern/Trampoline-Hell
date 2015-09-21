/**
 * @author Sean
 */

var Player = function(x, y, level){
	this.x = x;
	this.y = y;
	this.w = 2;
	this.h = 4;
	this.name = "Player";
	
	this.color = PS.COLOR_ORANGE;
	
	this.level = level;
	
	this.moveSpeed = 1/30;
	this.ySpeed = 1/30;
	this.yMaxSpeed = 5;
	this.yAcceleration = 1/120;
	
	this.xSpeed = 1;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	level.addObject(this);
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	// var afterImage = PS.spriteSolid(this.w, this.h);
	// PS.spriteSolidColor(afterImage, this.color - 30);
	// PS.spriteMove(afterImage, this.x, this.y - Math.sign(this.ySpeed));
	
	
	this.color = PS.COLOR_ORANGE + (ScoreHeight/10);
	//PS.debug("Color: " + this.color + "\n");
	PS.spriteSolidColor ( this.sprite, this.color );
	
	
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
	
	
	//PS.spriteDelete(afterImage);
};

Player.prototype.Update = function(){
	if(this.x > 28)
	{
		this.x--;
	}else if(this.x < 2){
		this.x++;
	}
	
	this.y += Player.ySpeed;
	
	//PS.debug("Player Y:" + this.y + "\n");
	
	if(this.ySpeed < this.yMaxSpeed){
		this.ySpeed += this.yAcceleration;
	}else{
		this.ySpeed = this.yMaxSpeed;
	}
	
	//PS.debug("Player Y2:" + this.y + "\n");
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = this.level.getObjectBySprite(s2);
	if(CollidingObject == null){
		return;
	}
	
	if(CollidingObject.name == "Trampoline"){
		 Player.ySpeed = Player.ySpeed * -1.2;
	}
	
	if(CollidingObject.name == "Wall"){
		Reset();
	}
	
	if(CollidingObject.name == "Spawnable"){
		if(Player.ySpeed < 0){
			if(CollidingObject.type == 0){
				Player.ySpeed -= 0.05;
			}
			else{
				Player.ySpeed += 0.05;
			}
			
		}
	}
};