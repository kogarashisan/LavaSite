{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"appendix-development-guidelines\">Appendix С - Development guidelines</h1>\n<p>To be able to use Bower and run the following commands in console - you need to have Node.js and Git installed in your system. \nYou may also need to install Node.js packages like &quot;bower&quot; and &quot;grunt&quot;.\nInstall process is not covered in this reference, please read the corresponding documentation of each mentioned tool.</p>\n<h2 id=\"commandments-of-lava-developer\">Commandments of Lava developer</h2>\n<ul>\n<li>Develop with <a href=\"/www/doc.html#object=Lava.schema;member=DEBUG\">schema#DEBUG</a> switch enabled. Program that fails in DEBUG mode is not valid.</li>\n<li>Never modify original framework file. Use &quot;monkey patching&quot; instead.</li>\n<li>Distribute your widgets with sources of their templates. Distributing only parsed configs is not enough.</li>\n</ul>\n<h2 id=\"using-bower\">Using bower</h2>\n<p>For your projects you want to use specific versions of Lava.\nBower is a dependency management tool, which automates this task. Example <code>bower.json</code>:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs javascript\">{\n    <span class=\"hljs-string\">\"dependencies\"</span>: {\n        <span class=\"hljs-string\">\"lava-framework\"</span>: <span class=\"hljs-string\">\"~0.8.0\"</span>\n    }\n}</pre></div></div><p>This will create directory <code>bower_components/lava-framework</code> in your project&#39;s folder, \nand checkout version 0.8.x of Lava from GitHub to that folder.\nAfter checkout you can manually delete all files, that you don&#39;t need.</p>\n<p>To learn more, visit the official <a href=\"http://bower.io/\">Bower website</a>.</p>\n<h2 id=\"building\">Building</h2>\n<p>Build scripts produce compiled versions of framework classes (which are not committed to main GitHub repository).\nCheckout Lava core from GitHub and run the following to build current master:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs text\">grunt\ngrunt export</pre></div></div><p>This will produce <code>dist/lava-master-compiled-DEBUG.js</code>.</p>\n<h2 id=\"versioning\">Versioning</h2>\n<p>Lava uses semantic versioning: master branch contains tags &quot;v#.#.#&quot; which you can use to checkout specific version.\nSee also framework&#39;s <a href=\"https://github.com/kogarashisan/LiquidLava/releases/\">releases</a> page.</p>\n<p><b>In case of any breaking changes, there will be no backward compatibility. Instead, you will be given detailed\nupgrade instructions, at least in Alpha and Beta stages.</b> See the <a href=\"/www/changelog.html\">Changelog</a>.</p>\n<p><b>If you cache parsed templates and expressions - then you should regenerate them every time you upgrade to a new version,\ncause format of generated data can change without notice.</b></p>\n<h2 id=\"bugs\">Bugs</h2>\n<p>For list of open bugs see the <a href=\"/www/tasks.html\">Tasks</a> page and GitHub \n<a href=\"https://github.com/kogarashisan/LiquidLava/issues?state=open\">issues</a>.</p>\n<p>If you found a bug or a mistake somewhere, please, submit an issue to GitHub with detailed description and source code.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}