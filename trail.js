/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Trail = function(parent, x, y, lifespan){
	GameObject.call(this, x, y, parent.w, parent.h, "Trail");
	
	this.target = parent;
	this.lifespan = lifespan;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(parent.w, parent.h);
	PS.spriteSolidColor (this.sprite, parent.color);
	PS.spriteMove(this.sprite, this.x, this.y);
	
	Game.addObject(this);
};

GameObject.prototype.impart(Trail);

Trail.prototype.Draw = function(offsetX, offsetY){
	//this.x = this.x + offsetX;
	//this.y = this.y + offsetY;
};

Trail.prototype.Update = function(){
	if(this.lifespan > 1){
		this.lifespan--;
	}else{
		this.remove = true;
	}
	
	PS.spriteSolidAlpha (this.sprite, this.lifespan << 4);
};