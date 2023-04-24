//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game scene.
 */
projekt.scene.Game = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    this.m_player=null;
    this.boxes = null;
    this.background=null;
  
    
    /**
     * Calls the constructor method of the super class.
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

projekt.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.Game.prototype.constructor = projekt.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * This method is automatically executed once after the scene is instantiated. 
 * The method is used to create objects to be used within the scene.
 *
 * @returns {undefined}
 */
projekt.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);


    this.m_initBox();
    this.m_initPlayers();
    this.m_initbackGround();
    
};


projekt.scene.Game.prototype.m_initBox = function(){
    
    var box = new projekt.scene.Box(120, 190, 32,32,"Box");
    var box1 = new projekt.scene.Box(155, 190, 32,32,"Box");
    var box2 = new projekt.scene.Box(155, 155, 32,32,"Box");
    var box3 = new projekt.scene.Box(190, 190, 32,32,"Box");
    var box4 = new projekt.scene.Box(225, 190, 32,32,"Box");
    this.boxes = this.groups.create(this.stage);
    this.boxes.addMember(box);
    this.stage.addChild(box);
   
    this.boxes.addMember(box1);
    this.stage.addChild(box1);

    this.boxes.addMember(box2);
    this.stage.addChild(box2);

    this.boxes.addMember(box3);
    this.stage.addChild(box);
   
    this.boxes.addMember(box4);
    this.stage.addChild(box1);


}

projekt.scene.Game.prototype.m_initbackGround = function(){

    var background = new rune.display.Graphic(0,400,400,600,"background");
    this.stage.addChild(background);    
}



projekt.scene.Game.prototype.m_initPlayers = function() {
    var player = new projekt.scene.Player(10,10 ,16,16, "gubbe", this.boxes);
    this.stage.addChild(player);    
    
};

/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
projekt.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    
};



/**
 * This method is automatically called once just before the scene ends. Use 
 * the method to reset references and remove objects that no longer need to 
 * exist when the scene is destroyed. The process is performed in order to 
 * avoid memory leaks.
 *
 * @returns {undefined}
 */
projekt.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};