{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"widget-config-extension\">Widget config extension</h1>\n<p>There are two kinds of inheritance in Lava: inheritance of classes, and inheritance of widget configs.\nYou can inherit your widget controllers from <a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a> or from any other widget class.\nBut widget configs are also inherited: when you define a widget, which extends another global widget -\nit&#39;s config is merged with parent <i>at run time</i>.</p>\n<p>This process is a bit &quot;magic&quot;. \nYou are highly discouraged to use any hacks or magic in your own code - usually it&#39;s very harmful,\nbut in case of Lava framework - &quot;magic&quot; is used more like a software design pattern.\nIt&#39;s a key part of framework design, so it&#39;s important to understand how it works.</p>\n<p>Widget configs have the following key properties:</p>\n<ul>\n<li><a href=\"/www/doc.html#object=Support;member=_cView.type\">type</a> - equals to <span class=\"api-string\">&quot;widget&quot;</span>. Defines type of item in template</li>\n<li><a href=\"/www/doc.html#object=Support;member=_cWidget.extends\">extends</a> - name of global widget this config extends</li>\n<li><a href=\"/www/doc.html#object=Support;member=_cView.class\">class</a> - either real class of widget&#39;s controller, or special &quot;gateway&quot;</li>\n<li><a href=\"/www/doc.html#object=Support;member=_cView.real_class\">real_class</a> - class of widget&#39;s controller</li>\n<li><a href=\"/www/doc.html#object=Support;member=_cWidget.is_extended\">is_extended</a> - is this config object extended with data from parent</li>\n</ul>\n<p>When <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a> creates a widget as a part of template config - \nit creates it with <code>class</code> from widget&#39;s config, like this:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-comment\">// inside Lava.system.Template</span>\n<span class=\"hljs-comment\">// childConfig - is the widget config</span>\n<span class=\"hljs-keyword\">var</span> constructor = Lava.ClassManager.getConstructor(childConfig[<span class=\"hljs-string\">'class'</span>], <span class=\"hljs-string\">'Lava.view'</span>);\nview = <span class=\"hljs-keyword\">new</span> constructor(childConfig, <span class=\"hljs-keyword\">this</span>._widget, <span class=\"hljs-keyword\">this</span>._parent_view, <span class=\"hljs-keyword\">this</span>, properties);</pre></div></div><p>But all widget configs, produced by <a href=\"/www/doc.html#object=Lava.parsers.Common;member=compileTemplate\">Common#compileTemplate</a>, are created with \n<a href=\"/www/doc.html#object=Lava;member=WidgetConfigExtensionGateway\">Lava#WidgetConfigExtensionGateway</a> in the <code>class</code> property. \nSo when the widget is created for the first time - Template invokes that gateway, not real constructor.\nAnd that&#39;s where the magic happens.</p>\n<p>For a new widget config, above code may be rewritten as following:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-comment\">// childConfig - is the widget config</span>\nview = <span class=\"hljs-keyword\">new</span> Lava.WidgetConfigExtensionGateway(childConfig, <span class=\"hljs-keyword\">this</span>._widget, <span class=\"hljs-keyword\">this</span>._parent_view, <span class=\"hljs-keyword\">this</span>, properties);</pre></div></div><p>Gateway receives all parameters of a real widget and acts as a widget constructor.\nWhat happens inside the gateway:</p>\n<ol>\n<li>it assigns <code>real_class</code> to <code>class</code></li>\n<li>sets <code>is_extended = true</code></li>\n<li>merges properties from parent widget config into current config</li>\n<li>creates widget controller (<code>real_class</code>), with it&#39;s own arguments, and returns it</li>\n</ol>\n<p>If constructor in JavaScript returns an object - that object is used as result of the <span class=\"api-keyword\">new</span> operator.\nSo, in this case, Template receives an instance of real widget class, not an instance of the gateway.\nThis way you can create a constructor, which acts as a proxy to another constructors.</p>\n<p>Second, when the widget is created for the second time - it&#39;s created with it&#39;s real class, \nwhich receives an already extended config. Gateway has done it&#39;s job, so it does not need to be called again.</p>\n<p>And the final: if parent class is also inherited from another class - it&#39;s also extended in this process.</p>\n<h2 id=\"merged-properties\">Merged properties</h2>\n<p>Merging of properties from parent config is done in <a href=\"/www/doc.html#object=Lava.extenders;member=Standard\">extenders#Standard</a>. \nGenerally, if a property is present in child config - it&#39;s not overwritten. Otherwise, it&#39;s copied as-is\n(all properties are assigned by reference, not cloned!).</p>\n<p>But several properties have special rules for merging:\n<a href=\"/www/doc.html#object=Support;member=_cWidget.bindings\">_cWidget#bindings</a>, <a href=\"/www/doc.html#object=Support;member=_cView.assigns\">_cView#assigns</a>, <a href=\"/www/doc.html#object=Support;member=_cView.options\">_cView#options</a>, <a href=\"/www/doc.html#object=Support;member=_cWidget.properties\">_cWidget#properties</a> and <a href=\"/www/doc.html#object=Support;member=_cWidget.broadcast\">_cWidget#broadcast</a> -\nthese properties are merged one-level deep. For example, all properties from parent are merged to child, but they are not overwritten.\nIf parent has property <span class=\"api-string\">&quot;property_one&quot;</span>, and child has <span class=\"api-string\">&quot;property_two&quot;</span> - than child will have both properties.\nBut if child config also has <span class=\"api-string\">&quot;property_one&quot;</span> - than it will not be overwritten.</p>\n<p><b>Merging includes</b></p>\n<p>If include from parent is overwritten in child - than parent&#39;s include is renamed, just like parent methods in classes.\nName of parent and dollar-sign are added to the name of overwritten include, for example: &quot;Tree$content&quot;.</p>\n<p><b>Merging sugar</b></p>\n<p><a href=\"/www/doc.html#object=Support;member=_cSugar.attribute_mappings\">_cSugar#attribute_mappings</a> and <code>content_schema.tag_roles</code> (<a href=\"/www/doc.html#object=Support;member=_cSugarContent.tag_roles\">_cSugarContent#tag_roles</a>) will be merged \nas objects. All other properties are merged using standard rules.</p>\n<p><b>storage_schema and storage</b></p>\n<p><a href=\"/www/doc.html#object=Support;member=_cWidget.storage_schema\">_cWidget#storage_schema</a> is merged before storage. If item is not present in child schema - it&#39;s added, \notherwise - <a href=\"/www/doc.html#object=Support;member=_cStorageItemSchema.properties\">_cStorageItemSchema#properties</a> from parent is merged into child.</p>\n<p>Collections in <a href=\"/www/doc.html#object=Support;member=_cWidget.storage\">_cWidget#storage</a> are not overwritten, but hashes and objects are also merged\n(<span class=\"api-string\">&quot;template_hash&quot;</span>, <span class=\"api-string\">&quot;object_hash&quot;</span> and <span class=\"api-string\">&quot;object&quot;</span>).</p>\n<p>For exact algorithm, see the source of <a href=\"/www/doc.html#object=Lava.extenders\">Lava.extenders</a>.</p>\n<p><b>Resources</b></p>\n<p>Resources also have their own rules for merging. See <a href=\"/www/doc.html#reference=Resources\">Resources and localization</a>.</p>\n<h2 id=\"config-sharing\">Config sharing</h2>\n<p>First of all, you should realize the fact, that template configs are modified during application lifecycle. \nIf you want to serialize a parsed template - you should do it before it&#39;s ever used, \ncause it&#39;s not even guaranteed, that extended configs can be serialized properly.\nIt&#39;s also not guaranteed, that they does not contain circular references.</p>\n<p>It&#39;s highly advised to never clone extended configs. If you want to clone a config - \nyou should do it before any dependent widgets or templates are created. \nIf you need multiple clones - you can use <a href=\"/www/doc.html#object=Lava;member=createCloner\">Lava#createCloner</a>.</p>\n<p>Second, widget configs are shared between widget instances. Also, parent configs are copied to children,\nso parent shares it&#39;s configs with children. Property descriptors, templates (includes), objects in options, \nsugar and storage descriptors - everything is shared for all hierarchy.</p>\n<p>That means, that all configs are <b>static</b>. <b>You must never modify any configs in use!</b>\nIf you want to create a modified config - you must clone existing, or create a new one.</p>\n"],
	container: {
		"class": "Element",
		tag_name: "div"
	}
}