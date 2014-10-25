{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"frequently-asked-questions\">Frequently asked questions</h1>\n<p><b>I got &quot;Debug assertion failed&quot; in console. What should I do?</b></p>\n<p>When you get any error - you should try to debug your program. Lava is very easy to debug, \nso it&#39;s recommended to always keep a breakpoint on <a href=\"/www/doc.html#object=Lava;member=t\">Lava#t</a>.</p>\n<p>If you are lucky - then &quot;Debug assertion failed&quot; just means an absence of better error message, \nand you will quickly understand the reason from source code. If you are not so lucky - then you may be doing something \nwrong, but the reason will be hard to understand. And in exceptionally rare cases - \nthis means that framework has a bug and you should report it to the author (with source code of your app).</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}