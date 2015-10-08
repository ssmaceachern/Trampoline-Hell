/**
 * @author Sean
 */

var BulletSpawner = function(x, y, level){
	GameObject.call(this, x, y, 1, 1, "BulletSpawner");
	
	this.level = level;
	this.moveSpeed = 1/30;
	
	PS.timerStart(200, this.SpawnBullet, this.level);
};

GameObject.prototype.impart(BulletSpawner);

BulletSpawner.prototype.SpawnBullet = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -5, 1, 2));
};

BulletSpawner.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
};

BulletSpawner.prototype.Update = function(){
	
};
