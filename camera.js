/**
 * @author Sean
 */

/**
 * Camera object for following the player.
 * @param {int} x
 * @param {int} y
 * @param {int} width
 * @param {int} height
 */
var Camera = function(x, y, width, height){
	GameObject.call(this, x, y, width, height, "Camera");
	
	this.width = width;
	this.height = height;
		
	this.objects = [];
	this.trailLength = [];
	this.target = null;
	
};

GameObject.prototype.impart(Camera);

/**
 *	Set the player as our target after the level loads. 
 * @param {Object} game
 */
Camera.prototype.SetTarget = function(object){
	this.target = object;
	
};

Camera.prototype.contains = function(object){
	return (object.x >= this.x && object.x <= this.x + this.width) &&
				(object.y >= this.y && object.y <= this.y + this.height);
};

Camera.prototype.GetCenterX = function(){
	return this.target.x - (this.width / 2);
};

Camera.prototype.GetCenterY = function(){
	return this.target.y - (this.height / 2) + (this.target.h / 2);
};

Camera.prototype.TranslateObject = function(object){
	if(this.target && object.sprite){
		screenX = object.x; //+ this.GetCenterX();
		screenY = Math.round(object.y - this.GetCenterY());
		
		PS.spriteMove(object.sprite, screenX, screenY);
	}
	
};

Camera.prototype.Draw = function(offsetX, offsetY){
	
};

Camera.prototype.Update = function(){
	//PS.debug(this.target.name + "\n");
	
	if(this.target){
		
		new Trail(this.target, this.target.x, this.target.y, 20);
		
	}
};
