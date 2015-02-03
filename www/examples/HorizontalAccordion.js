({
	tabs: [{
		title: "Template",
		content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Accordion\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"width: 32%;float: left\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$accordion.panel\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-primary\"</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Title 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 1<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 1<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"width: 32%;float: left\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$accordion.panel\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-danger\"</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Title 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 2<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 2<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 2<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"width: 32%;float: left\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapsible-panel</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:roles</span>=<span class=\"hljs-value\">\"$accordion.panel\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"panel-primary\"</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">title</span>&gt;</span>Title 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">title</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">content</span>&gt;</span>Content 3<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 3<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 3<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 3<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>Content 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">content</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapsible-panel</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"clearfix\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div></div>"
	}],
	template: [
		"<p>Horizontal Accordion example - demonstrates flexibility of Lava widgets</p>",
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
							"\r\n\t\t\t<div style=\"width: 32%;float: left\">\r\n\t\t\t\t",
							{
								type: "widget",
								"class": "Lava.WidgetConfigExtensionGateway",
								extender_type: "Standard",
								"extends": "CollapsiblePanel",
								includes: {
									title: ["Title 1"],
									content: ["Content 1<br/>Content 1<br/>Content 1"]
								},
								resources: {
									"default": {
										COLLAPSIBLE_PANEL_CONTAINER: {
											type: "container_stack",
											value: [{
												name: "add_classes",
												value: ["panel-primary"]
											}]
										}
									}
								},
								roles: [{
									locator_type: "Name",
									locator: "accordion",
									name: "panel"
								}]
							},
							"\r\n\t\t\t</div>\r\n\t\t\t<div style=\"width: 32%;float: left\">\r\n\t\t\t\t",
							{
								type: "widget",
								"class": "Lava.WidgetConfigExtensionGateway",
								extender_type: "Standard",
								"extends": "CollapsiblePanel",
								includes: {
									title: ["Title 2"],
									content: ["Content 2<br/>Content 2<br/>Content 2<br/>Content 2"]
								},
								resources: {
									"default": {
										COLLAPSIBLE_PANEL_CONTAINER: {
											type: "container_stack",
											value: [{
												name: "add_classes",
												value: ["panel-danger"]
											}]
										}
									}
								},
								roles: [{
									locator_type: "Name",
									locator: "accordion",
									name: "panel"
								}]
							},
							"\r\n\t\t\t</div>\r\n\t\t\t<div style=\"width: 32%;float: left\">\r\n\t\t\t\t",
							{
								type: "widget",
								"class": "Lava.WidgetConfigExtensionGateway",
								extender_type: "Standard",
								"extends": "CollapsiblePanel",
								includes: {
									title: ["Title 3"],
									content: ["Content 3<br/>Content 3<br/>Content 3<br/>Content 3<br/>Content 3"]
								},
								resources: {
									"default": {
										COLLAPSIBLE_PANEL_CONTAINER: {
											type: "container_stack",
											value: [{
												name: "add_classes",
												value: ["panel-primary"]
											}]
										}
									}
								},
								roles: [{
									locator_type: "Name",
									locator: "accordion",
									name: "panel"
								}]
							},
							"\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t"
						],
						"extends": "Accordion",
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