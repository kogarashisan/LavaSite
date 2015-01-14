{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"template-parsing-in-depth\">Template parsing in depth</h1>\n<p>Template parsing happens in two stages: first, TemplateParser disassembles the string with template into AST\n(Abstract Syntax Tree) in <a href=\"/www/doc.html#object=Lava.TemplateParser;member=parseRaw\">TemplateParser#parseRaw</a>, then AST is transformed into view and widget configs\nin <a href=\"/www/doc.html#object=Lava.parsers.Common;member=compileTemplate\">Common#compileTemplate</a>. Compilation also converts HTML tags: tags that belong to sugar - \nare converted to widget configs, tags with control attributes - to container configs, and common tags are serialized \nback to strings.</p>\n<p>The following construct is called a &quot;block&quot;:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{#blockname()}\n    ...\n{/blockname}</pre></div></div><p><b>Parsers are very strict about code style and validity</b>, for example: there must be no space before and after the block name,\nand all non-void HTML tags must be closed properly.</p>\n<p>Technically, any block can have an argument, hash options, and elseif/else templates:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n</pre><pre class=\"lava-code-content hljs xml\">{#blockname(argument1) option1=\"value1\" option2=\"value2\"}\n    ...\n{elseif(argument2)}\n    ...\n{elseif(argument3)}\n    ...\n{else}\n    ...\n{/blockname}</pre></div></div><p>Only &quot;if&quot; block is able to use elseif/else sections, and only certain hash options are allowed, but\nwhen TemplateParser transforms the template into AST - it does not check tree validity. \nThis validation is done when templates are compiled, in <a href=\"/www/doc.html#object=Lava.parsers.Common;member=compileTemplate\">Common#compileTemplate</a>.</p>\n<p>Argument and templates are technically allowed for any block, but &quot;view&quot; (<a href=\"/www/doc.html#class=Lava.view.View\">Lava.view.View</a>) does not use arguments, \nand &quot;expression&quot; (<a href=\"/www/doc.html#class=Lava.view.Expression\">Lava.view.Expression</a>) can not have templates - these checks are done in DEBUG mode at run time.</p>\n<p>Symbol <span class=\"api-string\">&quot;#&quot;</span> in the block opening tag means that block does not have a container. \nThis symbol can be replaced with <span class=\"api-string\">&quot;$&quot;</span> to give block a Morph container. Again, this choice is controlled at\nthe stage of compilation. Block can also be given an Element container, with <a href=\"/www/doc.html#reference=ElementSyntax\">special syntax</a>.</p>\n<p>Quotes around hash values are optional, so you can write <code>option1=value1</code>. \nYou can also write options without a value, which are assigned <span class=\"api-keyword\">true</span> in this case:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n</pre><pre class=\"lava-code-content hljs xml\">{#expression(html) escape_off}{/expression}</pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Expression\"</span>,\n    argument: {\n        evaluator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n            <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-keyword\">this</span>._binds[<span class=\"hljs-number\">0</span>].getValue());\n        },\n        flags: {isScopeEval: <span class=\"hljs-literal\">true</span>},\n        binds: [{property_name: <span class=\"hljs-string\">\"html\"</span>}]\n    },\n    escape_off: <span class=\"hljs-literal\">true</span>,\n    template: []\n}]</pre></div></div><h2 id=\"lexer-escape-sequences\">Lexer escape sequences</h2>\n<p>These sequences are converted to their corresponding equivalents:</p>\n<p></p>\n<table class=\"api-member-table\">\n<thead><tr><td>Sequence</td><td>Equivalent</td></tr></thead>\n<tbody>\n<tr><td>{:L:}</td><td>{</td></tr>\n<tr><td>{:R:}</td><td>}</td></tr>\n<tr><td>{:LT:}</td><td>&lt;</td></tr>\n<tr><td>{:GT:}</td><td>&gt;</td></tr>\n<tr><td>{:AMP:}</td><td>&amp;</td></tr>\n</tbody>\n</table>\n\n<p></p>\n<h2 id=\"lexer-switches\">Lexer switches</h2>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">&#x7b;literal:} ... &#x7b;:literal}</pre></div></div><p>Content of the &#39;literal&#39; switch is not parsed, and inserted into template as text. Example, where this can be useful:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"pad\"</span>&gt;</span>\n    {literal:}\n        (foreach_index == count - 1)\n            ? pad + '<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-pad\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>'\n            : pad + '<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-pad-line\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>'\n    {:literal}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span></pre></div></div><p>Without the &quot;literal&quot; switch the &lt;div&gt; tags inside expression would be parsed as real tags with attributes.</p>\n<h2 id=\"template-regions\">Template regions</h2>\n<p>Content of the following regions is not parsed and inserted as-is:</p>\n<ul>\n<li>html comments,</li>\n<li>CDATA sections,</li>\n<li>&lt;style&gt; tags</li>\n<li>&lt;script&gt; tags (see exceptions below)</li>\n</ul>\n<h2 id=\"script-fragments\">Script fragments</h2>\n<p>There are situations, when you need to preserve certain regions of template from parsing by browser.\nThis can be done with the following construct:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/fragment\"</span>&gt;</span><span class=\"javascript\">\n    This &amp;lt;text&amp;gt; will not be parsed or escaped.\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div></div><p>Text inside &lt;script&gt; tags is not parsed by browser. Scripts with type=&quot;lava/fragment&quot; are handled by TemplateParser\ntransparently, as if there was no &lt;script&gt; tag around the content. Content of fragments is parsed as any template.</p>\n<p>Example usage:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">table</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/fragment\"</span>&gt;</span><span class=\"javascript\">\n        {#foreach(rows) as=row}\n            &lt;tr&gt;\n                <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>{#&gt;row.first_name}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>{#&gt;row.last_name}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\n        {/foreach}\n    </span></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">table</span>&gt;</span></pre></div></div><p>Without the &lt;script&gt; tag, the text with &quot;foreach&quot; inside the &lt;table&gt; tag would be invalid, and would be removed by browser.\nYou may also use this wrapper to prevent escaping of &quot;&lt;&gt;&amp;&quot; symbols.</p>\n<p>Warning: currently you cannot break the block boundary with fragments, but there is a task to fix that.\nThe following construct is invalid for now:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">table</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/fragment\"</span>&gt;</span><span class=\"javascript\">\n        {#foreach(rows) as=row}\n            </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>{#&gt;row.first_name}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>{#&gt;row.last_name}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/fragment\"</span>&gt;</span><span class=\"javascript\">\n        {<span class=\"hljs-regexp\">/foreach}\n    </span></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">table</span>&gt;</span></pre></div></div><h2 id=\"script-equivalents\">Script equivalents</h2>\n<p>TemplateParser allows you to take advantage of IDE syntax highlighting while writing JavaScript objects inside templates.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span>&gt;</span><span class=\"javascript\">\n    {\n        test: <span class=\"hljs-literal\">true</span>\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div></div><p>Is equivalent to:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">options</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span>\n    {\n        test: true\n    }\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">options</span>&gt;</span></pre></div></div><p>As you see, the &lt;script&gt; tag is internally changed to &lt;options&gt;. As a side-effect, the &quot;type&quot; attribute\nis preserved.</p>\n<p>It does not make any difference, which syntax you choose, except that text inside the &lt;script&gt; tags is not parsed.\nIn your templates you can use both kinds of syntax.</p>\n<h2 id=\"common-view-options\">Common view options</h2>\n<p>You can also supply <a href=\"/www/doc.html#object=Support;member=_cView.label\">_cView#label</a> and <a href=\"/www/doc.html#object=Support;member=_cView.id\">_cView#id</a> via hash options of any view.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\">{#if(something) label=\"my_if\" id=\"my_if_id\"}\n  ...\n{/if}</pre></div><div class=\"api-code-header api-code-header-blue\">Script</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> my_if = Lava.view_manager.getViewById(<span class=\"hljs-string\">\"my_if_id\"</span>);</pre></div></div><h2 id=\"custom-view-classes\">Custom view classes</h2>\n<p>When a template is compiled - block name is converted to a view class.\nFor example, &quot;if&quot; block converts to &quot;If&quot; view class. These mappings are defined in \n<a href=\"/www/doc.html#object=Lava.schema;member=parsers.view_name_to_class_map.expression\">Lava.schema#parsers.view_name_to_class_map</a>.</p>\n<p>If there is no mapping in the schema - than view class equals to block name, so you can create views with custom classes:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\">{#MyView()}\n  ...\n{/MyView}</pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"MyView\"</span>,\n    template: [<span class=\"hljs-string\">\"\\r\\n\\t...\\r\\n\"</span>]\n}]</pre></div></div><p>This will create a view with &quot;Lava.view.MyView&quot; class.</p>\n<h2 id=\"view-containers\">View containers</h2>\n<p>Every opening view block has a prefix:</p>\n<ul>\n<li>&quot;#&quot; - defines a view without container</li>\n<li>&quot;$&quot; - defines a view with Morph container</li>\n</ul>\n<p>Example - view with Morph container:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\">{$if($widget.show_me)}\n  I'm visible\n{/if}</pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"If\"</span>,\n    argument: {\n        evaluator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n            <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-keyword\">this</span>._binds[<span class=\"hljs-number\">0</span>].getValue());\n        },\n        flags: {isScopeEval: <span class=\"hljs-literal\">true</span>},\n        binds: [{\n            locator_type: <span class=\"hljs-string\">\"Name\"</span>,\n            locator: <span class=\"hljs-string\">\"widget\"</span>,\n            tail: [<span class=\"hljs-string\">\"show_me\"</span>]\n        }]\n    },\n    container: {type: <span class=\"hljs-string\">\"Morph\"</span>},\n    template: [<span class=\"hljs-string\">\"\\r\\n\\tI'm visible\\r\\n\"</span>]\n}]</pre></div></div><p>You can also wrap a view with an Element container by using <code>x:type=&quot;container&quot;</code>:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span>&gt;</span>\n  {#if($widget.show_me)}\n    I'm visible\n  {/if}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"view\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"If\"</span>,\n    argument: {\n        evaluator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n            <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-keyword\">this</span>._binds[<span class=\"hljs-number\">0</span>].getValue());\n        },\n        flags: {isScopeEval: <span class=\"hljs-literal\">true</span>},\n        binds: [{\n            locator_type: <span class=\"hljs-string\">\"Name\"</span>,\n            locator: <span class=\"hljs-string\">\"widget\"</span>,\n            tail: [<span class=\"hljs-string\">\"show_me\"</span>]\n        }]\n    },\n    template: [<span class=\"hljs-string\">\"\\r\\n\\t\\tI'm visible\\r\\n\\t\"</span>],\n    container: {\n        type: <span class=\"hljs-string\">\"Element\"</span>,\n        tag_name: <span class=\"hljs-string\">\"div\"</span>\n    }\n}]</pre></div></div><p>Wrapped view must be container-less (&quot;#&quot;). You can also use any other benefits of Element containers,\nlike attribute and style bindings or resources.</p>\n<p>See also: <a href=\"/www/doc.html#reference=Directives.container_config\">container_config</a></p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}