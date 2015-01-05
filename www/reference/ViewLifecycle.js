{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"refresh-cycle\">Refresh cycle</h1>\n<p>When data changes - scopes do not refresh themselves immediately, instead they are placed into update queue \nin <a href=\"/www/doc.html#object=Lava.ScopeManager\">Lava.ScopeManager</a>. The same for views - they have their own queue in <a href=\"/www/doc.html#class=Lava.system.ViewManager\">Lava.system.ViewManager</a>.</p>\n<p>And there are two separate refresh cycles - for scopes (<a href=\"/www/doc.html#object=Lava.ScopeManager;member=refresh\">ScopeManager#refresh</a>), \nand for views (<a href=\"/www/doc.html#class=Lava.system.ViewManager;member=refresh\">ViewManager#refresh</a>). Scopes are updated before views.</p>\n<p>How views are refreshed: ViewManager calls <code>refresh()</code> method of all views in it&#39;s queue, which does the following:\nrenders view&#39;s content and replaces HTML inside view&#39;s container. Only views with container can be refreshed, \nand only views with container can be placed into the refresh queue. When views without container need to refresh - \nthey find their nearest parent with container and call it&#39;s <a href=\"/www/doc.html#class=Lava.view.Abstract;member=trySetDirty\">Abstract#trySetDirty</a> - \nthis will place their parent into refresh queue.</p>\n<p>Views that need to be refreshed - are marked &quot;dirty&quot; (their <a href=\"/www/doc.html#class=Lava.view.Abstract;member=_is_dirty\">Abstract#_is_dirty</a> becomes <span class=\"api-keyword\">true</span>).\nWhen view is rendered or refreshed - it clears it&#39;s &quot;dirty&quot; state. <code>refresh()</code> <b>will update only dirty views.</b></p>\n<p>Views inside refresh queue are sorted by their <a href=\"/www/doc.html#class=Lava.view.Abstract;member=depth\">Abstract#depth</a> property (indicates how many \nparents does a view have). Views are updated from parents to children, this allows all views to be updated only once\nduring refresh cycle:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n        {#&gt; inner_text}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    {#&gt; outer_text}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div><p>If both Expression views change - they will place their parent views into update queue (elements with x:type=&quot;view&quot;).\nOuter view will always be refreshed first - it will render everything inside it and replace HTML inside it&#39;s container.\nRender operation will clear &quot;dirty&quot; state on the inner view, so when ViewManager calls <code>refresh()</code> of inner view - it will do nothing.</p>\n<h2 id=\"view-lifecycle\">View lifecycle</h2>\n<p>State of views is determined by the following properties:</p>\n<ul>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=_is_inDOM\">Abstract#_is_inDOM</a> - is the view currently in DOM</li>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=_is_dirty\">Abstract#_is_dirty</a> - set when it&#39;s content in DOM should be refreshed</li>\n</ul>\n<p>There is no &quot;rendered&quot; state, cause rendered views must be immediately inserted into DOM.\nView state diagram:</p>\n<p><a href=\"/www/reference_img/view-state-diagram.png\" target=\"_blank\">\n    <img src=\"/www/reference_img/view-state-diagram.png\" style=\"width: 50%;\"/>\n</a></p>\n<p><i>Red square indicates a process (not a state).</i></p>\n<p>State is controlled by the following methods:</p>\n<ul>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=broadcastInDOM\">broadcastInDOM</a> - inform hierarchy, that it&#39;s now in DOM, so now it can access it&#39;s DOM elements</li>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=broadcastRemove\">broadcastRemove</a> - inform hierarchy that now it will be removed</li>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=render\">render</a> - renders hierarchy, marks views as clean</li>\n<li><a href=\"/www/doc.html#class=Lava.view.Abstract;member=refresh\">refresh</a> - refresh one single view with container (render and update HTML inside container)\nand mark it as clean</li>\n</ul>\n<p>Each of these methods controls state of hierarchy under the view: for example, if you call any broadcast* method on \na view - it will call the same method on it&#39;s children, and they will call it on their own children.</p>\n<p><a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a> acts like a proxy between view and it&#39;s children: it also has each or these methods\n(except <code>refresh</code>). When you call broadcast* methods on a template - it calls them on it&#39;s child views.</p>\n<h2 id=\"created-state\">Created state</h2>\n<p>When a view is created - it&#39;s not in dom and clean (_is_inDOM = _is_dirty = false).</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> dummy_widget = <span class=\"hljs-keyword\">new</span> Lava.widget.Standard({\n    is_extended: <span class=\"hljs-literal\">true</span>\n});\ndummy_widget.set(<span class=\"hljs-string\">\"your_name\"</span>, <span class=\"hljs-string\">\"World\"</span>);\n<span class=\"hljs-keyword\">var</span> demo_template = Lava.TemplateParser.parse(<span class=\"hljs-string\">\"Hello {$&gt; your_name}!\"</span>);\n<span class=\"hljs-keyword\">var</span> template_instance = <span class=\"hljs-keyword\">new</span> Lava.system.Template(demo_template, dummy_widget, dummy_widget);</pre></div></div><p>The same process happens inside Foreach and If views - they create an instance of <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a> \nfor each item or branch inside them. </p>\n<h2 id=\"-indom-state\">&quot;InDOM&quot; state</h2>\n<p>Created template can be rendered and inserted into DOM:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\">Firestorm.setProperty(document.body, <span class=\"hljs-string\">'html'</span>, template_instance.render());\ntemplate_instance.broadcastInDOM();</pre></div></div><p>This operation will move the view into &quot;InDOM&quot; state (right square on the diagram).\n<code>broadcastInDOM()</code> informs all the hierarchy inside the template that it&#39;s now in DOM, so now it can access it&#39;s DOM elements:\nattach listeners, apply animation, etc.</p>\n<p>Very important: between rendering and <code>broadcastInDOM()</code> there must be no data modifications.\nAfter you render a template - you should immediately insert it into DOM, then immediately call <code>broadcastInDOM()</code>.\nReason: if you modify any data after render - then rendered data will become stale.\nIf you violate the view lifecycle - it may lead to unexpected errors.</p>\n<h2 id=\"removed-state\">Removed state</h2>\n<p>When Template is in DOM, it can be removed.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><pre class=\"lava-code-content hljs javascript\">template_instance.broadcastRemove();\n<span class=\"hljs-comment\">// optional - clean DOM:</span>\nFirestorm.setProperty(document.body, <span class=\"hljs-string\">'html'</span>, <span class=\"hljs-string\">''</span>);</pre></div></div><p><code>broadcastRemove()</code> tells hierarchy, that now it going to be removed from DOM - this allows widgets to prepare for\nremoval: detach element listeners, if there are any, stop animations, etc. <code>broadcastRemove</code> must be dispatched \n<b>before</b> Template is actually removed, when DOM elements are still accessible.</p>\n<h2 id=\"refresh\">Refresh</h2>\n<p>At any moment a template can be rendered and inserted into DOM (even when it&#39;s already in DOM).\nThat&#39;s how view&#39;s <a href=\"/www/doc.html#class=Lava.view.Abstract;member=refresh\">Abstract#refresh</a> functions: it renders view&#39;s template(s) and replaces HTML\ninside it&#39;s container:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><pre class=\"lava-code-content hljs javascript\">Firestorm.setProperty(document.body, <span class=\"hljs-string\">'html'</span>, template_instance.render());\ntemplate_instance.broadcastInDOM();</pre></div></div><p>Let&#39;s clarify this once more:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><pre class=\"lava-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n        {#&gt; inner_text}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    {#&gt; outer_text}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span></pre></div></div><p>If <code>outer_text</code> changes, then outer view will refresh itself: it will render and replace everything inside \nit&#39;s container (outer &lt;div&gt;). View, which displays <code>inner_text</code> can be clean at this moment, but it will\nbe rendered anyway.</p>\n<p>If you have listeners on DOM elements - you should remove them in <code>render()</code>, cause all existing content will be replaced.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}