{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-options-directive\">x:options directive</h1>\n<p>Set {_cView#options} on a view or widget config. Same as &lt;options&gt; tag in widget definition, but may be applied\nto views and sugar.</p>\n<p>Content of the directive must be a valid JavaScript object.</p>\n<h3 id=\"example-1\">Example 1</h3>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n</pre><pre class=\"lava-code-content hljs xml\">{#view()}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:options</span>&gt;</span>\n    {\n      option1: 'value1',\n      option2: 'value2'\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:options</span>&gt;</span>\n{/view}</pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n</pre><pre class=\"lava-code-content hljs javascript\">{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"View\"</span>,\n    options: {\n        option1: <span class=\"hljs-string\">\"value1\"</span>,\n        option2: <span class=\"hljs-string\">\"value2\"</span>\n    },\n    template: [<span class=\"hljs-string\">\"\\r\\n\\t\\r\\n\"</span>]\n}</pre></div></div><h3 id=\"example-2-using-a-lt-script-gt-tag\">Example 2: using a &lt;script&gt; tag</h3>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n</pre><pre class=\"lava-code-content hljs xml\">{#view()}\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"x:options\"</span>&gt;</span><span class=\"javascript\">\n        {\n            option1: <span class=\"hljs-string\">'value1'</span>,\n            option2: <span class=\"hljs-string\">'value2'</span>\n        }\n    </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n{/view}</pre></div></div><p>This form allows you to take advantage of IDE syntax highlighting inside the &lt;script&gt; tag.</p>\n<p>Note: these examples are artificial, <a href=\"/www/doc.html#class=Lava.view.View\">Lava.view.View</a> class does not have any options.</p>\n"],
	container: {
		"class": "Element",
		tag_name: "div"
	}
}