(function () {
  var curComp = app.project.activeItem;
  var sel = curComp.selectedLayers;

  for (var i = 0; i < sel.length; i++) {
    if (sel[i].property("Marker").numKeys() == 0) {
      continue;
    }
    sel[i].name = sel[i].property("Marker").keyValue(1).comment;
  }
})();
