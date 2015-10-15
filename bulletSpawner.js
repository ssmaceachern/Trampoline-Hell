/**
 * @author Sean
 */

var BulletSpawner = function(x, y, level){
	GameObject.call(this, x, y, 1, 1, "BulletSpawner");
	
	this.x = x;
	this.y = y;

	this.level = level;
	
	this.functions = [];
	
	this.sprite = PS.spriteSolid(2, 3);
	PS.spriteSolidColor(this.sprite, PS.COLOR_BLUE);
	PS.spriteMove(this.sprite, this.x, this.y);

	this.timerID1 = PS.timerStart(200, this.SpawnBulletHorizontal, this.level, this.x, this.y);
	//this.timerID2 = PS.timerStart(250, this.SpawnBulletVertical, this.level);
};

GameObject.prototype.impart(BulletSpawner);

BulletSpawner.prototype.LoadSpawner = function(game){
	//this.player = game.GetObjectByName("Player");
	//this.spawnY = this.player.y - 32;
	//PS.debug("SpawnY: " + this.spawnY + "\n");
};

BulletSpawner.prototype.SpawnBulletRandom = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -500, 1, 2));
};

BulletSpawner.prototype.SpawnBulletHorizontal = function(level, x, y){
	/*var randX = (Math.random() * 25) + 1;
	level.Game.addObject(new Bullet(randX, -100, 1, 2));
	level.Game.addObject(new Bullet(randX + 2, -100, 1, 2));*/
    PS.debug(x + " " + y + "\n");
    if (x == 0) {
        level.Game.addObject(new Bullet(x + 2, y, 2, 1, 1 / 30));
    }
    else if (x == 30) {
        level.Game.addObject(new Bullet(x - 2, y, 2, 1, -1 / 30));
    }
	
};

/*
BulletSpawner.prototype.SpawnBulletVertical = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -100 - 5, 1, 2));
	level.Game.addObject(new Bullet(randX, -100 - 8, 1, 2));
	level.Game.addObject(new Bullet(randX, -100 - 11, 1, 2));
};
*/

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
	
	//this.spawnY = this.player.y - 32;
};

BulletSpawner.prototype.Update = function(){
	if(this.level.CurrentMode == this.level.MODES.End){
		//PS.debug("Time stop\n");
		PS.timerStop(this.timerID1);
		//PS.timerStop(this.timerID2);
	}
	
};
