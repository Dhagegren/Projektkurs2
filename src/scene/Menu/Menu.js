projekt.scene.Menu = function(){

    rune.scene.Scene.call(this);
    this.gamepad = null;







}

projekt.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.Menu.prototype.constructor = projekt.scene.Menu;


projekt.scene.Menu.prototype.init = function(){
    rune.scene.Scene.prototype.init.call(this);
    this.initGamepad();

    var t = new rune.text.BitmapField("Press Space to start the game");


        t.autoSize = true;
        t.center = this.application.screen.center;

 
    this.stage.addChild(t);
   
}


projekt.scene.Menu.prototype.initGamepad = function(){

    this.gamepad = this.gamepads.get(0);
  
}


projekt.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    if (this.gamepad.pressed(9)) {
        this.application.scenes.load([
            new projekt.scene.Game()
        ]);
    }
};
