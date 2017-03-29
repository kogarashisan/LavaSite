({
	tabs: [
		{
			title: "Template",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-6\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"padding: 1em\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"EditableTable\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"main_page_table\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span>&gt;</span><span class=\"javascript\">\n        {\n          columns: [\n            {name: <span class=\"hljs-string\">'title'</span>, title: <span class=\"hljs-string\">'Title'</span>, type: <span class=\"hljs-string\">'String'</span>, is_editable: <span class=\"hljs-literal\">true</span>},\n            {name: <span class=\"hljs-string\">'type'</span>, title: <span class=\"hljs-string\">'Type'</span>, type: <span class=\"hljs-string\">'String'</span>},\n            {name: <span class=\"hljs-string\">'is_expanded'</span>, title: <span class=\"hljs-string\">'Expanded?'</span>, type: <span class=\"hljs-string\">'Boolean'</span>, is_editable: <span class=\"hljs-literal\">true</span>}\n          ]\n        }\n      </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>#ExamplesApp.all_tree_records<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-6\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"padding: 1em;overflow: auto;height: 370px;position: relative;\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"FolderTree\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"main_page_tree\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>#ExamplesApp.tree_records<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span>&gt;</span><span class=\"javascript\">\n        {\n          refresher: {type: <span class=\"hljs-string\">'Collapse'</span>}\n        }\n      </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"clearfix\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div></div>"
		},
		{
			title: "Defines",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:define</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"EditableTableExample\"</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"Table\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"EditableTable\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">include</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"tbody\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tbody</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:resource_id</span>=<span class=\"hljs-value\">\"$table.TBODY_ELEMENT\"</span>&gt;</span>\n      {#foreach($table.records) as=row}\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$table._tbody<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"$table.row_click(row)\"</span>&gt;</span>\n          {#foreach($table._columns) as=column}\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n              {#if(row == _edit_record)}\n                {&gt;$table.edit_cell(column)}\n              {else}\n                {&gt;$table.cell(column)}\n              {/if}\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\n          {/foreach}\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\n      {/foreach}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tbody</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">include</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"lava/options\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:equiv</span>=<span class=\"hljs-value\">\"storage_schema\"</span>&gt;</span><span class=\"javascript\">\n    {\n      edit_cells: {type: <span class=\"hljs-string\">'template_hash'</span>, tag_name: <span class=\"hljs-string\">'cell'</span>}\n    }\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">edit_cells</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">cell</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"String\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">text_input</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>row[column.name]<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:bind</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">text_input</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">cell</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">cell</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"Boolean\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">checkbox</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"is_checked\"</span>&gt;</span>row[column.name]<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:bind</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">checkbox</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">cell</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">edit_cells</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">resources</span> <span class=\"hljs-attribute\">locale</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">container</span> <span class=\"hljs-attribute\">path</span>=<span class=\"hljs-value\">\"TABLE_ELEMENT\"</span> <span class=\"hljs-attribute\">add_classes</span>=<span class=\"hljs-value\">\"demo-table\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">container</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">resources</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:define</span>&gt;</span></pre></div></div></div>"
		},
		{
			title: "Classes",
			content: "<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n43\r\n44\r\n45\r\n46\r\n47\r\n48\r\n49\r\n50\r\n51\r\n52\r\n53\r\n54\r\n55\r\n56\r\n57\r\n58\r\n59\r\n60\r\n61\r\n62\r\n63\r\n64\r\n65\r\n66\r\n67\r\n68\r\n69\r\n70\r\n71\r\n72\r\n73\r\n74\r\n75\r\n76\r\n77\r\n78\r\n79\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.widget.EditableTableExample'</span>,\n{\n  Extends: <span class=\"hljs-string\">'Lava.widget.Table'</span>,\n\n  _properties: {\n    _edit_record: <span class=\"hljs-literal\">null</span>\n  },\n\n  _event_handlers: {\n    row_click: <span class=\"hljs-string\">'_onRowClick'</span>\n  },\n\n  _role_handlers: {\n    _tbody: <span class=\"hljs-string\">'_handleTBodyRole'</span>\n  },\n\n  _click_stack_changed_listener: <span class=\"hljs-literal\">null</span>,\n  _tbody_container: <span class=\"hljs-literal\">null</span>,\n\n  _onRowClick: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(dom_event_name, event_object, view, template_arguments)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> edit_row = template_arguments[<span class=\"hljs-number\">0</span>];\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>._properties._edit_record == <span class=\"hljs-literal\">null</span>) {\n\n      <span class=\"hljs-keyword\">if</span> (Lava.schema.DEBUG &amp;&amp; <span class=\"hljs-keyword\">this</span>._click_stack_changed_listener) Lava.t();\n      <span class=\"hljs-keyword\">this</span>._click_stack_changed_listener = Lava.view_manager.on(\n        <span class=\"hljs-string\">'click_stack_changed'</span>,\n        <span class=\"hljs-keyword\">this</span>._onClickStackChanged,\n        <span class=\"hljs-keyword\">this</span>\n      );\n\n    }\n\n    <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'_edit_record'</span>, edit_row);\n\n  },\n\n  _onClickStackChanged: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(view_manager, stack)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> tbody_element = <span class=\"hljs-keyword\">this</span>._tbody_container.getDOMElement();\n\n    <span class=\"hljs-keyword\">if</span> (stack.indexOf(tbody_element) == -<span class=\"hljs-number\">1</span>) { <span class=\"hljs-comment\">// click outside of tbody element</span>\n      Lava.view_manager.removeListener(<span class=\"hljs-keyword\">this</span>._click_stack_changed_listener);\n      <span class=\"hljs-keyword\">this</span>._click_stack_changed_listener = <span class=\"hljs-literal\">null</span>;\n      <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'_edit_record'</span>, <span class=\"hljs-literal\">null</span>);\n    }\n\n  },\n\n  getInclude: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(name, template_arguments)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> result = <span class=\"hljs-literal\">null</span>,\n      column;\n\n    <span class=\"hljs-keyword\">if</span> (name == <span class=\"hljs-string\">'edit_cell'</span>) {\n\n      column = template_arguments[<span class=\"hljs-number\">0</span>];\n      result = column.is_editable\n        ? <span class=\"hljs-keyword\">this</span>._config.storage.edit_cells[column.type]\n        : <span class=\"hljs-keyword\">this</span>._config.storage.cells[column.type];\n\n    } <span class=\"hljs-keyword\">else</span> {\n\n      result = <span class=\"hljs-keyword\">this</span>.Table$getInclude(name, template_arguments);\n\n    }\n\n    <span class=\"hljs-keyword\">return</span> result;\n\n  },\n\n  _handleTBodyRole: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(view)</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>._tbody_container = view.getContainer();\n\n  }\n\n});</pre></div></div></div>"
		}
	],
	template: [
		"<p>Very basic sortable and editable table. Changes are saved to records immediately (as you type).\r\n\tTree was added to demonstrate synchronization of changes.</p>\r\n<p>Keep in mind: example data is global for all widgets, so you can see your changes in other examples.</p>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "Example",
			includes: {
				content: [
					"\r\n\t<div class=\"col-md-6\" style=\"padding: 1em\">\r\n\t\t",
					{
						"extends": "EditableTable",
						options: {
							columns: [
								{
									name: "title",
									title: "Title",
									type: "String",
									is_editable: true
								},
								{
									name: "type",
									title: "Type",
									type: "String"
								},
								{
									name: "is_expanded",
									title: "Expanded?",
									type: "Boolean",
									is_editable: true
								}
							]
						},
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Id",
									locator: "ExamplesApp",
									tail: ["all_tree_records"]
								}]
							}
						},
						id: "main_page_table",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t</div>\r\n\t<div class=\"col-md-6\" style=\"padding: 1em;overflow: auto;height: 370px;position: relative;\">\r\n\t\t",
					{
						"extends": "FolderTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Id",
									locator: "ExamplesApp",
									tail: ["tree_records"]
								}]
							}
						},
						options: {
							refresher: {type: "Collapse"}
						},
						id: "main_page_tree",
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t</div>\r\n\t<div class=\"clearfix\"></div>\r\n"
				]
			}
		}
	]
})