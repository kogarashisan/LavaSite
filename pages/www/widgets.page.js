Site.pages['www/widgets'] = {
	type: "widget",
	"class": "WidgetsPage",
	extender_type: "Standard",
	container: {
		type: "Element",
		tag_name: "body",
		static_properties: {"lava-app": "WidgetsPage"}
	},
	properties: {lipsum: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
	template: [
		"\r\n\r\n\r\n<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<div class=\"navbar-brand\">LiquidLava</div>\r\n\t\t</div>\r\n\t\t<div class=\"navbar-collapse collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li><!-- class=\"active\" -->\r\n\t\t\t\t\t<a href=\"/index.html\">Home</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: ["dropdown"]
			},
			template: [
				"\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: ["dropdown-toggle"],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["\r\n\t\t\t\t\t\tLearn <b class=\"caret\"></b>\r\n\t\t\t\t\t"]
				},
				"\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=tutorials\">Tutorials</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=reference\">Reference</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=api\">API</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/examples.html\">Examples</a></li>\r\n\t\t\t\t\t\t<!--li class=\"divider\"></li-->\r\n\t\t\t\t\t\t<!--li class=\"dropdown-header\">Coming soon:</li-->\r\n\t\t\t\t\t\t<!--li class=\"disabled\"><a href=\"#\">Video tutorials</a></li-->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t"
			]
		},
		"\r\n\t\t\t\t",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: ["dropdown"]
			},
			template: [
				"\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: ["dropdown-toggle"],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["\r\n\t\t\t\t\t\tDevelop <b class=\"caret\"></b>\r\n\t\t\t\t\t"]
				},
				"\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LiquidLava/\">Core on GitHub</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LavaSite/\">Site on GitHub</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/changelog.html\">Changelog</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LiquidLava/issues?state=open\">Issues</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/roadmap.html\">Roadmap</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/tasks.html\">Tasks</a></li>\r\n\t\t\t\t\t\t<!--li class=\"divider\"></li-->\r\n\t\t\t\t\t\t<!--li class=\"dropdown-header\">Coming soon:</li-->\r\n\t\t\t\t\t\t<li class=\"disabled\"><a href=\"#\">Code coverage</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t"
			]
		},
		"\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/widgets.html\">Widgets</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/about.html\">About</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"bs-sidebar hidden-print affix-top\" role=\"complementary\">\r\n\t\t\t\t<ul class=\"nav bs-sidenav\">\r\n\t\t\t\t\t<li><a href=\"#Collapsible\">Collapsible</a></li><li><a href=\"#CollapsiblePanel\">CollapsiblePanel</a></li><li><a href=\"#CollapsiblePanelExt\">CollapsiblePanelExt</a></li><li><a href=\"#Accordion\">Accordion</a></li><li><a href=\"#Tabs\">Tabs</a></li><li><a href=\"#Tooltip\">Tooltip</a></li><li><a href=\"#Dropdown\">Dropdown</a></li><li><a href=\"#Table\">Table</a></li><li><a href=\"#Calendar\">Calendar</a></li><li><a href=\"#Tree\">Tree</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9\" role=\"main\">\r\n\r\n\t\t\t<h1>Standard widgets showcase</h1>\r\n\t\t\t<p>\r\n\t\t\t\tThese widgets are included with framework by default. Note: they are not limited to bootstrap theme\r\n\t\t\t\t- you can write your own CSS and even HTML markup for any widget.\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tCustomizing the code is very easy: you are always encouraged to inherit your own classes,\r\n\t\t\t\twrite your own templates and use these widgets as examples when creating your own.\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"bs-callout bs-callout-info\">\r\n\t\t\t\t<p>Note: framework has also a collection of form input widgets, which are not shown here, like tri-state Checkbox or Radio.</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<p>\r\n\t\t\t\tAll headers and all content of almost any widget in Lava is not just a static text,\r\n\t\t\t\tbut a normal Lava template, so inside you can use other widgets and data binding.\r\n\t\t\t\tAlso, most widgets support styling via \"resources\", so you can apply styles without changing the markup.\r\n\t\t\t</p>\r\n\r\n\t\t\t<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Collapsible\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Collapsible\">Collapsible</h1><p>This is expandable DIV with animation. Widget has <i style=\"font-weight:bold\">is_expanded</i> property,\r\n\twhich you can set programmatically to control panel's state.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "button",
							static_classes: [
								"btn",
								"btn-primary"
							],
							static_properties: {type: "button"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "widgets_page",
									name: "toggle_collapsible"
								}]
							}
						},
						template: ["\r\n\tToggle collapsible\r\n"]
					},
					"\r\n<!--lavabuild_cut_before-->\r\n",
					{
						type: "widget",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						"extends": "Collapsible",
						assigns: {
							is_expanded: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{property_name: "is_collapsible_expanded"}]
							}
						},
						includes: {
							content: [
								"\r\n\t\r\n\t<div class=\"well\">\r\n\t\t",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{property_name: "lipsum"}]
									}
								},
								"\r\n\t</div>\r\n"
							]
						}
					}
				]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_expanded\"</span>&gt;</span>is_collapsible_expanded<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"well\"</span>&gt;</span>\r\n    {#&gt;lipsum}\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.CollapsiblePanel\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"CollapsiblePanel\">CollapsiblePanel</h1><p>This panel does not remove it's content in collapsed state.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					type: "widget",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					"extends": "CollapsiblePanel",
					includes: {
						title: ["Click me!"],
						content: [{
							type: "view",
							"class": "Expression",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{property_name: "lipsum"}]
							}
						}]
					},
					resources: {
						"default": {
							COLLAPSIBLE_PANEL_CONTAINER: {
								type: "container_stack",
								value: [{
									name: "add_classes",
									value: ["panel-default"]
								}]
							}
						}
					}
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Click me!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>{#&gt;lipsum}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.CollapsiblePanelExt\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"CollapsiblePanelExt\">CollapsiblePanelExt</h1><p>This panel does! (you can see it in your browser's dev tools)</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					type: "widget",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					"extends": "CollapsiblePanelExt",
					includes: {
						title: ["Click me!"],
						content: [{
							type: "view",
							"class": "Expression",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{property_name: "lipsum"}]
							}
						}]
					},
					resources: {
						"default": {
							COLLAPSIBLE_PANEL_CONTAINER: {
								type: "container_stack",
								value: [{
									name: "add_classes",
									value: ["panel-default"]
								}]
							}
						}
					}
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel-ext</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-default\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Click me!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>{#&gt;lipsum}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel-ext</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Accordion\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Accordion\">Accordion</h1>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					type: "widget",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					"extends": "Accordion",
					resources: {
						"default": {
							panel: {
								type: "component",
								value: {
									COLLAPSIBLE_PANEL_CONTAINER: {
										type: "container_stack",
										value: [{
											name: "add_classes",
											value: ["panel-info"]
										}]
									}
								}
							}
						}
					},
					storage: {
						panels: [
							{
								title: ["Panel 1"],
								content: [
									"\r\n\t\t\t<p><strong>Below is a data-bound-view in Metamorph-like container:</strong></p>\r\n\t\t\t",
									{
										type: "view",
										"class": "Expression",
										argument: {
											evaluator: function() {
return (this._binds[0].getValue());
},
											flags: {isScopeEval: true},
											binds: [{property_name: "lipsum"}]
										},
										container: {type: "Morph"}
									},
									"\r\n\t\t"
								],
								is_expanded: true
							},
							{
								title: ["Panel 2"],
								content: ["Content 2"]
							},
							{
								title: ["Panel 3"],
								content: ["Content 3"]
							}
						]
					}
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">accordion</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:resources</span> <span class=\"hljs-attribute\">locale</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">container</span> <span class=\"hljs-attribute\">path</span>=<span class=\"hljs-value\">\"panel.COLLAPSIBLE_PANEL_CONTAINER\"</span> <span class=\"hljs-attribute\">add_classes</span>=<span class=\"hljs-value\">\"panel-info\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">container</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:resources</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span> <span class=\"hljs-attribute\">is_expanded</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">strong</span>&gt;</span>Below is a data-bound-view in Metamorph-like container:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">strong</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n      {$&gt;lipsum}\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">panel</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Panel 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">panel</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">accordion</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Tabs\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Tabs\">Tabs</h1>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					type: "widget",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					"extends": "Tabs",
					storage: {
						tabs: [
							{
								title: ["Tab 1"],
								content: [
									"\r\n\t\t\t<p><strong>Below is a data-bound view in an Element container:</strong></p>\r\n\t\t\t",
									{
										type: "view",
										"class": "Expression",
										argument: {
											evaluator: function() {
return (this._binds[0].getValue());
},
											flags: {isScopeEval: true},
											binds: [{property_name: "lipsum"}]
										},
										container: {
											type: "Element",
											tag_name: "div"
										}
									},
									"\r\n\t\t"
								]
							},
							{
								title: ["Tab 2"],
								content: ["Header content is also a template"]
							},
							{
								title: ["Tab 3"],
								content: ["Tab 3 content"]
							}
						]
					}
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tabs</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">strong</span>&gt;</span>Below is a data-bound view in an Element container:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">strong</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span>&gt;</span>{#&gt;lipsum}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Header content is also a template<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Tab 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Tab 3 content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tabs</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Tooltip\"><span class=\"glyphicon glyphicon-link\"></span>API (Widget)</a><h1 id=\"Tooltip\">Tooltip</h1><p>Tooltips are controlled by <a href=\"/www/doc.html#class=Lava.system.PopoverManager\">PopoverManager</a> -\r\nit shows, hides and moves tooltips. The purpose of Tooltip widget is to display data.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: ["<p>Some text with a <a href=\"#\" data-tooltip=\"test\">tooltip</a></p>"]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Some text with a <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">data-tooltip</span>=<span class=\"hljs-value\">\"test\"</span>&gt;</span>tooltip<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.DropDown\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Dropdown\">Dropdown</h1><p>Keyboard navigation and nested dropdowns support is coming soon, as well as automatic ARIA markup.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					"<ul class=\"nav nav-pills\" style=\"float: left; margin-right:1em\">\r\n\t",
					{
						type: "widget",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						"extends": "DropDown",
						container: {
							type: "Element",
							tag_name: "li",
							static_classes: ["dropdown"]
						},
						template: [
							"\r\n\t\t",
							{
								type: "view",
								"class": "View",
								container: {
									type: "Element",
									tag_name: "a",
									static_properties: {
										role: "button",
										href: "#"
									}
								},
								roles: [{
									locator_type: "Name",
									locator: "dropdown",
									name: "trigger"
								}],
								template: ["Dropdown <b class=\"caret\"></b>"]
							},
							"\r\n\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\r\n\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\r\n\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\r\n\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\r\n\t\t</ul>\r\n\t"
						]
					},
					"\r\n</ul>\r\n\r\n",
					{
						type: "widget",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						"extends": "DropDown",
						container: {
							type: "Element",
							tag_name: "div",
							static_classes: ["btn-group"],
							static_styles: {
								"float": "left",
								"margin-right": "1em"
							}
						},
						template: [
							"\r\n\t<button type=\"button\" class=\"btn btn-success\">Success</button>\r\n\t",
							{
								type: "view",
								"class": "View",
								container: {
									type: "Element",
									tag_name: "button",
									static_classes: [
										"btn",
										"btn-success",
										"dropdown-toggle"
									],
									static_properties: {type: "button"}
								},
								roles: [{
									locator_type: "Name",
									locator: "dropdown",
									name: "trigger"
								}],
								template: ["\r\n\t\t<span class=\"caret\"></span>\r\n\t\t<span class=\"sr-only\">Toggle Dropdown</span>\r\n\t"]
							},
							"\r\n\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t<li><a href=\"#\">Action</a></li>\r\n\t\t<li><a href=\"#\">Another action</a></li>\r\n\t\t<li><a href=\"#\">Something else here</a></li>\r\n\t\t<li class=\"divider\"></li>\r\n\t\t<li><a href=\"#\">Separated link</a></li>\r\n\t</ul>\r\n"
						]
					},
					"\r\n\r\n<!--lavabuild_cut_after-->\r\n<div class=\"clearfix\"></div>"
				]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav nav-pills\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"float: left; margin-right:1em\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:widget</span>=<span class=\"hljs-value\">\"DropDown\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$dropdown.trigger\"</span>&gt;</span>Dropdown <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">b</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"caret\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">b</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-menu\"</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menu\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"presentation\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menuitem\"</span> <span class=\"hljs-attribute\">tabindex</span>=<span class=\"hljs-value\">\"-1\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Action<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"presentation\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menuitem\"</span> <span class=\"hljs-attribute\">tabindex</span>=<span class=\"hljs-value\">\"-1\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Another action<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"presentation\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menuitem\"</span> <span class=\"hljs-attribute\">tabindex</span>=<span class=\"hljs-value\">\"-1\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Something else here<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"presentation\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"presentation\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menuitem\"</span> <span class=\"hljs-attribute\">tabindex</span>=<span class=\"hljs-value\">\"-1\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Separated link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-group\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:widget</span>=<span class=\"hljs-value\">\"DropDown\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"float: left; margin-right:1em\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-success\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-success dropdown-toggle\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$dropdown.trigger\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"caret\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"sr-only\"</span>&gt;</span>Toggle Dropdown<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-menu\"</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"menu\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Action<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Another action<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Something else here<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Separated link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Table\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Table\">Table</h1><p>Simple sortable table. Click on column headers to apply sorting.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					"extends": "Table",
					options: {
						columns: [
							{
								name: "title",
								title: "Title",
								type: "String"
							},
							{
								name: "symbol",
								title: "Chemical symbol",
								type: "String"
							},
							{
								name: "atomic_mass",
								title: "Atomic mass",
								type: "String"
							},
							{
								name: "is_gas",
								title: "Gas?",
								type: "Boolean"
							}
						]
					},
					resources: {
						"default": {
							TABLE_ELEMENT: {
								type: "container_stack",
								value: [{
									name: "add_classes",
									value: ["demo-table"]
								}]
							}
						}
					},
					assigns: {
						records: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								locator_type: "Name",
								locator: "widgets_page",
								tail: ["periodic_elements"]
							}]
						}
					},
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					type: "widget"
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Table\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span>&gt;</span><span class=\"javascript\">\r\n    {\r\n      columns: [\r\n        {name: <span class=\"hljs-string\">'title'</span>, title: <span class=\"hljs-string\">'Title'</span>, type: <span class=\"hljs-string\">'String'</span>},\r\n        {name: <span class=\"hljs-string\">'symbol'</span>, title: <span class=\"hljs-string\">'Chemical symbol'</span>, type: <span class=\"hljs-string\">'String'</span>},\r\n        {name: <span class=\"hljs-string\">'atomic_mass'</span>, title: <span class=\"hljs-string\">'Atomic mass'</span>, type: <span class=\"hljs-string\">'String'</span>},\r\n        {name: <span class=\"hljs-string\">'is_gas'</span>, title: <span class=\"hljs-string\">'Gas?'</span>, type: <span class=\"hljs-string\">'Boolean'</span>}\r\n      ]\r\n    }\r\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">resources</span> <span class=\"hljs-attribute\">locale</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">container</span> <span class=\"hljs-attribute\">path</span>=<span class=\"hljs-value\">\"TABLE_ELEMENT\"</span> <span class=\"hljs-attribute\">add_classes</span>=<span class=\"hljs-value\">\"demo-table\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">container</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">resources</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>$widgets_page.periodic_elements<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Calendar\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Calendar\">Calendar</h1>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [{
					"extends": "Calendar",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					type: "widget"
				}]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Calendar\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div></div>\n\n<a class=\"widgets-api-link-h2 h3\" href=\"/www/doc.html#class=Lava.widget.Tree\"><span class=\"glyphicon glyphicon-link\"></span>API</a><h1 id=\"Tree\">Tree</h1><ul>\r\n\t<li>data is loaded from a Module as Records</li>\r\n\t<li>both trees are bound to the same data</li>\r\n\t<li>internally widget uses MetaStorage class - this allows trees to expand nodes independently from each other</li>\r\n</ul>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					"\r\nLeft:\r\n",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "button",
							static_classes: [
								"btn",
								"btn-primary"
							],
							static_properties: {type: "button"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "widgets_page",
									name: "toggle_tree",
									arguments: [
										{
											type: 1,
											data: "tree_left"
										},
										{
											type: 1,
											data: true
										}
									]
								}]
							}
						},
						template: ["Expand"]
					},
					"\r\n",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "button",
							static_classes: [
								"btn",
								"btn-primary"
							],
							static_properties: {type: "button"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "widgets_page",
									name: "toggle_tree",
									arguments: [
										{
											type: 1,
											data: "tree_left"
										},
										{
											type: 1,
											data: false
										}
									]
								}]
							}
						},
						template: ["Collapse"]
					},
					"\r\nRight:\r\n",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "button",
							static_classes: [
								"btn",
								"btn-primary"
							],
							static_properties: {type: "button"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "widgets_page",
									name: "toggle_tree",
									arguments: [
										{
											type: 1,
											data: "tree_right"
										},
										{
											type: 1,
											data: true
										}
									]
								}]
							}
						},
						template: ["Expand"]
					},
					"\r\n",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "button",
							static_classes: [
								"btn",
								"btn-primary"
							],
							static_properties: {type: "button"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "widgets_page",
									name: "toggle_tree",
									arguments: [
										{
											type: 1,
											data: "tree_right"
										},
										{
											type: 1,
											data: false
										}
									]
								}]
							}
						},
						template: ["Collapse"]
					},
					"\r\n<div class=\"clearfix\"></div>\r\n\r\n<!--lavabuild_cut_before-->\r\n\r\n<!--lavabuild:include_FolderTree-->\r\n\r\n<div style=\"margin-right: 10px\" class=\"tree-example-container\">\r\n\t",
					{
						"extends": "FolderTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "widgets_page",
									tail: ["tree_records"]
								}]
							}
						},
						options: {
							meta_storage_columns: ["is_expanded"],
							refresher: {type: "Collapse"}
						},
						id: "tree_left",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n</div>\r\n\r\n<div class=\"tree-example-container\">\r\n\t",
					{
						"extends": "FolderTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "widgets_page",
									tail: ["tree_records"]
								}]
							}
						},
						options: {
							meta_storage_columns: ["is_expanded"]
						},
						id: "tree_right",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n</div>\r\n\r\n<!--lavabuild_cut_after-->\r\n\r\n<div class=\"clearfix\"></div>"
				]
			}
		},
		"\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header \">Source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:define</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Tree\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"FolderTree\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">include</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"icon\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>\r\n      <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:classes</span>=<span class=\"hljs-value\">\"'lava-tree-icon-' + node.type\"</span>\r\n      <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:bind:src</span>=<span class=\"hljs-value\">\"'/www/design/tree/' + node.type + '.gif'\"</span>\r\n      <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-icon\"</span> /&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">include</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:define</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"margin-right: 10px\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"tree-example-container\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"FolderTree\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tree_left\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>$widgets_page.tree_records<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span>&gt;</span><span class=\"javascript\">\r\n      {\r\n        meta_storage_columns: [<span class=\"hljs-string\">\"is_expanded\"</span>],\r\n        refresher: {type: <span class=\"hljs-string\">'Collapse'</span>}\r\n      }\r\n    </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"tree-example-container\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"FolderTree\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tree_right\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>$widgets_page.tree_records<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span>&gt;</span><span class=\"javascript\">\r\n      {meta_storage_columns: [<span class=\"hljs-string\">\"is_expanded\"</span>]}\r\n    </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div>\n\n\r\n\r\n\t\t\t<!-- some empty space for padding -->\r\n\t\t\t<div style=\"height: 2em\">&nbsp;</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<footer>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-inner\">Copyright (c) 2014 Alex Galashov. MIT Licence.</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
}