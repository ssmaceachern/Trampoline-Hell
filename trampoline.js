/**
 * @author Sean
 */

var Trampoline = function(x, y, level){
	this.x = x;
	this.y = y;
	this.w = 5;
	this.h = 2;
	this.name = "Trampoline";
	
	this.level = level;
	
	this.moveSpeed = 1/30;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	level.addObject(this);
};

GameObject.prototype.impart(Trampoline);

Trampoline.prototype.Update = function(){
	this.x += this.moveSpeed;
	
	//PS.debug(this.level.objects.length);
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

Trampoline.prototype.setLevel = function(level)
{
	this.level = level;
};

Trampoline.prototype.Collision = function(s1, p1, s2, p2, type){
	var CollidedObject = this.level.getObjectBySprite(s2);
	//PS.debug(CollidedObject.name + "\n");
	
	if(CollidedObject.name == "Wall")
	{
		this.moveSpeed = this.moveSpeed * -1;
	}
};
