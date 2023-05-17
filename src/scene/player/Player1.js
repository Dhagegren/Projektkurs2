projekt.scene.Player1 = function(boxes, gamepad, players){

    projekt.scene.Player.call( this,20, 20, 16, 16, "gubbeny2", boxes, gamepad, players );

}

projekt.scene.Player1.prototype = Object.create(projekt.scene.Player.prototype);
projekt.scene.Player1.prototype.constructor = projekt.scene.Player1;