#target aftereffects

(function () {
  var scriptName = "Link Puppet Pins to Parent Shapes";

  var activeComp = app.project.activeItem;
  var sel = activeComp.selectedLayers;

  app.beginUndoGroup(scriptName);

  for (var i = 0; i < sel.length; i++) {
    var pins = sel[i].effect("Puppet")("arap")("Mesh")("Mesh 1")("Deform").numProperties;

    for (var j = 1; j <= pins; j++) {
      var curPin = sel[i].effect("Puppet")("arap")("Mesh")("Mesh 1")("Deform")(j);

      var newShape = activeComp.layers.addShape();
      newShape.moveBefore(sel[i]);
      newShape.name = "simShape_" + [i].toString() + "pin_" + [j].toString();
      newShape.transform.position.setValue(curPin.position.value);

      var newEllipse = newShape.property("Contents").addProperty("ADBE Vector Shape - Ellipse");
      newShape
        .property("Contents")
        .property("ADBE Vector Shape - Ellipse")
        .property("ADBE Vector Ellipse Size")
        .setValue([50, 50]);

      var newFill = newShape.property("Contents").addProperty("ADBE Vector Graphic - Fill");
      newFill.property("ADBE Vector Fill Color").setValue([1, 0, 1, 1]);

      curPin.position.expression =
        "l = thisComp.layer('" + newShape.name + "');  l.toComp(l.anchorPoint);";
    }
    app.endUndoGroup();
  }
})();
