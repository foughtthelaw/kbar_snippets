
// Update all project footage

(function reload_footage_prj() {
    app.beginUndoGroup("reload_footage");

    for(var i = 1; i < app.project.items.length; i++){
        var curItem = app.project.items[i];
            if(curItem instanceof FootageItem && curItem.mainSource instanceof FileSource){
            writeLn(curItem.name)
            curItem.mainSource.reload();
        }
    }
	app.endUndoGroup();
}());



// Update all selected project footage

(function reload_footage_prj_sel() {

    app.beginUndoGroup("reload_footage_project_selection");

    for(var i = 0; i < app.project.selection.length; i++){
        var curItem = app.project.selection[i];
            if(curItem instanceof FootageItem && curItem.mainSource instanceof FileSource){
            writeLn(curItem.name)
            curItem.mainSource.reload();
        }
    }
	app.endUndoGroup();
}());


// Update all comp footage items

(function reload_footage_comp() {
    var curComp = app.project.activeItem;

    app.beginUndoGroup("reload_footage_comp");

    for(var i = 1; i < curComp.layers.length; i++){
        var curLayer = curComp.layer(i);
            if(curLayer.source instanceof FootageItem && curLayer.source.mainSource instanceof FileSource){
            writeLn("^ "+curLayer.name)
            curLayer.source.mainSource.reload();
        }
    }
	app.endUndoGroup();
}());
