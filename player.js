/**
 * @author Sean
 */

var PlayerHeight;

var Player = function(x, y){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	
	PlayerHeight = 0;
	
	this.moveSpeed = 1/30;
	this.ySpeed = 1/30;
	this.yMaxSpeed = 1;
	this.yAcceleration = 1/120;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	this.trampolineIndicator = new Indicator(this);
	
	Game.addObject(this.trampolineIndicator);
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, this.color );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
	
};

Player.prototype.Update = function(){
	
	if((Game.getKey(PS.KEY_ARROW_LEFT) === 1))
	{
		this.x -= 0.5;
	}
	
	if((Game.getKey(PS.KEY_ARROW_RIGHT) === 1))
	{
		this.x += 0.5;				
	}
	
	if((Game.getKey(PS.KEY_ARROW_DOWN) === 1))
	{
		this.ySpeed += 0.05;				
	}
	
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
	
	//PS.debug(this.x +", " + this.y + "\n");
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = Game.GetObjectBySprite(s2);
	if(CollidingObject == null){
		return;
	}
	
	if(CollidingObject.name == "Trampoline"){
		this.ySpeed = -1.2 * this.ySpeed;
	}
	
	if(CollidingObject.name == "Bullet" || CollidingObject.name == "Wall"){
		Level.EndGame();
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