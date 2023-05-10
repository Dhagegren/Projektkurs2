projekt.scene.Menu = function(){

    rune.scene.Scene.call(this);
    this.gamepad = null;

    this.menus = new projekt.scene.Menus();
}

projekt.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.Menu.prototype.constructor = projekt.scene.Menu;



projekt.scene.Menu.prototype.init = function(){
    rune.scene.Scene.prototype.init.call(this);
    this.initGamepad();



        this.menus.add("2-Player");
        this.menus.add("3-Player")
        this.menus.add("4-Player");
   


    this.menus.center = this.application.screen.center;
    this.stage.addChild(this.menus);

}


projekt.scene.Menu.prototype.initGamepad = function(){

    this.gamepad = this.gamepads.get(0);
  
}


projekt.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
  
    if(this.keyboard.justPressed("DOWN")){
        this.menus.down();
    }

    if(this.keyboard.justPressed("UP")){
        this.menus.up();
    }

    if(this.keyboard.justPressed("ENTER")){
        this.menus.select();

        
        var selectedPlayers = this.menus.m_index;
    
         this.application.scenes.load([
              new projekt.scene.Game(selectedPlayers)
          ]);
       
        
        // this.application.scenes.load([
        //     new projekt.scene.Game()
        // ]);
    }
};
