 projekt.scene.Box = function(x,y,width,height,resource, boxes){


    rune.display.Sprite.call(this,x,y, width, height,resource);

    this.velocity.y = 1;
    this.floor = 190;
    this.boxes = boxes;
   // this.sound = this.application.sounds.sound.get("Boxsound", "unique");;
    

 }

projekt.scene.Box.prototype = Object.create(rune.display.Sprite.prototype);
projekt.scene.Box.prototype.constructor = projekt.scene.Box;





projekt.scene.Box.prototype.checkBoxHit = function(){

  this.boxes.forEachMember(function(box){
    this.hitTestAndSeparateObject(box, function(){
     // this.sound.play(); 
     this.velocity.y = 0;
      this.gravity = 0;
    },this);
    //console.log(this.hitTestAndSeparate(box));
  },this);

}



projekt.scene.Box.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.checkBoxHit();

    if(this.y >= this.floor ){
      this.velocity.y = 0;
      this.gravity =0;
      this.y = this.floor;
    }

    
};




