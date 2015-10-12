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
	return this.target.x - 16;
};

Camera.prototype.GetY = function(){
	//PS.debug("GetY: " + this.target.y + "\n");
	return this.target.y + 16;
};

Camera.prototype.TranslateObject = function(object){
	// screenX = object.x;
	// screenY = object.y + this.GetY();
		
	if(object.sprite != null || object.sprite != undefined ){
		object.x = object.x;
		object.y = object.y - this.target.ySpeed;
		
		//PS.debug(object.name + ": " + object.y + "\n");
	}
};

Camera.prototype.Draw = function(offsetX, offsetY){
	
};

Camera.prototype.Update = function(){

	for(i = 0; i < this.objects.length; i++){
		if(this.objects[i].name != "Level"){
			this.TranslateObject(this.objects[i]);
		}
	}
	
	
};
