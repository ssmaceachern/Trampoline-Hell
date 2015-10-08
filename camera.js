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

Camera.prototype.DistanceFromOrigin = function(){
	var distance = Math.abs((this.h - 3) - this.target.y);
	PS.debug("Player distance from origin: " + distance + "\n");
	return distance;
};

Camera.prototype.TranslateObject = function(object){
	object.y = object.originY + this.DistanceFromOrigin();
};

Camera.prototype.Draw = function(offsetX, offsetY){
	
};

Camera.prototype.Update = function(){
	//this.DistanceFromOrigin();
	this.y = this.target.y - (this.h/2);
	
	
	//this.TranslateObject(this.objects[i]);
	
	if(this.target.y < 24){
		for(i = 0; i < this.objects.length; i++){
			
			//this.TranslateObject(this.objects[i]);
			
			if(this.objects[i].name != this.target.name){
				this.TranslateObject(this.objects[i]);
			}else{
				//this.target.y = this.objects[i].ySpeed;
			}
		}
	}
};
