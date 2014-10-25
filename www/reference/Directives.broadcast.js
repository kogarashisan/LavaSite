{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-broadcast-directive\">x:broadcast directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>Yes</td></tr><tr><td>Multiple usage</td><td>Disallowed</td></tr></tbody></table>\n\n\n\n<p>Sets <a href=\"/www/doc.html#object=Support;member=_cWidget.broadcast\">_cWidget#broadcast</a></p>\n<h3 id=\"example\">Example</h3>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:broadcast</span> \n    <span class=\"hljs-attribute\">panel_expanding</span>=<span class=\"hljs-value\">\"#page.accordion_panel_expanding\"</span>\n    <span class=\"hljs-attribute\">panel_collapsing</span>=<span class=\"hljs-value\">\"#page.accordion_panel_collapsing\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:broadcast</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panels</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panels</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"Accordion\"</span>,\n    broadcast: {\n        panel_expanding: [{\n            locator_type: <span class=\"hljs-string\">\"Id\"</span>,\n            locator: <span class=\"hljs-string\">\"page\"</span>,\n            name: <span class=\"hljs-string\">\"accordion_panel_expanding\"</span>\n        }],\n        panel_collapsing: [{\n            locator_type: <span class=\"hljs-string\">\"Id\"</span>,\n            locator: <span class=\"hljs-string\">\"page\"</span>,\n            name: <span class=\"hljs-string\">\"accordion_panel_collapsing\"</span>\n        }]\n    },\n    storage: {\n        panels: [\n            {\n                title: [<span class=\"hljs-string\">\"Panel 1\"</span>],\n                content: [<span class=\"hljs-string\">\"Content 1\"</span>]\n            },\n            {\n                title: [<span class=\"hljs-string\">\"Panel 2\"</span>],\n                content: [<span class=\"hljs-string\">\"Content 2\"</span>]\n            }\n        ]\n    }\n}]</pre></div></div><p>Here, &lt;accordion&gt; is syntax sugar for Accordion tag.</p>\n<p>You can set broadcast targets for a global widget in x:define (via &lt;broadcast&gt; tag),\nbut it&#39;s not recommended to do so. It&#39;s recommended to use broadcast on inline widgets.</p>\n<p>Targets are parsed by <a href=\"/www/doc.html#object=Lava.parsers.Common;member=parseTargets\">Common#parseTargets</a>.</p>\n"],
	container: {
		"class": "Element",
		tag_name: "div"
	}
}