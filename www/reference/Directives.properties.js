{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-properties-directive\">x:properties directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>Yes</td></tr><tr><td>Multiple usage</td><td>Disallowed</td></tr></tbody></table>\n\n\n\n<p>Allows to set <a href=\"/www/doc.html#object=Support;member=_cWidget.properties\">_cWidget#properties</a>. Same as &lt;options&gt;.</p>\n<h2 id=\"example\">Example</h2>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:properties</span>&gt;</span>\n    {\n      is_checked: false,\n      is_indeterminate: true\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:properties</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">checkbox</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CheckBox\"</span>,\n    properties: {\n        is_checked: <span class=\"hljs-literal\">false</span>,\n        is_indeterminate: <span class=\"hljs-literal\">true</span>\n    }\n}]</pre></div></div><p>You can have both x:property and x:properties directives at the same time.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}