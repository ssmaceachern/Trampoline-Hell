/**
 * @author Jonas
 */

var Spawnable = function(x, y, width, height, type){
	GameObject.call(this, x, y, width, height, "Spawnable");
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
	this.name = "Spawnable";
	this.type = type;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	
	if (this.type == 0){
		//this.imageID = PS.imageLoad("holyjetpack.png", this.spriteLoader.bind(this), 4);
		PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
		//PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}
	else{
		//this.imageID = PS.imageLoad("lostsoul.png", this.spriteLoader.bind(this), 4);
		PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
		//PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}

	if(this.sprite != null || this.sprite != undefined)
	{
		PS.spriteMove(this.sprite, this.x, this.y);
		PS.spriteCollide(this.sprite, this.Collision.bind(this));	
	}

};

GameObject.prototype.impart(Spawnable);

Spawnable.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null || this.sprite != undefined){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		if (this.type == 0){
			PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
			//this.imageID = PS.imageLoad("holyjetpack.png", this.spriteLoader.bind(this), 4);
			//PS.spriteCollide(this.sprite, this.Collision.bind(this));
		}
		else
		{
			PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
			//this.imageID = PS.imageLoad("lostsoul.png", this.spriteLoader.bind(this), 4);
			//PS.spriteCollide(this.sprite, this.Collision.bind(this));		
		}
		//PS.debug(this.sprite);
		PS.spriteMove(this.sprite, this.x, this.y);
		//PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}
};

Spawnable.prototype.Collision = function(s1, p1, s2, p2, type){
	var CollidingObject = this.level.getObjectBySprite(s2);
	if(CollidingObject != null && CollidingObject.name == "Player"){
		
		this.x = 35;
		this.y = 35;
	}
};
