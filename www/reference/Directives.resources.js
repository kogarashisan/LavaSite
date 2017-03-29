var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-resources-directive\">x:resources directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>Yes</td></tr><tr><td>Multiple usage</td><td>Allowed</td></tr></tbody></table>\n\n\n\n<p>Defines <a href=\"/www/doc/object/Support.html#member=_cWidget.resources\">_cWidget#resources</a> for a widget</p>\n<h2 id=\"example\">Example</h2>\n<div class=\"lava-new-code-container lava-new-code-container-primary \"><div class=\"lava-new-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:resources</span> <span class=\"hljs-attribute\">locale</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">container</span> <span class=\"hljs-attribute\">path</span>=<span class=\"hljs-value\">\"COLLAPSIBLE_PANEL_CONTAINER\"</span> <span class=\"hljs-attribute\">add_classes</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:resources</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">[{\n  type: <span class=\"hljs-string\">\"widget\"</span>,\n  <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n  extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n  <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CollapsiblePanel\"</span>,\n  resources: {\n    <span class=\"hljs-string\">\"default\"</span>: {\n      COLLAPSIBLE_PANEL_CONTAINER: {\n        type: <span class=\"hljs-string\">\"container_stack\"</span>,\n        value: [{\n          name: <span class=\"hljs-string\">\"add_classes\"</span>,\n          value: [<span class=\"hljs-string\">\"panel-default\"</span>]\n        }]\n      }\n    }\n  },\n  includes: {\n    title: [<span class=\"hljs-string\">\"...\"</span>],\n    content: [<span class=\"hljs-string\">\"...\"</span>]\n  }\n}]</pre></div></div></div>"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}