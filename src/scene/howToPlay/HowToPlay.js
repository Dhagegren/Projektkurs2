projekt.scene.HowToPlay = function () {





    this.gamepad = null;

    rune.scene.Scene.call(this);
}

projekt.scene.HowToPlay.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.HowToPlay.prototype.constructor = projekt.scene.HowToPlay;



projekt.scene.HowToPlay.prototype.init = function () {
    rune.scene.Scene.prototype.init.call(this);

    this.initBackground();
    this.initGamepad();

};

projekt.scene.HowToPlay.prototype.initGamepad = function () {
    this.gamepad = this.gamepads.get(0);
}

projekt.scene.HowToPlay.prototype.initBackground = function(){
    var howtoplay = new rune.display.Sprite(0, 0, 400, 250, "Howtoplay");
    this.stage.addChild(howtoplay);
    howtoplay.animation.create("idle", [0, 1, 2], 3, true);
}




projekt.scene.HowToPlay.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);


    if (this.gamepad.pressed(9)) {
        this.application.scenes.load([
            new projekt.scene.Menu()
        ]);
    }

}