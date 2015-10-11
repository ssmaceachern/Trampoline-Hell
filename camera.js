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
	
	this.originY = this.h;
	
	this.objects = [];
	this.target = null;
	
};

GameObject.prototype.impart(Camera);

/**
 *	Set the player as our target after the level loads. 
 * @param {Object} game
 */
Camera.prototype.LoadCamera = function(game){
	this.objects 	= game.objects;
	this.target 	= game.GetObjectByName("Player");
};

Camera.prototype.GetX = function(){
	return this.target.x - (this.w/2);
};

Camera.prototype.GetY = function(){
	return this.target.y - (this.h/2);
};

Camera.prototype.TranslateObject = function(object){
	screenX = object.x;// + this.GetX();
	screenY = object.y + this.GetY();
	
	PS.debug(object.name + ": " + screenX + ", " + screenY + "\n");
	
	if(object.sprite != null || object.sprite != undefined ){
		PS.spriteMove(object.sprite, screenX, screenY);
	}
};

Camera.prototype.Draw = function(offsetX, offsetY){
	
};

Camera.prototype.Update = function(){

	for(i = 0; i < this.objects.length; i++){
		if(this.objects[i].name != this.target.name){
			this.TranslateObject(this.objects[i]);
		}
	}
};
