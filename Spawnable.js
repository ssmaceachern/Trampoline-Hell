/**
 * @author Jonas
 */

var Spawnable = function(x, y, width, height, type, level){
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.name = "Spawnable";
	this.type = type;
	this.level = level;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	if (this.type == 0){
		PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
	}
	else{
		PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
	}
	PS.spriteMove(this.sprite, this.x, this.y);
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	level.addObject(this);
};

GameObject.prototype.impart(Spawnable);

Spawnable.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		if (this.type == 0){
			PS.spriteSolidColor(this.sprite, PS.COLOR_YELLOW);
		}
		else{
			PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
		}
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};

Spawnable.prototype.Collision = function(s1, p1, s2, p2, type){
	var CollidingObject = this.level.getObjectBySprite(s2);
	if(CollidingObject != null && CollidingObject.name == "Player"){
		//this.level.removeObject(this);
		
		/*
		 * So hacky
		 */
		this.x = 35;
		this.y = 35;
	}
};
