{
	type: "widget",
	is_extended: true,
	template: ["<h1 id=\"classes\">Classes</h1>\n<h2 id=\"root-namespaces\">Root namespaces</h2>\n<p>Before you can use ClassManager - you must register root namespaces with a call to\n<a href=\"/www/doc.html#object=Lava.ClassManager;member=registerRootNamespace\">ClassManager#registerRootNamespace</a>. Lava registers itself in <a href=\"/www/doc.html#object=Lava;member=init\">Lava#init</a>, this makes possible to\ncreate classes with paths starting with &quot;Lava.&quot;.</p>\n<p>If you want to create global classes - you could register <span class=\"api-var\">window</span> as a root.\nAnyway, class paths must start with name of a root namespace:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.ClassManager.registerRootNamespace(<span class=\"hljs-string\">'global'</span>, window);\nLava.ClassManager.define(\n    <span class=\"hljs-string\">'global.MyClass'</span>, <span class=\"hljs-comment\">// path starts with namespace name</span>\n    {<span class=\"hljs-comment\">/*...*/</span>}\n);</pre></div></div><h2 id=\"lava-define\">Lava.define</h2>\n<p>Before call to <a href=\"/www/doc.html#object=Lava;member=init\">Lava#init</a> - <a href=\"/www/doc.html#object=Lava;member=define\">Lava#define</a> puts class bodies into <a href=\"/www/doc.html#object=Lava;member=classes\">Lava#classes</a> object,\nand after call to <code>init()</code> - it becomes direct proxy to <a href=\"/www/doc.html#object=Lava.ClassManager;member=define\">ClassManager#define</a>.\n<code>init()</code> then recursively loads all class bodies, stored in <a href=\"/www/doc.html#object=Lava;member=classes\">Lava#classes</a> - this is done to allow user to modify any classes\nbefore they are loaded (you have direct access to class bodies).</p>\n<p>Although such possibility exists - you should not misuse it.\nIt&#39;s designed for such rare cases like &quot;add possibility to switch locales on the fly&quot;, or applying patches,\nso if you really want to modify core classes - think again, it may be a sign that you are doing something wrong.\nFor most of your needs inheritance is more than enough.</p>\n<p><b>When writing your own classes - you must not call <a href=\"/www/doc.html#object=Lava.ClassManager;member=define\">ClassManager#define</a> directly,\nuse <a href=\"/www/doc.html#object=Lava;member=define\">Lava#define</a> instead.</b></p>\n<h2 id=\"instanceof-operator\">Instanceof operator</h2>\n<p>Lava classes do not have prototype chain - there is no need for it. Having one prototype with all methods and members\nfrom parents is faster, easier to debug and more convenient solution. This also means, that native JavaScript\n<span class=\"api-keyword\">instanceof</span> operator does not work.</p>\n<p>In a well-designed program there is no need for <span class=\"api-keyword\">instanceof</span> operator, cause objects of different types are not\nmixed together. Strong-typed programs have less bugs, they are much easier to develop and maintain.</p>\n<p>Instead of <span class=\"api-keyword\">instanceof</span> operator some Lava classes have a unique type marker in their class bodies,\nlike <code>isEnumerable</code> in <a href=\"/www/doc.html#class=Lava.system.Enumerable\">Lava.system.Enumerable</a>, or <code>isProperties</code> in <a href=\"/www/doc.html#class=Lava.mixin.Properties\">Lava.mixin.Properties</a>.\nBut if you really need it, then there is analog for Lava classes - <a href=\"/www/doc.html#object=Lava;member=instanceOf\">Lava#instanceOf</a>.</p>\n<h2 id=\"constructing-classes\">Constructing classes</h2>\n<p>If you know the exact class path, you can access class constructor directly.\nWhen class name is stored in configs, you can search for the constructor:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-comment\">// way 1: create class directly</span>\n<span class=\"hljs-keyword\">var</span> instance = <span class=\"hljs-keyword\">new</span> Lava.view.container.Element(<span class=\"hljs-comment\">/* ... */</span>);\n<span class=\"hljs-comment\">// way 2: get constructor first</span>\n<span class=\"hljs-keyword\">var</span> constructor = lava.ClassManager.getConstructor(<span class=\"hljs-string\">'Element'</span>, <span class=\"hljs-string\">'Lava.view.container'</span>);\n<span class=\"hljs-keyword\">var</span> instance = <span class=\"hljs-keyword\">new</span> constructor(<span class=\"hljs-comment\">/* ... */</span>);\n<span class=\"hljs-comment\">// or you can pass full path</span>\n<span class=\"hljs-keyword\">var</span> constructor = lava.ClassManager.getConstructor(<span class=\"hljs-string\">'Lava.view.container.Element'</span>);</pre></div></div><p>See also: <a href=\"/www/doc.html#object=Lava.ClassManager;member=getConstructor\">ClassManager#getConstructor</a> source code.</p>\n<h2 id=\"architecture-notes\">Architecture notes</h2>\n<p>Class body, passed to <code>define()</code> is &quot;disassembled&quot; into <span class=\"api-var\">skeleton</span> - internal structure, which describes all class members.\n<span class=\"api-var\">skeleton</span> is then used for class extension and constructor generation.\nWhile building the <span class=\"api-var\">skeleton</span>, ClassManager stores functions from class body into <span class=\"api-var\">references</span> array.</p>\n<p>All internal class data is stored in <span class=\"api-var\">Class</span> property of each constructed instance,\nand described in <a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a> helper object. For example, have a look at:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs javascript\"><span class=\"hljs-comment\">// type in console</span>\nLava.widget.Standard.prototype.Class;\n\n<span class=\"hljs-comment\">// or inside a class instance:</span>\n<span class=\"hljs-comment\">// this.Class</span></pre></div></div><p>Keep in mind, that everything inside <span class=\"api-var\">Class</span> is readonly.</p>\n<p>All value members, like <span class=\"api-keyword\">null</span>&#39;s, strings, numbers and booleans - are moved to constructor&#39;s prototype,\nwhile constructor itself creates everything that should not be shared between class instances, like arrays and objects.\nArrays are <code>slice()</code>&#39;d from original, so if there are objects inside - they will not be cloned.</p>\n<h2 id=\"class-directives\">Class directives</h2>\n<h3 id=\"extends\">Extends</h3>\n<p>All members from parent class are merged into inherited class.\nCertain limitations exist, for example if member of parent class was a function,\nthan it cannot become a string or object in child (adequate programmer should not try to do it, anyway).\nObjects from parent and child are merged recursively.</p>\n<p>When a method is overridden in child class - parent&#39;s method is renamed:\na prefix of short parent&#39;s name and dollar sign are added before it. For example,\nwhen you inherit from &quot;Lava.data.field.Abstract&quot; - all parent methods will start with &quot;Abstract$&quot;.</p>\n<p>Only one class may be inherited. Usage example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.widget.MyWidget'</span>,\n{\n    Extends: <span class=\"hljs-string\">'Lava.widget.Standard'</span>,\n\n    init: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(config, widget, parent_view, template, properties)</span> {</span>\n        <span class=\"hljs-keyword\">this</span>.Standard$init(config, widget, parent_view, template, properties);\n    }\n\n});</pre></div></div><p>You can only call overridden methods of a class you directly inherit.\nYou cannot skip a call to parent&#39;s method and call &quot;grandfather&#39;s&quot; methods directly.</p>\n<h3 id=\"implements\">Implements</h3>\n<p>Is similar to Extends, with one difference: if child overrides a parent&#39;s method -\nthan overridden method is not renamed, but simply ignored.</p>\n<p>In other words - it copies to child everything, that does not already exists there. Example:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(\n<span class=\"hljs-string\">'Lava.user.MyClass'</span>,\n{\n    Implements: [<span class=\"hljs-string\">'Lava.mixin.Properties'</span>, <span class=\"hljs-string\">'Lava.user.MyMixin'</span>]\n});</pre></div></div><p>Implements can be used together with Extends. Several classes may be implemented with one directive.</p>\n<h3 id=\"shared\">Shared</h3>\n<p>Shared objects are moved to prototype, this makes them common to all class instances.\nCurrently, only objects can be shared.</p>\n<p>When you inherit shared objects from parent - they are copied.\nIn the following example, all instances of &quot;MyClass&quot; and &quot;InheritedClass&quot; will have two different copies of <code>_shared</code>\nin their prototype. That means, that all instances of MyClass will have one copy of <code>shared_counter</code>,\nand all instances of InheritedClass will have their own.</p>\n<p>At the same time, <code>shared_object</code> is copied by reference,\nso it will be shared among all class hierarchy, and <code>true_shared_counter</code> will be shared between parent and inherited class.</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\r\n11\r\n12\r\n13\r\n</pre><pre class=\"lava-code-content hljs javascript\">Lava.define(<span class=\"hljs-string\">'Lava.user.MyClass'</span>, {\n    Shared: <span class=\"hljs-string\">'_shared'</span>,\n    _shared: {\n        shared_counter: <span class=\"hljs-number\">0</span>,\n        shared_object: {\n            true_shared_counter: <span class=\"hljs-number\">0</span>\n        }\n    }\n});\n\nLava.define(<span class=\"hljs-string\">'Lava.user.InheritedClass'</span>, {\n    Extends: <span class=\"hljs-string\">'Lava.user.MyClass'</span>\n});</pre></div></div><p>When you override a shared object in inherited class - it&#39;s merged with parent (child members have priority).\nSeveral properties can be shared with one directive (<code>Shared: [/*...*/]</code>).</p>\n<h2 id=\"exporting-and-loading-classes\">Exporting and loading classes</h2>\n<p>In production environment you can speed up class generation even more, if you export generated class data.\nSee the build script for an example usage of <code>exportClass()</code> and <code>loadClass()</code>.</p>\n<p>Build script does not export skeletons, cause they are rather heavy.\nBut they are needed for inheritance, so you have two choices: either inherit your classes on server and export them\nin the same way, or manually export only the skeletons you need.</p>\n<h2 id=\"see-also\">See also</h2>\n<p><a href=\"/www/doc.html#reference=Packages\">Packages</a></p>\n"],
	container: {
		type: "Element",
		tag_name: "div"
	}
}