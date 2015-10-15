/**
 * @author Sean
 */

var Player = function(x, y){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_WHITE;
	
	PlayerHeight = 0;
	
	this.moveSpeed = 1/30;
	this.ySpeed = 1/30;
	this.yMaxSpeed = 1.5;
	this.yAcceleration = 1/120;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	

	this.halo = new Halo(this);
	Game.addObject(this.halo);
	
	this.indicator = new Indicator(this);
	Game.addObject(this.indicator);
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	PS.gridColor(PS.makeRGB(255 * (PlayerHeight * 2 / LevelHeight),
								255 * (PlayerHeight * 2 / LevelHeight),
								255 * (PlayerHeight * 2 / LevelHeight)));
	
	if(this.sprite != null){
		PS.spriteSolidColor ( this.sprite, PS.makeRGB(255 - (PlayerHeight / LevelHeight),
														255 - (PlayerHeight / LevelHeight),
														255 - (PlayerHeight / LevelHeight)) );
														
		
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
	
	if((Game.getKey(PS.KEY_ARROW_DOWN) === 1 || Game.getKey(115) === 1))// && this.y < 26)
	{
		if(this.ySpeed < 0){
			this.ySpeed += 0.2;
			//this.y += 0.1;
		}
					
	}
	
	if((Game.getKey(PS.KEY_ARROW_UP) === 1 || Game.getKey(119) === 1))// && this.y > 1)
	{
		
		if(this.ySpeed > 0){
			this.ySpeed -= 0.2;
			//this.y -= 0.1;	
		}			
	}
	
	if(Game.getKey(104) === 1){
		PS.statusText("CHEAT CODE ACTIVATED\n");
		
		this.y = -1750;
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
		Level.WinGame();
	}else{
		PS.statusText("CURRENT HEIGHT: " + PlayerHeight + "/" + LevelHeight);
	}
	
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = Game.GetObjectBySprite(s2);
	
	if(CollidingObject == null)
	{
		return;
	}
	
	if(CollidingObject.name == "Trampoline")
	{
		this.y = this.y - 1;
		this.ySpeed = -1.2 * this.ySpeed;
		this.indicator.SwitchTarget(CollidingObject);
	}
	
	if((CollidingObject.name == "Bullet" || CollidingObject.name == "Wall") && type == PS.SPRITE_OVERLAP)
	{
		Level.EndGame();
	}
	
};