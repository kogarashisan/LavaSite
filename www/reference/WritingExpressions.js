{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"writing-expressions\">Writing expressions</h1>\n<h2 id=\"property-paths-and-prefixes\">Property paths and prefixes</h2>\n<p>There are two ways to reference properties:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs text\">// bubbling reference\n{#> my_property}\n\n// with \"locator\" prefix\n{#> $widget.my_property}</pre></div></div><p>When reference is bubbling - <a href=\"/www/doc.html#class=Lava.scope.Argument\">Argument</a> searches for the first a view (or widget), \nwhich has that property. First, it checks current view, than it&#39;s parent, than parent of parent and so on.\nSearch is always done up, from current view to the topmost (root) widget.</p>\n<p>Path after property is evaluated after the property is found:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">{#> my_property.path1.path2}</pre></div></div><p>This will find a view with <code>my_property</code> set, and then evaluate the full path from that view.</p>\n<h2 id=\"view-locators\">View locators</h2>\n<p>Properties with &quot;locator&quot; prefix function differently: first, Argument finds the view by locator,\nand then evaluates the path from it.</p>\n<p>There are three kinds of view locators:</p>\n<ul>\n<li>$by_name - find the first <b>widget</b> with given name (only widgets can have name)</li>\n<li>@by_label - find a view with given label. Labels can be on views and widgets.</li>\n<li>&num;by_id - get a view or widget by it&#39;s id. View can be anywhere in hierarchy and even out of DOM.</li>\n</ul>\n<p>For example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs text\">{#> $widget.my_property}\n{#> $widget.my_property.path1.path2}</pre></div></div><p>This will find a widget with name &quot;widget&quot;, and then get <code>my_property</code> and the rest of the path from it.\nDoes not matter, if property is defined in widget instance or not - bindings will be created to the widget,\nmatched by locator.</p>\n<p>Widget&#39;s <a href=\"/www/doc.html#class=Lava.widget.Standard;member=name\">name</a> is taken from JavaScript class, while view&#39;s \n<a href=\"/www/doc.html#class=Lava.view.Abstract;member=label\">label</a> and <a href=\"/www/doc.html#class=Lava.view.Abstract;member=id\">id</a> come from templates (view&#39;s config)\nand are assigned in constructor. <a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a> class has name &quot;widget&quot; - it&#39;s the default name, \nwhich you should change in your own widget classes.</p>\n<p>When you search for views or widgets by their #id - hierarchy is ignored completely. \nThis way you can target global widgets - they only need to be created, and may even be out of DOM.</p>\n<h2 id=\"depth-operator\">Depth operator</h2>\n<p>Locator prefix may be followed by the &quot;depth operator&quot;, which allows you to reference parents of the target: </p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">{#> $widget~1.my_property}</pre></div></div><p>This tells to get the first parent of <code>$widget</code> and then get <code>my_property</code> from it. \nNumber after the tilde specifies which parent to get.</p>\n<p>For better understanding, see the source of <a href=\"/www/doc.html#class=Lava.view.Abstract;member=locateViewByPathConfig\">Abstract#locateViewByPathConfig</a></p>\n<h2 id=\"search-operator\">Search operator</h2>\n<p>Search operator allows you to skip certain part of hierarchy when searching for variables.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">$widget->level</pre></div></div><p>This tells to find <code>$widget</code>, but skip it, and get it&#39;s parent instead. Then search for <code>level</code> starting from \nthat parent (bubbling search).</p>\n<p>On other words, <code>level</code> variable, if it exists: will be ignored on current view, on &quot;$widget&quot;, and on any views between them. \nSearch for <code>level</code> will start from parent of the &quot;$widget&quot;.</p>\n<p>Search and depth operators can be combined:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">$widget~1->level</pre></div></div><p>This will start to search for &quot;level&quot; from the parent of the parent of &quot;$widget&quot;.</p>\n<h2 id=\"reserved-view-labels\">Reserved view labels</h2>\n<p>These labels may be used to reference views in expressions (but not in <i>targets</i>)</p>\n<ul>\n<li>@root - the root widget, which was inserted into the page</li>\n<li>@this - current view</li>\n<li>@parent - the parent of current view</li>\n<li>@widget - nearest parent widget in hierarchy</li>\n</ul>\n<p>You should be careful when using @widget label - it refers to the nearest parent widget,\nnot to the widget where a template was defined. So if you decide to wrap a piece of template into another widget,\nlike CollapsiblePanel - @widget will point to that panel instead of current widget. And it does not matter,\nif you wrap using full &lt;x:widget&gt; syntax, or syntax sugar, like &lt;tabs&gt; or &lt;accordion&gt;.</p>\n<p>Also note, that these labels are valid in expressions, but <b>the only allowed label in view and role targets is</b> @root.</p>\n<p>See the source of <a href=\"/www/doc.html#class=Lava.view.Abstract;member=locateViewByLabel\">Abstract#locateViewByLabel</a>.</p>\n<h2 id=\"modifiers\">Modifiers</h2>\n<p>Modifiers are user-defined functions, which you can call from expressions. Global modifiers are defined in\n<a href=\"/www/doc.html#object=Lava.modifiers\">Lava.modifiers</a>. Example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">{#> ucFirst(your_name)}</pre></div></div><p>You can also define modifiers in widgets:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>,\n{\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n    name: <span class=\"hljs-string\">'hello_app'</span>,\n\n    _modifiers: {\n        say_hello: <span class=\"hljs-string\">'_sayHello'</span>\n    },\n\n    _sayHello: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(str)</span> {</span>\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"Hello \"</span> + str;\n    }\n});</pre></div></div><p>Here we defined a <b>protected</b> function, which we want to call from templates - <code>_sayHello</code>. \nIt can take any number of arguments and return any value. In order ro make it available to templates -\nit must be added to the <code>_modifiers</code> map. Keys in it are modifier names in templates, and values are name of \nclass methods. Modifiers are called in context of the widget instance, so they can use other widget methods.</p>\n<p>Widget modifier can be called like this:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    {#&gt; $hello_app.say_hello(\"World\")}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>Widget modifiers are always called with locator. Locator may be also label or id, but it should point to a widget.\nSee also: <a href=\"/www/doc.html#class=Lava.widget.Standard;member=callModifier\">Standard#callModifier</a> source.</p>\n<p>Tip: if you have a very complex expression in your template - sometimes it&#39;s better to hide it into a modifier -\nit&#39;s considered a good practice.</p>\n<p><b>Warning: modifiers must not have any side-effects. This means, that you should not modify your arguments or\nanything else in modifiers. Also, creating objects with <span class=\"api-keyword\">new</span> operator inside modifiers is not recommended -\nit may lead to memory leaks, and it&#39;s a bad practice from architect&#39;s point of view.</b></p>\n<p>Final example:\n<iframe style=\"height: 26em; width: 100%\" src=\"http://embed.plnkr.co/7eHFEz/index.html\"></iframe>\n<i><a href=\"/www/demos/reference/WritingExpressions.html\">Alternative link</a></i></p>\n<h2 id=\"dynamic-scopes\">Dynamic scopes</h2>\n<p>Dynamic scopes give you ability to choose paths to properties dynamically.\nFor example, the Tree widget can take &quot;is_expanded&quot; property either from records directly, \nor from it&#39;s internal MetaStorage.</p>\n<p>Dynamic scope syntax:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">known_widget{IDENTIFIER}</pre></div></div><p><code>known_widget</code> references a widget, either by $name, @label, or #id. Example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{$if(node.children.length &amp;&amp; $tree{is_expanded})}\n    ... show node children ...\n{/if}</pre></div></div><p>Both <code>node.children.length</code> and <code>$tree{is_expanded}</code> constructs define paths to properties, but the first path is static, \nwhile the second is determined at run time. You can substitute the second path with any other path you want.</p>\n<h3 id=\"how-dynamic-scopes-work\">How dynamic scopes work</h3>\n<p>When Argument is constructed - it gets all dependent scopes from it&#39;s view (<code>view.getScopeByPathConfig(...)</code>). \nBut if scope is dynamic - then Argument finds scope&#39;s widget, then calls it&#39;s <code>getDynamicScope</code> method,\nwhich performs <code>getScopeByPathConfig()</code>:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">\"Lava.widget.MyTree\"</span>,\n{\n    name: <span class=\"hljs-string\">\"tree\"</span>,\n    getDynamicScope: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(view, dynamic_config)</span> {</span>\n\n        <span class=\"hljs-keyword\">if</span> (dynamic_config.property_name != <span class=\"hljs-string\">\"is_expanded\"</span>) Lava.t();\n\n        <span class=\"hljs-keyword\">var</span> result_config = <span class=\"hljs-keyword\">this</span>._is_using_meta_storage\n            ? Lava.ExpressionParser.parseScopeEval(<span class=\"hljs-string\">'$tree.meta_storage[node.guid].is_expanded'</span>)\n            : Lava.ExpressionParser.parseScopeEval(<span class=\"hljs-string\">'node.is_expanded'</span>);\n\n        <span class=\"hljs-keyword\">return</span> view.getScopeByPathConfig(result_config);\n\n    }\n    <span class=\"hljs-comment\">// ...</span>\n});</pre></div></div><p><code>getDynamicScope</code> receives Argument&#39;s view and config of the dynamic scope (<a href=\"/www/doc.html#object=Support;member=_cDynamicScope\">_cDynamicScope</a>).\nThis example returns a binding to either record&#39;s own property &quot;is_expanded&quot;, or property from MetaStorage record.</p>\n<p>Result is equivalent to one of the following expressions:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{$if(node.children.length &amp;&amp; $tree.meta_storage[node.guid].is_expanded)}\n// or\n{$if(node.children.length &amp;&amp; node.is_expanded)}</pre></div></div><p>See also: source of <a href=\"/www/doc.html#class=Lava.scope.Argument;member=init\">Argument#init</a>, and <a href=\"/www/doc.html#class=Lava.widget.Tree\">Lava.widget.Tree</a>.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}