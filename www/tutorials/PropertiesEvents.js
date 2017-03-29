var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"properties-and-events\">Properties and events</h1>\n<p>Properties and events are the basement of Lava framework.\nYou can execute the following example in your browser&#39;s console:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> instance = <span class=\"hljs-keyword\">new</span> Lava.mixin.Properties();\n<span class=\"hljs-comment\">// you can also create it with initial properties</span>\n<span class=\"hljs-keyword\">var</span> instance = <span class=\"hljs-keyword\">new</span> Lava.mixin.Properties({\n    property1: <span class=\"hljs-string\">'value1'</span>,\n    property2: <span class=\"hljs-string\">'value2'</span>\n});\n<span class=\"hljs-comment\">// when you get or set a property - it does not necessarily need to be defined</span>\ninstance.set(<span class=\"hljs-string\">'test'</span>, <span class=\"hljs-number\">123</span>);\ninstance.get(<span class=\"hljs-string\">'test'</span>); <span class=\"hljs-comment\">// returns 123</span></pre></div></div></div><p>At first glance, it may seem inconvenient to type those &quot;.get()&quot; and &quot;.set()&quot; every time you want to access a property,\nbut in practice it&#39;s very easy to develop this way, cause behaviour is transparent.</p>\n<p>There are also two kinds of events, one is regular event, added with &quot;on&quot;:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> demo_responder = {\n    onPropertyChanged: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(observable, event_args, native_args)</span> {</span>\n        console.log(<span class=\"hljs-string\">'property changed: '</span> + event_args.name);\n    }\n}\n<span class=\"hljs-comment\">// arguments: event name, callback, context</span>\n<span class=\"hljs-keyword\">var</span> listener = instance.on(<span class=\"hljs-string\">'property_changed'</span>, demo_responder.onPropertyChanged, demo_responder);\n\ninstance.set(<span class=\"hljs-string\">'test'</span>, <span class=\"hljs-string\">'new value'</span>);\n<span class=\"hljs-comment\">// will print 'property changed: test' in console</span></pre></div></div></div><p>In Lava framework you do not need to create bound functions for listener callbacks. Instead, you will supply the <b>context</b>\nfor calling listener callback (context will become &quot;<span class=\"api-keyword\">this</span>&quot; inside the callback). It&#39;s faster than wrappers,\nand this way you avoid writing unnecessary code.</p>\n<p>You can suspend, resume and remove listeners:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// now you will not receive 'property_changed' event, but listener is still attached</span>\nLava.suspendListener(listener);\n<span class=\"hljs-comment\">// turn it back on</span>\nLava.resumeListener(listener);\n<span class=\"hljs-comment\">// remove it completely</span>\ninstance.removeListener(listener);</pre></div></div></div><h2 id=\"property-listeners\">Property listeners</h2>\n<p>There is another kind of listeners - for single property:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> demo_responder = {\n    onTestChanged: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(observable, event_args, native_args)</span> {</span>\n        console.log(<span class=\"hljs-string\">'test property changed'</span>);\n    }\n}\n<span class=\"hljs-keyword\">var</span> listener = instance.onPropertyChanged(<span class=\"hljs-string\">'test'</span>, demo_responder.onTestChanged, demo_responder);\ninstance.set(<span class=\"hljs-string\">'test'</span>, <span class=\"hljs-string\">'another value'</span>);\n<span class=\"hljs-comment\">// you will see 'test property changed' in console</span>\n\n<span class=\"hljs-comment\">// you can remove it in the same way as any other listener</span>\ninstance.removeListener(listener);</pre></div></div></div><p>Property listeners can also be suspended and resumed.\nNow you are encouraged to have a look at the source of <a href=\"/www/doc/class/Lava.mixin.Observable.html\">Lava.mixin.Observable</a> and <a href=\"/www/doc/class/Lava.mixin.Properties.html\">Lava.mixin.Properties</a>.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}