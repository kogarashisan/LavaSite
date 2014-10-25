{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"widget-storage\">Widget storage</h1>\n<p><a href=\"/www/doc.html#object=Support;member=_cWidget.storage\">_cWidget#storage</a> allows you to define a hash of items with flexible structure. \nIt may be arrays and objects with templates and Lava types in them.</p>\n<p>You may define storage in x:define and x:widget tags, and also via <a href=\"/www/doc.html#reference=Sugar\">sugar</a>.\nThere are two tags which describe it: </p>\n<ul>\n<li>&lt;storage_schema&gt; - describes format of items inside storage</li>\n<li>and &lt;storage&gt; - actual storage data\nIn widget definition &lt;storage_schema&gt; must always precede &lt;storage&gt;.</li>\n</ul>\n<p>Tip: storage is parsed in {@Link Lava.parsers.Storage}.</p>\n<h2 id=\"storage-item-types\">Storage item types</h2>\n<p>Schema represents an object with it&#39;s keys being item names in storage. \nValues describe format of the storage object, see <a href=\"/www/doc.html#object=Support;member=_cStorageItemSchema\">_cStorageItemSchema</a>.</p>\n<p>Storage can contain the following kinds of items:</p>\n<h3 id=\"template_collection\">template_collection</h3>\n<p>Define an item in storage, that represents an array of templates.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n    {\n      this_is_template_collection: {\n        type: 'template_collection',\n        tag_name: 'one_template'\n      }\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template_collection</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span>&gt;</span>\n        This is first template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span>&gt;</span>\n        This is second template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span>&gt;</span>\n        This is third template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template_collection</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    storage_schema: {\n        this_is_template_collection: {\n            type: <span class=\"hljs-string\">\"template_collection\"</span>,\n            tag_name: <span class=\"hljs-string\">\"one_template\"</span>\n        }\n    },\n    storage: {\n        this_is_template_collection: [\n            [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is first template\\r\\n\\t\\t\\t\"</span>],\n            [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is second template\\r\\n\\t\\t\\t\"</span>],\n            [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is third template\\r\\n\\t\\t\\t\"</span>]\n        ]\n    },\n    real_class: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><h3 id=\"template_hash\">template_hash</h3>\n<p>Define an item that represents a hash of templates.\nSyntax is the same as for array, but <code>name</code> attribute is added to templates.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n    {\n      this_is_template_hash: {\n        type: 'template_hash',\n        tag_name: 'one_template'\n      }\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template_hash</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"one\"</span>&gt;</span>\n        This is first template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"two\"</span>&gt;</span>\n        This is second template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">one_template</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"three\"</span>&gt;</span>\n        This is third template\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">one_template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template_hash</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    storage_schema: {\n        this_is_template_hash: {\n            type: <span class=\"hljs-string\">\"template_hash\"</span>,\n            tag_name: <span class=\"hljs-string\">\"one_template\"</span>\n        }\n    },\n    storage: {\n        this_is_template_hash: {\n            one: [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is first template\\r\\n\\t\\t\\t\"</span>],\n            two: [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is second template\\r\\n\\t\\t\\t\"</span>],\n            three: [<span class=\"hljs-string\">\"\\r\\n\\t\\t\\t\\tThis is third template\\r\\n\\t\\t\\t\"</span>]\n        }\n    },\n    real_class: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><p>Example usage for template hashes: define cell templates for different types of table columns. \nSee Table widget template for an example.</p>\n<h3 id=\"object\">object</h3>\n<p>Define an object with arbitrary structure. Type of each property is described in <code>properties</code> config member.</p>\n<p>Currently. there are two kinds of properties:</p>\n<ul>\n<li><span class=\"api-string\">&quot;template&quot;</span> - self-explanatory</li>\n<li><span class=\"api-string\">&quot;lava_type&quot;</span> - a type from <a href=\"/www/doc.html#object=Lava.types\">Lava.types</a>. You must also provide it&#39;s <code>type_name</code>.</li>\n</ul>\n<p>You can allow a property to be defined as object&#39;s attribute, by setting <code>is_attribute</code> config switch.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n    {\n      this_is_object: {\n        type: 'object',\n        properties: {\n          this_is_template: {type: 'template'},\n          is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},\n          this_is_number: {type: 'lava_type', type_name: 'Number'}\n        }\n      }\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>123.45<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    storage_schema: {\n        this_is_object: {\n            type: <span class=\"hljs-string\">\"object\"</span>,\n            properties: {\n                this_is_template: {type: <span class=\"hljs-string\">\"template\"</span>},\n                is_active: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Boolean\"</span>,\n                    is_attribute: <span class=\"hljs-literal\">true</span>\n                },\n                this_is_number: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Number\"</span>\n                }\n            }\n        }\n    },\n    storage: {\n        this_is_object: {\n            this_is_template: [<span class=\"hljs-string\">\"Hello world!\"</span>],\n            this_is_number: <span class=\"hljs-number\">123.45</span>,\n            is_active: <span class=\"hljs-literal\">true</span>\n        }\n    },\n    real_class: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><h3 id=\"object_collection\">object_collection</h3>\n<p>Here applies the same logic as in <span class=\"api-string\">&quot;object&quot;</span> and <span class=\"api-string\">&quot;template_collection&quot;</span> types.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n    {\n      this_is_object_collection: {\n        type: 'object_collection',\n        tag_name: 'this_is_object',\n        properties: {\n          this_is_template: {type: 'template'},\n          is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},\n          this_is_number: {type: 'lava_type', type_name: 'Number'}\n        }\n      }\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object_collection</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (1)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (2)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (3)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object_collection</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    storage_schema: {\n        this_is_object_collection: {\n            type: <span class=\"hljs-string\">\"object_collection\"</span>,\n            tag_name: <span class=\"hljs-string\">\"this_is_object\"</span>,\n            properties: {\n                this_is_template: {type: <span class=\"hljs-string\">\"template\"</span>},\n                is_active: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Boolean\"</span>,\n                    is_attribute: <span class=\"hljs-literal\">true</span>\n                },\n                this_is_number: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Number\"</span>\n                }\n            }\n        }\n    },\n    storage: {\n        this_is_object_collection: [\n            {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (1)\"</span>],\n                this_is_number: <span class=\"hljs-number\">1</span>,\n                is_active: <span class=\"hljs-literal\">true</span>\n            },\n            {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (2)\"</span>],\n                this_is_number: <span class=\"hljs-number\">2</span>,\n                is_active: <span class=\"hljs-literal\">false</span>\n            },\n            {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (3)\"</span>],\n                this_is_number: <span class=\"hljs-number\">3</span>,\n                is_active: <span class=\"hljs-literal\">true</span>\n            }\n        ]\n    },\n    real_class: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><h3 id=\"object_hash\">object_hash</h3>\n<p>Here applies the same logic as in <span class=\"api-string\">&quot;object&quot;</span> and <span class=\"api-string\">&quot;template_hash&quot;</span> types.\nNote, that <code>name</code> attribute defines object&#39;s key in the hash, but you can also create the same property in hash objects\nand set it via &lt;name&gt; tag.</p>\n<div class=\"lava-code-container lava-code-container-plain\"><div class=\"api-code-header api-code-header-blue\">Template source</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">controller</span>=<span class=\"hljs-value\">\"Standard\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n    {\n      this_is_object_hash: {\n        type: 'object_hash',\n        tag_name: 'this_is_object',\n        properties: {\n          this_is_template: {type: 'template'},\n          is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},\n          this_is_number: {type: 'lava_type', type_name: 'Number'}\n        }\n      }\n    }\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage_schema</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">storage</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object_hash</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"one\"</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (1)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"two\"</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (2)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_object</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"three\"</span> <span class=\"hljs-attribute\">is_active</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_template</span>&gt;</span>Hello world! (3)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_template</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">this_is_number</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_number</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">this_is_object_hash</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">storage</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div><div class=\"api-code-header api-code-header-blue\">Parse result</div>\n<div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n</pre><pre class=\"lava-code-content hljs javascript\">[{\n    storage_schema: {\n        this_is_object_hash: {\n            type: <span class=\"hljs-string\">\"object_hash\"</span>,\n            tag_name: <span class=\"hljs-string\">\"this_is_object\"</span>,\n            properties: {\n                this_is_template: {type: <span class=\"hljs-string\">\"template\"</span>},\n                is_active: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Boolean\"</span>,\n                    is_attribute: <span class=\"hljs-literal\">true</span>\n                },\n                this_is_number: {\n                    type: <span class=\"hljs-string\">\"lava_type\"</span>,\n                    type_name: <span class=\"hljs-string\">\"Number\"</span>\n                }\n            }\n        }\n    },\n    storage: {\n        this_is_object_hash: {\n            one: {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (1)\"</span>],\n                this_is_number: <span class=\"hljs-number\">1</span>,\n                is_active: <span class=\"hljs-literal\">true</span>\n            },\n            two: {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (2)\"</span>],\n                this_is_number: <span class=\"hljs-number\">2</span>,\n                is_active: <span class=\"hljs-literal\">false</span>\n            },\n            three: {\n                this_is_template: [<span class=\"hljs-string\">\"Hello world! (3)\"</span>],\n                this_is_number: <span class=\"hljs-number\">3</span>,\n                is_active: <span class=\"hljs-literal\">true</span>\n            }\n        }\n    },\n    real_class: <span class=\"hljs-string\">\"Standard\"</span>,\n    <span class=\"hljs-string\">\"class\"</span>: <span class=\"hljs-string\">\"Lava.WidgetConfigExtensionGateway\"</span>,\n    extender_type: <span class=\"hljs-string\">\"Standard\"</span>,\n    type: <span class=\"hljs-string\">\"widget\"</span>\n}]</pre></div></div><h2 id=\"storage-inheritance\">Storage inheritance</h2>\n<p>In case of config inheritance, <code>storage</code> and <code>storage_schema</code> have their own ruler for merging. See <a href=\"/www/doc.html#reference=ConfigExtension\">Widget config extension</a>.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}