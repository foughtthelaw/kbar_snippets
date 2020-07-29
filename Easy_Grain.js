(function() {

    app.beginUndoGroup("AddExpressionandSlider");

    var curItem = app.project.activeItem; 

    // check if comp is selected 
    if (curItem == null || !(curItem instanceof CompItem)){ 
        
    // if no comp selected, display an alert
    alert("Please establish a comp as the active item and run the script again"); 
    }
                
    mySolid = curItem.layers.addSolid([.50,.50,.50], "Grain", curItem.width, curItem.height, 1);
    myEffectNoise = mySolid.property("Effects").addProperty("Noise");
    myEffectNoise.property("Amount of Noise").setValue(100);
    myEffectLevels = mySolid.property("Effects").addProperty("Levels (Individual Controls)");
    myEffectLevels.property("Green Output Black").setValue(0.1765);
    myEffectLevels.property("Green Output White").setValue(0.8235);
    myEffectLevels.property("Red Output Black").setValue(0.2941);
    myEffectLevels.property("Red Output White").setValue(0.7059);
    myOpacity = mySolid.opacity;
    myOpacity.setValue(4);
    mySolid.blendingMode = BlendingMode.HARD_LIGHT;

    app.endUndoGroup();

}());