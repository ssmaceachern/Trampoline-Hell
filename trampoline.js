/**
 * @author Sean
 */
var winTimerID; 

var Trampoline = function(x, y, level){
	this.x = x;
	this.y = y;
	this.w = 5;
	this.h = 2;
	this.name = "Trampoline";
	
	this.level = level;
	
	//Random init direction
	this.moveSpeed = 1/30 * (Math.round(Math.random()) * 2 - 1);
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
	
	level.addObject(this);
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
	
	if(ScoreHeight > 2050){
		PS.statusColor(PS.COLOR_ORANGE);
		Reset();
	}
	
};

Trampoline.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, PS.COLOR_RED );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
};

Trampoline.prototype.setLevel = function(level)
{
	this.level = level;
};
