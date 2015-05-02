var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"argument-and-expressionparser\">Argument and ExpressionParser</h1>\n<p><a href=\"/www/doc/class/Lava.scope.Argument.html\">Lava.scope.Argument</a> class evaluates expressions and <a href=\"/www/doc/object/Lava.ExpressionParser.html\">Lava.ExpressionParser</a> creates \n<a href=\"/www/doc/object/Support.html#member=_cArgument\">configs</a> for Argument class.</p>\n<p>Each Argument instance requires an <code>evaluator</code> - a JavaScript function, which is executed in context of the instance\nand returns the Expression result. Let&#39;s see an example:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary \"><div class=\"lava-new-code-header api-code-header-blue\">Source</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.ExpressionParser.parse(<span class=\"hljs-string\">\"count + 1 + $my_widget.my_modifier()\"</span>)</pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Result</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs text\">[{\n    evaluator: function() {\n        return (this._binds[0].getValue() + 1 + this._callModifier(\"0\", []));\n    },\n    binds: [{property_name: \"count\"}],\n    modifiers: [{\n        locator_type: \"Name\",\n        locator: \"my_widget\",\n        callback_name: \"my_modifier\"\n    }]\n}]</pre></div></div></div><p>This expression uses a variable from view hierarchy - <code>count</code>, and a widget modifier <code>my_modifier</code>.\nBefore evaluating the expression, Argument instance needs to create a <a href=\"/www/doc/class/Lava.scope.PropertyBinding.html\">Lava.scope.PropertyBinding</a> to <code>count</code>,\nwhich is put into <code>this._binds[0]</code>. Also it finds <code>$my_widget</code> to call modifiers from it (<code>this._callModifier(&quot;0&quot;, [])</code>).\nThis is done in constructor.</p>\n<p>Once again, <code>evaluator</code> is a function, generated by ExpressionParser, which is called in context of Argument instance.\nThis way <code>this._binds[0].getValue()</code> returns value of <code>count</code> variable. See the Argument class source for better understanding.</p>\n<p><b>You must never write Argument configs by hands - always use ExpressionParser to do that job.</b>\nOnce again: it&#39;s wrong to insert already parsed expressions in your source code. The reason for it: \nauthor of LiquidLava could decide to change the format of configs or rename Argument internal variables.\nIf that happens - all your parsed configs will become invalid.\nIf you want to speed up parsing - then you should do it on server.</p>\n<h2 id=\"using-expressionparser\">Using ExpressionParser</h2>\n<p>ExpressionParser rewrites source of expressions into evaluator functions:</p>\n<ul>\n<li>it replaces evaluation of variables with calls to <code>this._binds[...].getValue()</code>. \nAt the same time, it stores config for that binding in <a href=\"/www/doc/object/Support.html#member=_cArgumentCommon.binds\">_cArgumentCommon#binds</a></li>\n<li>calls to global modifiers are replaced with <code>this._callGlobalModifier</code></li>\n<li>widget modifier calls are replaced with <code>this._callModifier</code>, \nand <a href=\"/www/doc/object/Support.html#member=_cModifier\">_cModifier</a> config is added to <a href=\"/www/doc/object/Support.html#member=_cArgumentCommon.modifiers\">_cArgumentCommon#modifiers</a></li>\n</ul>\n<p>It also unescapes operators, for example: &quot;&amp;amp;&amp;amp;&quot; will become &quot;&amp;&amp;&quot;. \nAll other content is inserted into evaluator as-is.</p>\n<p>Expressions must not contain operators with side-effects (operators, which modify their operands), like increment\nor assignment operator. Also, there must be no <span class=\"api-keyword\">var</span> declarations and language constructs, like <span class=\"api-keyword\">if</span> or <span class=\"api-keyword\">switch</span>.\nKeep in mind, that parser does not check JavaScript validity! \n(it&#39;s possible to write expressions, which will compile into invalid evaluator functions)</p>\n<p>Tip: if ternary operator is part of another expression - it&#39;s recommended to surround it with braces.\nIf expressions are parts of ternary operator - it&#39;s also recommended to enclose them in braces: \n<code>((...) ? (...) : (...))</code>. This has nothing to do with ExpressionParser, but is due to low priority of ternary operator \nin JavaScript language. If you forget the braces, then JavaScript engine will place them for you, \nsometimes not the way you want. Such cases are usually hard to find and debug.</p>\n<p> Allowed operands:</p>\n<ul>\n<li>string and number literals</li>\n<li>arrays</li>\n<li>JavaScript keywords: <span class=\"api-keyword\">null</span>, <span class=\"api-keyword\">undefined</span>, <span class=\"api-keyword\">true</span> and <span class=\"api-keyword\">false</span></li>\n<li>variable evaluations, like <code>$my_widget~1.property1.property2</code></li>\n</ul>\n<p>Inline objects are not allowed in expressions, but you can return them from modifiers or widget properties.\nArrays can contain expressions and other arrays, for example:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs text\">$my_widget.my_modifier([1, \"test\", $myWidget.get_operand()])</pre></div></div></div><p>Some identifiers are rewritten into JavaScript operands:</p>\n<table class=\"api-member-table\">\n<thead><tr><td>Sequence</td><td>Equivalent</td></tr></thead>\n<tbody>\n<tr><td>lt</td><td>&lt;</td></tr>\n<tr><td>gt</td><td>&gt;</td></tr>\n<tr><td>amp</td><td>&amp;</td></tr>\n</tbody>\n</table>\n\n<p>This way <code>a lt b</code> is equivalent to <code>a &lt; b</code>.</p>\n<h2 id=\"argument-config-flags\">Argument config flags</h2>\n<p>Argument config has <a href=\"/www/doc/object/Support.html#member=_cArgumentCommon.flags\">_cArgumentCommon#flags</a> property, which describes the expression. \nSee the link for better understanding.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}