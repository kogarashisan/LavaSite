{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"using-widgets\">Using widgets</h1>\n<p>Framework comes with some commonly used widgets, like Tabs, Accordion or various input fields.\nThere are two ways to insert a widget into template: standard (full) syntax, and &quot;syntax sugar&quot;,\nwhich looks like common HTML tags:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>The title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>The content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"CollapsiblePanel\"</span>,\n    includes: {\n        title: [<span class=\"hljs-string\">\"The title\"</span>],\n        content: [<span class=\"hljs-string\">\"The content\"</span>]\n    },\n    resources: {\n        <span class=\"hljs-string\">\"default\"</span>: {\n            COLLAPSIBLE_PANEL_CONTAINER: {\n                type: <span class=\"hljs-string\">\"container_stack\"</span>,\n                value: [{\n                    name: <span class=\"hljs-string\">\"add_classes\"</span>,\n                    value: [<span class=\"hljs-string\">\"panel-default\"</span>]\n                }]\n            }\n        }\n    }\n}]</pre></div></div><p>Sugar syntax is created by widget&#39;s author: he decides, that &lt;collapsible-panel&gt; tag\nshould be transformed into config for CollapsiblePanel widget, and content of the &lt;title&gt; and\n&lt;content&gt; tags inside it should be parsed as &quot;title&quot; and &quot;content&quot; includes for the widget.\nThese mappings and the name of the sugar tag are written in the definition of CollapsiblePanel widget.</p>\n<p>In other words: you can define tags for template parser, which will be converted to widget configs.</p>\n<p>Sugar exists to make your templates look more beautiful, but not all widgets have sugar syntax \n(and not all widgets need it). See the <a href=\"#object=Widgets\">Widgets</a> page for a list of all widgets and their sugar schema.</p>\n<h2 id=\"common-view-attributes\">Common view attributes</h2>\n<p>Any view and widget can have <code>label</code> and <code>id</code>. IDs are unique:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"test\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!-- but --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"this_is_static\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div><p>When you inspect rendered page in browser - you will see that your custom <code>id=&quot;test&quot;</code> attribute has gone -\ninstead you will see auto-generated id on the first &lt;div&gt; tag.\nID attribute is handled separately by parser: when framework encounters it on a view&#39;s container, \nor on a sugar tag - it moves it into the config of the view that owns it.\nBut <code>id=&quot;this_is_static&quot;</code> will be still present, cause the &lt;div&gt; tag, which owns it is plain text.</p>\n<p>You can get views by their id from <a href=\"/www/doc.html#class=Lava.system.ViewManager\">Lava.system.ViewManager</a> (view instance must be created!):</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> view = Lava.view_manager.getViewById(<span class=\"hljs-string\">\"test\"</span>);\nview.set(<span class=\"hljs-string\">'message'</span>, <span class=\"hljs-string\">'Hello world'</span>);</pre></div></div><p>IDs can also be used to reference views in expressions: <code>#hello_app.your_name</code> will bind to <code>your_name</code> property\nin view with id <code>hello_app</code>. When you bind to a view by ID - it does not need to be parent of view, that owns the expression:\nit can be anywhere on page, or even not in DOM.</p>\n<h2 id=\"exercise\">Exercise</h2>\n<p>Panel widget has it&#39;s own controller - <a href=\"/www/doc.html#class=Lava.widget.CollapsiblePanel\">Lava.widget.CollapsiblePanel</a>, which has it&#39;s own variables \nlike &quot;is_locked&quot; and &quot;is_expanded&quot;. Naturally, you can manipulate them or reference in templates.\nAs an exercise, create a page with the following template:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel is {#&gt; is_expanded ? 'expanded' : 'collapsed'}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Test<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div></div><p>And try to expand or collapse the panel from console:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> panel = Lava.view_manager.getViewById(<span class=\"hljs-string\">\"panel\"</span>);\npanel.set(<span class=\"hljs-string\">'is_expanded'</span>, <span class=\"hljs-literal\">false</span>);\nLava.refreshViews();</pre></div></div><p>Panel widget also reacts to mouse clicks on header.</p>\n<p>Final example:\n<iframe style=\"height: 26em; width: 100%\" src=\"http://embed.plnkr.co/L2LMmi/preview\"></iframe>\n<i><a href=\"/www/demos/tutorials/UsingWidgets.html\">Alternative link</a></i></p>\n<h2 id=\"widget-hierarchy\">Widget hierarchy</h2>\n<p>Now let&#39;s get basic understanding of widget hierarchy and learn how to reference widgets in expressions.\nHere is an example of root widget HelloApp, which has <code>your_name</code> variable, \nand two child widgets with Expression views inside them.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">JavaScript</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n    _properties: {\n        your_name: <span class=\"hljs-string\">'World'</span>\n    }\n});</pre></div><div class=\"api-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel1\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\n      Hello {#&gt; your_name}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel2\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-primary\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\n      Hello {#&gt; your_name}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>Let&#39;s discuss it&#39;s structure. First, an instance of Lava.widget.HelloApp is created,\nand it receives configs for it&#39;s container and template. \nIt creates <a href=\"/www/doc.html#class=Lava.view.container.Element\">Lava.view.container.Element</a> and <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a> classes with these configs.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-comment\">// this is pseudo code. In reality it looks different!</span>\nLava.define(<span class=\"hljs-string\">'Lava.widget.Standard'</span>, {\n    <span class=\"hljs-comment\">// ...</span>\n    name: <span class=\"hljs-string\">'widget'</span>,\n    _container: <span class=\"hljs-literal\">null</span>,\n    _template: <span class=\"hljs-literal\">null</span>,\n    init: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(config <span class=\"hljs-comment\">/*, ...*/</span>)</span> {</span>\n        <span class=\"hljs-keyword\">this</span>._container = <span class=\"hljs-keyword\">new</span> Lava.view.container.Element(config.container <span class=\"hljs-comment\">/*, ...*/</span>);\n    },\n    render: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>._template) {\n            <span class=\"hljs-keyword\">this</span>._template = <span class=\"hljs-keyword\">new</span> Lava.system.Template(config.template <span class=\"hljs-comment\">/*, ...*/</span>)\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._container.wrap(<span class=\"hljs-keyword\">this</span>._template.render());\n    }\n    <span class=\"hljs-comment\">// ...</span>\n});</pre></div></div><p>It has no idea about the panels inside it, and no idea about the Expression views inside the panels.\nIt has a container and a template - that&#39;s all what it knows.\nBesides that, it&#39;s template is constructed with delay (when it&#39;s needed first time), so if HelloApp is created -\nit does not mean that Expression views are created.</p>\n<p>Panel widgets have their own class (controller) - <a href=\"/www/doc.html#class=Lava.widget.CollapsiblePanel\">Lava.widget.CollapsiblePanel</a>.\nThey also have their own views and HTML markup inside their definition.\nAnd they also know nothing about Expression views inside them.</p>\n<p>But all views know their parent template and parent view. This way Expression views can access the panel widgets,\nand the root HelloApp widget.</p>\n<h2 id=\"property-bindings\">Property bindings</h2>\n<p>Both Expression views from previous example bind to the same property - <code>your_name</code>. \nThis form of reference is called &quot;bubbling&quot;, cause it does not specify the view, which owns that property.</p>\n<p>How it works: when the Expression view is created - it looks at it&#39;s own properties for <code>your_name</code> property,\nand does not find it. Then it looks for it in it&#39;s parent view (it will be an element with <code>x:type=&quot;view&quot;</code> from\nwidget definition). Then in next parent, which also does not have it; and finally it will find it in the root HelloApp widget.\nFramework always searches for bubbling property references up in widget hierarchy.\nNote, that if you referenced some nonexistent property - you would get an error.</p>\n<p>When property is found - a special &quot;binding&quot; class is created to that property (<a href=\"/www/doc.html#class=Lava.scope.PropertyBinding\">Lava.scope.PropertyBinding</a>).\nIt watches for changes of <code>your_name</code>, and notifies the Expression views. In this case, both Expression views\nwill use the same binding to HelloApp widget instance.</p>\n<p>Even if later you retrieve your panel widgets, and assign <code>your_name</code> property to them - \ncreated bindings will not change, Expression views will still be bound to HelloApp widget.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> panel_widget = Lava.view_manager.getViewById(<span class=\"hljs-string\">\"panel1\"</span>);\npanel_widget.set(<span class=\"hljs-string\">'your_name'</span>, <span class=\"hljs-string\">'Jack'</span>); <span class=\"hljs-comment\">// this will not change the expression value</span></pre></div></div><h2 id=\"widget-names\">Widget names</h2>\n<p>Each widget class has <a href=\"/www/doc.html#class=Lava.widget.Standard;member=name\">Standard#name</a> class member. <a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a> has default \nname - <span class=\"api-string\">&quot;widget&quot;</span>. <a href=\"/www/doc.html#class=Lava.widget.CollapsiblePanel;member=name\">CollapsiblePanel#name</a> is <span class=\"api-string\">&quot;collapsible_panel&quot;</span>. \n<b>When you write your own widget classes - you should give them unique names.</b></p>\n<p>Widgets can be referenced by their names in expressions:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">{#> $collapsible_panel.your_name}</pre></div></div><p>This means: find the first parent widget with name <span class=\"api-string\">&quot;collapsible_panel&quot;</span> and bind to <code>your_name</code> property in it.\nDoes not matter, if <code>your_name</code> property exists on panel or not - binding will be created to the first widget that matches the selector.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel1\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\n            Hello {#&gt; $collapsible_panel.your_name}\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"panel2\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-primary\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Hello example<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\n            Hello {#&gt; #panel2.your_name} <span class=\"hljs-comment\">&lt;!-- bind by id --&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div><p>In this example both expression views take <code>your_name</code> from their corresponding panels.\nYou can assign this property from console:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> panel_widget = Lava.view_manager.getViewById(<span class=\"hljs-string\">\"panel1\"</span>);\npanel_widget.set(<span class=\"hljs-string\">'your_name'</span>, <span class=\"hljs-string\">'Jack'</span>);\nLava.refreshViews();</pre></div></div><p>Final result:\n<iframe style=\"height: 26em; width: 100%\" src=\"http://embed.plnkr.co/MO4CAV/index.html\"></iframe>\n<i><a href=\"/www/demos/tutorials/UsingWidgets2.html\">Alternative link</a></i></p>\n<h2 id=\"usage-recommendation\">Usage recommendation</h2>\n<p><b>You should prefer targeted references over bubbling.</b> Targeted references are a bit faster, and less prone to human errors.\nUse bubbling references only when you are unable to specify exact target (for example, when rendering a tree).</p>\n<p>Use IDs for global widgets, which you can not access directly. If you can reference your widgets by name, \nor use a bubbling reference - then do not create an ID. <b>You should use IDs and labels only when you really need them.</b></p>\n<p><i>Labels were not covered in this tutorial, but they function like names, except they are defined in templates, not in classes.</i></p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}