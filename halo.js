/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Halo = function(player){
	GameObject.call(this, player.x, player.y - 2, 2, 1, "Halo");
	
	this.player = player;
	
	/*
	 * Load the player sprite
	 */
	
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor (this.sprite, PS.COLOR_YELLOW );
	PS.spriteMove(this.sprite, this.x, this.y);
	PS.spriteSolidAlpha (this.sprite, 255);
};

GameObject.prototype.impart(Halo);

Halo.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		//var loc = PS.spriteMove(this.sprite, this.x, this.y);
		
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor( this.sprite, PS.COLOR_YELLOW );
	}
	
	PS.spriteSolidAlpha(this.sprite, Math.round((PlayerHeight * 255 / LevelHeight)));
	
};

Halo.prototype.Update = function(){
	this.x = this.player.x;
	this.y = this.player.y - 2;
	
	//PS.debug(this.name + ": " + this.x +", " + this.y + "\n");
};