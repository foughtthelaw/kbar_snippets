/********
BurnIn

Adds shot info to the bottom of a comp.
Written By: Matthew Law
********/


(function() {
	app.beginUndoGroup("Add Comp BurnIn");

	var activeComp = app.project.activeItem;
	var projectFile = app.project.file;

	if (projectFile === null) {
		alert('This project needs to be saved first!');
	} else {

		var frameCounter = "var projName = thisProject.fullPath.split( \"/\" ).pop().slice( 0, -4 );\r\rvar compName = thisComp.name;\r\rvar currentFrameNum = timeToFrames();\rvar currentFrameStr = Math.abs( currentFrameNum ).toString();\rvar zeroPad = timeToFrames( thisComp.duration ).toString().length + 1;\r\rvar paddedFrameStr = currentFrameStr.padStart( zeroPad, \"0\" );\r\rif ( currentFrameNum < 0 ) {\r    paddedFrameStr = \"-\" + paddedFrameStr.slice( 1 );\r}\r\rvar burnInString = [\r    \"Project: \" + projName,\r    \"Comp: \" + compName,\r    \"Frame: \" + paddedFrameStr\r].join( \" // \" );\r\rburnInString;"

		function addFooter(){
			var footer = activeComp.layers.addText("Project Name // ");
			footer.transform.position.setValue([activeComp.width*.05,activeComp.height*.95]);
			footer.name = "---- Burn-In: Footer ----";		
			footer.locked = true;
			var fProp = footer.property("Source Text");
			var fDocument = fProp.value;
			fDocument.resetCharStyle();
			fDocument.fontSize = 45;
			fDocument.fillColor = [1, 1, 1];
			fDocument.font = "Lyft Pro";
			fDocument.applyFill = true;
			fDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			fProp.setValue(fDocument);
			fProp.expression = frameCounter;
		};

		function addHeader(){
			var header = activeComp.layers.addText("FOR REVIEW PURPOSES ONLY")
			header.transform.position.setValue([activeComp.width*.5,activeComp.height*.05]);
			header.transform.opacity.setValue(50);
			header.name = "---- Burn-In: Header ----";
			header.locked = true;
			var hProp = header.property("Source Text");
			var hDocument = hProp.value;
			hDocument.resetCharStyle();
			hDocument.fontSize = 45;
			hDocument.fillColor = [1, 1, 1];
			hDocument.font = "Lyft Pro";
			hDocument.applyFill = true;
			hDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			hProp.setValue(hDocument);
		};

		addFooter();
		addHeader();
	};

	app.endUndoGroup();
}());