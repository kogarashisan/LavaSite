var quick_start_schema ={
	codes: {
		blank: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n<span  data-group=\"scripts\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"scripts\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"style\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-doctype\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">html</span> <span class=\"hljs-attribute\">lang</span>=<span class=\"hljs-value\">\"en\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lava-framework.com/lib/lava-master-DEV.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">link</span> <span class=\"hljs-attribute\">rel</span>=<span class=\"hljs-value\">\"stylesheet\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"http://lava-framework.com/www/css/widgets.css\"</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">head</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">html</span>&gt;</span></pre></div></div></div>",
		bootstrapped: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n<span  data-group=\"widget_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"widget_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"widget_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n \n    <span  data-group=\"mootools_call\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">               </span>\n      <span  data-group=\"bootstrap_call\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                 </span>\n \n \n \n \n      <span  data-group=\"lava_app\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                   </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-doctype\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">html</span> <span class=\"hljs-attribute\">lang</span>=<span class=\"hljs-value\">\"en\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lava-framework.com/lib/lava-master-DEV.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">link</span> <span class=\"hljs-attribute\">rel</span>=<span class=\"hljs-value\">\"stylesheet\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"http://lava-framework.com/www/css/widgets.css\"</span> /&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"javascript\">\n    Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n      Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>\n    });\n\n    window.addEvent(<span class=\"hljs-string\">'load'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n      Lava.bootstrap();\n    });\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">head</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">html</span>&gt;</span></pre></div></div></div>",
		bootstrapped_with_property: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n \n \n \n<span  data-group=\"property_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"property_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"property_definition\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n \n \n \n \n \n \n \n \n \n            <span  data-group=\"expression_view\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">              </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-doctype\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">html</span> <span class=\"hljs-attribute\">lang</span>=<span class=\"hljs-value\">\"en\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lava-framework.com/lib/lava-master-DEV.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">link</span> <span class=\"hljs-attribute\">rel</span>=<span class=\"hljs-value\">\"stylesheet\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"http://lava-framework.com/www/css/widgets.css\"</span> /&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"javascript\">\n    Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n      Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n      _properties: {\n        your_name: <span class=\"hljs-string\">\"World\"</span>\n      }\n    });\n\n    window.addEvent(<span class=\"hljs-string\">'load'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n      Lava.bootstrap();\n    });\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">head</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>Hello {$&gt; your_name}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">html</span>&gt;</span></pre></div></div></div>",
		HelloApp: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n \n \n \n \n        <span  data-group=\"your_name_property\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">         </span>\n \n \n \n \n \n \n \n \n \n \n \n<span  data-group=\"text_input\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"bind_directive\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n<span  data-group=\"text_input\" class=\"lava-new-code-highlight-line lava-quick-start-highlight\">                                                                                                        </span>\n \n            <span  data-group=\"expression_view\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">              </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-doctype\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">html</span> <span class=\"hljs-attribute\">lang</span>=<span class=\"hljs-value\">\"en\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lava-framework.com/lib/lava-master-DEV.js\"</span>&gt;</span><span class=\"javascript\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">link</span> <span class=\"hljs-attribute\">rel</span>=<span class=\"hljs-value\">\"stylesheet\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"http://lava-framework.com/www/css/widgets.css\"</span> /&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"javascript\">\n    Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n      Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n      _properties: {\n        your_name: <span class=\"hljs-string\">\"World\"</span>\n      }\n    });\n\n    window.addEvent(<span class=\"hljs-string\">'load'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n      Lava.bootstrap();\n    });\n  </span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">head</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span>&gt;</span>Name:<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">text_input</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:bind</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>your_name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:bind</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">text_input</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>Hello {$&gt; your_name}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">html</span>&gt;</span></pre></div></div></div>",
		hello_with_complex_expression: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span>&gt;</span>{$&gt; 'Hello ' + ucFirst(your_name)}!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\n  Your name is {$&gt; your_name.length} characters long.\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n</pre></div></div></div>",
		if_and_foreach_views: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"javascript\">\n\n  Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n    _properties: {\n      your_name: <span class=\"hljs-string\">\"World\"</span>,\n      people: [\n        {title: <span class=\"hljs-string\">\"Mary\"</span>, birth_year: <span class=\"hljs-number\">1979</span>},\n        {title: <span class=\"hljs-string\">\"Jane\"</span>, birth_year: <span class=\"hljs-number\">1980</span>},\n        {title: <span class=\"hljs-string\">\"Mark\"</span>, birth_year: <span class=\"hljs-number\">1981</span>}\n      ]\n    }\n  });\n\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n\n  {$if(your_name.length <span class=\"hljs-tag\">&lt; <span class=\"hljs-attribute\">2</span>)}\n    <span class=\"hljs-attribute\">Your</span> <span class=\"hljs-attribute\">name</span> <span class=\"hljs-attribute\">is</span> <span class=\"hljs-attribute\">too</span> <span class=\"hljs-attribute\">short</span>\n  {<span class=\"hljs-attribute\">elseif</span>(<span class=\"hljs-attribute\">your_name.length</span> &gt;</span> 20)}\n    Your name is too long\n  {else}\n    Your name is {$&gt; your_name.length} characters long\n  {/if}\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n\n  {$foreach(people) as=person}\n    Hello {$&gt; person.title}!<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>/&gt;</span>\n  {/foreach}\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span>\n    </pre></div></div></div>",
		events_example: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n \n \n \n \n \n \n \n \n \n      <span  data-group=\"event_in_widget\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                              </span>\n \n \n \n \n      <span  data-group=\"set\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">        </span>                <span  data-group=\"property_access\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                            </span>\n \n \n \n \n \n \n \n                        <span  data-group=\"event_on_element\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                            </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"javascript\">\n\n  Lava.define(<span class=\"hljs-string\">'Lava.widget.HelloApp'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n    _properties: {\n      click_count: <span class=\"hljs-number\">0</span>\n    },\n\n    _event_handlers: {\n      button_click: <span class=\"hljs-string\">'_onButtonClick'</span>\n    },\n\n    _onButtonClick: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n\n      <span class=\"hljs-keyword\">this</span>.set(<span class=\"hljs-string\">'click_count'</span>, <span class=\"hljs-keyword\">this</span>._properties.click_count + <span class=\"hljs-number\">1</span>);\n\n    }\n  });\n\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"button_click\"</span>&gt;</span>\n    I was clicked {#&gt; click_count} times\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div></div>",
		button_with_bound_style: "<div class=\"lava-new-code-container\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-highlights\"> \n                                                     <span  data-group=\"style_binding\" class=\"lava-new-code-highlight-span lava-quick-start-highlight\">                                    </span></pre><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"HelloApp\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"button_click\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:style:padding</span>=<span class=\"hljs-value\">\"click_count + 'px'\"</span>&gt;</span>\n    I was clicked {#&gt; click_count} times\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div></div>"
	},
	steps: [
		{text: "\r\n\t\t\t<p>LiquidLava differs from anything you have known before.</p>\r\n\r\n\t\t\t<p>For example, templates here are parsed into configs for JavaScript classes<br/>\r\n\t\t\t(they are not compiled into functions, like in other frameworks).</p>\r\n\r\n\t\t\t<p>That's why syntax of Lava templates may seem a bit weird at first glance.<br/>\r\n\t\t\t\tIn fact it's actually simple and convenient<br/>\r\n\t\t\t\t- you just need to understand how everything works.</p>\r\n\r\n\t\t\t<p>Let's start with a completely blank page...</p>\r\n\t\t"},
		{
			code_name: "blank",
			active_highlights: ["scripts"],
			text: "\r\n\t\t\t<p>First, you include MooTools and Lava framework bundle<br/>\r\n\t\t\t\t(currently Lava depends on MooTools,\r\n\t\t\t\tbut in future builds this dependency will be removed)</p>\r\n\t\t\t<p><i>In real-world applications you will use NPM packages \"firestorm\" and \"lava\",<br/>\r\n\t\t\t\tbut for educational purposes you can take the bundle from site.</i></p>\r\n\t\t"
		},
		{
			code_name: "blank",
			active_highlights: ["style"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>If you want to use widgets, that come with the framework\r\n\t\t\t- then you should also include styles for them.</p>\r\n\r\n\t\t\t<p>Framework widgets use Bootstrap theme (which is already included in this CSS file).</p>\r\n\r\n\t\t\t<p><i>You are not limited to Bootstrap theme: you can write your own styles and even HTML code for framework widgets.</i></p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped",
			active_highlights: ["widget_definition"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>Let's create a controller for our page.\r\n\t\t\t\tControllers respond to events, hold properties, and contain all user-defined logic.</p>\r\n\r\n\t\t\t<p>A piece of HTML with it's own controller is called a <b>widget</b>.\r\n\t\t\t\tIn this example the &lt;body&gt; tag becomes a widget.</p>\r\n\r\n\t\t\t<p>\r\n\t\t\t\tAll widget controllers must be inherited from <b>Lava.widget.Standard</b>,\r\n\t\t\t\tso here we define <b>HelloApp</b> class, which extends it...\r\n\t\t\t</p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped",
			active_highlights: ["lava_app"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t\t<p>...and that's how we attach it to page body.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped",
			active_highlights: ["bootstrap_call"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>Then we manually call <code>Lava.bootstrap()</code>.</p>\r\n\r\n\t\t\t<p><b>Why should you do it manually?</b></p>\r\n\r\n\t\t\t<p>This gives you total control over this process.\r\n\t\t\t\tYou can even write your own bootstrap method, if you want.</p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped",
			active_highlights: ["mootools_call"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>addEvent is a method from MooTools.</p>\r\n\t\t\t<p>When page loads - <code>bootstrap</code> method parses content\r\n\t\t\t\tof the &lt;body&gt; tag into widget config. Then it creates an instance of <code>HelloApp</code> class\r\n\t\t\t\twith that config. which is then rendered and inserted into &lt;body&gt;.</p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped_with_property",
			active_highlights: ["property_definition"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t\t<p>Let's add a property to our controller...</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "bootstrapped_with_property",
			active_highlights: ["expression_view"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t\t<p>...and show it on page.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "HelloApp",
			active_highlights: ["text_input"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>We also need a way to edit this property. <br/>\r\n\t\t\t\tLet's add a text input...</p>\r\n\t\t"
		},
		{
			code_name: "HelloApp",
			active_highlights: [
				"bind_directive",
				"your_name_property"
			],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t\t<p>...and bind it's value to <code>your_name</code> property.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			result_href: "/www/quick_start/hello_example.html",
			text: "\r\n\t\t\t<p>Let's see this example in action:</p>\r\n\t\t"
		},
		{
			code_name: "HelloApp",
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p><i>Tip: you can paste this code into a new HTML file on your computer to play with it.</i></p>\r\n\t\t\t<p>How this works: &lt;text_input&gt; is not a plain HTML tag, but a widget<br/>\r\n\t\t\t\twith it's own HTML markup, controller and properties like <code>value</code> or <code>is_enabled</code>.</p>\r\n\t\t"
		},
		{
			code_name: "HelloApp",
			active_highlights: ["bind_directive"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>This is called a directive - it modifies configs, which are produced by template parser. <br/>\r\n\t\t\t\tThis directive creates a config for bi-directional binding between <code>your_name</code> <br/>\r\n\t\t\t\tproperty from <code>HelloApp</code> widget and <code>value</code> property from &lt;text_input&gt; widget.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "HelloApp",
			active_highlights: ["expression_view"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t\t<p>This is Expression view, it shows result of an expression.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "hello_with_complex_expression",
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>It can be almost any JavaScript expression (with certain limitations).</p>\r\n\t\t\t<p>You can also access properties of objects and call a set of allowed methods.</p>\r\n\t\t\t<p><code>ucFirst</code> is a method to \"Upper Case First letter\".</p>\r\n\t\t"
		},
		{
			code_name: "if_and_foreach_views",
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>There are also <code>If</code> and <code>Foreach</code> views<br/>\r\n\t\t\t\t(surrounding code was removed for better readability).</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{text: "\r\n\t\t\t<p>Now, let's learn to use events.</p>\r\n\t\t"},
		{
			code_name: "events_example",
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>Here we have a &lt;button&gt; element, <br/>\r\n\t\t\t\tand we want to delegate it's <code>click</code> event to a widget's <code>_onButtonClick</code> method.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "events_example",
			active_highlights: ["event_on_element"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>This declaration says, that DOM <code>click</code> event should raise <br/>\r\n\t\t\t\t<code>button_click</code> event in the framework.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "events_example",
			active_highlights: ["event_in_widget"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>And this declaration sets handler for the framework's <code>button_click</code> event.<br/>\r\n\t\t\t\t<i>This way of event routing adds more flexibility to the framework.</i></p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "events_example",
			active_highlights: ["set"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>Handler uses <code>set</code> API method of <code>Lava.widget.Standard</code><br/>\r\n\t\t\t\tto increment the counter value.<br/>\r\n\t\t\t\tYou must not directly set widget properties, cause in this case views will not be notified of changes.</p>\r\n\t\t"
		},
		{
			code_name: "events_example",
			active_highlights: ["property_access"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>Also notice, that there are no autogenerated getters and setters.</p>\r\n\t\t\t<p>Very simple.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			code_name: "button_with_bound_style",
			active_highlights: ["style_binding"],
			text_class_suffix: "-compact",
			text: "\r\n\t\t\t<p>For even more fun let's bind button's padding,<br/>\r\n\t\t\t\tso it grows in size each time it's clicked.</p>\r\n\t\t\t<p>&nbsp;</p>\r\n\t\t"
		},
		{
			result_href: "/www/quick_start/events_example.html",
			text: "\r\n\t\t\t<p>See this example in action:</p>\r\n\t\t"
		},
		{text: "\r\n\t\t\t<p>Lava is simple and beautiful.<br/>\r\n\t\t\t\tIt's completely transparent, so you will never have to fight with it.</p>\r\n\t\t\t<p>Lava is powerful. Every part of it can be customized: <br/>\r\n\t\t\t\tfrom widgets to core components.</p>\r\n\t\t\t<p><a href=\"/www/doc.html#tab=tutorials\">Proceed to tutorials</a></p>\r\n\t\t"}
	]
}