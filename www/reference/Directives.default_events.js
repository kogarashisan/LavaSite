var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"x-default_events-directive\">x:default_events directive</h1>\n<table class=\"api-member-table doc-directive-quick-facts\"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody><tr><td>Has analog in widget definition tags</td><td>Yes</td></tr><tr><td>Produces result</td><td>No</td></tr><tr><td>Widget only directive</td><td>Yes</td></tr><tr><td>Multiple usage</td><td>Disallowed</td></tr></tbody></table>\n\n\n\n<p>Define <a href=\"/www/doc/object/Support.html#member=_cWidget.default_events\">_cWidget#default_events</a> for a widget. May be useful, when you are defining a widget in the &lt;body&gt;\nelement, or a new template in widget&#39;s sugar.</p>\n<h2 id=\"example\">Example</h2>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">body</span> <span class=\"hljs-attribute\">lava-app</span>=<span class=\"hljs-value\">\"ChangelogPage\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:default_events</span>&gt;</span>['click']<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:default_events</span>&gt;</span>\n    ...\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">body</span>&gt;</span></pre></div></div></div><h2 id=\"explanation\">Explanation</h2>\n<p>All template events are routed by ViewManager - in it&#39;s constructor it enables routing of all events from \n<a href=\"/www/doc/object/Lava.schema.html#member=system.DEFAULT_EVENTS\">schema#system.DEFAULT_EVENTS</a>. So, if you have <code>x:event:mouseenter</code> in your template, and &quot;mouseenter&quot;\nevent is not routed by ViewManager - then your widget will not receive this event.</p>\n<p>To enable permanent routing of &quot;mouseenter&quot; in your application - you can add it to DEFAULT_EVENTS before call \nto <code>Lava.init</code>:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// \"mouse_events\" includes 'mouseenter', 'mouseleave', 'mouseover' and 'mouseout'</span>\nFirestorm.Array.include(Lava.schema.system.DEFAULT_EVENTS, <span class=\"hljs-string\">'mouse_events'</span>);</pre></div></div></div><p>Mouse events are expensive, especially &quot;mousemove&quot;, so you should not enable them permanently.\nWidget can temporary enable template event routing by call to <a href=\"/www/doc/class/Lava.system.ViewManager.html#member=lendEvent\">ViewManager#lendEvent</a>,\nfollowed by call to <code>releaseEvent</code> when you don&#39;t need it anymore. If your widget uses mouse events - \nthen it&#39;s a good practice to enable them only when you need them (for example, in <code>broadcastInDOM</code>).</p>\n<p>Note: if you need &quot;mousemove&quot; event - it is better to receive it directly from <a href=\"/www/doc/object/Lava.Core.html\">Lava.Core</a>, \nthan route it via templates. See the &quot;Draggable&quot; example.</p>\n<h2 id=\"default-events\">Default events</h2>\n<p>All events, that your widget permanently routes in templates (via x:event attributes) -\nshould be listed via x:default_events directive (it&#39;s impossible to construct this list automatically). \nWidget does <b>not</b> automatically enable routing of those events,\nbut instead it checks if they are enabled in <a href=\"/www/doc/class/Lava.widget.Standard.html#member=init\">Standard#init</a>, and throws exception if they are not.</p>\n<p>These lists can be also used by various build scripts: for example, server-side Lava build scripts use this setting \nto check if <a href=\"/www/doc/object/Lava.schema.html#member=system.DEFAULT_EVENTS\">schema#system.DEFAULT_EVENTS</a> contains every event, used by native framework widgets.\nThis list also may be helpful when you distribute your widgets to other developers, so it&#39;s highly recommended\nto always define default_events for your global or reusable widgets, even if all their events are already in schema.</p>\n<p>Notes: </p>\n<ul>\n<li>if you are changing this in inherited widget - then new value overwrites the old one \n(they are not merged during config extension).</li>\n<li>widget checks if events are routed only when DEBUG switch is enabled.</li>\n</ul>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}