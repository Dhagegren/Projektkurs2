 projekt.scene.Box = function(x,y,width,height,resource){


    rune.display.Sprite.call(this,x,y, width, height,resource);

    this.hitbox.debug= true;
    

 }

projekt.scene.Box.prototype = Object.create(rune.display.Sprite.prototype);
projekt.scene.Box.prototype.constructor = projekt.scene.Box;

