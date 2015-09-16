/**
 * @author Sean
 */

var Level = function(width, height, color, player)
{
	GameObject.call(this, 0, 0, width, height, "Level");
	this.color = color;
	this.objects = [];
	this.name = "Level";
	
	this.player = player;
	
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	this.scrollSpeed = 0;
	
	var image;
	this.image = PS.imageLoad("levelimage.bmp", imageLoader);
	//PS.spriteSolidColor ( this.sprite, PS.COLOR_WHITE );
	//PS.spriteMove(this.sprite, this.x, this.y);
	
};

function imageLoader(image){
	PS.imageBlit(image, 0, -68);
}

GameObject.prototype.impart(Level);

Level.prototype.addObject = function(object) {
	this.objects.push(object);
};
/*
Level.prototype.getObjectbySprite = function(sprite)
{
	return this.objects.filter(function(obj){
		obj.sprite == sprite;
	});
};
*/
Level.prototype.Update = function(){
	//PS.debug("Update?\n");
	for (var i = 0; i < this.objects.length; ++i) {
			this.objects[i]._update();
	}	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	//PS.color( PS.ALL, PS.ALL, this.color);
	
	for (var i = 0; i < this.objects.length; ++i) {
			this.objects[i]._draw(offsetX, offsetY + this.scrollSpeed);
	}
};