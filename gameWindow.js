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
	this.color = color;
	
	this.UpdateLoop = null;
};

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

Window.prototype.removeObject = function(object) {
	var tmp = object;
	delete(this.objects.filter(function(obj){
		tmp == obj;
	}));
};

Window.prototype.Update = function(){
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i] != null){
			this.objects[i]._update();
		}
	}	
};

Window.prototype.Draw = function(offsetX, offsetY) {
	
	for (var i = 0; i < this.objects.length; ++i) {
		if((this.objects[i] != null)){
			this.objects[i]._draw(offsetX, offsetY);
		}
	}
};
