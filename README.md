# Matthew Law's Kbar Snippets

A collection of bits of code I use almost daily via [Kbar](https://aescripts.com/kbar/) in Adobe After Effects. Basically they're all 1 trick ponies that work best as buttons.

If you're want to use this but aren't a regular git person click the green `Code` button top right and look for the `Download Zip` option.

## [Reveal Project In Finder](https://github.com/foughtthelaw/kbar_snippets/blob/main/RevealProjectInFinder.js)

Does what it says on the tin. Opens the system file browser to the folder that contains the currently open project file and selects said file.

## [Isolate Comps](https://github.com/foughtthelaw/kbar_snippets/blob/main/IsolateComps.js)

Removes anything that isn't a CompItem from your selection in the Project Panel. This was written in a fit of frustration after the Nth time shift selecting comps in multiple folders and then attempting to double click to open them all or add to the render queue.

## [Remove Unused Comps](https://github.com/foughtthelaw/kbar_snippets/blob/main/RemoveUnusedCompsFromSelection.js)

Goes through all selected items in the project panel and deletes only the comps that aren't referenced in other comps. Not great on your final export comps but super handy when you've got tons of redundant comps because of something like True Comp Duplicator.

## [Print Missing Footage Paths](https://github.com/foughtthelaw/kbar_snippets/blob/main/PrintMissingFootagePaths.js)

Loops through all project items and creates a `MISSING_FOOTAGE.json` on your desktop.

## [Reload all footage in Comp/Project]()

Snippets for reloading all footage items found in a given comp / project / project selection. I find this useful for quick turn 3d work where you're making changes and rendering over existing image sequences frequently.

## [Layer Names to Comp Markers](https://github.com/foughtthelaw/kbar_snippets/blob/main/LayerNames-to-CompMarkers.js)

Clears all Comp Markers and replaces them with Comp Markers derived from the names of all selected layers.

## [Layer Names from First Layer Marker](https://github.com/foughtthelaw/kbar_snippets/blob/main/LayerNames-from-FirstLayerMarker.js)

Assigns the comment from the first marker on a selected layer to that layers name.

## [Link Pins to Parent Shapes](https://github.com/foughtthelaw/kbar_snippets/blob/main/pins_to_shapes.js)

Loops through the pins on a selected layer, creates a 50 pixel circular shape layer above each pin and then expression links the position of that pin to the shape.

#### Known Issues:
```
- Only works on a single mesh
- Mesh must be explicitly named "Mesh 1"
- color and size of shapes are hard coded.
```

## Extract [R](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-red-channel.js)/[G](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-green-channel.js)/[B](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-blue-channel.js)Channel

Script-ified version of a preset I use to manually do channel extractions. Fiddle with the histogram in Levels then chokes and blur till you've got something usable.

## Reset PSRA to [Comp](https://github.com/foughtthelaw/kbar_snippets/blob/main/Reset-PSRA-to-Comp.js)/[Zero](https://github.com/foughtthelaw/kbar_snippets/blob/main/Reset-PSRA-to-Zero.js)

Quick way to reset a layers position, scale, rotation, and anchor point. To Zero is traditionally used with mocha tracking data and a foreground layer being corner pinned into place. It will reset defaults on RSA and set the position to `[0,0]` to Comp does the same but puts the position dead center in your composition.

## [Solid Shape](https://github.com/foughtthelaw/kbar_snippets/blob/main/solidShape.js)

I'm not a fan of having a massive solids folder at the end of a project. This creates a comp sized rectangle shape layer and drops it above your layer selection in the active comp.

## [Burn In Shot Info](https://github.com/foughtthelaw/kbar_snippets/blob/main/text_BurnIn_shotInfo.js)

Adds a "for review purposes only" watermark to the top of your comp and the Project File Name, Comp Name, and frame number to the bottom. For when you need a little help breaking in clients who aren't used to giving detailed notes on shots.

## [Enable](https://github.com/foughtthelaw/kbar_snippets/blob/main/all_layers_3d_on.js) / [Disable](https://github.com/foughtthelaw/kbar_snippets/blob/main/all_layers_3d_off.js) all 3d Layers

Intended to be a means of squeezing fast previews out of the new real time 3d Fast Draft engine introduced in AE 17.5.0. all_layers_3d_on.js will turn all layer 3d switches to on and set the active viewer to `FAST DRAFT` mode. all_layers_3d_off.js will disable 3d on all layers and switch the active viewer's fast previews to `ADAPTIVE RESOLUTION`

## [Toggle Multi Frame Rendering](https://github.com/foughtthelaw/kbar_snippets/blob/main/MFR_Toggle.js)

Starting w/ the [public beta of v18.1.0.21](https://blog.adobe.com/en/publish/2021/03/10/multi-frame-rendering-now-in-after-effects-beta.html) After Effects added true concurrent frame rendering for file exports. While amazing when needed for heavy renders it can slow down projects with many small light weight renders. This acts as an easy On/Off switch rather than digging into the app prefs dialog every time you need to change the setting.

## [Track Matte Buttons](https://github.com/foughtthelaw/kbar_snippets/blob/main/matte_scriptlets.js)

[AE Public Beta v23.0.0.37 added API updates for the new Track Matte workflow](https://community.adobe.com/t5/after-effects-beta-discussions/new-scripting-api-for-selectable-track-matte-layers/m-p/13161305/thread-id/2271). These functions can easily be assigned to a single button w/ different modifier keys. In fact...that's what I did [here](https://www.dropbox.com/s/yhny8uw9i27c9ee/Matte_Butttons-20220826.kbar?dl=1). `Compatible with Kbar 3`

## [Select Matted Layers]()

Takes a given layer and then selects all the layers referencing the given layer as a track matte. for AE v23 or later. Currently only supports 1 input layer.