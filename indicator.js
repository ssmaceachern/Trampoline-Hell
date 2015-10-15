/**
 * @author Sean
 */


var Indicator = function(player){
	GameObject.call(this, player.x, player.y + 12, 3, 3, "Indicator");
	
	this.player = player;
	/*
	 * Load the player sprite
	 */

	this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
	//PS.spriteMove(this.sprite, this.x, this.y);
};

GameObject.prototype.impart(Indicator);

Indicator.prototype.SwitchTarget = function(trampoline){
	this.target = trampoline;
};

Indicator.prototype.Draw = function(offsetX, offsetY){

	if(this.target){
		this.x = this.x + offsetX;
		this.y = this.y + offsetY;
		
		if(this.sprite != null){
			//var loc = PS.spriteMove(this.sprite, this.x, this.y);	
		}else{
			this.imageID = PS.imageLoad("images/indicator.png", this.spriteLoader.bind(this), 4);
		}
	}
	
};

Indicator.prototype.Update = function(){
	if(this.target){
		this.x = this.target.x + (this.target.w / 2);
		this.y = (this.player.y + this.target.y) * 2 / 3;
	}
	
};