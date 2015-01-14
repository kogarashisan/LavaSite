({
	tabs: [
		{
			title: "Classes",
			content: "<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n43\r\n44\r\n45\r\n46\r\n47\r\n48\r\n49\r\n50\r\n51\r\n52\r\n53\r\n54\r\n55\r\n56\r\n57\r\n58\r\n59\r\n60\r\n61\r\n62\r\n63\r\n64\r\n65\r\n66\r\n67\r\n68\r\n69\r\n70\r\n71\r\n72\r\n73\r\n74\r\n75\r\n76\r\n77\r\n78\r\n79\r\n80\r\n81\r\n82\r\n83\r\n84\r\n85\r\n86\r\n87\r\n88\r\n89\r\n90\r\n91\r\n92\r\n93\r\n94\r\n95\r\n96\r\n97\r\n98\r\n99\r\n100\r\n101\r\n102\r\n103\r\n104\r\n105\r\n106\r\n107\r\n108\r\n109\r\n110\r\n111\r\n112\r\n113\r\n114\r\n115\r\n116\r\n117\r\n118\r\n119\r\n120\r\n121\r\n122\r\n123\r\n124\r\n125\r\n126\r\n127\r\n128\r\n129\r\n130\r\n131\r\n132\r\n133\r\n134\r\n135\r\n136\r\n137\r\n138\r\n139\r\n140\r\n141\r\n142\r\n143\r\n144\r\n145\r\n146\r\n147\r\n148\r\n149\r\n150\r\n151\r\n152\r\n153\r\n154\r\n155\r\n156\r\n157\r\n158\r\n159\r\n160\r\n161\r\n162\r\n163\r\n164\r\n165\r\n166\r\n167\r\n168\r\n169\r\n170\r\n171\r\n172\r\n173\r\n174\r\n175\r\n176\r\n177\r\n178\r\n179\r\n180\r\n181\r\n182\r\n183\r\n184\r\n185\r\n186\r\n187\r\n188\r\n189\r\n190\r\n191\r\n192\r\n193\r\n194\r\n195\r\n196\r\n197\r\n198\r\n199\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(\r\n<span class=\"hljs-string\">'Lava.widget.FilteredTreeExample'</span>,\r\n{\r\n\tExtends: <span class=\"hljs-string\">'Lava.widget.Tree'</span>,\r\n\r\n\t_meta_storage_config: {\r\n\t\tfields: {\r\n\t\t\tis_expanded: {type: <span class=\"hljs-string\">'Boolean'</span>},\r\n\t\t\tis_expandable: {type: <span class=\"hljs-string\">'Boolean'</span>},\r\n\t\t\tis_visible: {type:<span class=\"hljs-string\">'Boolean'</span>},\r\n\t\t\tlower_case_title: {type: <span class=\"hljs-string\">'Basic'</span>, <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-string\">''</span>},\r\n\t\t\tformatted_title: {type: <span class=\"hljs-string\">'Basic'</span>, <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-string\">''</span>}\r\n\t\t}\r\n\t},\r\n\r\n\t_property_descriptors: {\r\n\t\tfilter_text: {setter: <span class=\"hljs-string\">'_setFilterText'</span>}\r\n\t},\r\n\r\n\t_properties: {\r\n\t\tfilter_text: <span class=\"hljs-string\">''</span>\r\n\t},\r\n\r\n\t_lowercase_filter_text: <span class=\"hljs-string\">''</span>,\r\n\t_filter_reg_exp: <span class=\"hljs-literal\">null</span>,\r\n\r\n\tCREATE_META_STORAGE: <span class=\"hljs-literal\">true</span>,\r\n\r\n\t_meta_storage_columns: {\r\n\t\tis_expandable: <span class=\"hljs-literal\">true</span>\r\n\t},\r\n\r\n\tinit: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(config, widget, parent_view, template, properties)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>._properties.records = <span class=\"hljs-keyword\">this</span>._prepareTree(api_tree_source);\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>.Tree$init(config, widget, parent_view, template, properties);\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>._filterTree(<span class=\"hljs-keyword\">this</span>._properties.records);\r\n\r\n\t},\r\n\r\n\t_prepareTree: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(records)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>,\r\n\t\t\tcount = records.length,\r\n\t\t\titem,\r\n\t\t\tresult = <span class=\"hljs-keyword\">new</span> Lava.system.Enumerable();\r\n\r\n\t\t<span class=\"hljs-keyword\">for</span> (;i &lt; count; i++) {\r\n\r\n\t\t\titem = <span class=\"hljs-keyword\">new</span> Lava.mixin.Properties(records[i]);\r\n\t\t\titem.set(<span class=\"hljs-string\">'guid'</span>, Lava.guid++);\r\n\r\n\t\t\t<span class=\"hljs-keyword\">if</span> (records[i].children) {\r\n\r\n\t\t\t\titem.set(<span class=\"hljs-string\">'children'</span>, <span class=\"hljs-keyword\">this</span>._prepareTree(records[i].children));\r\n\r\n\t\t\t}\r\n\r\n\t\t\tresult.push(item);\r\n\r\n\t\t}\r\n\r\n\t\t<span class=\"hljs-keyword\">return</span> result;\r\n\r\n\t},\r\n\r\n\t_setRecords: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(value, name)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>.Tree$_setRecords(value, name);\r\n\t\tvalue &amp;&amp; <span class=\"hljs-keyword\">this</span>._filterTree(value);\r\n\r\n\t},\r\n\r\n\t_handleRootNodesForeach: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_view)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>.Tree$_handleRootNodesForeach(foreach_view);\r\n\t\t<span class=\"hljs-keyword\">this</span>._handleScope(foreach_view);\r\n\r\n\t},\r\n\r\n\t_handleNodesForeach: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_view)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>.Tree$_handleNodesForeach(foreach_view);\r\n\t\t<span class=\"hljs-keyword\">this</span>._handleScope(foreach_view);\r\n\r\n\t},\r\n\r\n\t_handleScope: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_view)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">var</span> scope_foreach = foreach_view.getScope();\r\n\t\tscope_foreach.on(<span class=\"hljs-string\">'after_refresh'</span>, <span class=\"hljs-keyword\">this</span>._onAfterForeachScopeRefreshed, <span class=\"hljs-keyword\">this</span>);\r\n\t\t<span class=\"hljs-keyword\">this</span>._onAfterForeachScopeRefreshed(scope_foreach);\r\n\r\n\t},\r\n\r\n\t_onAfterForeachScopeRefreshed: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(foreach_scope)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">var</span> self = <span class=\"hljs-keyword\">this</span>;\r\n\r\n\t\tforeach_scope.getValue().filter(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(record)</span> {</span>\r\n\r\n\t\t\t<span class=\"hljs-keyword\">var</span> meta_record = self._getMetaRecord(record);\r\n\t\t\t<span class=\"hljs-keyword\">return</span> meta_record &amp;&amp; meta_record.get(<span class=\"hljs-string\">'is_visible'</span>);\r\n\r\n\t\t});\r\n\r\n\t},\r\n\r\n\t_setFilterText: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(value, name)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>._lowercase_filter_text = value.toLowerCase();\r\n\t\t<span class=\"hljs-keyword\">this</span>._filter_reg_exp = <span class=\"hljs-keyword\">this</span>._lowercase_filter_text\r\n\t\t\t? <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">RegExp</span>(Firestorm.String.escapeStringForRegExp(<span class=\"hljs-keyword\">this</span>._lowercase_filter_text), <span class=\"hljs-string\">'gi'</span>)\r\n\t\t\t: <span class=\"hljs-literal\">null</span>;\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>._filterTree(<span class=\"hljs-keyword\">this</span>._properties.records);\r\n\r\n\t\t<span class=\"hljs-keyword\">this</span>._set(name, value);\r\n\r\n\t},\r\n\r\n\t_getMetaRecord: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(record)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">var</span> meta_record = <span class=\"hljs-keyword\">this</span>._meta_storage.get(record.get(<span class=\"hljs-string\">'guid'</span>));\r\n\r\n\t\t<span class=\"hljs-keyword\">if</span> (!meta_record) {\r\n\t\t\tmeta_record = <span class=\"hljs-keyword\">this</span>._meta_storage.createMetaRecord(record.get(<span class=\"hljs-string\">'guid'</span>), {\r\n\t\t\t\tlower_case_title: record.get(<span class=\"hljs-string\">'title'</span>).toLowerCase()\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\t<span class=\"hljs-keyword\">return</span> meta_record;\r\n\r\n\t},\r\n\r\n\t_filterTree: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(records)</span> {</span>\r\n\r\n\t\t<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>,\r\n\t\t\tcount,\r\n\t\t\tmeta_record,\r\n\t\t\trecord,\r\n\t\t\tpasses,\r\n\t\t\tchildren,\r\n\t\t\thas_visible_children,\r\n\t\t\thas_visible_records = <span class=\"hljs-literal\">false</span>;\r\n\r\n\t\trecords = records.getValues();\r\n\r\n\t\t<span class=\"hljs-keyword\">for</span> (count = records.length; i &lt; count; i++) {\r\n\r\n\t\t\trecord = records[i];\r\n\t\t\tmeta_record = <span class=\"hljs-keyword\">this</span>._getMetaRecord(record);\r\n\r\n\t\t\t<span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>._filter_reg_exp) {\r\n\r\n\t\t\t\t<span class=\"hljs-comment\">// this check is faster then RegExp</span>\r\n\t\t\t\tpasses = meta_record.get(<span class=\"hljs-string\">'lower_case_title'</span>).indexOf(<span class=\"hljs-keyword\">this</span>._lowercase_filter_text) != -<span class=\"hljs-number\">1</span>;\r\n\t\t\t\t<span class=\"hljs-keyword\">if</span> (passes) {\r\n\r\n\t\t\t\t\tmeta_record.set(\r\n\t\t\t\t\t\t<span class=\"hljs-string\">'formatted_title'</span>,\r\n\t\t\t\t\t\trecord.get(<span class=\"hljs-string\">'title'</span>).replace(<span class=\"hljs-keyword\">this</span>._filter_reg_exp, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(value)</span>{</span>\r\n\t\t\t\t\t\t\t<span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"&lt;span style='background: #ffff00'&gt;\"</span> + value + <span class=\"hljs-string\">\"&lt;/span&gt;\"</span>;\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t);\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t} <span class=\"hljs-keyword\">else</span> {\r\n\r\n\t\t\t\tpasses = <span class=\"hljs-literal\">true</span>;\r\n\t\t\t\tmeta_record.set(<span class=\"hljs-string\">'formatted_title'</span>, record.get(<span class=\"hljs-string\">'title'</span>));\r\n\r\n\t\t\t}\r\n\r\n\t\t\thas_visible_children = <span class=\"hljs-literal\">false</span>;\r\n\t\t\tchildren = record.get(<span class=\"hljs-string\">'children'</span>);\r\n\t\t\t<span class=\"hljs-keyword\">if</span> (children &amp;&amp; children.getCount()) {\r\n\t\t\t\thas_visible_children = <span class=\"hljs-keyword\">this</span>._filterTree(children);\r\n\t\t\t\t<span class=\"hljs-keyword\">if</span> (!passes &amp;&amp; has_visible_children) {\r\n\t\t\t\t\tpasses = <span class=\"hljs-literal\">true</span>;\r\n\t\t\t\t\tmeta_record.set(<span class=\"hljs-string\">'formatted_title'</span>, record.get(<span class=\"hljs-string\">'title'</span>));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tmeta_record.set(<span class=\"hljs-string\">'is_expandable'</span>, has_visible_children);\r\n\t\t\tmeta_record.set(<span class=\"hljs-string\">'is_visible'</span>, passes);\r\n\r\n\t\t\thas_visible_records = has_visible_records || passes;\r\n\r\n\t\t}\r\n\r\n\t\t<span class=\"hljs-keyword\">return</span> has_visible_records;\r\n\r\n\t}\r\n\r\n});</pre></div></div>"
		},
		{
			title: "Template",
			content: "<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n30\r\n31\r\n32\r\n33\r\n34\r\n35\r\n36\r\n37\r\n38\r\n39\r\n40\r\n41\r\n42\r\n43\r\n44\r\n45\r\n46\r\n47\r\n48\r\n49\r\n50\r\n51\r\n52\r\n53\r\n54\r\n55\r\n56\r\n57\r\n58\r\n59\r\n60\r\n61\r\n62\r\n63\r\n64\r\n65\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">example</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"FolderTree\"</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"FilteredTreeExample\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">text_input</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>$tree.filter_text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:bind</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">text_input</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:resource_id</span>=<span class=\"hljs-value\">\"$tree.MAIN_TREE_CONTAINER\"</span>&gt;</span>\r\n        {#foreach($tree.records)\r\n          as=node\r\n          own_enumerable_mode=DataView\r\n          depends=\"$tree.filter_text\"}\r\n          {*<span class=\"hljs-comment\">&lt;!--role handler creates refresher--&gt;</span>*}\r\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$tree.root_nodes_foreach<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\r\n          {&gt;$tree.node}\r\n        {/foreach}\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">options</span>&gt;</span>\r\n      {\r\n        meta_storage_columns: [\"is_expanded\"],\r\n        refresher: {type: 'Collapse'}\r\n      }\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">options</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">include</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"node_children\"</span>&gt;</span>\r\n      {$if(node.children.length &amp;&amp; $tree{is_expanded})}\r\n        {*<span class=\"hljs-comment\">&lt;!--role handler creates refresher--&gt;</span>*}\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$tree.node_children_view<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:container_config</span>&gt;</span>\r\n          {\r\n            type: \"Emulated\",\r\n            options: {\r\n              prepender: 'AfterPrevious'\r\n            }\r\n          }\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:container_config</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"pad\"</span>&gt;</span>\r\n          {literal:}\r\n            (foreach_index == count - 1)\r\n              ? pad + '<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-pad\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>'\r\n              : pad + '<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-pad-line\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>'\r\n          {:literal}\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"level\"</span>&gt;</span>@parent-&gt;level + 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:assign</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-container\"</span>&gt;</span>\r\n          {#foreach(node.children)\r\n            as=node\r\n            own_enumerable_mode=DataView\r\n            depends=\"$tree.filter_text\"}\r\n            {*<span class=\"hljs-comment\">&lt;!--role handler creates refresher--&gt;</span>*}\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$tree.nodes_foreach<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\r\n            {&gt;$tree.node}\r\n          {/foreach}\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n      {/if}\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">include</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">include</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"node_title\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lava-tree-title\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"container\"</span>\r\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:classes</span>=<span class=\"hljs-value\">\"node.children.length ? 'lava-tree-title-expandable' : ''\"</span>\r\n          <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"$tree.node_click(node)\"</span>&gt;</span>\r\n        {#expression($tree.meta_storage[node.guid].formatted_title) escape_off}{/expression}\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">include</span>&gt;</span>\r\n    {*<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">assign</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"records\"</span>&gt;</span>#ExamplesApp.tree_records<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">assign</span>&gt;</span>*}\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">example</span>&gt;</span></pre></div></div>"
		}
	],
	classes: "\r\nLava.define(\r\n'Lava.widget.FilteredTreeExample',\r\n{\r\n\tExtends: 'Lava.widget.Tree',\r\n\r\n\t_meta_storage_config: {\r\n\t\tfields: {\r\n\t\t\tis_expanded: {type: 'Boolean'},\r\n\t\t\tis_expandable: {type: 'Boolean'},\r\n\t\t\tis_visible: {type:'Boolean'},\r\n\t\t\tlower_case_title: {type: 'Basic', \"default\": ''},\r\n\t\t\tformatted_title: {type: 'Basic', \"default\": ''}\r\n\t\t}\r\n\t},\r\n\r\n\t_property_descriptors: {\r\n\t\tfilter_text: {setter: '_setFilterText'}\r\n\t},\r\n\r\n\t_properties: {\r\n\t\tfilter_text: ''\r\n\t},\r\n\r\n\t_lowercase_filter_text: '',\r\n\t_filter_reg_exp: null,\r\n\r\n\tCREATE_META_STORAGE: true,\r\n\r\n\t_meta_storage_columns: {\r\n\t\tis_expandable: true\r\n\t},\r\n\r\n\tinit: function(config, widget, parent_view, template, properties) {\r\n\r\n\t\tthis._properties.records = this._prepareTree(api_tree_source);\r\n\r\n\t\tthis.Tree$init(config, widget, parent_view, template, properties);\r\n\r\n\t\tthis._filterTree(this._properties.records);\r\n\r\n\t},\r\n\r\n\t_prepareTree: function(records) {\r\n\r\n\t\tvar i = 0,\r\n\t\t\tcount = records.length,\r\n\t\t\titem,\r\n\t\t\tresult = new Lava.system.Enumerable();\r\n\r\n\t\tfor (;i < count; i++) {\r\n\r\n\t\t\titem = new Lava.mixin.Properties(records[i]);\r\n\t\t\titem.set('guid', Lava.guid++);\r\n\r\n\t\t\tif (records[i].children) {\r\n\r\n\t\t\t\titem.set('children', this._prepareTree(records[i].children));\r\n\r\n\t\t\t}\r\n\r\n\t\t\tresult.push(item);\r\n\r\n\t\t}\r\n\r\n\t\treturn result;\r\n\r\n\t},\r\n\r\n\t_setRecords: function(value, name) {\r\n\r\n\t\tthis.Tree$_setRecords(value, name);\r\n\t\tvalue && this._filterTree(value);\r\n\r\n\t},\r\n\r\n\t_handleRootNodesForeach: function(foreach_view) {\r\n\r\n\t\tthis.Tree$_handleRootNodesForeach(foreach_view);\r\n\t\tthis._handleScope(foreach_view);\r\n\r\n\t},\r\n\r\n\t_handleNodesForeach: function(foreach_view) {\r\n\r\n\t\tthis.Tree$_handleNodesForeach(foreach_view);\r\n\t\tthis._handleScope(foreach_view);\r\n\r\n\t},\r\n\r\n\t_handleScope: function(foreach_view) {\r\n\r\n\t\tvar scope_foreach = foreach_view.getScope();\r\n\t\tscope_foreach.on('after_refresh', this._onAfterForeachScopeRefreshed, this);\r\n\t\tthis._onAfterForeachScopeRefreshed(scope_foreach);\r\n\r\n\t},\r\n\r\n\t_onAfterForeachScopeRefreshed: function(foreach_scope) {\r\n\r\n\t\tvar self = this;\r\n\r\n\t\tforeach_scope.getValue().filter(function(record) {\r\n\r\n\t\t\tvar meta_record = self._getMetaRecord(record);\r\n\t\t\treturn meta_record && meta_record.get('is_visible');\r\n\r\n\t\t});\r\n\r\n\t},\r\n\r\n\t_setFilterText: function(value, name) {\r\n\r\n\t\tthis._lowercase_filter_text = value.toLowerCase();\r\n\t\tthis._filter_reg_exp = this._lowercase_filter_text\r\n\t\t\t? new RegExp(Firestorm.String.escapeStringForRegExp(this._lowercase_filter_text), 'gi')\r\n\t\t\t: null;\r\n\r\n\t\tthis._filterTree(this._properties.records);\r\n\r\n\t\tthis._set(name, value);\r\n\r\n\t},\r\n\r\n\t_getMetaRecord: function(record) {\r\n\r\n\t\tvar meta_record = this._meta_storage.get(record.get('guid'));\r\n\r\n\t\tif (!meta_record) {\r\n\t\t\tmeta_record = this._meta_storage.createMetaRecord(record.get('guid'), {\r\n\t\t\t\tlower_case_title: record.get('title').toLowerCase()\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\treturn meta_record;\r\n\r\n\t},\r\n\r\n\t_filterTree: function(records) {\r\n\r\n\t\tvar i = 0,\r\n\t\t\tcount,\r\n\t\t\tmeta_record,\r\n\t\t\trecord,\r\n\t\t\tpasses,\r\n\t\t\tchildren,\r\n\t\t\thas_visible_children,\r\n\t\t\thas_visible_records = false;\r\n\r\n\t\trecords = records.getValues();\r\n\r\n\t\tfor (count = records.length; i < count; i++) {\r\n\r\n\t\t\trecord = records[i];\r\n\t\t\tmeta_record = this._getMetaRecord(record);\r\n\r\n\t\t\tif (this._filter_reg_exp) {\r\n\r\n\t\t\t\t// this check is faster then RegExp\r\n\t\t\t\tpasses = meta_record.get('lower_case_title').indexOf(this._lowercase_filter_text) != -1;\r\n\t\t\t\tif (passes) {\r\n\r\n\t\t\t\t\tmeta_record.set(\r\n\t\t\t\t\t\t'formatted_title',\r\n\t\t\t\t\t\trecord.get('title').replace(this._filter_reg_exp, function(value){\r\n\t\t\t\t\t\t\treturn \"<span style='background: #ffff00'>\" + value + \"</span>\";\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t);\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t} else {\r\n\r\n\t\t\t\tpasses = true;\r\n\t\t\t\tmeta_record.set('formatted_title', record.get('title'));\r\n\r\n\t\t\t}\r\n\r\n\t\t\thas_visible_children = false;\r\n\t\t\tchildren = record.get('children');\r\n\t\t\tif (children && children.getCount()) {\r\n\t\t\t\thas_visible_children = this._filterTree(children);\r\n\t\t\t\tif (!passes && has_visible_children) {\r\n\t\t\t\t\tpasses = true;\r\n\t\t\t\t\tmeta_record.set('formatted_title', record.get('title'));\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tmeta_record.set('is_expandable', has_visible_children);\r\n\t\t\tmeta_record.set('is_visible', passes);\r\n\r\n\t\t\thas_visible_records = has_visible_records || passes;\r\n\r\n\t\t}\r\n\r\n\t\treturn has_visible_records;\r\n\r\n\t}\r\n\r\n});",
	template: [
		"<p>This example demonstrates view-layer filtering: tree nodes are inserted and removed separately from each other.</p>\r\n\r\n<p>This example expects the tree to be static, and will not properly detect added or removed records\r\n\tunless you change the filter text. It also does not track record title changes.</p>\r\n\r\n<p>If you want to overcome these limitations, then you could:</p>\r\n<ul>\r\n\t<li>Create a \"refresh\" button</li>\r\n\t<li>Or use more complicated algorithms</li>\r\n</ul>\r\n\r\n<p>Better algorithm would use a Module data source with listeners on \"title\" and \"parent\" fields.</p>\r\n\r\n<p>Note: this example removes nodes from DOM, but the same visual result could be achieved by hiding\r\n\tthem with display:none.</p>\r\n",
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
								type: "widget",
								"class": "Lava.WidgetConfigExtensionGateway",
								extender_type: "Standard",
								"extends": "TextInput",
								bindings: {
									value: {
										property_name: "value",
										path_config: {
											locator_type: "Name",
											locator: "tree",
											tail: ["filter_text"]
										}
									}
								}
							},
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
										locator: "tree",
										tail: ["records"]
									}]
								},
								as: "node",
								scope: {
									own_enumerable_mode: "DataView",
									depends: [{
										locator_type: "Name",
										locator: "tree",
										tail: ["filter_text"]
									}]
								},
								roles: [{
									locator_type: "Name",
									locator: "tree",
									name: "root_nodes_foreach"
								}],
								template: [
									"\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t",
									{
										locator_type: "Name",
										locator: "tree",
										name: "node",
										type: "include"
									},
									"\r\n\t\t\t\t"
								],
								container: {
									type: "Element",
									tag_name: "div",
									resource_id: {
										locator_type: "Name",
										locator: "tree",
										name: "MAIN_TREE_CONTAINER"
									}
								}
							},
							"\r\n\t\t"
						],
						"extends": "FolderTree",
						options: {
							meta_storage_columns: ["is_expanded"],
							refresher: {type: "Collapse"}
						},
						includes: {
							node_children: [
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
												locator_type: "Name",
												locator: "tree",
												isDynamic: true,
												property_name: "is_expanded"
											}
										]
									},
									container: {
										type: "Emulated",
										options: {prepender: "AfterPrevious"}
									},
									roles: [{
										locator_type: "Name",
										locator: "tree",
										name: "node_children_view"
									}],
									assigns: {
										pad: {
											evaluator: function() {
return ((this._binds[0].getValue() == this._binds[1].getValue() - 1) ? this._binds[2].getValue() + '<div class="lava-tree-pad"></div>' : this._binds[3].getValue() + '<div class="lava-tree-pad-line"></div>');
},
											binds: [
												{property_name: "foreach_index"},
												{property_name: "count"},
												{property_name: "pad"},
												{property_name: "pad"}
											]
										},
										level: {
											evaluator: function() {
return (this._binds[0].getValue() + 1);
},
											binds: [{
												locator_type: "Label",
												locator: "parent",
												property_name: "level"
											}]
										}
									},
									template: [
										"\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t",
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
											scope: {
												own_enumerable_mode: "DataView",
												depends: [{
													locator_type: "Name",
													locator: "tree",
													tail: ["filter_text"]
												}]
											},
											roles: [{
												locator_type: "Name",
												locator: "tree",
												name: "nodes_foreach"
											}],
											template: [
												"\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t",
												{
													locator_type: "Name",
													locator: "tree",
													name: "node",
													type: "include"
												},
												"\r\n\t\t\t\t\t"
											],
											container: {
												type: "Element",
												tag_name: "div",
												static_classes: ["lava-tree-container"]
											}
										},
										"\r\n\t\t\t"
									]
								},
								"\r\n\t\t"
							],
							node_title: [
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
											locator_type: "Name",
											locator: "tree",
											tail: [
												"meta_storage",
												{
													property_name: "node",
													tail: ["guid"]
												},
												"formatted_title"
											]
										}]
									},
									escape_off: true,
									template: [],
									container: {
										type: "Element",
										tag_name: "span",
										static_classes: ["lava-tree-title"],
										events: {
											click: [{
												locator_type: "Name",
												locator: "tree",
												name: "node_click",
												arguments: [{
													type: 2,
													data: {property_name: "node"}
												}]
											}]
										},
										class_bindings: {
											"0": {
												evaluator: function() {
return (this._binds[0].getValue() ? 'lava-tree-title-expandable' : '');
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
								"\r\n\t\t"
							]
						},
						real_class: "FilteredTreeExample",
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