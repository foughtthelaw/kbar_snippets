(function () {
  sel = app.project.selection;

  app.beginUndoGroup("Delete unused Comps from Selection");

  for (var i = 0; i < sel.length; i++) {
    if (sel[i] instanceof CompItem && sel[i].usedIn.length == 0) {
      sel[i].remove();
      // alert(sel[i].name)
    }
  }
  app.endUndoGroup();
})();
