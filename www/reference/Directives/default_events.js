{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-default_events-directive\">x:default_events directive</h1>\n<p>Define <a href=\"/www/doc.html#object=Support;member=_cWidget.default_events\">_cWidget#default_events</a> for a widget. May be useful, when you are defining a widget in the &lt;body&gt;\nelement, or a new template in widget&#39;s sugar.</p>\n<h3 id=\"example\">Example</h3>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"ChangelogPage\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:default_events</span>&gt;</span>['click']<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:default_events</span>&gt;</span>\n    ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div>"],
	container: {
		"class": "Element",
		tag_name: "div"
	}
}