//
//playerBullet.js
//

var playerBullet = function (x, y, dx, dy, width, height) {
    GameObject.call(this, x, y, width, height, "playerBullet");

    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    this.sprite = PS.spriteSolid(this.w, this.h);
    PS.spriteSolidColor(this.sprite, PS.COLOR_BLACK);
    PS.spriteMove(this.sprite, this.x, this.y);

    PS.spriteCollide(this.sprite, this.Collision.bind(this));
};

GameObject.prototype.impart(playerBullet);

playerBullet.prototype.Draw = function (offsetX, offsetY) {
    this.x = this.x + offsetX;
    this.y = this.y + offsetY;

    if (this.sprite != null) {
        var loc = PS.spriteMove(this.sprite, this.x, this.y);
    } else {
        this.sprite = PS.spriteSolid(this.w, this.h);
        PS.spriteSolidColor(this.sprite, PS.COLOR_BLACK);
        PS.spriteMove(this.sprite, this.x, this.y);
    }
};

playerBullet.prototype.Update = function () {
    this.x += this.dx;
    this.y += this.dy;
};

playerBullet.prototype.Collision = function (s1, p1, s2, p2, type) {

    var CollidingObject = Game.GetObjectBySprite(s2);
    if (CollidingObject == null) {
        return;
    }

    if (CollidingObject.name == "Bullet") {
        this.remove = true;
        CollidingObject.remove = true;
    }

    if (CollidingObject.name == "Wall" || CollidingObject.name == "Trampoline") {
        this.remove = true;
    }

};
