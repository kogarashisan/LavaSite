<lavabuild:title>Appendix C - Development</lavabuild:title>

#Appendix С - Development guidelines

To be able to use Bower and run the following commands in console - you need to have Node.js and Git installed in your system. 
You may also need to install Node.js packages like "bower" and "grunt".
Install process is not covered in this reference, please read the corresponding documentation of each mentioned tool.

##Commandments of Lava developer

- Develop with {@link Lava.schema#DEBUG} switch enabled. Program that fails in DEBUG mode is not valid.
- Never modify original framework file. Use "monkey patching" instead.
- Distribute your widgets with sources of their templates. Distributing only parsed configs is not enough.

##Using NPM

Lava framework and Firestorm library can be installed as "lava" and "firestorm" NPM modules.
Example package.json:

```javascript
{
	"dependencies": {
		"lava": "^0.13.2"
	}
}
```

Lava module already includes Firestorm dependency. In Node.js environment you can access it like this:

```javascript
var Lava = require('lava'),
	Firestorm = Lava.getFirestorm();
```

All packaged files can be found in the `lib/` directory of Lava module.
Note, that <i>in browser you do not need to include the Node.js loader</i> `lib/node-module.js`,
instead you should manually include `firestorm.js` and all files from `lib/packages/`.

##Building

Build scripts produce compiled versions of framework classes (which are not committed to main GitHub repository).
Checkout Lava core from GitHub and run the following to build current master:

```text
grunt
grunt export
```

This will produce `dist/lava-master-compiled-DEV.js`.

##Versioning

Lava uses semantic versioning: master branch contains tags "v#.#.#" which you can use to checkout specific version.
See also framework's <a href="https://github.com/kogarashisan/LiquidLava/releases/">releases</a> page.

<b>In case of any breaking changes, there will be no backward compatibility. Instead, you will be given detailed
upgrade instructions, at least in Alpha and Beta stages.</b> See the <a href="/www/changelog.html">Changelog</a>.

<b>If you cache parsed templates and expressions - then you should regenerate them every time you upgrade to a new version,
cause format of generated data can change without notice.</b>

##Bugs

For list of open bugs see the GitHub <a href="https://github.com/kogarashisan/LiquidLava/issues?state=open">issues</a> page.

If you found a bug or a mistake somewhere, please, submit an issue to GitHub with detailed description and source code.