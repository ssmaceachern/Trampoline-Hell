/**
 * @author Sean
 */

var BulletSpawner = function(x, y, level, type){
	GameObject.call(this, x, y, 2, 3, "BulletSpawner");
	
	this.x = x;
	this.y = y;

	this.level = level;
	
	this.fireSpeed = 1/30;
	this.type = type;
	
	this.functions = [];
	
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor(this.sprite, PS.COLOR_ORANGE);
	PS.spriteMove(this.sprite, this.x, this.y);

	//PS.debug(this.type + "\n");

	switch(this.type){
		//Horizontal
		case 0:
			this.timerID = PS.timerStart(500, this.SpawnBulletHorizontal, this.level, this.x, this.y);
			break;
		//Up Diagonal
		case 1:
			this.timerID = PS.timerStart(500, this.SpawnBulletUpDiag, this.level, this.x, this.y);
			break;
		//Down Diagonal
		case 2:
			this.timerID = PS.timerStart(500, this.SpawnBulletDownDiag, this.level, this.x, this.y);
			break;
	};
};

GameObject.prototype.impart(BulletSpawner);

BulletSpawner.prototype.SpawnBulletRandom = function(level){
	var randX = Math.random() * 32;
	level.Game.addObject(new Bullet(randX, -500, 1, 2));
};

BulletSpawner.prototype.SpawnBulletHorizontal = function(level, x, y){
	
    //PS.debug("Horizontal\n");
    if (x == 1) {
        level.Game.addObject(new Bullet(x + 2, y, 1, 1, 1/30, 0));
    }
    else if (x == 29) {
        level.Game.addObject(new Bullet(x - 2, y, 1, 1, -1/30, 0));
    }
	
};

BulletSpawner.prototype.SpawnBulletUpDiag = function(level, x, y){
	
    //PS.debug("Up Diag\n");
    if (x == 1) {
        level.Game.addObject(new Bullet(x + 2, y, 1, 1, 1/30, -1/30));
    }
    else if (x == 29) {
        level.Game.addObject(new Bullet(x - 2, y, 1, 1, -1/30, -1/30));
    }
	
};

BulletSpawner.prototype.SpawnBulletDownDiag = function(level, x, y){
	
    //PS.debug("Down Diag\n");
    if (x == 1) {
        level.Game.addObject(new Bullet(x + 2, y, 1, 1, 1/30, 1/30));
    }
    else if (x == 29) {
        level.Game.addObject(new Bullet(x - 2, y, 1, 1, -1/30, -1/30));
    }
	
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
	
	//this.spawnY = this.player.y - 32;
};

BulletSpawner.prototype.Update = function(){
	if(this.level.CurrentMode == this.level.MODES.End){
		PS.timerStop(this.timerID);
	}
	
};
