/**
 * @author Sean
 */

var Indicator = function(player, direction){
	GameObject.call(this, player.x, player.y, 3, 2, "Indicator");
	
	this.player = player;
	
	/*
	 * Load the player sprite
	 */
	this.direction = direction;
	
	if(this.direction == "UP")
	{
		this.imageID = PS.imageLoad("images/up-indicator.png", this.spriteLoader.bind(this), 4);	
	}
	 else if(this.direction == "DOWN")
	{
		this.imageID = PS.imageLoad("images/down-indicator.png", this.spriteLoader.bind(this), 4);
	}
	
	Game.addObject(this);
};

GameObject.prototype.impart(Indicator);

Indicator.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		if(this.direction == "UP")
		{
			this.imageID = PS.imageLoad("images/up-indicator.png", this.spriteLoader.bind(this), 4);	
		}
		 else if(this.direction == "DOWN")
		{
			this.imageID = PS.imageLoad("images/down-indicator.png", this.spriteLoader.bind(this), 4);
		}
	}
	
	if(PlayerHeight > 22)
	{
		//PS.spriteShow ( this.sprite, true );
	}else if(this.sprite != null){
		PS.spriteShow ( this.sprite, false );
	}
};

Indicator.prototype.Update = function(){
	
	this.x = this.player.x; //this.trampoline.x + (this.trampoline.w/2);
	if(this.direction == "DOWN"){
		this.y = Math.floor(this.player.y) + 8;		
	}else if(this.direction == "UP"){
		this.y = Math.floor(this.player.y) - 8;
	}
	
	
};