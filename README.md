# Matthew Law's Kbar Snippets
A collection of bits of code I use almost daily via [Kbar](https://aescripts.com/kbar/) in Adobe After Effects. Basically they're all 1 trick ponies that work best as buttons.

## [Isolate Comps](https://github.com/foughtthelaw/kbar_snippets/blob/main/IsolateComps.js)
Removes anything that isn't a CompItem from your selection in the Project Panel. This was written in a fit of frustration after the Nth time shift selecting comps in multiple folders and then attempting to double click to open them all or add to the render queue.

## [Link Pins to Parent Shapes](https://github.com/foughtthelaw/kbar_snippets/blob/main/pins_to_shapes.js)
Loops through the pins on a selected layer, creates a 50 pixel circular shape layer above each pin and then expression links the position of that pin to the shape.
#### Known Issues:
- Only works on a single mesh
- Mesh must be explicityly named "Mesh 1"
- color and size of shapes are hard coded.

## Extract [R](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-red-channel.js)/[G](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-green-channel.js)/[B](https://github.com/foughtthelaw/kbar_snippets/blob/main/Extract-blue-channel.js)Channel
Script-ified version of a preset I use to manually do channel extractions. Fiddle with the histogram in Levels then chokes and blur till you've got something usable.

## Reset PSRA to [Comp](https://github.com/foughtthelaw/kbar_snippets/blob/main/Reset-PSRA-to-Comp.js)/[Zero](https://github.com/foughtthelaw/kbar_snippets/blob/main/Reset-PSRA-to-Zero.js)
Quick way to reset a layers position, scale, rotation, and anchor point. To Zero is traditionally used with mocha tracking data and a foreground layer being corner pinned into place. It will reset defaults on RSA and set the position to `[0,0]` to Comp does the same but puts the position dead center in your composition.

## [Solid Shape](https://github.com/foughtthelaw/kbar_snippets/blob/main/solidShape.js)
I'm not a fan of having a massive solids folder at the end of a project. This creates a comp sized rectangle shape layer and drops it above your layer selection in the active comp.

## [Burn In Shot Info](https://github.com/foughtthelaw/kbar_snippets/blob/main/text_BurnIn_shotInfo.js)
Adds a "for review purposes only" watermark to the top of your comp and the Project File Name, Comp Name, and frame number to the bottom. For when you need a little help breaking in clients who aren't used to giving detailed notes on shots.