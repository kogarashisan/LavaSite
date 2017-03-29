var page_json = {
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"animation\">Animation</h1>\n<p>Animations change CSS properties of elements over time, like: position, width or color.</p>\n<h2 id=\"quick-facts\">Quick facts</h2>\n<ul>\n<li>Animations can be reversed at any time. You can call <a href=\"/www/doc/class/Lava.animation.Abstract.html#member=reverseDirection\">Abstract#reverseDirection</a> to run it backwards.</li>\n<li>You can animate several properties simultaneously</li>\n<li>You can create animation without a target (DOM element that it will animate), and set it later.</li>\n<li>You can supply a custom transition method</li>\n</ul>\n<h3 id=\"example\">Example</h3>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-keyword\">var</span> config = {\n    <span class=\"hljs-comment\">// milliseconds</span>\n    duration: <span class=\"hljs-number\">1500</span>,\n\n    <span class=\"hljs-comment\">// you can supply either transition name or transition callback</span>\n    <span class=\"hljs-comment\">// transition_name: 'inSine',</span>\n\n    transition: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(x)</span> {</span>\n        <span class=\"hljs-keyword\">return</span> (x &lt; <span class=\"hljs-number\">0.5</span>) ? Lava.transitions.inOutCubic(x*<span class=\"hljs-number\">2</span>) : Lava.transitions.inOutCubic(<span class=\"hljs-number\">1</span> - (x - <span class=\"hljs-number\">0.5</span>)*<span class=\"hljs-number\">2</span>);\n    },\n    <span class=\"hljs-comment\">// properties, that will be animated</span>\n    animators: [\n        <span class=\"hljs-comment\">// \"type\" refers to class name from Lava.animators. Other properties represent config for that class</span>\n        {type: <span class=\"hljs-string\">'Color'</span>, from: [<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>], to: [<span class=\"hljs-number\">128</span>, <span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">128</span>], property: <span class=\"hljs-string\">'background-color'</span>},\n        <span class=\"hljs-comment\">// 'delta' represents the distance. In this case, it will animate width from 25px to 500px</span>\n        {type: <span class=\"hljs-string\">'Integer'</span>, from: <span class=\"hljs-number\">25</span>, delta: <span class=\"hljs-number\">475</span>, property: <span class=\"hljs-string\">'width'</span>}\n    ]\n}\n\n<span class=\"hljs-keyword\">var</span> animation = <span class=\"hljs-keyword\">new</span> Lava.animation.Standard(config, Firestorm.getElementById(<span class=\"hljs-string\">'example_element'</span>));\nanimation.reverseDirection();\nanimation.start();</pre></div></div></div><p>This will animate element&#39;s width from 500px to 25px, and color from light-green to white.</p>\n<h2 id=\"architecture\">Architecture</h2>\n<p>Animations and classes are the most time-critical parts of any framework, so they are always optimized for best performance.</p>\n<ul>\n<li>When animation starts - it adds itself to the list of active tasks via call to <a href=\"/www/doc/object/Lava.Cron.html#member=acceptTask\">Cron#acceptTask</a>.</li>\n<li>When first task is added to <a href=\"/www/doc/object/Lava.Cron.html\">Lava.Cron</a> - it starts a timer, which periodically calls it&#39;s <a href=\"/www/doc/object/Lava.Cron.html#member=onTimer\">Cron#onTimer</a> callback.</li>\n<li>Cron&#39;s <code>onTimer</code> than calls <code>onTimer()</code> method of all active tasks.</li>\n<li>At the same time, Cron asks every animation if it&#39;s still active via call to <code>isRunning()</code>. When animation stops -\nCron removes it from it&#39;s list of active tasks.</li>\n<li>When there are no more active tasks - timer stops.</li>\n</ul>\n<p>Each animation has a &quot;transition&quot; function (analog of JQuery&#39;s &quot;easings&quot;). Transition determines the actual animation&#39;s\nvalue, depending on it&#39;s current percent.</p>\n<p>Inside animation instance:</p>\n<ul>\n<li>In calls to <code>onTimer()</code> it receives current system time from Cron.</li>\n<li>Than it calculates it&#39;s current percent by the following formula: <code>percent = (now - started_time) / duration</code> (0 &lt;= percent &lt;= 1).</li>\n<li>Percent than is passed to it&#39;s transition: <code>transition_value = transition(percent)</code>.\n  <code>transition_value</code> is usually between 0 and 1, but may exceed those bounds.</li>\n<li>Finally, <code>transition_value</code> is passed to animators, which set properties on animation&#39;s DOM elements</li>\n</ul>\n<p>Animator is a class, that knows, how to set the desired properties.\nFor example, color values must be rounded and written in <code>rgb(...)</code> form.</p>\n<h2 id=\"emulated-animations\">Emulated animations</h2>\n<p>Sometimes, you will want to use browser transitions, and receive an event when such animation ends.\nThis task is performed by <a href=\"/www/doc/class/Lava.animation.Emulated.html\">Lava.animation.Emulated</a> - it does not use <a href=\"/www/doc/object/Lava.Cron.html\">Lava.Cron</a>,\ninstead it starts a single timeout on <span class=\"api-var\">window</span>.</p>\n<p>Emulated animations work by applying CSS classes and changing properties of elements on start and end of the animation.\nAnd they can also be reversed, but:</p>\n<ul>\n<li>Smoothness and correctness in this case is not always guaranteed.</li>\n<li>After reversal, it will run for full amount of time.</li>\n</ul>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}