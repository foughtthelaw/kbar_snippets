/** 
Print Missing Footage Paths
Searches your project for all missing footage and drops MISSING_FOOTAGE.json on your desktop.
Written By: Matthew Law
*/

(function () {
  var sel = app.project.selection;
  var missing = [];
  var paths = [];

  for (var i = 1; i < app.project.items.length; i++) {
    var temp = app.project.items[i];
    if (temp.footageMissing) {
      paths.push(temp.file.fsName);
    }
  }

  function exportObjAsJSONfile(outPath, outName, obj) {
    var extension = ".json";
    var completePath = outPath + "/" + outName + extension;
    var outString = JSON.stringify(obj, null, 2);

    var txtFile = new File(completePath);
    txtFile.open("w");
    txtFile.write(outString);
    txtFile.close();

    system.callSystem("open " + outPath);
  }

  exportObjAsJSONfile("~/Desktop", "MISSING_FOOTAGE", paths);
})();
