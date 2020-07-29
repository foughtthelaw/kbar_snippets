(function(thisObj) {

    // Apply effects stack to extract the RED channel from all selected layers.
    var activeComp = app.project.activeItem;

    var selectedLayers = activeComp.selectedLayers;

    app.beginUndoGroup("Extract Red Channel");
    for (var i = 0; i < selectedLayers.length; i++){
        
        // Apply Shift Channels
        var e1 = selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Shift Channels");
        
        // Set all values to RED
        e1.property("ADBE Shift Channels-0002").setValue(2);
        e1.property("ADBE Shift Channels-0003").setValue(2);
        e1.property("ADBE Shift Channels-0004").setValue(2);
        
        // Apply Levels
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Easy Levels2");
        
        // Apply Invert
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Invert");
        
        // Apply Unmult
        selectedLayers[i].property("ADBE Effect Parade").addProperty("UnMult");
        
        // simple choker
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Simple Choker");
        
        // gaussian blur
        selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2");
        
        // cc composite
        selectedLayers[i].property("ADBE Effect Parade").addProperty("CC Composite");
    };
    app.endUndoGroup();

a})(this);