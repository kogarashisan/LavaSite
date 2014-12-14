<lavabuild:title>Appendix C - Development</lavabuild:title>

#Appendix С - Development guidelines

Note: to be able to use Bower and run the following commands in console - 
you need to have Node.js and Git installed in your system. 
You may also need to install Node.js packages like "bower" and "grunt".
Install process is not covered in this reference, please read the corresponding documentation of each mentioned tool.

##Using bower

For your projects you want to use specific versions of Lava.
Bower is a dependency management tool, which automates this task. Example `bower.json`:

```javascript
{
	"dependencies": {
		"lava-framework": "~0.7.0"
	}
}
```

This will create directory `bower_components/lava-framework` in your project's folder, 
and checkout version 0.7.x of Lava from GitHub to that folder.
After checkout you can manually delete all files, that you don't need.

To learn more, visit the official <a href="http://bower.io/">Bower website</a>.

##Building

Build scripts produce compiled versions of framework classes (which are not committed to main GitHub repository).
Checkout Lava core from GitHub and run the following to build current master:

```text
grunt
grunt export
```

This will produce `dist/lava-master-compiled-DEBUG.js`.

##Versioning

Lava uses semantic versioning: master branch contains tags "v#.#.#" which you can use to checkout specific version.
See also framework's <a href="https://github.com/kogarashisan/LiquidLava/releases/">releases</a> page.

<b>In case of any breaking changes, there will be no backward compatibility. Instead, you will be given detailed
upgrade instructions.</b> See the <a href="/www/changelog.html">Changelog</a>.

##Bugs

For list of open bugs see the <a href="/www/tasks.html">Tasks</a> page and GitHub 
<a href="https://github.com/kogarashisan/LiquidLava/issues?state=open">issues</a>.

If you found a bug or a mistake somewhere, please, submit an issue to GitHub with detailed description and source code.