// Each function takes all selected layers and applies the last selected layer as a matte. Intended for use as scriptlets in kbar with modifier keys.

// ALPHA
(function () {
  var layers = app.project.activeItem.selectedLayers;

  if (layers.length < 2) {
    alert("Please select 2 or more layers");
  } else {
    var matte_layer = layers.pop();

    for (var j = 0; j < layers.length; j++) {
      layers[j].setTrackMatte(matte_layer, TrackMatteType.ALPHA);
    }
  }
})();

// ALPHA_INVERTED
(function () {
  var layers = app.project.activeItem.selectedLayers;

  if (layers.length < 2) {
    alert("Please select 2 or more layers");
  } else {
    var matte_layer = layers.pop();

    for (var j = 0; j < layers.length; j++) {
      layers[j].setTrackMatte(matte_layer, TrackMatteType.ALPHA_INVERTED);
    }
  }
})();

// LUMA
(function () {
  var layers = app.project.activeItem.selectedLayers;

  if (layers.length < 2) {
    alert("Please select 2 or more layers");
  } else {
    var matte_layer = layers.pop();

    for (var j = 0; j < layers.length; j++) {
      layers[j].setTrackMatte(matte_layer, TrackMatteType.LUMA);
    }
  }
})();

// LUMA_INVERTED
(function () {
  var layers = app.project.activeItem.selectedLayers;

  if (layers.length < 2) {
    alert("Please select 2 or more layers");
  } else {
    var matte_layer = layers.pop();

    for (var j = 0; j < layers.length; j++) {
      layers[j].setTrackMatte(matte_layer, TrackMatteType.LUMA_INVERTED);
    }
  }
})();

// NO_TRACK_MATTE
(function () {
  var layers = app.project.activeItem.selectedLayers;

  for (var j = 0; j < layers.length; j++) {
    layers[j].setTrackMatte(null, TrackMatteType.NO_TRACK_MATTE);
  }
})();
