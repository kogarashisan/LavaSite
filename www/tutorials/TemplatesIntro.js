{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"introduction-to-templates\">Introduction to templates</h1>\n<p>Let&#39;s return to the introductory example and learn how to write templates.\nWe need a property, which can be referenced in templates, so we define a controller for the page:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n    _properties: {\n        your_name: <span class=\"hljs-string\">'World'</span>\n    }\n});</pre></div></div><p>This class is inherited from <a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a> - base class for all widgets.\nWidgets are independent pieces of functionality, which can respond to events and contain user-defined logic.\nThis class also defines <code>your_name</code> property, which we will reference in our templates.</p>\n<p>Place the following attribute on the &lt;body&gt; tag;</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>Now framework will parse content of the &lt;body&gt; tag and turn it into a widget with HelloApp controller.\nWidgets in-depth will be discussed later.</p>\n<h1 id=\"views\">Views</h1>\n<p>View represents a page region.\nThere are four main views in Lava: &quot;if&quot;, &quot;foreach&quot;, &quot;expression&quot; and &quot;view&quot;.</p>\n<p>Expression view displays result of an expression. This will output <code>your_name</code> property from HelloApp widget:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\">{#&gt; your_name}</pre></div></div><p>View arguments can be any JavaScript expressions, that do not modify their operands \n(for example, there must be no increment or assignment operators), so you can write something like this:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>{#&gt; \"Hello \" + your_name + \"!\"}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span></pre></div></div><p>You can also call a set of predefined methods in expressions:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>{#&gt; \"Hello \" + ucFirst(your_name) + \"!\"}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span></pre></div></div><p><code>ucFirst</code> is a method from <a href=\"/www/doc.html#object=Lava.modifiers\">Lava.modifiers</a> (&quot;Upper Case First Letter&quot;).</p>\n<h2 id=\"if-and-foreach-views\">If and Foreach views</h2>\n<p><i>If</i> view conditionally displays a template:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{#if(your_name.length &amp;lt; 3)}\n    Error: your name is too short\n{/if}</pre></div></div><p>You can set <code>your_name</code> to something shorter, than 3 letters and you will see the message.\n&quot;elseif&quot; and &quot;else&quot; sections are also supported:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs xml\">{#if(your_name.length &amp;gt; 3)}\n    Error: your name is too short\n{else}\n    Your name is {#&gt; your_name.length} characters long\n{/if}</pre></div></div><p><i>Foreach</i> view displays a template for each item from argument:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{#foreach(['Alice', 'Bob', 'Mark']) as=name}\n    Hello {#&gt; name}!\n{/foreach}</pre></div></div><p>This time argument is inline - to demonstrate such possibility.\nExpression parser recognizes keywords, like <span class=\"api-keyword\">true</span> or <span class=\"api-keyword\">null</span>, \nstrings and arrays. You can also use all operators, which do not modify their operands. \n<b>Objects are not allowed in expressions,</b> but they can be taken from widget variables.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\">{#foreach(['Alice', 'Bob', your_name]) as=name}\n    Hello {#&gt; name}!\n{/foreach}</pre></div></div><p>This example will pass <code>[&#39;Alice&#39;, &#39;Bob&#39;, &#39;World&#39;]</code> array to <i>foreach</i> view.</p>\n<p>Templates inside the view can also access <code>count</code> and <code>foreach_index</code> properties:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs xml\">{#foreach(['Alice', 'Bob', 'Mark']) as=name}\n    Hello {#&gt; name}!\n    {#if(foreach_index + 1 &lt; count)}\n        &lt;br/&gt;\n    {/if}\n{/foreach}</pre></div></div><p><code>foreach_index</code> is zero-based index of the item in <code>foreach</code>, so this example will output <code>&lt;br/&gt;</code> after all names,\nexcept the last one.</p>\n<p>See the final result (<b>tip: click on the &quot;Preview&quot; button to see it in action</b>):\n<iframe style=\"height: 30em; width: 100%\" src=\"http://embed.plnkr.co/xCmkN7/index.html\"></iframe></p>\n<p><i><a href=\"/www/demos/tutorials/TemplatesIntro_1.html\">Alternative link</a></i></p>\n<h2 id=\"iterating-over-objects\">Iterating over objects</h2>\n<p>Foreach view also allows you to iterate over an object or a <a href=\"/www/doc.html#class=Lava.mixin.Properties\">Lava.mixin.Properties</a> instance.\nIn this case you can access additional <code>foreach_name</code> variable inside the view&#39;s template,\nwhich holds the current key in object.</p>\n<p>Let&#39;s declare an object in HelloApp widget:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n    _properties: {\n        people: {\n          open_source: {message:<span class=\"hljs-string\">\"I'm good\"</span>, name: <span class=\"hljs-string\">\"Linus Torvalds\"</span>},\n          many_lawyers: {message: <span class=\"hljs-string\">\"I'm bad\"</span>, name: <span class=\"hljs-string\">\"Steve Ballmer\"</span>},\n          respected: {message: <span class=\"hljs-string\">\"I'm happy\"</span>, name: <span class=\"hljs-string\">\"Richard Branson\"</span>}\n        }\n    }\n});</pre></div></div><p>Now we can iterate over it:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    {#foreach(people) as=record}\n        {#&gt; foreach_name} | {#&gt; record.name} says: {#&gt; record.message} <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n    {/foreach}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>Each template inside <code>foreach</code> has access to four additional variables: <code>count</code>, <code>foreach_name</code>, <code>foreach_index</code>\nand to the current item, which can be specified in <code>as</code> option. In this case it&#39;s <code>record</code>.</p>\n<p>In expressions you can also reference paths inside objects, like <code>record.name</code>.</p>\n<p>Final result:\n<iframe style=\"height: 30em; width: 100%\" src=\"http://embed.plnkr.co/4CAgHS/index.html\"></iframe></p>\n<p><i><a href=\"/www/demos/tutorials/TemplatesIntro_2.html\">Alternative link</a></i></p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}