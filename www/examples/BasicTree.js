({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n<span class=\"lava-new-code-highlight-line\">                                                                                  </span></pre><pre class=\"lava-new-code-content hljs javascript\">Lava.ClassManager.define(\n<span class=\"hljs-string\">'Lava.widget.TreeView1'</span>,\n<span class=\"hljs-comment\">/** @extends {Lava.widget.Standard} */</span>\n{\n\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n  name: <span class=\"hljs-string\">'tree_view'</span>,\n\n  _event_handlers: {\n    node_click: <span class=\"hljs-string\">'_onNodeClick'</span>\n  },\n\n  _onNodeClick: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(dom_event_name, event_object, view, template_arguments)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> node = template_arguments[<span class=\"hljs-number\">0</span>];\n    node.set(<span class=\"hljs-string\">'is_expanded'</span>, !node.get(<span class=\"hljs-string\">'is_expanded'</span>));\n\n  }\n\n});</pre><pre class=\"lava-new-code-tooltips\"> \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n<span data-tooltip=\"The only significant line of code\">                                                                                  </span></pre></div></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"TreeView1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"border: 1px solid black\"</span>&gt;</span>\n        {#foreach($tree_view.tree) as=node}\n          {&gt;$tree_view.node}\n        {/foreach}\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">include</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"node\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"border: 1px solid black\"</span>\n        <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"$tree_view.node_click(node)\"</span>\n        <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:style:background</span>=<span class=\"hljs-value\">\"(node.children.length) ? 'yellow' : ''\"</span>&gt;</span>\n        {#&gt;node.title}\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      {$if(node.children.length &amp;&amp; node.is_expanded)}\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"padding-left: 2em\"</span>&gt;</span>\n          {#foreach(node.children) as=node}\n            {&gt;$tree_view.node}\n          {/foreach}\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      {/if}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">include</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tree\"</span>&gt;</span>#ExamplesApp.live_example_tree<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">default_events</span>&gt;</span>['click']<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">default_events</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div></div>"
		}
	],
	classes: "Lava.ClassManager.define(\r\n'Lava.widget.TreeView1',\r\n/** @extends {Lava.widget.Standard} */\r\n{\r\n\r\n\tExtends: 'Lava.widget.Standard',\r\n\r\n\tname: 'tree_view',\r\n\r\n\t_event_handlers: {\r\n\t\tnode_click: '_onNodeClick'\r\n\t},\r\n\r\n\t_onNodeClick: function(dom_event_name, event_object, view, template_arguments) {\r\n\r\n\t\tvar node = template_arguments[0];\r\n\t\tnode.set('is_expanded', !node.get('is_expanded'));/*H:The only significant line of code*/\r\n\r\n\t}\r\n\r\n});",
	template: [
		"<p>This is the simplest HTML tree, built with the Framework.</p>\r\n<p>The nodes, which have children, are highlighted in yellow by the widget's template.</p>\r\n<p></p>\r\n<p>The tree takes data from the ExamplesPage widget (see ExamplesPage::init for details).\r\n\tThe <i>is_expanded</i> property is stored in the data record, so if several trees are bound to the same data - they share the expanded nodes.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					"\r\n\t",
					{
						template: [
							"\r\n\t\t\t",
							{
								type: "view",
								"class": "Foreach",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										locator_type: "Name",
										locator: "tree_view",
										tail: ["tree"]
									}]
								},
								as: "node",
								template: [
									"\r\n\t\t\t\t\t",
									{
										locator_type: "Name",
										locator: "tree_view",
										name: "node",
										type: "include"
									},
									"\r\n\t\t\t\t"
								],
								container: {
									type: "Element",
									tag_name: "div",
									static_styles: {border: "1px solid black"}
								}
							},
							"\r\n\t\t"
						],
						includes: {
							node: [
								"\r\n\t\t\t",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "node",
											tail: ["title"]
										}]
									},
									container: {
										type: "Element",
										tag_name: "div",
										static_styles: {border: "1px solid black"},
										events: {
											click: [{
												locator_type: "Name",
												locator: "tree_view",
												name: "node_click",
												arguments: [{
													type: 2,
													data: {property_name: "node"}
												}]
											}]
										},
										style_bindings: {
											background: {
												evaluator: function() {
return ((this._binds[0].getValue()) ? 'yellow' : '');
},
												binds: [{
													property_name: "node",
													tail: [
														"children",
														"length"
													]
												}]
											}
										}
									}
								},
								"\r\n\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue() && this._binds[1].getValue());
},
										binds: [
											{
												property_name: "node",
												tail: [
													"children",
													"length"
												]
											},
											{
												property_name: "node",
												tail: ["is_expanded"]
											}
										]
									},
									container: {type: "Morph"},
									template: [
										"\r\n\t\t\t\t",
										{
											type: "view",
											"class": "Foreach",
											argument: {
												evaluator: function() {
return (this._binds[0].getValue());
},
												flags: {isScopeEval: true},
												binds: [{
													property_name: "node",
													tail: ["children"]
												}]
											},
											as: "node",
											template: [
												"\r\n\t\t\t\t\t\t",
												{
													locator_type: "Name",
													locator: "tree_view",
													name: "node",
													type: "include"
												},
												"\r\n\t\t\t\t\t"
											],
											container: {
												type: "Element",
												tag_name: "div",
												static_styles: {"padding-left": "2em"}
											}
										},
										"\r\n\t\t\t"
									]
								},
								"\r\n\t\t"
							]
						},
						assigns: {
							tree: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Id",
									locator: "ExamplesApp",
									tail: ["live_example_tree"]
								}]
							}
						},
						default_events: [],
						real_class: "TreeView1",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n"
				]
			}
		},
		"\r\n"
	]
})