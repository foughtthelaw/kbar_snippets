// Select Matted layers
// Given a single layer Selection, it will select all layers matted by that layer in the comp.

(function sel_matted_layers() {
    var curComp = app.project.activeItem;
    var heroLayer = curComp.selectedLayers[0];

    if (curComp.selectedLayers.length > 1 || curComp.selectedLayers.length < 1) {
        alert("Please select one layer")
    } else {
        app.beginUndoGroup("Select Matted Layers");
        heroLayer.selected = false;
        for (var i = 1; i <= curComp.layers.length; i++) {
            var curLayer = curComp.layer(i);
            if (curLayer.trackMatteLayer == heroLayer) {
                curLayer.selected = true;
            }
        }
        app.endUndoGroup();
    }

}());