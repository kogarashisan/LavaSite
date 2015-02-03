({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloExample'</span>, {\n\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n  _properties: {\n    your_name: <span class=\"hljs-string\">''</span>\n  }\n\n});</pre></div></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Example\"</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"HelloExample\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span>&gt;</span>Name:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"TextInput\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>your_name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">bind</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>Hello {$&gt;your_name}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div></div></div>"
		}
	],
	classes: "\r\nLava.define('Lava.widget.HelloExample', {\r\n\r\n\tExtends: 'Lava.widget.Standard',\r\n\r\n\t_properties: {\r\n\t\tyour_name: ''\r\n\t}\r\n\r\n});",
	template: [{
		template: [
			"\r\n\t\t<label>Name:</label>\r\n\t\t",
			{
				"extends": "TextInput",
				bindings: {
					value: {
						property_name: "value",
						path_config: {property_name: "your_name"}
					}
				},
				"class": "Lava.WidgetConfigExtensionGateway",
				extender_type: "Standard",
				type: "widget"
			},
			"\r\n\t\t<br/>\r\n\t\t<h1>Hello ",
			{
				type: "view",
				"class": "Expression",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue());
},
					flags: {isScopeEval: true},
					binds: [{property_name: "your_name"}]
				},
				container: {type: "Morph"}
			},
			"!</h1>\r\n\t"
		],
		"extends": "Example",
		real_class: "HelloExample",
		"class": "Lava.WidgetConfigExtensionGateway",
		extender_type: "Standard",
		type: "widget"
	}]
})