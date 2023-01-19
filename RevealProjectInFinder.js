(function () {
    if (app.project.file == null) {
      alert("This project has no file to reveal!\n Save your work ya filthy animal.");
    } else {
      var f = app.project.file.parent.fullName;
      var os = $.os;
      if (os.split(" ")[0] == "Macintosh") {
        system.callSystem("open -R'" + f + "'");
      } else {
        system.callSystem('cmd.exe /c "explorer.exe /select,' + f + '"');
      }
    }
  })();
  