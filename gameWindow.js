/**
 * @author Sean
 */

/**
 * Controls the viewable region of the game. Also refreshes the Draw function and 
 * begins the update timer upon initialization.
 * @param {Object} width
 * @param {Object} height
 * @param {Object} color
 */
var Window = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Window");
	this.objects = [];
	this.keys = [];
	this.color = color;
	
	/*
	 * Color grid
	 */
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	PS.color( PS.ALL, PS.ALL, this.color);
	
	this.UpdateLoop = null;
};

// Returns either a value, or a default value if the value was invalid
function option(value, defaultValue) {
	if (value === null || value === undefined)
		return defaultValue;
	return value;
}

GameObject.prototype.impart(Window);

Window.prototype.run = function(){
	if(this.UpdateLoop == null){
		this.UpdateLoop = PS.timerStart(1, GameObject.prototype._tick.bind(this));
	}
};

Window.prototype.stop = function() {
	if (this.UpdateLoop !== null) {
		PS.timerStop(this.UpdateLoop);
		this.UpdateLoop = null;
	}
};

Window.prototype.addObject = function(object) {
	this.objects.push(object);
};

Window.prototype.removeObject = function(object){
	object.remove = true;
};

Window.prototype.removeAllObjects = function(){
	for (var i = 0; i < this.objects.length; ++i) {
		this.objects[i].remove = true;
	}
};

Window.prototype.removeAllObjectsFromLevel = function(){
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].name != "Level")
		{
			this.objects[i].remove = true;	
		}
	}
};


Window.prototype.keyDown = function(key) {
	this.keys[key] = 1;
};

Window.prototype.keyUp = function(key) {
	this.keys[key] = 0;
};

Window.prototype.getKey = function(key) {
	return option(this.keys[key], 0);
};

Window.prototype.Erase = function(object){
	if(object.sprite && object.remove)
		{
			object.active = false;
			PS.spriteDelete(object.sprite);
		}
		else{
			//PS.debug("ERASE: " + object.sprite + " " + object.removes + "\n");
		}
};

Window.prototype.Update = function(){
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].active);
			this.objects[i]._update();
	}
	// Remove inactive children
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].remove){
			
			this.Erase(this.objects[i]);
			this.objects.splice(i--, 1);	
		}
	}	
};

Window.prototype.Draw = function(offsetX, offsetY) {
	//PS.color( PS.ALL, PS.ALL, this.color);
	PS.border(PS.ALL, PS.ALL, 0);
	
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].active)
		{
			this.objects[i]._draw(offsetX, offsetY);
			//PS.debug("DRAW: " + this.objects[i].name + " " + this.objects[i].sprite + "\n");
		}
			
	}
};

Window.prototype.GetObjectBySprite = function(sprite) {
	//PS.debug("Function call\n");
	if(this.objects.length == 0)
	{
		return false;
	}
	
	for(i = 0; i < this.objects.length; i++){
		
		if(sprite == this.objects[i].sprite){
			
			return this.objects[i];
		}
	}
};

Window.prototype.GetObjectByName = function(name) {
	//PS.debug("Function call\n");
	if(this.objects.length == 0)
	{
		return false;
	}
	
	for(i = 0; i < this.objects.length; i++){
		
		if(name == this.objects[i].name){
			
			return this.objects[i];
		}
	}
};
