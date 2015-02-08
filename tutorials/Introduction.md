
#Introduction

Hello and welcome to the LiquidLava tutorials!

At first glance, you may find this framework a bit unusual, especially the template syntax and behaviour. 
But once you understand how everything works - it may surprise you with it's power and beauty.

While reading these manuals - you are recommended to look at the framework's source code 
in the `src/` directory. Lava has clean and easy sources, which will answer most of your questions.
Also keeping your browser's console open while executing the examples will make your life a lot easier.

Lets start from a completely blank page with included framework:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/S9wbHK/index.html"></iframe>
You may also open it <a href="/www/demos/blank.html" target="_blank">here</a> and save it to your hard drive.

First, we include the libraries and styles for standard widgets:

```xml
<script src="http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js"></script>
<script src="http://lava-framework.com/lib/lava-master-DEV.js"></script>
<link rel="stylesheet" href="http://lava-framework.com/www/css/widgets.css" />
```

<i>`lava-master-DEV.js` is a packaged bundle, that you can use for educational purposes. In real projects you 
should use the <a href="https://www.npmjs.com/package/lava">lava NPM module</a>.</i>

Currently, Lava framework depends on MooTools, but this dependency will be removed later.
For now there is only one theme available for standard widgets: Bootstrap.
`widgets.css` includes Bootstrap core, Bootstrap theme and `lava-widgets.css` from framework repository. 
If you don't plan to use standard widgets, then you can remove the CSS reference.

Framework initialization is done manually - this gives you total control over the process:

```javascript
window.addEvent('load', function() {
	Lava.init();
});
```

We must wait before page is fully loaded, cause framework may need the &lt;body&gt; element.
Here we are using window's "load" event from MooTools.
