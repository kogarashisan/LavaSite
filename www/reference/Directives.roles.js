{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-roles-directive\">x:roles directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>No</td></tr><tr><td>Multiple usage</td><td>Disallowed</td></tr></tbody></table>\n\n\n\n<p>Directive sets <a href=\"/www/doc.html#object=Support;member=_cView.roles\">_cView#roles</a> for view or widget config.</p>\n<p>Note: there must be no empty space</p>\n<h3 id=\"example\">Example</h3>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><pre class=\"lava-code-content hljs xml\">{#view()}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>\n    $widget_one.role_one(\"example_argument\");#widget_two.role_two\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\n{/view}</pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"View\"</span>,\n    roles: [\n        {\n            locator_type: <span class=\"hljs-string\">\"Id\"</span>,\n            locator: <span class=\"hljs-string\">\"widget_two\"</span>,\n            name: <span class=\"hljs-string\">\"role_two\"</span>,\n            <span class=\"hljs-built_in\">arguments</span>: [{\n                type: <span class=\"hljs-number\">1</span>,\n                data: <span class=\"hljs-string\">\"example_argument\"</span>\n            }]\n        },\n        {\n            locator_type: <span class=\"hljs-string\">\"Id\"</span>,\n            locator: <span class=\"hljs-string\">\"widget_two\"</span>,\n            name: <span class=\"hljs-string\">\"role_two\"</span>,\n            <span class=\"hljs-built_in\">arguments</span>: [{\n                type: <span class=\"hljs-number\">1</span>,\n                data: <span class=\"hljs-string\">\"example_argument\"</span>\n            }]\n        }\n    ],\n    template: [<span class=\"hljs-string\">\"\\r\\n\\t\\r\\n\"</span>]\n}]</pre></div></div><p>You can set roles for a global widget in x:define (via &lt;roles&gt; tag),\nbut it&#39;s recommended to move them to inline widget definition.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}