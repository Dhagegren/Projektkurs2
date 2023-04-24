projekt.scene.Player = function (x, y, width, height, resource, boxes) {

    rune.display.Sprite.call(this, x, y, width, height, resource);

    this.hitbox.debug = true;
    this.speed = 4;
    this.gravity = 1;
    this.boxes = boxes
    this.velocity.y = 0;
}

projekt.scene.Player.prototype = Object.create(rune.display.Sprite.prototype);
projekt.scene.Player.prototype.constructor = projekt.scene.Player;



projekt.scene.Player.prototype.setAnimation = function () {
    this.Player.animation.create("idle", [0, 1], 4, true);
    this.Player.animation.create("run", [0, 1, 2, 3, 4, 5, 6, 7, 8], 15, true);

}

projekt.scene.Player.prototype.update = function (step) {
    rune.display.Sprite.prototype.update.call(this, step);
    var walking = false;


    var m_this = this;

    this.boxes.forEachMember(function (box) {
        if (m_this.velocity.y > 0 && m_this.y  + m_this.height > box.y  && m_this.x < box.x + box.width && m_this.x + m_this.width > box.x) {
            m_this.velocity.y = 0;
            m_this.y = box.y -17;
          
        }
        else if (m_this.x > box.x + box.width || m_this.x + m_this.width < box.x) {
           
        };




    });


    if (this.keyboard.pressed("D")) {
        if (this.x < 380) {
            this.x += this.speed;
            this.flippedX = false;
            walking = true;
        }

    }

    if (this.keyboard.pressed("A")) {

        if (this.x > 2) {
            this.x += -this.speed;
            this.flippedX = true;
            walking = true;
        }
    }

    if (this.keyboard.justPressed("SPACE")) {


        this.velocity.y = -7;
    }

    if (this.y + this.height + this.velocity.y >= 220) {
        this.velocity.y = 0;
    }

    else {
        this.velocity.y += this.gravity;
    }


    if (walking == true) {
        this.animation.gotoAndPlay("run");
    }
    else {
        this.animation.gotoAndPlay("idle");
    }


};





