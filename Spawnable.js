/**
 * @author Jonas
 */

var Spawnable = function(x, y, width, height, type, level){
	GameObject.call(this, x, y, width, height, "Spawnable");
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
		//this.imageID = PS.imageLoad("holyjetpack.png", this.spriteLoader.bind(this), 4);
		PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
		//PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}
	else{
		//this.imageID = PS.imageLoad("lostsoul.png", this.spriteLoader.bind(this), 4);
		PS.spriteSolidColor(this.sprite, PS.COLOR_RED);
		//PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}
	//PS.spriteMove(this.sprite, this.x, this.y);
	if(this.sprite != null || this.sprite != undefined)
	{
		PS.spriteMove(this.sprite, this.x, this.y);
		PS.spriteCollide(this.sprite, this.Collision.bind(this));	
	}
	
	//PS.debug("Spawn init: " + this.sprite + "\n");
	
	level.addObject(this);
};

GameObject.prototype.impart(Spawnable);

Spawnable.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null || this.sprite != undefined){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		if (this.type == 0){
			this.imageID = PS.imageLoad("holyjetpack.png", this.spriteLoader.bind(this), 4);
			//PS.spriteCollide(this.sprite, this.Collision.bind(this));
		}
		else
		{
			this.imageID = PS.imageLoad("lostsoul.png", this.spriteLoader.bind(this), 4);
			//PS.spriteCollide(this.sprite, this.Collision.bind(this));		
		}
		//PS.debug(this.sprite);
		PS.spriteMove(this.sprite, this.x, this.y);
		PS.spriteCollide(this.sprite, this.Collision.bind(this));
	}
};

Spawnable.prototype.Collision = function(s1, p1, s2, p2, type){
	var CollidingObject = this.level.getObjectBySprite(s2);
	if(CollidingObject != null && CollidingObject.name == "Player"){
		//this.level.removeObject(this);
		//PS.debug("Collision!\n")
		/*
		 * So hacky
		 */
		this.x = 35;
		this.y = 35;
	}
};
