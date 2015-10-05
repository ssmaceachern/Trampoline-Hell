/**
 * @author Sean
 */

var Player = function(x, y){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	
	this.moveSpeed = 1/30;
	this.ySpeed = 1/30;
	this.yMaxSpeed = 5;
	this.yAcceleration = 1/120;
	
	this.xSpeed = 1;
	
	this.collidable = true;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	var colorTone = ScoreHeight/10;
	this.color = PS.makeRGB(colorTone,colorTone,colorTone);
	//PS.debug("Color: " + this.color + "\n");
	PS.spriteSolidColor ( this.sprite, this.color );
	
	
	
	if(this.sprite != null){
		
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, this.color );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
	
	};

Player.prototype.Update = function(){
	
	if(this.x > 28)
	{
		this.x--;
	}else if(this.x < 2){
		this.x++;
	}
	
	this.y += this.ySpeed;
		
	if(this.ySpeed < this.yMaxSpeed){
		this.ySpeed += this.yAcceleration;
	}else{
		this.ySpeed = this.yMaxSpeed;
	}
	
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = this.level.getObjectBySprite(s2);
	if(CollidingObject == null){
		return;
	}
	
	if(CollidingObject.name == "Trampoline"){
		PS.debug("Hello\n");
		this.ySpeed = this.ySpeed * -1.2;
	}
	
	if(CollidingObject.name == "Wall"){
		
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