(function (thisObj) {
  current_comp = app.project.activeItem;
  app.beginUndoGroup("3d Layers On for Fast Draft");
  for (var l = 1; l <= current_comp.numLayers; l++) {
    current_comp.layer(l).threeDLayer = true;
  }
  app.activeViewer.views[0].options.fastPreview = FastPreviewType.FP_FAST_DRAFT;
  app.endUndoGroup();
})(this);
