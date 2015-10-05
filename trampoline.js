/**
 * @author Sean
 */
var winTimerID; 

var Trampoline = function(x, y){
	GameObject.call(this, x, y, 5, 2, "Trampoline");
	
	//Random init direction
	this.moveSpeed = 1/30 * (Math.round(Math.random()) * 2 - 1);
	
	this.collidable = true;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
};

GameObject.prototype.impart(Trampoline);

var ScoreHeight;

Trampoline.prototype.Update = function(){
	if(this.x > 26 || this.x < 2){
		this.moveSpeed = this.moveSpeed * -1;
	}
	
	ScoreHeight = Math.round(this.y);
	
	this.x += this.moveSpeed;
	PS.statusText("Current Height: " + ScoreHeight + "\n");
	
	if(ScoreHeight > 2000){
		PS.statusText("You Win!\n");
	}
	
};

Trampoline.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};
