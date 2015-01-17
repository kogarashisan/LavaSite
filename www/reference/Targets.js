{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"targeting\">Targeting</h1>\n<p>Lava features declarative bindings of DOM events to controller callbacks. \nSimilar format and mechanism is used to retrieve widget includes and dispatch roles.</p>\n<p>&quot;targets&quot; in Lava refers to result of <a href=\"/www/doc.html#object=Lava.parsers.Common;member=parseTargets\">Common#parseTargets</a>. \nTarget always references a widget, and there are two kinds of them:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><pre class=\"lava-code-content hljs text\">// target with \"locator\"\n&lt;target_locator&gt;.&lt;handler_name&gt;(&lt;arguments&gt;)\n// bubbling target\n&lt;handler_name&gt;(&lt;arguments&gt;)</pre></div></div><p>&quot;&lt;target_locator&gt;&quot; specifies a widget, and has one of the following prefixes:</p>\n<ul>\n<li>&quot;$&quot; - finds widget by it&#39;s <a href=\"/www/doc.html#class=Lava.widget.Standard;member=name\">Standard#name</a>. Name is defined in controller.</li>\n<li>&quot;@&quot; - finds by <a href=\"/www/doc.html#class=Lava.view.Abstract;member=label\">Abstract#label</a>. Label is assigned in template configs.</li>\n<li>&quot;&num;&quot; - by <a href=\"/www/doc.html#class=Lava.view.Abstract;member=id\">Abstract#id</a>. ID&#39;s are global - this way you can even target widgets that are not in DOM.</li>\n</ul>\n<p>&quot;&lt;arguments&gt;&quot; is an optional comma-separated list of any ExpressionParser expressions \n(JavaScript literals, strings, <i>scope references</i>, etc). <b>Each event or role can be dispatched to multiple widgets - \nin this case targets are separated by semicolon.</b></p>\n<h2 id=\"examples\">Examples</h2>\n<p>Get include named &quot;node&quot; from widget with name &quot;tree&quot; \n(see source of the Tree widget in <code>templates/</code> folder in Lava repository):</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs text\">{&gt; $tree.node}</pre></div></div><p>Dispatch click event to several widgets:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:event:click</span>=<span class=\"hljs-value\">\"$widget.item_clicked(item, 123, 'test'); #app.item_clicked\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div><p>First target has arguments: <code>item</code> refers to a property from view hierarchy, <code>123</code> and <code>&#39;test&#39;</code> are examples of\narguments you can pass to the callback.</p>\n<p>Bubbling role:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:widget</span> <span class=\"hljs-attribute\">extends</span>=<span class=\"hljs-value\">\"TextInput\"</span> <span class=\"hljs-attribute\">roles</span>=<span class=\"hljs-value\">\"my_input\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:widget</span>&gt;</span></pre></div></div><p>Events and roles without &quot;locator&quot; prefix bubble to all parent widgets. In this case, role will be dispatched\nto all parent widgets which has handler for it (<span class=\"api-string\">&quot;my_input&quot;</span>).</p>\n<h2 id=\"target-dispatch-algorithm\">Target dispatch algorithm</h2>\n<p>Each target is dispatched independently from others by <a href=\"/www/doc.html#class=Lava.system.ViewManager\">Lava.system.ViewManager</a>. \nRoles are dispatched in view/widget constructors, includes are retrieved by \n<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a> - also in it&#39;s constructor, and events are \ndispatched in <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=onDOMEvent\">ViewManager#onDOMEvent</a> callback.</p>\n<p>Roles and events have same dispatch algorithm. Targeted roles and events are dispatched to the first parent, \nmatched by locator. Algorithm for bubbling targets is a bit different: </p>\n<ul>\n<li>target is first dispatched to all parent widgets</li>\n<li>then target is dispatched to &quot;global targets&quot;</li>\n</ul>\n<p>Global target is a widget, assigned to handle bubbling roles and events. You can add them:</p>\n<ul>\n<li>for roles - with <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=addGlobalRoleTarget\">ViewManager#addGlobalRoleTarget</a></li>\n<li>for events - with <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=addGlobalEventTarget\">ViewManager#addGlobalEventTarget</a></li>\n</ul>\n<p>Role and event bubbling can be cancelled with a call to <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=cancelBubble\">ViewManager#cancelBubble</a>.\nWhen bubble is cancelled - ViewManager immediately exits the dispatch loop (this may happen before target reaches\nglobal target handlers). See <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=_dispatchCallback\">ViewManager#_dispatchCallback</a> source for better understanding.</p>\n<h2 id=\"event-routing\">Event routing</h2>\n<p>Events are routed by <a href=\"/www/doc.html#class=Lava.system.ViewManager\">Lava.system.ViewManager</a>.\nRouting of an event is enabled by a call to <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=lendEvent\">ViewManager#lendEvent</a>: this increases internal \nusage counter for the event, and acquires handler from <a href=\"/www/doc.html#object=Lava.Core\">Lava.Core</a>. You can <a href=\"/www/doc.html#class=Lava.system.ViewManager;member=releaseEvent\">ViewManager#releaseEvent</a>\nwhen you don&#39;t need it - this is important for resource-intensive events like &quot;mouseenter&quot;.</p>\n<p>In it&#39;s constructor, ViewManager enables all events from <a href=\"/www/doc.html#object=Lava.schema;member=system.DEFAULT_EVENTS\">schema#system.DEFAULT_EVENTS</a>.</p>\n<p>See also: <a href=\"/www/doc.html#reference=Directives.default_events\">default_events</a>.</p>\n<h2 id=\"mouse-events\">Mouse events</h2>\n<p>Events generated by mouse movement have common name - &quot;mouse_events&quot;, they include:\n&quot;mouseenter&quot;, &quot;mouseleave&quot;, &quot;mouseover&quot; and &quot;mouseout&quot;.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.view_manager.lendEvent(<span class=\"hljs-string\">\"mouse_events\"</span>);\nLava.view_manager.releaseEvent(<span class=\"hljs-string\">\"mouse_events\"</span>);</pre></div></div><p>Mouse events have custom handler in ViewManager and are enabled and disabled together: \nyou can not enable just &quot;mouseenter&quot;, like <code>Lava.view_manager.lendEvent(&quot;mouseenter&quot;)</code> - this will not work.\nWhen you enable &quot;mouse_events&quot; - all four of them will be routed.</p>\n<p>Bubbling of mouse events is not cancellable.</p>\n<p>Note: if you need &quot;mousemove&quot; event - you can get it directly from <a href=\"/www/doc.html#object=Lava.Core\">Lava.Core</a>:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.Core.addGlobalHandler(<span class=\"hljs-string\">'mousemove'</span>, <span class=\"hljs-keyword\">this</span>._onMouseMove, <span class=\"hljs-keyword\">this</span>);</pre></div></div><h2 id=\"target-handlers\">Target handlers</h2>\n<p>Here is an example of widget with handlers for all four kinds of targets:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.widget.MyWidget'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n    name: <span class=\"hljs-string\">\"my_widget\"</span>,\n\n    _event_handlers: {\n        node_click: <span class=\"hljs-string\">'_onNodeClick'</span>\n    },\n\n    _role_handlers: {\n        my_role: <span class=\"hljs-string\">'_handleMyRole'</span>\n    },\n\n    _include_handlers: {\n        my_include: <span class=\"hljs-string\">'_getMyInclude'</span>\n    },\n\n    _onNodeClick: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(dom_event_name, dom_event, view, template_arguments)</span> {</span>},\n\n    _handleMyRole: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(view, template_arguments)</span> {</span>},\n\n    _getMyInclude: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(template_arguments)</span> {</span>}\n\n});</pre></div></div>"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}