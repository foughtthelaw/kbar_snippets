/**
	 * New Solid Shape
	 * by Matthew Law
	 * 
	 * Creates a Black Shape layer the size of your comp.
	 * Intended as a replacement for Cmd + Y in making new Solids.
*/

(function(){
	var activeComp = app.project.activeItem;
	var activeSelection = activeComp.selectedLayers;
	
	app.beginUndoGroup("New Solid Shape");
	var activeLayer = activeSelection[0];
	var newShape = buildShape(activeComp,"Solid Shape",[0,0,0,1]);
	if (activeLayer != undefined){newShape.moveBefore(activeLayer);}
	app.endUndoGroup();
	
	/**
	 * Builds a shape layer the size of a given comp.
	 *
	 * @param {*} buildComp The comp to create a shape layer in.
	 * @param {*} layerName The name given to the new shape layer
	 * @param {*} fColor the color of the fill applied to that shape layer.
	 * @returns layer object for the new shape layer
	 */
	function buildShape(buildComp,layerName,fColor){
		var layer = buildComp.layers.addShape();
		var contents = layer("ADBE Root Vectors Group");
		var group = contents.addProperty("ADBE Vector Group");
		var group_contents = group.property("ADBE Vectors Group");
		var rect = group_contents.addProperty("ADBE Vector Shape - Rect");
		var fill = group_contents.addProperty("ADBE Vector Graphic - Fill");
		// var stroke = group_contents.addProperty("ADBE Vector Graphic - Stroke");
		
		//	adding a stroke and fill here invalidates the rect reference we just had.
		//	get it again.
		rect = group_contents.property("Rectangle Path 1");

		var sz = rect.property("Size");
		sz.setValue([buildComp.width,buildComp.height]);
		
		//  STROKE SETTINGS
		//  same as above, fill got invalidated.
		//  var stroke = group_contents.property("Stroke 1");
		//  var strokecolor = stroke.property("Color");
		
		//	FILL SETTINGS
		//  same as above, fill got invalidated.
		var fill = group_contents.property("Fill 1");
		var fillcolor = fill.property("Color");
		
		fillcolor.setValue(fColor);
		// strokecolor.setValue([1,1,0]);
		
		// fux wit the layer down here


		// layer.transform.position.setValue(layerPos) ;
		layer.name = layerName;
		// layer.outPoint = slateDur;
		// layer.locked = true;
		
		return layer;
	};
})()