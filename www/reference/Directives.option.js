var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-option-directive\">x:option directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>No</td></tr><tr><td>Multiple usage</td><td>Allowed</td></tr></tbody></table>\n\n\n\n<p>Define an option on a view or widget config. Same as &lt;option&gt; tag in widget definition, but may be applied\nto views and sugar.</p>\n<p>Content of the directive is expected to be any JavaScript type, like strings, objects, arrays or literals.</p>\n<p>Directive may have an optional <code>type</code> attribute:</p>\n<ul>\n<li><span class=\"api-string\">&quot;targets&quot;</span> - option value is parsed with <a href=\"/www/doc/object/Lava.parsers.Common.html#member=parseTargets\">Common#parseTargets</a></li>\n<li><span class=\"api-string\">&quot;expressions&quot;</span> - option value is parsed with ExpressionParser</li>\n</ul>\n<h2 id=\"example\">Example</h2>\n<div class=\"lava-new-code-container lava-new-code-container-primary \"><div class=\"lava-new-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{#view()}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:option</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"test_option\"</span>&gt;</span>\"option_value\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:option</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"targets\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"test_targets_option\"</span>&gt;</span>\n    $test_target.test_callback(\"test_argument\")\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:option</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"expressions\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"test_expression_option\"</span>&gt;</span>\n    var_name + 1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:option</span>&gt;</span>\n{/view}</pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">[{\n  type: <span class=\"hljs-string\">\"view\"</span>,\n  <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"View\"</span>,\n  options: {\n    test_option: <span class=\"hljs-string\">\"option_value\"</span>,\n    test_targets_option: [{\n      locator_type: <span class=\"hljs-string\">\"Name\"</span>,\n      locator: <span class=\"hljs-string\">\"test_target\"</span>,\n      name: <span class=\"hljs-string\">\"test_callback\"</span>,\n      <span class=\"hljs-built_in\">arguments</span>: [{\n        type: <span class=\"hljs-number\">1</span>,\n        data: <span class=\"hljs-string\">\"test_argument\"</span>\n      }]\n    }],\n    test_expression_option: [{\n      evaluator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n        <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-keyword\">this</span>._binds[<span class=\"hljs-number\">0</span>].getValue() + <span class=\"hljs-number\">1</span>);\n      },\n      binds: [{property_name: <span class=\"hljs-string\">\"var_name\"</span>}]\n    }]\n  },\n  template: [<span class=\"hljs-string\">\"\\r\\n\\t\\r\\n\\t\\r\\n\\t\\r\\n\"</span>]\n}]</pre></div></div></div><p>Note: this is an artificial example, <a href=\"/www/doc/class/Lava.view.View.html\">Lava.view.View</a> class does not have any options.</p>\n<p>You can have both x:option and x:options directives at the same time.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}