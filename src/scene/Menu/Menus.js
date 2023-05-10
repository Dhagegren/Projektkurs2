projekt.scene.Menus = function(){
    rune.ui.VTMenu.call(this);

}


projekt.scene.Menus.init = function(){
    rune.ui.VTMenu.projekt.init.call(this);

    
}

projekt.scene.Menus.prototype = Object.create(rune.ui.VTMenu.prototype);
projekt.scene.Menus.prototype.constructor = projekt.scene.Menus;