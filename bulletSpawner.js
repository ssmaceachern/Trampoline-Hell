/**
 * @author Sean
 */

var BulletSpawner = function(x, y, level){
	GameObject.call(this, x, y, 1, 1, "BulletSpawner");
	
	this.level = level;
	this.moveSpeed = 1/30;
	
	this.functions = [];
	
	this.timerID1 = PS.timerStart(400, this.SpawnBulletHorizontal, this.level);
	this.timerID2 = PS.timerStart(1000, this.SpawnBulletVertical, this.level);
};

GameObject.prototype.impart(BulletSpawner);

BulletSpawner.prototype.SpawnBulletRandom = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -5, 1, 2));
};

BulletSpawner.prototype.SpawnBulletHorizontal = function(level){
	var randX = (Math.random() * 25) + 1;
	level.Game.addObject(new Bullet(randX, -5, 1, 2));
	level.Game.addObject(new Bullet(randX + 2, -5, 1, 2));
	level.Game.addObject(new Bullet(randX + 4, -5, 1, 2));
};

BulletSpawner.prototype.SpawnBulletVertical = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -5, 1, 2));
	level.Game.addObject(new Bullet(randX, -8, 1, 2));
	level.Game.addObject(new Bullet(randX, -11, 1, 2));
};

BulletSpawner.prototype.ChoosePattern = function(level){
	var rand = Math.round(Math.random() * 2);
	switch(rand){
		case 0:
		this.SpawnBulletRandom(level);
		break;
		case 1:
		this.SpawnBulletHorizontal(level);
		break;
		case 2:
		this.SpawnBulletVertical(level);
		break;
	}

};

BulletSpawner.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
};

BulletSpawner.prototype.Update = function(){
	if(this.level.CurrentMode == this.level.MODES.End){
		PS.debug("Time stop\n")
		PS.timerStop(this.timerID1);
		PS.timerStop(this.timerID2);
	}
};
