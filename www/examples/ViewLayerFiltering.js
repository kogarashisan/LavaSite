({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n43\r\n44\r\n45\r\n46\r\n47\r\n48\r\n49\r\n50\r\n51\r\n52\r\n53\r\n54\r\n55\r\n56\r\n57\r\n58\r\n59\r\n60\r\n61\r\n62\r\n63\r\n64\r\n65\r\n66\r\n67\r\n68\r\n69\r\n70\r\n71\r\n72\r\n73\r\n74\r\n75\r\n76\r\n77\r\n78\r\n79\r\n80\r\n81\r\n82\r\n83\r\n84\r\n85\r\n86\r\n87\r\n88\r\n89\r\n90\r\n91\r\n92\r\n93\r\n94\r\n95\r\n96\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.widget.ViewLayerFilteringExample'</span>,\n{\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n  name: <span class=\"hljs-string\">\"example\"</span>,\n\n  _properties: {\n    filter_text: <span class=\"hljs-string\">''</span>,\n    <span class=\"hljs-comment\">/** @type {Lava.system.Enumerable} */</span>\n    api_names_list: <span class=\"hljs-literal\">null</span>\n  },\n\n  _role_handlers: {\n    main_foreach: <span class=\"hljs-string\">'_handleMainForeachView'</span>\n  },\n\n  init: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(config, widget, parent_view, template, properties)</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>._properties.api_names_list = <span class=\"hljs-keyword\">new</span> Lava.system.Enumerable();\n    <span class=\"hljs-keyword\">this</span>._extractRecordTitles(<span class=\"hljs-keyword\">this</span>._properties.api_names_list, api_tree_source);\n    <span class=\"hljs-keyword\">this</span>.Standard$init(config, widget, parent_view, template, properties);\n\n  },\n\n  <span class=\"hljs-comment\">/**\n   * Prepare list of API names\n   * @param {Lava.system.Enumerable} destination\n   * @param {Array} source\n   */</span>\n  _extractRecordTitles: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(destination, source)</span> {</span>\n\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>, count = source.length; i &lt; count; i++) {\n\n      <span class=\"hljs-keyword\">if</span> (source[i].type != <span class=\"hljs-string\">'folder'</span>) {\n        destination.push(<span class=\"hljs-keyword\">new</span> Lava.mixin.Properties({\n          title: source[i].name,\n          <span class=\"hljs-comment\">// we need this to perform filtering faster</span>\n          lower_case_title: source[i].name.toLowerCase(),\n          formatted_title: source[i].name\n        }));\n      }\n\n      <span class=\"hljs-keyword\">if</span> (source[i].children) {\n        <span class=\"hljs-keyword\">this</span>._extractRecordTitles(destination, source[i].children);\n      }\n\n    }\n\n  },\n\n  _handleMainForeachView: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_view)</span> {</span>\n\n    foreach_view.getScope().on(<span class=\"hljs-string\">'after_refresh'</span>, <span class=\"hljs-keyword\">this</span>._onAfterForeachScopeRefreshed, <span class=\"hljs-keyword\">this</span>);\n\n  },\n\n  _onAfterForeachScopeRefreshed: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_scope)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> filter_text = <span class=\"hljs-keyword\">this</span>._properties.filter_text.toLowerCase(),\n      filter_reg_exp = filter_text\n        ? <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">RegExp</span>(Firestorm.String.escapeStringForRegExp(filter_text), <span class=\"hljs-string\">'gi'</span>)\n        : <span class=\"hljs-literal\">null</span>;\n\n    <span class=\"hljs-keyword\">if</span> (filter_reg_exp) {\n\n      foreach_scope.getValue().filter(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(record)</span>{</span>\n\n        <span class=\"hljs-comment\">// this check is faster then RegExp</span>\n        <span class=\"hljs-keyword\">var</span> passes = record.get(<span class=\"hljs-string\">'lower_case_title'</span>).indexOf(filter_text) != -<span class=\"hljs-number\">1</span>;\n\n        <span class=\"hljs-keyword\">if</span> (passes) {\n          record.set(\n            <span class=\"hljs-string\">'formatted_title'</span>,\n            record.get(<span class=\"hljs-string\">'title'</span>).replace(filter_reg_exp, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(value)</span>{</span>\n              <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"&lt;span style='background: #ffff00'&gt;\"</span> + value + <span class=\"hljs-string\">\"&lt;/span&gt;\"</span>;\n            })\n          )\n        }\n\n        <span class=\"hljs-keyword\">return</span> passes;\n\n      });\n\n    } <span class=\"hljs-keyword\">else</span> {\n\n      foreach_scope.getValue().each(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(record)</span>{</span>\n\n        record.set(<span class=\"hljs-string\">'formatted_title'</span>, record.get(<span class=\"hljs-string\">'title'</span>));\n\n      });\n\n    }\n\n  }\n\n});</pre></div></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Example\"</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"ViewLayerFilteringExample\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">text_input</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"edit\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>$example.filter_text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:bind</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">text_input</span>&gt;</span>\n    {$foreach($example.api_names_list)\n      as=record\n      own_enumerable_mode=DataView\n      depends=\"$example.filter_text\"}\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$example.main_foreach<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:refresher</span>&gt;</span>{type: 'Standard'}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:refresher</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span>&gt;</span>\n        {#expression(record.formatted_title) escape_off}{/expression}\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    {/foreach}\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div></div></div>"
		}
	],
	classes: "\r\nLava.define(\r\n'Lava.widget.ViewLayerFilteringExample',\r\n{\r\n\tExtends: 'Lava.widget.Standard',\r\n\tname: \"example\",\r\n\r\n\t_properties: {\r\n\t\tfilter_text: '',\r\n\t\t/** @type {Lava.system.Enumerable} */\r\n\t\tapi_names_list: null\r\n\t},\r\n\r\n\t_role_handlers: {\r\n\t\tmain_foreach: '_handleMainForeachView'\r\n\t},\r\n\r\n\tinit: function(config, widget, parent_view, template, properties) {\r\n\r\n\t\tthis._properties.api_names_list = new Lava.system.Enumerable();\r\n\t\tthis._extractRecordTitles(this._properties.api_names_list, api_tree_source);\r\n\t\tthis.Standard$init(config, widget, parent_view, template, properties);\r\n\r\n\t},\r\n\r\n\t/**\r\n\t * Prepare list of API names\r\n\t * @param {Lava.system.Enumerable} destination\r\n\t * @param {Array} source\r\n\t */\r\n\t_extractRecordTitles: function(destination, source) {\r\n\r\n\t\tfor (var i = 0, count = source.length; i < count; i++) {\r\n\r\n\t\t\tif (source[i].type != 'folder') {\r\n\t\t\t\tdestination.push(new Lava.mixin.Properties({\r\n\t\t\t\t\ttitle: source[i].name,\r\n\t\t\t\t\t// we need this to perform filtering faster\r\n\t\t\t\t\tlower_case_title: source[i].name.toLowerCase(),\r\n\t\t\t\t\tformatted_title: source[i].name\r\n\t\t\t\t}));\r\n\t\t\t}\r\n\r\n\t\t\tif (source[i].children) {\r\n\t\t\t\tthis._extractRecordTitles(destination, source[i].children);\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t},\r\n\r\n\t_handleMainForeachView: function(foreach_view) {\r\n\r\n\t\tforeach_view.getScope().on('after_refresh', this._onAfterForeachScopeRefreshed, this);\r\n\r\n\t},\r\n\r\n\t_onAfterForeachScopeRefreshed: function(foreach_scope) {\r\n\r\n\t\tvar filter_text = this._properties.filter_text.toLowerCase(),\r\n\t\t\tfilter_reg_exp = filter_text\r\n\t\t\t\t? new RegExp(Firestorm.String.escapeStringForRegExp(filter_text), 'gi')\r\n\t\t\t\t: null;\r\n\r\n\t\tif (filter_reg_exp) {\r\n\r\n\t\t\tforeach_scope.getValue().filter(function(record){\r\n\r\n\t\t\t\t// this check is faster then RegExp\r\n\t\t\t\tvar passes = record.get('lower_case_title').indexOf(filter_text) != -1;\r\n\r\n\t\t\t\tif (passes) {\r\n\t\t\t\t\trecord.set(\r\n\t\t\t\t\t\t'formatted_title',\r\n\t\t\t\t\t\trecord.get('title').replace(filter_reg_exp, function(value){\r\n\t\t\t\t\t\t\treturn \"<span style='background: #ffff00'>\" + value + \"</span>\";\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn passes;\r\n\r\n\t\t\t});\r\n\r\n\t\t} else {\r\n\r\n\t\t\tforeach_scope.getValue().each(function(record){\r\n\r\n\t\t\t\trecord.set('formatted_title', record.get('title'));\r\n\r\n\t\t\t});\r\n\r\n\t\t}\r\n\r\n\t}\r\n\r\n});",
	template: [
		"<p>Demonstrates usage of filters inside Lava.scope.Foreach.</p>\r\n\r\n<p>Satisfied requirements:</p>\r\n<ul>\r\n\t<li>Each line below the input box is contained in a separate element, so they can be inserted and removed independently from each other.</li>\r\n\t<li>When search is narrowed (when you type another letter into search box) - whole list is not re-rendered.\r\n\t\tInstead, only the elements, that don't match the filter are removed.</li>\r\n\t<li>When search is broaden (when you remove part of text from input) - only new elements,\r\n\t\tthat match new filter text are rendered and inserted into DOM.\r\n\t\tEverything, that was already in DOM - is not touched.</li>\r\n\t<li>Highlighted text is updated only for visible elements in the list.</li>\r\n</ul>\r\n\r\n<p>Note about speed: this is not the fastest way to show a plain filtered list\r\n\t- view layer filtering is designed to handle more complex scenarios.\r\n\tRemoval of items from the list is very fast (when you type new letters into the input), but insertion is a bit slower.</p>\r\n\r\n<p>How this works:</p>\r\n<ul>\r\n\t<li>Foreach view is assigned role inside the example widget.\r\n\t\tRole handler attaches listener to \"after_refresh\" event of Lava.scope.Foreach instance, which is owned by the Foreach view.</li>\r\n\t<li>Scope also has two options: \"own_enumerable_mode\" and \"depends\".</li>\r\n\t<li>Each time you change text in the input - scope updates from source Enumerable and triggers \"after_refresh\"\r\n\t\t(this behaviour is enabled by the \"depends\" option).</li>\r\n\t<li>\"after_refresh\" handler filters records inside the scope and applies coloring.</li>\r\n</ul>\r\n\r\n<p>Note: this example removes elements from DOM, but the same visual result could be achieved by hiding\r\n\tthem with display:none or creating a new list each time when filter changes.\r\n\tBut in first case the sorting operation will become heavier (cause all items, which are in DOM, need to be moved).\r\n\tAnd in second case the list needs to be re-rendered each time the filter or sorting changes (animation is impossible),\r\n\tand you will also need to manually update it when items are added or removed.</p>",
		{
			template: [
				"\r\n\t\t",
				{
					type: "widget",
					"class": "Lava.WidgetConfigExtensionGateway",
					extender_type: "Standard",
					"extends": "TextInput",
					bindings: {
						value: {
							property_name: "value",
							path_config: {
								locator_type: "Name",
								locator: "example",
								tail: ["filter_text"]
							}
						}
					},
					resources: {
						"default": {
							TEXT_INPUT_ELEMENT: {
								type: "container_stack",
								value: [{
									name: "add_classes",
									value: ["edit"]
								}]
							}
						}
					}
				},
				"\r\n\t\t",
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
							locator: "example",
							tail: ["api_names_list"]
						}]
					},
					container: {type: "Morph"},
					as: "record",
					scope: {
						own_enumerable_mode: "DataView",
						depends: [{
							locator_type: "Name",
							locator: "example",
							tail: ["filter_text"]
						}]
					},
					roles: [{
						locator_type: "Name",
						locator: "example",
						name: "main_foreach"
					}],
					refresher: {type: "Standard"},
					template: [
						"\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t",
						{
							type: "view",
							"class": "Expression",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "record",
									tail: ["formatted_title"]
								}]
							},
							escape_off: true,
							template: [],
							container: {
								type: "Element",
								tag_name: "div"
							}
						},
						"\r\n\t\t"
					]
				},
				"\r\n\t"
			],
			"extends": "Example",
			real_class: "ViewLayerFilteringExample",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			type: "widget"
		}
	]
})