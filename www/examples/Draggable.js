({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n43\r\n44\r\n45\r\n46\r\n47\r\n48\r\n49\r\n50\r\n51\r\n52\r\n53\r\n54\r\n55\r\n56\r\n57\r\n58\r\n59\r\n60\r\n61\r\n62\r\n63\r\n64\r\n65\r\n66\r\n67\r\n68\r\n69\r\n70\r\n71\r\n72\r\n73\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.ClassManager.define(\n<span class=\"hljs-string\">'Lava.widget.DemoDraggable'</span>,\n<span class=\"hljs-comment\">/**\n * @extends {Lava.widget.Standard}\n */</span>\n{\n\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n  name: <span class=\"hljs-string\">'demo_draggable'</span>,\n\n  _property_descriptors: {\n    x: {type: <span class=\"hljs-string\">'Integer'</span>},\n    y: {type: <span class=\"hljs-string\">'Integer'</span>}\n  },\n\n  _properties: {\n    x: <span class=\"hljs-number\">0</span>,\n    y: <span class=\"hljs-number\">0</span>\n  },\n\n  _event_handlers: {\n    mouse_down: <span class=\"hljs-string\">'onMouseDown'</span>\n  },\n\n  _mousemove_listener: <span class=\"hljs-literal\">null</span>,\n  _mouseup_listener: <span class=\"hljs-literal\">null</span>,\n\n  _current_coordinates: {\n    x: <span class=\"hljs-number\">0</span>,\n    y: <span class=\"hljs-number\">0</span>\n  },\n\n  _start_coordinates: {\n    x: <span class=\"hljs-number\">0</span>,\n    y: <span class=\"hljs-number\">0</span>\n  },\n\n  onMouseDown: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(dom_event_name, event_object)</span> {</span>\n\n    <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>._mousemove_listener) {\n\n      <span class=\"hljs-keyword\">this</span>._mousemove_listener = Lava.Core.addGlobalHandler(<span class=\"hljs-string\">'mousemove'</span>, <span class=\"hljs-keyword\">this</span>._onMouseMove, <span class=\"hljs-keyword\">this</span>);\n      <span class=\"hljs-keyword\">this</span>._mouseup_listener = Lava.Core.addGlobalHandler(<span class=\"hljs-string\">'mouseup'</span>, <span class=\"hljs-keyword\">this</span>._onMouseUp, <span class=\"hljs-keyword\">this</span>);\n\n      <span class=\"hljs-keyword\">this</span>._start_coordinates = event_object.page;\n\n    }\n\n    event_object.preventDefault(); <span class=\"hljs-comment\">// to prevent text selection</span>\n\n  },\n\n  _onMouseUp: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(event_name, event_object)</span> {</span>\n\n    Lava.Core.removeGlobalHandler(<span class=\"hljs-keyword\">this</span>._mousemove_listener);\n    Lava.Core.removeGlobalHandler(<span class=\"hljs-keyword\">this</span>._mouseup_listener);\n    <span class=\"hljs-keyword\">this</span>._mousemove_listener = <span class=\"hljs-literal\">null</span>;\n    <span class=\"hljs-keyword\">this</span>._mouseup_listener = <span class=\"hljs-literal\">null</span>;\n\n    <span class=\"hljs-keyword\">this</span>._current_coordinates.x = <span class=\"hljs-keyword\">this</span>._properties.x;\n    <span class=\"hljs-keyword\">this</span>._current_coordinates.y = <span class=\"hljs-keyword\">this</span>._properties.y;\n\n  },\n\n  _onMouseMove: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(event_name, event_object)</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'x'</span>, <span class=\"hljs-keyword\">this</span>._current_coordinates.x + event_object.page.x - <span class=\"hljs-keyword\">this</span>._start_coordinates.x);\n    <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'y'</span>, <span class=\"hljs-keyword\">this</span>._current_coordinates.y + event_object.page.y - <span class=\"hljs-keyword\">this</span>._start_coordinates.y);\n\n  }\n\n});</pre></div></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"position:relative;height: 100px;\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"DemoDraggable\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"DemoDraggable\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">view</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:mousedown</span>=<span class=\"hljs-value\">\"$demo_draggable.mouse_down\"</span>\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:style:left</span>=<span class=\"hljs-value\">\"$demo_draggable.x + 'px'\"</span>\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:style:top</span>=<span class=\"hljs-value\">\"$demo_draggable.y + 'px'\"</span>\n          <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-unselectable\"</span>\n          <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"width: 100px;height: 50px;border:1px solid black;position: absolute\"</span>&gt;</span>\n          {#&gt; \"x: \" + $demo_draggable.x + \", y: \" + $demo_draggable.y }\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">view</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">default_events</span>&gt;</span>['mousedown']<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">default_events</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div></div>"
		}
	],
	classes: "Lava.ClassManager.define(\r\n'Lava.widget.DemoDraggable',\r\n/**\r\n * @extends {Lava.widget.Standard}\r\n */\r\n{\r\n\r\n\tExtends: 'Lava.widget.Standard',\r\n\r\n\tname: 'demo_draggable',\r\n\r\n\t_property_descriptors: {\r\n\t\tx: {type: 'Integer'},\r\n\t\ty: {type: 'Integer'}\r\n\t},\r\n\r\n\t_properties: {\r\n\t\tx: 0,\r\n\t\ty: 0\r\n\t},\r\n\r\n\t_event_handlers: {\r\n\t\tmouse_down: 'onMouseDown'\r\n\t},\r\n\r\n\t_mousemove_listener: null,\r\n\t_mouseup_listener: null,\r\n\r\n\t_current_coordinates: {\r\n\t\tx: 0,\r\n\t\ty: 0\r\n\t},\r\n\r\n\t_start_coordinates: {\r\n\t\tx: 0,\r\n\t\ty: 0\r\n\t},\r\n\r\n\tonMouseDown: function(dom_event_name, event_object) {\r\n\r\n\t\tif (!this._mousemove_listener) {\r\n\r\n\t\t\tthis._mousemove_listener = Lava.Core.addGlobalHandler('mousemove', this._onMouseMove, this);\r\n\t\t\tthis._mouseup_listener = Lava.Core.addGlobalHandler('mouseup', this._onMouseUp, this);\r\n\r\n\t\t\tthis._start_coordinates = event_object.page;\r\n\r\n\t\t}\r\n\r\n\t\tevent_object.preventDefault(); // to prevent text selection\r\n\r\n\t},\r\n\r\n\t_onMouseUp: function(event_name, event_object) {\r\n\r\n\t\tLava.Core.removeGlobalHandler(this._mousemove_listener);\r\n\t\tLava.Core.removeGlobalHandler(this._mouseup_listener);\r\n\t\tthis._mousemove_listener = null;\r\n\t\tthis._mouseup_listener = null;\r\n\r\n\t\tthis._current_coordinates.x = this._properties.x;\r\n\t\tthis._current_coordinates.y = this._properties.y;\r\n\r\n\t},\r\n\r\n\t_onMouseMove: function(event_name, event_object) {\r\n\r\n\t\tthis.set('x', this._current_coordinates.x + event_object.page.x - this._start_coordinates.x);\r\n\t\tthis.set('y', this._current_coordinates.y + event_object.page.y - this._start_coordinates.y);\r\n\r\n\t}\r\n\r\n});",
	template: [
		"<p>You can drag the rectangle around.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					"\r\n\t<div style=\"position:relative;height: 100px;\">\r\n\t\t",
					{
						type: "widget",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						template: [
							"\r\n\t\t\t\t\t",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return ("x: " + this._binds[0].getValue() + ", y: " + this._binds[1].getValue());
},
									binds: [
										{
											locator_type: "Name",
											locator: "demo_draggable",
											tail: ["x"]
										},
										{
											locator_type: "Name",
											locator: "demo_draggable",
											tail: ["y"]
										}
									]
								}
							},
							"\r\n\t\t\t\t"
						],
						container: {
							type: "Element",
							tag_name: "div",
							static_classes: ["lava-unselectable"],
							static_styles: {
								width: "100px",
								height: "50px",
								border: "1px solid black",
								position: "absolute"
							},
							events: {
								mousedown: [{
									locator_type: "Name",
									locator: "demo_draggable",
									name: "mouse_down"
								}]
							},
							style_bindings: {
								left: {
									evaluator: function() {
return (this._binds[0].getValue() + 'px');
},
									binds: [{
										locator_type: "Name",
										locator: "demo_draggable",
										tail: ["x"]
									}]
								},
								top: {
									evaluator: function() {
return (this._binds[0].getValue() + 'px');
},
									binds: [{
										locator_type: "Name",
										locator: "demo_draggable",
										tail: ["y"]
									}]
								}
							}
						},
						default_events: [],
						real_class: "DemoDraggable"
					},
					"\r\n\t</div>\r\n"
				]
			}
		}
	]
})