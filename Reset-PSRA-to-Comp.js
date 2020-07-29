(function(thisObj) {

    var scriptName = "Reset PSRA to Comp"
    
    var activeComp = app.project.activeItem;
    var sel = activeComp.selectedLayers;
    
    app.beginUndoGroup(scriptName);
    
    for(var i=0;i < sel.length; i++){
            sel[i].transform.position.setValue([activeComp.width/2,activeComp.height/2]);
            sel[i].transform.anchorPoint.setValue([0,0]);
            sel[i].transform.scale.setValue([100,100]);
            sel[i].transform.rotation.setValue([0]);
            sel[i].transform.opacity.setValue([100]);
        }
    
    app.endUndoGroup();
    
}(this))