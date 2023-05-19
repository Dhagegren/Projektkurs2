projekt.scene.Player = function (x, y, width, height, resource, boxes, gamepad, players) {

    rune.display.Sprite.call(this, x, y, width, height, resource);

    this.hitbox.set(0, 0, 16, 16)
    this.hitbox.debug = true;
    this.speed = 4;
    this.gravity = 1;
    this.boxes = boxes
    this.velocity.y = 0;
    this.minY = 205;
    this.alive = true;
    this.gamepad = gamepad;
    this.players = players;

    this.canJump = true;
    this.canDoubleJump = true;

    this.canControl = true;

    

}

projekt.scene.Player.prototype = Object.create(rune.display.Sprite.prototype);
projekt.scene.Player.prototype.constructor = projekt.scene.Player;




projekt.scene.Player.prototype.setAnimation = function () {
    this.animation.create("idle", [0, 1], 4, true);
    this.animation.create("run", [0, 1, 2, 3, 4, 5, 6, 7, 8], 15, true);
    this.animation.create("death", [9, 10, 11], 1, true);
    this.animation.create("punch", [12], 50, false);

}


projekt.scene.Player.prototype.checkWalkCollisionRight = function () {

    this.boxes.forEachMember(function (box) {
        if (this.right >= box.left && this.bottom >= box.top + 2 && this.top <= box.bottom && this.right <= box.left + 3) {
            this.right = box.left - 3;
        }
    }, this)
}

projekt.scene.Player.prototype.checkWalkCollisionLeft = function () {
    this.boxes.forEachMember(function (box) {
        if (this.left <= box.right && this.bottom >= box.top + 2 && this.top <= box.bottom && this.left >= box.right - 3) {
            this.left = box.right + 3;
        }
    }, this)
}

projekt.scene.Player.prototype.checkCrushCollision = function () {

    this.boxes.forEachMember(function (box) {
        this.hitTest(box, function () {
            if (this.top >= box.top + box.height - 5 && this.top <= box.top + box.height + 5 && this.x < box.x + box.width - 5 && this.x + this.width > box.x + 5
            ) {

                this.animation.gotoAndPlay("death");
                this.alive = false;
                this.bottom = box.top + 1;
                this.gravity = -0.1;
                this.velocity.y = -0.5;

            }
        }, this)
    }, this)
}



projekt.scene.Player.prototype.checkCollision = function () {
    this.boxes.forEachMember(function (box) {
        this.hitTest(box, function () {
            if (this.top < box.top && this.x < box.x + box.width - 3 && this.x + this.width > box.x + 3) {
                this.velocity.y = 0;
                this.bottom = box.top - 1;
                this.canJump = true;
                this.canDoubleJump = true;
            }
        }, this);
    }, this)
}




projekt.scene.Player.prototype.checkOnGround = function () {

    if (this.y == 205 || this.y == 204) {
        this.canJump = true;
        this.canDoubleJump = true;
    }
}




//Slagen borde fungera nu.
projekt.scene.Player.prototype.checkPunch = function() {
    this.players.forEachMember(function(player) {
        if (this.flippedX && this.x > player.x || !this.flippedX && this.x < player.x) {
            this.hitTest(player, function() {
                if (this.flippedX == true) {
                    player.velocity.x = -3;
                    this.resetVelocity(player, 200); 

                } else if (this.flippedX == false) {
                    player.velocity.x = 3;
                    this.resetVelocity(player, 200); 
                }
            }, this);
        }
    }, this);
};

projekt.scene.Player.prototype.resetVelocity = function(player, delay) {
    setTimeout(function() {
        player.velocity.x = 0;
    }, delay);
};



projekt.scene.Player.prototype.update = function (step) {
    rune.display.Sprite.prototype.update.call(this, step);


    if (this.alive == true && this.canControl == true)  {


        this.checkWalkCollisionRight();
        this.checkWalkCollisionLeft();
        this.checkCollision();
        this.checkCrushCollision();
        this.checkOnGround();

       

        var walking = false;
        var punching = false;

        if (this.y > this.minY) {
            this.y = this.minY;
        }


        if (this.gamepad.justPressed(2)) {
            punching = true;
            this.checkPunch();
            this.animation.gotoAndPlay("punch");

        }


        if (this.gamepad.stickLeftRight) {
            if (this.x < 380) {
                this.x += this.speed;
                this.flippedX = false;
                walking = true;
            }

        }

        if (this.gamepad.stickLeftLeft) {

            if (this.x > 2) {
                this.x += -this.speed;
                this.flippedX = true;
                walking = true;
            }
        }

        if (this.gamepad.pressed(0)) {
            if (this.canJump == true && this.velocity.y >= 0) {
                this.velocity.y = -7;
                this.canJump = false;
            }
            else if (this.canJump == false && this.canDoubleJump == true && this.velocity.y >= 0) {
                this.velocity.y = -7;
                this.canDoubleJump = false;
            }

        }

        if (this.y + this.height + this.velocity.y >= 220) {
            this.velocity.y = 0;
        }

        else {
            this.velocity.y += this.gravity;
        }
    }


    if (walking == true && this.alive == true && punching == false) {
        this.animation.gotoAndPlay("run");
    }
    else if (this.alive == true && punching == false) {
        this.animation.gotoAndPlay("idle");
    }

};





