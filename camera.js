/**
 * @author Sean
 */

var Camera = function(x, y, width, height){
	GameObject.call(this, x, y, width, height, "Camera");
	
	this.originY = this.h;
	
	this.objects = [];
	this.target = null;
	
};

GameObject.prototype.impart(Camera);

Camera.prototype.LoadCamera = function(game){
	this.objects 	= game.objects;
	this.target 	= game.GetObjectByName("Player");
};

Camera.prototype.DistanceFromOrigin = function(object){
	var distance = Math.abs(this.target.y - object.originY) - this.target.ySpeed;
	PS.debug("Player distance from origin: " + distance + "\n");
	return distance;
};

Camera.prototype.TranslateObject = function(object){
	object.y = this.DistanceFromOrigin(object);// + this.target.ySpeed;
};

Camera.prototype.Draw = function(offsetX, offsetY){
	
};

Camera.prototype.Update = function(){
	this.y = this.target.y;

	if(this.target.y < 32){
		for(i = 0; i < this.objects.length; i++){
			
			//this.TranslateObject(this.objects[i]);
			
			if(this.objects[i].name != this.target.name){
				this.TranslateObject(this.objects[i]);
			}else{
				this.target.y = this.target.y + this.target.ySpeed;
			}
		}
	}
};
