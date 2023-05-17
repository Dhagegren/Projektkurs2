projekt.scene.Player3 = function(boxes, gamepad, players){

    projekt.scene.Player.call( this,100, 20, 16, 16, "spelare3", boxes, gamepad, players );

}
projekt.scene.Player3.prototype = Object.create(projekt.scene.Player.prototype);
projekt.scene.Player3.prototype.constructor = projekt.scene.Player3;