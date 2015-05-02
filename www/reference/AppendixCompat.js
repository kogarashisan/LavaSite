var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"appendix-a-compatibility-notes\">Appendix A - Compatibility notes</h1>\n<p>Framework does not fix bugs in plain HTML elements, even when they belong to an Element container.\nIn other words, you can create a &lt;select&gt; tag on page and bind it&#39;s <span class=\"api-var\">value</span> property with <code>x:bind:value</code> \nsyntax, but that will <b>not</b> work in all browsers, so you should not do it.</p>\n<p><i>If you want your input fields to work correctly - you should use framework&#39;s widgets, which implement bug fixes.</i></p>\n<h2 id=\"release-notes\">Release notes</h2>\n<ul>\n<li>Framework depends on MooTools. Recommended version: 1.51 and newer, but may work with 1.45, but not older.</li>\n<li>Naturally, LiquidLava and Firestorm frameworks can not coexist with code that modifies the native object&#39;s ptototype.</li>\n<li><b>IE8 and below are not supported, and probably will never be.</b></li>\n</ul>\n<h2 id=\"ie\">IE</h2>\n<ul>\n<li>IE 8-9 have bugs with text input elements (they do not always send &quot;changed&quot; event)</li>\n<li>IE 10-11, and most likely lower versions, have bugs with indeterminate checkboxes (they also do not send &quot;changed&quot;)</li>\n</ul>\n<p>These bugs are fixed in <a href=\"/www/doc/class/Lava.view.container.CheckboxElement.html\">Lava.view.container.CheckboxElement</a> and <a href=\"/www/doc/class/Lava.view.container.TextInputElement.html\">Lava.view.container.TextInputElement</a>,\nwhich are used by TextInput, PasswordInput and Checkbox widgets. These containers implement custom ViewManager event \n&quot;compatible_changed&quot;.</p>\n<p>&lt;textarea&gt; in IE 8-9 is also buggy, and still requires a fix.</p>\n<h2 id=\"safari\">Safari</h2>\n<ul>\n<li>On IOS: does not delegate click event. Must be fixed in <a href=\"/www/doc/class/Lava.view.container.Element.html\">Lava.view.container.Element</a>.</li>\n<li>Windows (other untested): will not fire &quot;focus&quot; and &quot;blur&quot; events on inputs with &quot;autofocus&quot; attribute, \nwhich are controlled by the framework. It means that <a href=\"/www/doc/class/Lava.system.FocusManager.html\">Lava.system.FocusManager</a> instance will not know \nthat input widget got focus. Will not be fixed.</li>\n</ul>\n<h2 id=\"browser-compatibility-general\">Browser compatibility - general</h2>\n<ul>\n<li>Do not use &quot;autofocus&quot; attribute inside framework widgets. Widgets are rendered and inserted into DOM, \nand it does not work well in Safari. Instead, you can focus your input manually after insertion into DOM.</li>\n</ul>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}