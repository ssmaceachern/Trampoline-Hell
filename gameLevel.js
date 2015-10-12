/**
 * @author Sean
 */

/**
 *	Class for handling game states 
 * @param {Object} game
 */
var LevelHeight;

var Level = function(game)
{
	if(game != null){
		GameObject.call(this, 0, 0, game.w, game.h, "Level");
		this.Game = game;
		
		this.objects = game.objects;
		
		//this.spawner = new BulletSpawner(1, 1, this);
		
		this.camera = new Camera(0, 0, 32, 32);
		
		this.active = true;
		
		this.MODES = {
			Start 	: this.StartGame,
			Play 	: this.PlayGame,
			Pause 	: this.PauseGame,
			End 	: this.EndGame
		};
		
		LevelHeight = 2000;
		
		this.CurrentMode = null;
		PS.imageLoad("images/title.png", this.spriteLoader.bind(this), 4);
	}
};

GameObject.prototype.impart(Level);

Level.prototype.StartGame = function(){
	this.CurrentMode = this.MODES.Start;
	
	PS.statusText("Press Enter to Start");
	
	this.Game.addObject(this);
	
	Game.run();
};

Level.prototype.PlayGame = function(){
	this.CurrentMode = this.MODES.Play;
	
	PS.audioLoad("bg-music", {autoplay : true, loop : true, path : "audio/", fileTypes : ["mp3"]});
	
	PS.spriteShow(this.sprite, false);
	
	//this.Game.addObject(this.spawner);
	this.Game.addObject(this.camera);
	
	this.Game.addObject(new Trampoline(11, 26));
	this.Game.addObject(new Player(16, 10));
	
	this.Game.addObject(new Wall(0,31,32,1));
	this.Game.addObject(new Wall(0,-1968,1,LevelHeight));
	this.Game.addObject(new Wall(31,-1968,1,LevelHeight));
	
	this.camera.LoadCamera(this.Game);
	
};

Level.prototype.PauseGame = function(){
	this.CurrentMode = this.MODES.Pause;
};

Level.prototype.EndGame = function(){
	this.sprite = null;
	PS.imageLoad("images/lose.png", this.spriteLoader.bind(this), 4);
	
	this.CurrentMode = this.MODES.End;
	
	PS.statusText("Press Enter to Restart");
	
	this.Game.removeAllObjectsFromLevel();
	
};

Level.prototype.getObjectbySprite = function(sprite)
{
	for(var n = 0; n < this.objects.length; ++n){
		PS.debug(this.objects[n].name);
		if (sprite == this.objects[n].sprite){
			return this.objects[n];
		}
	}
};

Level.prototype.GetCurrentMode = function(){
	return this.CurrentMode;
};

Level.prototype.Update = function(){
	
	switch(this.CurrentMode){
		case this.MODES.Start:
			if(Game.getKey(PS.KEY_ENTER) === 1){
				this.CurrentMode = this.MODES.Play;
				this.CurrentMode();
			}
			break;
		case this.MODES.Play:
			
		
			break;
		case this.MODES.Pause:
			break;
		case this.MODES.End:
			if(Game.getKey(PS.KEY_ENTER) === 1){
				location.reload();
				//this.CurrentMode = this.MODES.Play;
				//this.CurrentMode();
			}
			break;
		default:
			break;
	}
	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	if(this.sprite == null)
	{
		switch(this.CurrentMode){
			case this.MODES.Start:
			PS.imageLoad("images/title.png", this.spriteLoader.bind(this), 4);
			break;
			case this.MODES.End:
			PS.imageLoad("images/lose.png", this.spriteLoader.bind(this), 4);
			break;
		}
	
	}
	else{
		PS.spriteMove(this.sprite, this.x, this.y);	
	}
	
};