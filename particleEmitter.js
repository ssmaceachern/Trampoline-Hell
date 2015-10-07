/**
 * @author Sean
 */

var ParticleEmitter = function(target, lifespan, numParticles)
{
	GameObject.call(this, x, y, 2, 4, "ParticleEmitter");
	this.x = x;
	this.y = y;
	
	this.lifespan = lifespan;
	this.numParticles = numParticles;
};

GameObject.prototype.impart(ParticleEmitter);

ParticleEmitter.prototype.Draw = function(offsetX, offsetY){
};

ParticleEmitter.prototype.Update = function(){
};