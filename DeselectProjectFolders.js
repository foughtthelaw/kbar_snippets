(function() {
    app.beginUndoGroup("Deselect Folders");
    sel = app.project.selection;

    for (var i = 0; i < sel.length; i++){
        if (sel[i] instanceof FolderItem){
            sel[i].selected = false;
        };
    }

	app.endUndoGroup();
}());