{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-assign-directive\">x:assign directive</h1>\n<p>Directive sets <a href=\"/www/doc.html#object=Support;member=_cView.assigns\">_cView#assigns</a> for view or widget config.</p>\n<h3 id=\"example\">Example</h3>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_checked\"</span>&gt;</span>node.is_checked<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">checkbox</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n</pre><pre class=\"lava-code-content hljs javascript\">{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CheckBox\"</span>,\n    assigns: {\n        is_checked: {\n            evaluator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n                <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-keyword\">this</span>._binds[<span class=\"hljs-number\">0</span>].getValue());\n            },\n            flags: {isScopeEval: <span class=\"hljs-literal\">true</span>},\n            binds: [{\n                property_name: <span class=\"hljs-string\">\"node\"</span>,\n                tail: [<span class=\"hljs-string\">\"is_checked\"</span>]\n            }]\n        }\n    }\n}</pre></div></div>"],
	container: {
		"class": "Element",
		tag_name: "div"
	}
}