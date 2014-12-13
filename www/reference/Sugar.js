{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"syntax-sugar\">Syntax sugar</h1>\n<p>There are two kinds of syntax for inserting widgets into templates: </p>\n<ul>\n<li>full syntax, with &lt;x:widget&gt; directive</li>\n<li>and syntax sugar - when you define tags, which will be converted to widgets</li>\n</ul>\n<p>For example, &lt;tabs&gt; tag is syntax sugar for Tabs widget. \nSugar does not make sense for all widgets, and has slightly less possibilities, than standard syntax.</p>\n<p>Here is an example of the same widget, written in standard and sugar form:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Standard form</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Tabs\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tabs</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab1\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 1 title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 1 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab2\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 2 title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 2 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tabs</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Sugar form</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tabs</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 1 title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 1 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab2\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 2 title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 2 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tabs</span>&gt;</span></pre></div></div><h2 id=\"architecture\">Architecture</h2>\n<p>Sugar can be defined only for global widgets (by x:define directive).\nDefine directive passes widget config to <a href=\"/www/doc.html#object=Lava;member=storeWidgetSchema\">Lava#storeWidgetSchema</a>, which stores it in <a href=\"/www/doc.html#object=Lava;member=widgets\">Lava#widgets</a>.\nIf global widget has sugar, it&#39;s also added to <a href=\"/www/doc.html#object=Lava;member=sugar_map\">Lava#sugar_map</a> - keys in this hash correspond to tag name.</p>\n<p>When template is compiled in <a href=\"/www/doc.html#object=Lava.parsers.Common;member=compileTemplate\">Common#compileTemplate</a> - all tags are converted back to strings,\nbut if sugar exists for a tag, than tag is converted to a widget, and sugar parser is invoked \n(<a href=\"/www/doc.html#class=Lava.system.Sugar\">Lava.system.Sugar</a> by default). See also: <a href=\"/www/doc.html#object=Lava.parsers.Common;member=_compileSugar\">Common#_compileSugar</a>.</p>\n<h2 id=\"directives-in-sugar\">Directives in sugar</h2>\n<p>You can apply directives to sugar. Just like directives for views, they must be at the top of sugar tag&#39;s content.\nExample:</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:resources</span> <span class=\"hljs-attribute\">locale</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">container</span> <span class=\"hljs-attribute\">path</span>=<span class=\"hljs-value\">\"panel.COLLAPSIBLE_PANEL_CONTAINER\"</span> <span class=\"hljs-attribute\">add_classes</span>=<span class=\"hljs-value\">\"panel-info\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:resources</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"Accordion\"</span>,\n    resources: {\n        <span class=\"hljs-string\">\"default\"</span>: {\n            panel: {\n                type: <span class=\"hljs-string\">\"component\"</span>,\n                value: {\n                    COLLAPSIBLE_PANEL_CONTAINER: {\n                        type: <span class=\"hljs-string\">\"container_stack\"</span>,\n                        value: [{\n                            name: <span class=\"hljs-string\">\"add_classes\"</span>,\n                            value: [<span class=\"hljs-string\">\"panel-info\"</span>]\n                        }]\n                    }\n                }\n            }\n        }\n    },\n    storage: {\n        panels: [\n            {\n                title: [<span class=\"hljs-string\">\"Panel 1\"</span>],\n                content: [<span class=\"hljs-string\">\"Content 1\"</span>]\n            },\n            {\n                title: [<span class=\"hljs-string\">\"Panel 2\"</span>],\n                content: [<span class=\"hljs-string\">\"Content 2\"</span>]\n            }\n        ]\n    }\n}]</pre></div></div><p>Here, &lt;accordion&gt; is transformed into config for Accordion widget and x:resources directive is applied to that widget.</p>\n<h2 id=\"control-attributes\">Control attributes</h2>\n<p>These control attributes are allowed on sugar tags:</p>\n<ul>\n<li><code>label</code> - sets <a href=\"/www/doc.html#object=Support;member=_cView.label\">_cView#label</a></li>\n<li><code>roles</code> - sets <a href=\"/www/doc.html#object=Support;member=_cView.roles\">_cView#roles</a></li>\n<li><code>resource_id</code> - sets - sets <a href=\"/www/doc.html#object=Support;member=_cWidget.resource_id\">_cWidget#resource_id</a> (see <a href=\"/www/doc.html#reference=Resources\">Resources and localization</a>)</li>\n</ul>\n<p>Example: a panel from accordion&#39;s template</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$accordion.panel\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:resource_id</span>=<span class=\"hljs-value\">\"$accordion.panel\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_expanded\"</span>&gt;</span>panel.is_expanded<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span> ... <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span> ... <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div></div><h2 id=\"sugar-definition\">Sugar definition</h2>\n<p>Sugar schema has type (<a href=\"/www/doc.html#object=Support;member=_cSugar\">_cSugar</a>) and is defined by &lt;sugar&gt; tag.</p>\n<p>If you don&#39;t specify <a href=\"/www/doc.html#object=Support;member=_cSugar.content_schema\">_cSugar#content_schema</a> - than content is not allowed inside sugar tag.\nOtherwise, the rules for parsing the content are defined by the <code>type</code> attribute.</p>\n<h2 id=\"content-types\">Content types</h2>\n<h3 id=\"include\">include</h3>\n<p>Content of sugar tag becomes widget&#39;s include.\nExample: widget, that wraps it&#39;s content in a &lt;div&gt; tag.</p>\n<p>Widget&#39;s sugar tag is defined with <code>tag_name: &#39;wrapper&#39;</code>. You can also define attributes on the root \n&lt;wrapper&gt; widget with <code>attribute_mappings</code> option.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Example widget definition</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:define</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Wrapper\"</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span>\n      {&gt;$wrapper.content}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"sugar\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n    {\n      tag_name: <span class=\"hljs-string\">'wrapper'</span>,\n      content_schema: {type: <span class=\"hljs-string\">'include'</span>, name: <span class=\"hljs-string\">'content'</span>},\n      attribute_mappings: {\n        <span class=\"hljs-string\">'is-expanded'</span>: {type: <span class=\"hljs-string\">'property'</span>, type_name: <span class=\"hljs-string\">'Boolean'</span>, name: <span class=\"hljs-string\">'is_expanded'</span>}\n      }\n    }\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:define</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Example usage</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">wrapper</span> <span class=\"hljs-attribute\">is-expanded</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n  Hello world!\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">wrapper</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    type: <span class=\"hljs-string\">\"widget\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"extends\"</span>: <span class=\"hljs-string\">\"Wrapper\"</span>,\n    includes: {\n        content: [<span class=\"hljs-string\">\"\\n\\tHello world!\\n\"</span>]\n    },\n    properties: {is_expanded: <span class=\"hljs-literal\">true</span>}\n}]</pre></div></div><p>The above example defined <code>content_schema</code> with <code>type: &#39;include&#39;</code> - that means that content of &lt;wrapper&gt; tag\nwill become widget&#39;s include named <code>name: &#39;content&#39;</code>. That include is than used in the main widget&#39;s template as\n<code>{&gt;$wrapper.content}</code>.</p>\n<p><code>type_name</code> in the attribute descriptor contains a type name from <a href=\"/www/doc.html#object=Lava.types\">Lava.types</a>. Also, note how attribute key \ndiffers from property name: <code>&#39;is-expanded&#39;</code> is name of the attribute on &lt;wrapper&gt; tag, while <code>name: &#39;is_expanded&#39;</code>\ndefines the name of widget&#39;s property for storing the attribute value.</p>\n<h3 id=\"storage\">storage</h3>\n<p>When content type is <span class=\"api-string\">&quot;storage&quot;</span> - content of sugar tag is parsed just like &lt;storage&gt; tag in widget definition,\nand result is put into widget&#39;s <a href=\"/www/doc.html#object=Support;member=_cWidget.storage\">_cWidget#storage</a>.</p>\n<p>See <a href=\"/www/doc.html#reference=Storage\">Storage</a>.</p>\n<p>Example sugar definition:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"sugar\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n    {\n        tag_name: <span class=\"hljs-string\">'accordion'</span>,\n        content_schema: {\n            type: <span class=\"hljs-string\">'storage'</span>\n        }\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div></div><p>Note, that this is not real sugar of standard Accordion widget (it&#39;s real type is <span class=\"api-string\">&quot;union&quot;</span>),\nbut this sugar <i>may</i> be used for more simple version of accordion.</p>\n<h3 id=\"union\">union</h3>\n<p>Union is same as storage, but allows you to define additional tags, which will become widget&#39;s includes.\nFor example, we can define sugar for Accordion widget, which will allow to replace it&#39;s main template \nand to define panels at the same time:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"storage_schema\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n    {\n        panels: {\n            type: <span class=\"hljs-string\">'object_collection'</span>,\n            tag_name: <span class=\"hljs-string\">'panel'</span>,\n            properties: {\n                title: {type: <span class=\"hljs-string\">'template'</span>},\n                content: {type: <span class=\"hljs-string\">'template'</span>},\n                is_expanded: {type: <span class=\"hljs-string\">'lava_type'</span>, type_name: <span class=\"hljs-string\">'Boolean'</span>, is_attribute: <span class=\"hljs-literal\">true</span>}\n            }\n        }\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"sugar\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n    {\n        tag_name: <span class=\"hljs-string\">'accordion'</span>,\n        content_schema: {\n            type: <span class=\"hljs-string\">'union'</span>,\n            tag_roles: {\n                content: {type: <span class=\"hljs-string\">'include'</span>}\n            }\n        }\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div></div><p>Usage examples:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span> ... <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panels</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Test panel 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Test content 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Test panel 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Test content 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panels</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span></pre></div></div><p>Note: standard Accordion widget has &quot;storage_object&quot; sugar type, not &quot;union&quot;.</p>\n<h3 id=\"storage_object\">storage_object</h3>\n<p>Parses content as one object from widget storage. See Tabs widget for live example.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Example sugar config</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"storage_schema\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n  {\n    tabs: {\n      type: <span class=\"hljs-string\">'object_collection'</span>,\n      tag_name: <span class=\"hljs-string\">'tab'</span>,\n      properties: {<span class=\"hljs-comment\">/* ... */</span>}\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"sugar\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n  {\n    tag_name: <span class=\"hljs-string\">'tabs'</span>,\n    content_schema: {\n      type: <span class=\"hljs-string\">'storage_object'</span>,\n      name: <span class=\"hljs-string\">'tabs'</span>\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Example usage</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tabs</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 1 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tab2\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 2 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tabs</span>&gt;</span></pre></div></div><h2 id=\"root-attribute-types\">Root attribute types</h2>\n<p>Root sugar tag may have attributes, which are converted to widget config properties. \nRoot attributes are described in <code>attribute_mappings</code> config property. Keys in <code>attribute_mappings</code> correspond to names \nof properties on root tag, while <code>name</code> in descriptor corresponds to a name in object.\nFor example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"sugar\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"application/json\"</span>&gt;</span><span class=\"javascript\">\n    {\n        tag_name: <span class=\"hljs-string\">'panel'</span>,\n        content_schema: {type: <span class=\"hljs-string\">'include'</span>, name: <span class=\"hljs-string\">'content'</span>},\n        attribute_mappings: {\n            <span class=\"hljs-string\">'is-expanded'</span>: {type: <span class=\"hljs-string\">'property'</span>, type_name: <span class=\"hljs-string\">'Boolean'</span>, name: <span class=\"hljs-string\">'is_expanded'</span>}\n        }\n        <span class=\"hljs-comment\">// root_resource_name: 'MAIN_CONTAINER'</span>\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span></pre></div></div><p>Types of root attributes:</p>\n<ul>\n<li><span class=\"api-string\">&quot;expressions_option&quot;</span> - parse attribute value as semicolon-separated expressions and store it into an option</li>\n<li><span class=\"api-string\">&quot;targets_option&quot;</span> - parse attribute as <a href=\"/www/doc.html#object=Lava.parsers.Common;member=parseTargets\">targets</a> and store it as an option</li>\n<li><span class=\"api-string\">&quot;property&quot;</span> - parse attribute as <code>type_name</code> and store it as widget&#39;s property value</li>\n<li><span class=\"api-string\">&quot;switch&quot;</span> - attribute value is parsed as Boolean, but empty attributes are evaluated to <span class=\"api-keyword\">true</span></li>\n<li><span class=\"api-string\">&quot;option&quot;</span> - parse attribute as <code>type_name</code> and store it as widget&#39;s option</li>\n<li><span class=\"api-string\">&quot;id&quot;</span> - attribute becomes widget&#39;s <a href=\"/www/doc.html#object=Support;member=_cView.id\">_cView#id</a>. Note, that this is not the id attribute of widget&#39;s element.</li>\n</ul>\n<p>Unknown root attributes, which are not described in <a href=\"/www/doc.html#object=Support;member=_cSugar.attribute_mappings\">_cSugar#attribute_mappings</a> - \nmay be stored as widget&#39;s container resource. \nFor this you must specify <a href=\"/www/doc.html#object=Support;member=_cSugar.root_resource_name\">_cSugar#root_resource_name</a> on root sugar object.\nFor live examples - see system input widgets in <span class=\"api-var\">templates/</span> folder.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}