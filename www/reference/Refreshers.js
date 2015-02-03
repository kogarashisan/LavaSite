{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"refreshers\">Refreshers</h1>\n<p>You need refreshers when you want to insert templates independently from each other: either for performance reasons, \nor when you need to apply animation to insertion and removal. Excellent example is the Tree widget:\nwhen node is expanded - you don&#39;t want to re-render whole tree, just children of that node. </p>\n<p>Refreshers are used only by Foreach and If views.</p>\n<h2 id=\"using-emulated-containers\">Using Emulated containers</h2>\n<p><a href=\"/www/doc.html#class=Lava.view.container.Emulated\">Emulated</a> container is &quot;invisible&quot; - it does not have any real HTML elements:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// Lava.view.container.Emulated</span>\nwrap: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(html)</span> {</span>\n    <span class=\"hljs-keyword\">return</span> html;\n}</pre></div></div></div><p>There is no universal way to remove content from it, so calls to <code>setHTML</code> and <code>remove</code> will\nthrow an error. But you can use surroundings to insert HTML into an Emulated container:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{$if(is_expanded)}\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:container_config</span>&gt;</span>\n        {\n            type: \"Emulated\",\n            options: {\n                prepender: 'AfterPrevious'\n            }\n        }\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:container_config</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:refresher</span>&gt;</span>{type: 'Standard'}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:refresher</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n        text\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{/if}</pre></div></div></div><p>Here we have a view with an Element container, followed by a view with Emulated container.\nWhen you prepend HTML to this Emulated container - it&#39;s the same as if you appended it after the previous view.</p>\n<p>Internally, container has two options: &quot;appender&quot;, which replaces it&#39;s <code>appendHTML</code> class method, and &quot;prepender&quot;, \nwhich replaces <code>prependHTML</code>. And you have the following methods to choose from:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// _appendBottom algorithm:</span>\n<span class=\"hljs-keyword\">this</span>._view.getParentView().getContainer().appendHTML(html);\n<span class=\"hljs-comment\">// _appendTop:</span>\n<span class=\"hljs-keyword\">this</span>._view.getParentView().getContainer().prependHTML(html);\n<span class=\"hljs-comment\">// _appendAfterPrevious:</span>\n<span class=\"hljs-keyword\">this</span>._view.getTemplate().getPreviousView(<span class=\"hljs-keyword\">this</span>._view).getContainer().insertHTMLAfter(html);\n<span class=\"hljs-comment\">// _appendBeforeNext:</span>\n<span class=\"hljs-keyword\">this</span>._view.getTemplate().getNextView(<span class=\"hljs-keyword\">this</span>._view).getContainer().insertHTMLBefore(html);</pre></div></div></div><p>In options you should amend the &quot;_append&quot; part, so <code>prepender: &#39;AfterPrevious&#39;</code> will attach <code>_appendAfterPrevious</code> method:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// in Emulated container constructor</span>\n<span class=\"hljs-comment\">// - this is executed when you supply `prepender: 'AfterPrevious'` option</span>\n<span class=\"hljs-keyword\">this</span>.prependHTML = <span class=\"hljs-keyword\">this</span>._appendAfterPrevious</pre></div></div></div><p>As you see, you can also insert HTML before the next view in template, and at the top and bottom of view&#39;s parent container.\nThe If view does not use <code>prependHTML</code> to refresh - it uses <code>setHTML</code>, so <b>without Refresher this example will not work</b>.</p>\n<p>Tip: if your view has real container, like Element or Morph - then you don&#39;t need to use Emulated container.\nCommon usage for Emulated containers is to make your HTML lighter (for example, in trees).</p>\n<p>See also: source of <a href=\"/www/doc.html#class=Lava.view.container.Emulated\">Lava.view.container.Emulated</a>.</p>\n<h2 id=\"creating-a-refresher\">Creating a refresher</h2>\n<p>There are two ways to create a refresher: you either configure it in template, or call <code>createRefresher()</code> directly.</p>\n<p>Example - setting config:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{$if($my_panel.is_expanded)}\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:refresher</span>&gt;</span>{type: 'Standard'}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:refresher</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n        ...\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{/if}</pre></div></div></div><p>Example - creating refresher directly:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary \"><div class=\"lava-new-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{$if($my_panel.is_expanded)}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">x:roles</span>&gt;</span>$my_panel.content_if<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">x:roles</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    ...\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{/if}</pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Javascript</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.widget.MyPanel'</span>,\n{\n  Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n  name: <span class=\"hljs-string\">'my_panel'</span>,\n\n  _role_handlers: {\n    content_if: <span class=\"hljs-string\">'_handleContentIf'</span>\n  },\n\n  _handleContentIf: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(view)</span> {</span>\n\n    view.createRefresher({type: <span class=\"hljs-string\">'Standard'</span>});\n\n  }\n});</pre></div></div></div><p>Refresher is part of static template configuration, so once it was created - it can not be removed.</p>\n<p>Important: you should call <code>createRefresher()</code> only in role handlers, before any templates are created.</p>\n<h2 id=\"view-refresher-interaction\">View-refresher interaction</h2>\n<p>View stores it&#39;s refresher instance in <code>this._refresher</code> property. When refresher is created - view also modifies \nit&#39;s template-controlling algorithms, so they use refresher API rather than view&#39;s own methods.</p>\n<p>View interacts with refresher by loading templates into it: in <code>render</code> and <code>refresh</code> it loads templates, \nwhich need to be in DOM, and on argument changes - it loads templates which need to be removed.</p>\n<p>From source of the <a href=\"/www/doc.html#class=Lava.view.Foreach\">Lava.view.Foreach</a>:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">_renderContent_Refresher: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>._requires_refresh_children &amp;&amp; <span class=\"hljs-keyword\">this</span>._refreshChildren();\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._refresher.render(<span class=\"hljs-keyword\">this</span>._current_templates);\n\n},\n_refresh_Refresher: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">()</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>._requires_refresh_children &amp;&amp; <span class=\"hljs-keyword\">this</span>._refreshChildren();\n    <span class=\"hljs-keyword\">this</span>._refresher.refresh(<span class=\"hljs-keyword\">this</span>._current_templates);\n\n},\n\n_removeTemplates_Refresher: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(removed_templates)</span> {</span>\n\n    <span class=\"hljs-keyword\">this</span>._refresher.prepareRemoval(removed_templates);\n\n}</pre></div></div></div><p>View is responsible for construction and destroying of templates, while refresher inserts templates into DOM, \nremoves them from DOM and applies insertion and removal animations.</p>\n<h2 id=\"from-refresher-s-side\">From refresher&#39;s side</h2>\n<p>Refresher needs to be able to manipulate templates independently, this means that template content must be surrounded \nby HTML elements. If template is a piece of plain text - it can not be removed from DOM independently, cause in this \ncase sequential templates will be glued together during rendering.</p>\n<p>How template removal algorithms work:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n14\r\n15\r\n16\r\n17\r\n18\r\n19\r\n20\r\n21\r\n22\r\n23\r\n24\r\n25\r\n26\r\n27\r\n28\r\n29\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-comment\">// Lava.view.refresher.Standard</span>\n_getStartElement: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(template)</span> {</span>\n\n    <span class=\"hljs-keyword\">return</span> template.getFirstView().getContainer().getDOMElement();\n\n},\n_getEndElement: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(template)</span> {</span>\n\n    <span class=\"hljs-keyword\">return</span> template.getLastView().getContainer().getDOMElement();\n\n},\n_removeTemplate: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(template)</span> {</span>\n\n    <span class=\"hljs-keyword\">var</span> start_element = <span class=\"hljs-keyword\">this</span>._getStartElement(template),\n        end_element = <span class=\"hljs-keyword\">this</span>._getEndElement(template);\n\n    template.broadcastRemove();\n\n    <span class=\"hljs-keyword\">if</span> (start_element == end_element) {\n\n        Firestorm.Element.destroy(start_element);\n\n    } <span class=\"hljs-keyword\">else</span> {\n\n        Firestorm.DOM.clearOuterRange(start_element, end_element);\n\n    }\n\n}</pre></div></div></div><p>Refresher gets the first and the last DOM nodes of a template, then removes everything between them, including \nnodes themselves. Examples of templates, that can be separated from each other:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary \"><div class=\"lava-new-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{$foreach(items) as=item}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n    text\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{/foreach}</pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n5\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{$foreach(items) as=item}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  text...\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n{/foreach}</pre></div></div><div class=\"lava-new-code-header api-code-header-blue\">Template</div>\n<div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\n2\n3\n4\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs xml\">{$foreach(items) as=item}\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"lava-control-prefix\">x</span><span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"view\"</span>&gt;</span>...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  plain text\n{/foreach}</pre></div></div></div><p>Standard algorithm assumes, that template is surrounded by views, so templates from the first and second examples\ncan be removed with standard algorithm. However, the last example requires you to provide your own algorithm for \ngetting the last template node, something like the following:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">view.createRefresher({\n    type: <span class=\"hljs-string\">'Standard'</span>,\n    get_end_element_callback: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(template)</span> {</span>\n\n        <span class=\"hljs-comment\">// in this case getLastView returns the only view inside template</span>\n        <span class=\"hljs-keyword\">return</span> template.getLastView().getContainer().getDOMElement().nextSibling;\n\n    }\n});</pre></div></div></div><p>For the third template, we know that each &lt;div x:type=&quot;view&quot;&gt; is followed by exactly one DOM text node, \nwhich is followed by another &lt;div x:type=&quot;view&quot;&gt; of the next item. Foreach view also has Morph container, \nso the last item&#39;s text will not be glued with text after Foreach.</p>\n<h2 id=\"insertion-and-refresh\">Insertion and refresh</h2>\n<p>Each time view needs to be refreshed - it loads the list of it&#39;s current templates into refresher:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\"><span class=\"hljs-keyword\">this</span>._refresher.render(<span class=\"hljs-keyword\">this</span>._current_templates);\n<span class=\"hljs-comment\">// or</span>\n<span class=\"hljs-keyword\">this</span>._refresher.refresh(<span class=\"hljs-keyword\">this</span>._current_templates);</pre></div></div></div><p>First, refresher removes from DOM those templates, which are not in list, then renders and inserts new templates \nand reorders existing ones. New templates are inserted after the last node of previous template:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Firestorm.DOM.insertHTMLAfter(<span class=\"hljs-keyword\">this</span>._getEndElement(previous_template), template.render());</pre></div></div></div><p>If template is already in DOM, then it&#39;s nodes are moved after the previous template to apply sorting:</p>\n<div class=\"lava-new-code-container lava-new-code-container-primary\"><div class=\"lava-new-code-box\"><pre class=\"lava-new-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><div class=\"lava-new-code-overlays\"><pre class=\"lava-new-code-content hljs javascript\">Firestorm.DOM.moveRegionAfter(\n    <span class=\"hljs-keyword\">this</span>._getEndElement(previous_template), \n    <span class=\"hljs-keyword\">this</span>._getStartElement(template), \n    <span class=\"hljs-keyword\">this</span>._getEndElement(template)\n);</pre></div></div></div><h2 id=\"animation\">Animation</h2>\n<p>When animation is enabled - then templates are animated before removal, and new templates are animated after \ninsertion into DOM. Technically it&#39;s also possible to apply animations that reorder templates.</p>\n<p>Templates are removed by view with call to <a href=\"/www/doc.html#class=Lava.view.refresher.Standard;member=prepareRemoval\">Standard#prepareRemoval</a> method, which does not \nremove templates immediately, but instead puts them into <a href=\"/www/doc.html#class=Lava.view.refresher.Standard;member=_remove_queue\">Standard#_remove_queue</a>.\nRemoval animation does not start until call to <a href=\"/www/doc.html#class=Lava.view.refresher.Standard;member=refresh\">Standard#refresh</a>.</p>\n<p>If view returns the template into DOM, and removal animation is still playing - \nthen it&#39;s reversed. In other words: if view returns template to DOM before it was actually removed by refresher - \nthen template is not re-rendered, just it&#39;s animation is reversed.</p>\n<p>View listens to <a href=\"/www/doc.html#class=Lava.view.refresher.Standard;event=removal_complete\">removal_complete</a> event to take care of templates, \nthat were removed from DOM (usually, view will destroy them).</p>\n<p>See the source of refreshers for better understanding.</p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}