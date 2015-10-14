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
	this.yMaxSpeed = 2;
	this.yAcceleration = 1/120;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	//this.trampolineIndicator = new Indicator(this);
	//this.wings = new Wings(this);
	
	//Game.addObject(this.trampolineIndicator);
	//Game.addObject(this.wings);
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		//PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, this.color );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
	
};

Player.prototype.Update = function(){
	
	if((Game.getKey(PS.KEY_ARROW_LEFT) === 1) || Game.getKey(97) === 1)
	{
		this.x -= 0.5;
	}
	
	if(Game.getKey(PS.KEY_ARROW_RIGHT) === 1 || Game.getKey(100) === 1)
	{
		this.x += 0.5;				
	}
	
	if((Game.getKey(PS.KEY_ARROW_DOWN) === 1 || Game.getKey(115) === 1) && this.y < 26)
	{
		this.y += 0.5;				
	}
	
	if((Game.getKey(PS.KEY_ARROW_UP) === 1 || Game.getKey(119) === 1) && this.y > 1)
	{
		this.y -= 0.5;				
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
	
	PlayerHeight = Math.floor(32 - this.y);
	
	if(PlayerHeight < 0){
		PlayerHeight = 0;
	} else if(PlayerHeight > 2000){
		Level.EndGame();
	}
	
	PS.statusText("Current Height: " + PlayerHeight + "/" + LevelHeight);
	
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = Game.GetObjectBySprite(s2);
	
	if(CollidingObject == null)
	{
		return;
	}
	
	if(CollidingObject.name == "Trampoline")
	{
		//this.y = this.y - (CollidingObject.h / 2);
		this.ySpeed = -1.1 * this.ySpeed;
	}
	
	if((CollidingObject.name == "Bullet" || CollidingObject.name == "Wall") && type == PS.SPRITE_OVERLAP)
	{
		Level.EndGame();
	}
	
};