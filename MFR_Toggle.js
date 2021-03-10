(function MFR_Toggle() {
  var prefInfo = {
    section: "Concurrent Frame Rendering",
    key: "Enable Concurrent Frame Renders",
    file: PREFType.PREF_Type_MACHINE_SPECIFIC,
  };
  var minAEVersion = 18.0;
  if (parseFloat(app.version) < minAEVersion) {
    alert("AE version too low!");
    return;
  }
  if (!app.preferences.havePref(prefInfo.section, prefInfo.key, prefInfo.file)) {
    alert("Can't find pref!");
    return;
  }

  // Get current value and set newValue as it's opposite.
  var curValue = app.preferences.getPrefAsBool(prefInfo.section, prefInfo.key, prefInfo.file);

  // Toggle the pref, save to disk, and reload so it's active in the current session
  try {
    app.preferences.savePrefAsBool(prefInfo.section, prefInfo.key, !curValue, prefInfo.file);
    app.preferences.saveToDisk();
    app.preferences.reload();
  } catch (e) {
    alert("Can't change prefs!\n" + e);
  }

  if (!curValue) {
    alert("MFR is ON");
  } else {
    alert("MFR is OFF.");
  }
})();
