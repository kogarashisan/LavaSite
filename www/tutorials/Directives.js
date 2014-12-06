{
	type: "widget",
	is_extended: true,
	template: ["<h2 id=\"directives\">Directives</h2>\n<p>Directives are tags from &quot;x:&quot; namespace.\nSome of them allow you to modify config options for views and widgets, others insert special objects into template.\nSome of widget definition tags have directive analogs.</p>\n<p>You can find the compete list in the <a href=\"/www/doc.html#tab=reference\">reference</a> section.</p>\n<h3 id=\"x-property-directive\">x:property directive</h3>\n<p>Set a property on a widget:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:property</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_locked\"</span>&gt;</span>true<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:property</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Hello World!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CollapsiblePanel\"</span>,\n    properties: {is_locked: <span class=\"hljs-literal\">true</span>},\n    includes: {\n        title: [<span class=\"hljs-string\">\"Hello example\"</span>],\n        content: [<span class=\"hljs-string\">\"Hello World!\"</span>]\n    },\n    id: <span class=\"hljs-string\">\"panel1\"</span>\n}]</pre></div></div><p>This will also work:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:property</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"your_name\"</span>&gt;</span>\"World\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:property</span>&gt;</span>\n    ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>This will assign <span class=\"api-string\">&quot;World&quot;</span> to <code>your_name</code> property in the instance of HelloApp.</p>\n<p>Widget definition analog:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"CollapsiblePanel\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">property</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>\"The title\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">property</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CollapsiblePanel\"</span>,\n    properties: {title: <span class=\"hljs-string\">\"The title\"</span>},\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><p>Directive content can be any native JavaScript type - array, string or even <i>object</i>. \nContent is validated and executed with <code>eval()</code>.</p>\n<h3 id=\"x-properties-directive\">x:properties directive</h3>\n<p>Same as x:property, but sets the whole <a href=\"/www/doc.html#object=Support;member=_cWidget.properties\">_cWidget#properties</a>, not just one property in it:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:properties</span>&gt;</span>\n    {\n      content: \"This is content\",\n      title: \"This is title\"\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:properties</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CollapsiblePanel\"</span>,\n    properties: {\n        content: <span class=\"hljs-string\">\"This is content\"</span>,\n        title: <span class=\"hljs-string\">\"This is title\"</span>\n    }\n}]</pre></div></div><p>Expects a serialized object in it. Has widget tag analog.</p>\n<h3 id=\"x-option-and-x-options\">x:option and x:options</h3>\n<p>Same as above, but assign their value to <a href=\"/www/doc.html#object=Support;member=_cView.options\">_cView#options</a> property in view or widget configs.\n<i>Difference between properties and options: unlike properties, options are static (they do not change).</i></p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:option</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"keep_new_panels_expanded\"</span>&gt;</span>true<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"Accordion\"</span>,\n    options: {keep_new_panels_expanded: <span class=\"hljs-literal\">true</span>},\n    storage: {\n        panels: [{\n            title: [<span class=\"hljs-string\">\"Panel 1\"</span>],\n            content: [<span class=\"hljs-string\">\"...\"</span>]\n        }]\n    }\n}]</pre></div></div><p>Important note: &lt;panel&gt; tag inside accordion does <b>not</b> belong to a panel widget -\nit&#39;s still processed by sugar rules of accordion widget.</p>\n<p>All mentioned directives have corresponding tags in widget definition.</p>\n<h3 id=\"x-assign-directive\">x:assign directive</h3>\n<p>Assign expression result to a view or widget property.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel1\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_expanded\"</span>&gt;</span>your_name.length &gt; 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:property</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_locked\"</span>&gt;</span>true<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:property</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Hello {#&gt; your_name}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>In this example panel will open when <code>your_name</code> is at least 3 letters long.\nContent of the directive must be an expression.</p>\n<h3 id=\"x-bind\">x:bind</h3>\n<p>Bi-directional binding to property of a widget. TextInput widget has <code>value</code> property, which is bound to <code>your_name</code>\nfrom parent widget:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span>&gt;</span>Name:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"TextInput\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>your_name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">bind</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>Hello {$&gt;your_name}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>This is true HelloWorld example in Lava. &lt;x:bind&gt; directive has corresponding tag in widget definition.\nIt expects a path to a property inside it (expressions are not allowed).</p>\n<p>Here is the real HelloWorld example in LiquidLava framework:\n<iframe style=\"height: 26em; width: 100%\" src=\"http://embed.plnkr.co/HJRgNh/preview\"></iframe>\n<i><a href=\"/www/demos/hello.html\">Alternative link</a></i></p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}