/**
 * @author Sean
 */

var Level = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Level");
	this.objects = [];
	this.name = "Level";
	
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	this.player = null;
	this.scrollSpeed = 0;
	
	numSpawnables = 20;
	for(i = 0; i < numSpawnables; i++)
	{
		new Spawnable((Math.random() * 29) + 1, -(Math.random() * 1000) - 50, 2, 2, Math.round(Math.random()), this);
	}
};

GameObject.prototype.impart(Level);

Level.prototype.addObject = function(object) {
	this.objects.push(object);
	
};

Level.prototype.removeObject = function(object) {
	if(object.sprite != null){
		PS.spriteDelete(object.sprite);
	}
	var ind = this.objects.indexOf(object);
	delete (this.objects.splice(ind, 1));
};

Level.prototype.setPlayer = function(object){
	this.player = object;
};

Level.prototype.getObjectBySprite = function(sprite) {
	//PS.debug("Function call\n");
	if(this.objects.length == 0)
	{
		return -1;
	}
	
	for(i = 0; i < this.objects.length; i++){
		
		if(sprite == this.objects[i].sprite){
			//PS.debug("Match found\n");
			return this.objects[i];
		}
	}
};

Level.prototype.Update = function(){
	//PS.debug("Update?\n");
	this.scrollSpeed = -this.player.ySpeed;
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i] != null){
			this.objects[i].y = this.objects[i].y + this.scrollSpeed;
			
			this.objects[i]._update();
		}
	}	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	PS.gridColor(this.color);
	PS.border( PS.ALL, PS.ALL, 0);
	PS.color(PS.ALL, PS.ALL, this.color);
	
	for (var i = 0; i < this.objects.length; ++i) {
		if((this.objects[i] != null)){
			this.objects[i]._draw(offsetX, offsetY);
		}
	}
};