/**
Extract Blue Channel    
Applies an effects stack to extract the Blue channel from all selected layers.
Written By: Matthew Laws
**/

(function(thisObj) {
    var activeComp = app.project.activeItem;

    var selectedLayers = activeComp.selectedLayers;

    app.beginUndoGroup("Extract Red Channel");
    for (var i = 0; i < selectedLayers.length; i++){
    
        var e1 = selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Shift Channels");
    
        e1.property("ADBE Shift Channels-0002").setValue(2);
        e1.property("ADBE Shift Channels-0003").setValue(2);
        e1.property("ADBE Shift Channels-0004").setValue(2);
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Easy Levels2");
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Invert");
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("UnMult");
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Simple Choker");
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2");
    
        selectedLayers[i].property("ADBE Effect Parade").addProperty("CC Composite");
    };
    app.endUndoGroup();

})(this);