/**
 * @author Sean
 */

var Level = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Level");
	this.color = color;
	this.objects = [];
	this.name = "Level";
	
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	this.player = null;
	this.scrollSpeed;
	
	// this.sprite = PS.spriteSolid(this.w, this.h);
	// PS.spriteSolidColor ( this.sprite, PS.COLOR_WHITE );
	// PS.spriteMove(this.sprite, this.x, this.y);
	
};

GameObject.prototype.impart(Level);

Level.prototype.addObject = function(object) {
	this.objects.push(object);
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
		//PS.debug("Checking: "+ this.objects[i].name + "\n");
		
		//PS.debug(sprite + " VS " + this.objects[i].sprite + "\n");
		
		if(sprite == this.objects[i].sprite){
			//PS.debug("Match found\n");
			return this.objects[i];
		}
	}
};

Level.prototype.Update = function(){
	//PS.debug("Update?\n");
	for (var i = 0; i < this.objects.length; ++i) {
			if(this.objects[i] != this.player){
				this.objects[i].y = this.objects[i].y - this.player.ySpeed;
			}
			
			this.objects[i]._update();
	}	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	//PS.color( PS.ALL, PS.ALL, this.color);
	
	for (var i = 0; i < this.objects.length; ++i) {
			this.objects[i]._draw(offsetX, offsetY);
	}
};