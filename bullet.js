/**
 * @author Sean
 */

var Bullet = function(x, y, width, height, spd){
	GameObject.call(this, x, y, width, height, "Bullet");
	
	this.moveSpeed = spd;
	
	/*
	 * Load the sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor (this.sprite, PS.COLOR_BLUE);
	
	//PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
};

GameObject.prototype.impart(Bullet);

Bullet.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		//PS.debug(this.y + "\n");
		//PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_BLACK );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};

Bullet.prototype.Update = function(){
	this.x += this.moveSpeed;
};

Bullet.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = Game.GetObjectBySprite(s2);
	if(CollidingObject == null){
		return;
	}
	
	if(CollidingObject.name == "Wall" || CollidingObject.name == "Trampoline"){
		this.remove = true;
	}
	
};
