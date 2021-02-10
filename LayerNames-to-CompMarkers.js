// Clears out all Comp Markers then replaces them with the names of all selected layers

(function () {

    var curComp = app.project.activeItem;
    var sel = curComp.selectedLayers;

    var compMarkers = curComp.markerProperty;
    
    app.beginUndoGroup("layer names to markers")

    for(var i = compMarkers.numKeys; i> 0; i--){
        curComp.markerProperty.removeKey(i);
    }

    for(var l = 0; l < sel.length; l++){
        var newMarker = new MarkerValue(sel[l].name);
        curComp.markerProperty.setValueAtTime(sel[l].inPoint, newMarker)
    }
    app.endUndoGroup();

})();