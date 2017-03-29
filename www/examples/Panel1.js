({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n<span class=\"lava-new-code-highlight-line\">                                                                                    </span></pre><pre class=\"lava-new-code-content hljs javascript\">Lava.ClassManager.define(\n<span class=\"hljs-string\">'Lava.widget.PanelExample1'</span>,\n<span class=\"hljs-comment\">/** @extends {Lava.widget.Standard} */</span>\n{\n\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n  name: <span class=\"hljs-string\">'example_panel'</span>,\n\n  _properties: {\n    is_expanded: <span class=\"hljs-literal\">true</span>\n  },\n\n  _event_handlers: {\n    toggle_click: <span class=\"hljs-string\">'_onToggleClick'</span>\n  },\n\n  _onToggleClick: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(dom_event_name, event_object, view, template_arguments)</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'is_expanded'</span>, !<span class=\"hljs-keyword\">this</span>.get(<span class=\"hljs-string\">'is_expanded'</span>));\n\n  }\n\n});</pre><pre class=\"lava-new-code-tooltips\"> \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n<span data-tooltip=\"The only significant line of code\">                                                                                    </span></pre></div></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"PanelExample1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"$example_panel.toggle_click\"</span>\n          <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"background: lightyellow; padding: 1em; border: 1px solid gray;\"</span>&gt;</span>\n        Click me!\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>\n        <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:style:display</span>=<span class=\"hljs-value\">\"is_expanded ? 'block' : 'none'\"</span>\n        <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"border: 1px solid black\"</span>&gt;</span>\n          test<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n          test<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n          test<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n          test<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">default_events</span>&gt;</span>['click']<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">default_events</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div></div>"
		}
	],
	classes: "Lava.ClassManager.define(\r\n'Lava.widget.PanelExample1',\r\n/** @extends {Lava.widget.Standard} */\r\n{\r\n\r\n\tExtends: 'Lava.widget.Standard',\r\n\r\n\tname: 'example_panel',\r\n\r\n\t_properties: {\r\n\t\tis_expanded: true\r\n\t},\r\n\r\n\t_event_handlers: {\r\n\t\ttoggle_click: '_onToggleClick'\r\n\t},\r\n\r\n\t_onToggleClick: function(dom_event_name, event_object, view, template_arguments) {\r\n\r\n\t\tthis.set('is_expanded', !this.get('is_expanded'));/*H:The only significant line of code*/\r\n\r\n\t}\r\n\r\n});",
	template: [
		"<p>A very simple databinding demo. The click listener changes the <i>is_expanded</i> widget property,\r\n\twhich is bound to the style of the panel.</p>",
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
								"class": "View",
								container: {
									type: "Element",
									tag_name: "div",
									static_styles: {
										background: "lightyellow",
										padding: "1em",
										border: "1px solid gray"
									},
									events: {
										click: [{
											locator_type: "Name",
											locator: "example_panel",
											name: "toggle_click"
										}]
									}
								},
								template: ["\r\n\t\t\t\tClick me!\r\n\t\t\t"]
							},
							"\r\n\t\t\t",
							{
								type: "view",
								"class": "View",
								container: {
									type: "Element",
									tag_name: "div",
									static_styles: {border: "1px solid black"},
									style_bindings: {
										display: {
											evaluator: function() {
return (this._binds[0].getValue() ? 'block' : 'none');
},
											binds: [{property_name: "is_expanded"}]
										}
									}
								},
								template: ["\r\n\t\t\t\t\ttest<br/>\r\n\t\t\t\t\ttest<br/>\r\n\t\t\t\t\ttest<br/>\r\n\t\t\t\t\ttest<br/>\r\n\t\t\t"]
							},
							"\r\n\t\t"
						],
						default_events: [],
						real_class: "PanelExample1",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n"
				]
			}
		}
	]
})