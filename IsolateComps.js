/** 
Isolate Project Panel Comps
Trying to open every comp in a project panel only works if you don't have folders selected. Same thing with sending to the render queue. Hit this to only select comps in the Project Panel.
Written By: Matthew Law
*/

(function () {
  app.beginUndoGroup("Deselect Folders");
  sel = app.project.selection;

  for (var i = 0; i < sel.length; i++) {
    if (sel[i] instanceof CompItem) {
      sel[i].selected = true;
    } else {
      sel[i].selected = false;
    }
  }
  app.endUndoGroup();
})();
