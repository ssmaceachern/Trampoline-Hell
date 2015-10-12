/**
 * @author Sean
 */

var Indicator = function(player){
	GameObject.call(this, player.x, player.y, 3, 2, "Indicator");
	
	this.player = player;
	this.trampoline = Game.GetObjectByName("Trampoline");
	
	/*
	 * Load the player sprite
	 */
	this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
};

GameObject.prototype.impart(Indicator);

Indicator.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
	}
	
	if(PlayerHeight > 16)
	{
		PS.spriteShow ( this.sprite, true );
	}else if(this.sprite != null){
		PS.spriteShow ( this.sprite, false );
	}
};

Indicator.prototype.Update = function(){
	
	this.x = this.trampoline.x + (this.trampoline.w/2);
	this.y = Math.floor(this.player.y) + 8;	
	
};