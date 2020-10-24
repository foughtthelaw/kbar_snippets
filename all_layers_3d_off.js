(function (thisObj) {
  current_comp = app.project.activeItem;
  app.beginUndoGroup("3d Layers off");
  for (var l = 1; l <= current_comp.numLayers; l++) {
    current_comp.layer(l).threeDLayer = false;
  }
  app.activeViewer.views[0].options.fastPreview = FastPreviewType.FP_ADAPTIVE_RESOLUTION;
})(this);
