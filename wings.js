/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Wings = function(player){
	GameObject.call(this, player.x, player.y, 10, 2, "Wings");
	
	this.player = player;
	this.centerX = this.w/2;	
	/*
	 * Load the player sprite
	 */
	this.imageID = PS.imageLoad("images/wings.png", this.spriteLoader.bind(this), 4);
};

GameObject.prototype.impart(Wings);

Wings.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.player.x - this.centerX + offsetX;
	this.y = this.player.y + offsetY;
	
	if(this.sprite != null){
		//var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.imageID = PS.imageLoad("images/wings.png", this.spriteLoader.bind(this), 4);
	}
	
};

Wings.prototype.Update = function(){
	
};