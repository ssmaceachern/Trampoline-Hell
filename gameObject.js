/**
 * @author Sean
 */

/**
 * GameObject - Base Object for Game 
 */
var GameObject = function(x, y, w, h, name){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.name = name;
	this.time = -1;
	this.sprite = null;
};

GameObject.prototype.spriteLoader = function(image){
	//Load Ball Sprite
	if(this.sprite == null){
		this.sprite = PS.spriteImage(image);	
	}
};

/**
 * Function needed to give characteristics to another prototype
 */
function clone(object) {
	function tmp(){}
	tmp.prototype = object;
	return new tmp();
}

/**
 * Allows us to extend GameObject functions to child class
 */
GameObject.prototype.impart = function(childConstructor) {
	childConstructor.prototype = clone(GameObject.prototype);
	childConstructor.prototype.constructor = childConstructor;
};

/**
 * Checks if a certain location falls within the bounds of the object
 * @param {Object} x
 * @param {Object} y
 */
GameObject.prototype.contains = function(x, y){
	return (x >= this.x) && (y >= this.y) && (x < this.x + this.w) && (y < this.y + this.h);
};

/**
 * Tick function for updating an object's position and rendering
 */
GameObject.prototype._tick = function(){
	this._update();
	this._draw(0, 0);
};

/**
 * Update function
 */
GameObject.prototype._update = function(){
	this.Update();
	this.time++;
};

/**
 * Draw function - Draws an image at x and y location
 * @param {Object} x
 * @param {Object} y
 */
GameObject.prototype._draw = function(offsetX, offsetY){
	this.Draw(offsetX, offsetY);
};

GameObject.prototype.Draw = function(offsetX, offsetY){
	//stub for objects to inherit from
	//PS.debug(this.name + ": Draw frame!\n");
};

GameObject.prototype.Update = function(){
	//stub for objects to inherit from
	//PS.debug(this.name + ": Update frame!\n");
};