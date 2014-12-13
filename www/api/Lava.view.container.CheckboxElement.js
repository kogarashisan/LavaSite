{"method_chain":[{"class_name":"Lava.view.container.CheckboxElement","descriptors":[{"name":"informInDOM","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Dummy method, which will be replaced in static constructor</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.view.container.Element:</b>\nCall this method, when container has been rendered and inserted into DOM\nNote: does not need to be called after capture</p>\n","is_overridden":true},{"name":"informInDOM_IE","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.CheckboxElement","is_private":false,"type":"function","description":"<p>IE version of <code>informInDOM</code> - applies IE fixes.\nIE 10, 11 and maybe other versions don&#39;t fire &quot;change&quot; when indeterminate state is cleared</p>\n"},{"name":"informRemove","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Dummy method, which will be replaced in static constructor</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.view.container.Element:</b>\nCall this method before removing container&#39;s element from DOM</p>\n","is_overridden":true},{"name":"informRemove_IE","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.CheckboxElement","is_private":false,"type":"function","description":"<p>IE version of <code>informRemove</code> - clears IE fixes</p>\n"},{"name":"init","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.Element","is_private":false,"type":"function","param_names_string":"view, config, widget","is_overridden":true,"description":"<p>One-time static constructor, which modifies container&#39;s prototype and replaces itself with correct version</p>\n","params":[{"name":"view","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"]},{"name":"config","type_names":["<a href=\"/www/doc.html#object=Support;member=_cElementContainer\">_cElementContainer</a>"]},{"name":"widget","type_names":["<a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a>"]}]},{"name":"init_IE","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.CheckboxElement","is_private":false,"type":"function","params":[{"name":"view"},{"name":"config"},{"name":"widget"}],"param_names_string":"view, config, widget","description":"<p>Constructor for IE environment</p>\n"}]},{"class_name":"Lava.view.container.Element","descriptors":[{"name":"addClass","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"class_name","type_names":["string"]},{"name":"cancel_sync","description":"<p>If <span class=\"api-keyword\">true</span> - do not add that class to DOM element, just to local <code>_static_classes</code> array</p>\n","type_names":["boolean"]}],"param_names_string":"class_name, cancel_sync","description":"<p>Add static CSS class</p>\n","is_inherited":true},{"name":"addClasses","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"class_names","type_names":["Array.&lt;string&gt;"]},{"name":"cancel_sync","description":"<p>If <span class=\"api-keyword\">true</span> - do not add that classes to DOM element, just to local <code>_static_classes</code> array</p>\n","type_names":["boolean"]}],"param_names_string":"class_names, cancel_sync","description":"<p>Add a list of static classes to the instance</p>\n","is_inherited":true},{"name":"addEventTarget","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"event_name","type_names":["string"]},{"name":"target","type_names":["<a href=\"/www/doc.html#object=Support;member=_cTarget\">_cTarget</a>"]}],"param_names_string":"event_name, target","description":"<p>Add a route for DOM event</p>\n","is_inherited":true},{"name":"addEventTarget_IOS","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"event_name","type_names":["string"]},{"name":"target","type_names":["<a href=\"/www/doc.html#object=Support;member=_cTarget\">_cTarget</a>"]}],"param_names_string":"event_name, target","description":"<p>Add a route for DOM event - IOS bugfix version</p>\n","is_inherited":true},{"name":"addEventTarget_Normal","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"event_name","type_names":["string"]},{"name":"target","type_names":["<a href=\"/www/doc.html#object=Support;member=_cTarget\">_cTarget</a>"]}],"param_names_string":"event_name, target","description":"<p>Add a route for DOM event - normal version</p>\n","is_inherited":true},{"name":"appendHTML","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","description":"<p>Insert given HTML markup at the bottom of container&#39;s DOM element</p>\n","is_inherited":true},{"name":"assertClassStringValid","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"value"}],"param_names_string":"value","description":"<p>Assert, that class string does not contain any special characters</p>\n","is_inherited":true},{"name":"assertStyleValid","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"value"}],"param_names_string":"value","description":"<p>Assert, that style string does not contain any special characters, that can break HTML markup</p>\n","is_inherited":true},{"name":"captureExistingElement","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"element","type_names":["HTMLElement"]}],"param_names_string":"element","description":"<p>Bind container to existing DOM element. Apply new styles, classes and properties</p>\n","is_inherited":true},{"name":"destroy","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n","is_inherited":true},{"name":"escapeAttributeValue","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Perform escaping of an attribute value while rendering</p>\n","is_inherited":true},{"name":"getDOMElement","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["HTMLElement"]},"description":"<p>Get current container&#39;s element from DOM</p>\n","is_inherited":true},{"name":"getEventTargets","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"event_name","type_names":["string"]}],"param_names_string":"event_name","returns":{"type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cTarget\">_cTarget</a>&gt;"]},"description":"<p>Get target routes for dom event</p>\n","is_inherited":true},{"name":"getId","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["string"]},"description":"<p>Get <code>_id</code></p>\n","is_inherited":true},{"name":"getProperty","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"type_names":["string"]},"description":"<p>Get static property</p>\n","is_inherited":true},{"name":"getStyle","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"]}],"param_names_string":"name","returns":{"type_names":["string"]},"description":"<p>Get CSS style value</p>\n","is_inherited":true},{"name":"hasStaticClass","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"class_name","description":"<p>Name of CSS class to search for</p>\n"}],"param_names_string":"class_name","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if class exists in <code>_static_classes</code></p>\n","type_names":["boolean"]},"description":"<p>Does this instance have the given static class</p>\n","is_inherited":true},{"name":"informInDOM_IOS","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Version of informInDOM with IOS bugfixes</p>\n","is_inherited":true},{"name":"informInDOM_Normal","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Normal version of informInDOM</p>\n","is_inherited":true},{"name":"init_Normal","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"view","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"]},{"name":"config","type_names":["<a href=\"/www/doc.html#object=Support;member=_cElementContainer\">_cElementContainer</a>"]},{"name":"widget","type_names":["<a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a>"]}],"param_names_string":"view, config, widget","description":"<p>Real constructor</p>\n","is_inherited":true},{"name":"insertHTMLAfter","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","description":"<p>Insert HTML markup after container&#39;s DOM element</p>\n","is_inherited":true},{"name":"insertHTMLBefore","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","description":"<p>Insert HTML markup before container&#39;s DOM element</p>\n","is_inherited":true},{"name":"isElementOwner","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_element_owner</code></p>\n","is_inherited":true},{"name":"isInDOM","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_inDOM</code></p>\n","is_inherited":true},{"name":"isVoid","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_void</code></p>\n","is_inherited":true},{"name":"prependHTML","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","description":"<p>Insert given HTML markup at the top of container&#39;s DOM element</p>\n","is_inherited":true},{"name":"release","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Clear internal reference to container&#39;s DOM element</p>\n","is_inherited":true},{"name":"releaseElement","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Release an element after call to <code>captureExistingElement</code>. Does not clear any attributes, except ID</p>\n","is_inherited":true},{"name":"remove","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Remove container&#39;s element from DOM</p>\n","is_inherited":true},{"name":"removeClass","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"class_name","type_names":["string"]},{"name":"cancel_sync","description":"<p>If <span class=\"api-keyword\">true</span> - do not remove the class from DOM element, just from local <code>_static_classes</code> array</p>\n","type_names":["boolean"]}],"param_names_string":"class_name, cancel_sync","description":"<p>Remove a static CSS class</p>\n","is_inherited":true},{"name":"removeStyle","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","description":"<p>CSS style name</p>\n","type_names":["string"]},{"name":"cancel_sync","description":"<p>If <span class=\"api-keyword\">true</span> - do not remove that style from DOM element, just from local <code>_static_styles</code> object</p>\n","type_names":["boolean"]}],"param_names_string":"name, cancel_sync","description":"<p>Remove static CSS style</p>\n","is_inherited":true},{"name":"renderVoid","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","returns":{"type_names":["string"]},"description":"<p>Render the tag as void tag</p>\n","is_inherited":true},{"name":"setHTML","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","description":"<p>Set innerHTML of container&#39;s element. Container must be in DOM</p>\n","is_inherited":true},{"name":"setProperty","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"]},{"name":"value","type_names":["string"]}],"param_names_string":"name, value","description":"<p>Add a property to <code>_static_properties</code> and synchronize it with DOM element</p>\n","is_inherited":true},{"name":"setStyle","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","description":"<p>CSS property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>CSS property value</p>\n","type_names":["string"]},{"name":"cancel_sync","description":"<p>If <span class=\"api-keyword\">true</span> - do not add that style to DOM element, just to local <code>_static_styles</code> object</p>\n"}],"param_names_string":"name, value, cancel_sync","description":"<p>Set static style value</p>\n","is_inherited":true},{"name":"sleep","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Turn off bindings</p>\n","is_inherited":true},{"name":"storeProperty","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"]},{"name":"value","type_names":["string"]}],"param_names_string":"name, value","description":"<p>Set static property to the container, but do not synchronize it with DOM element</p>\n","is_inherited":true},{"name":"syncClasses","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Refresh CSS classes on DOM element, including bound classes</p>\n","is_inherited":true},{"name":"syncProperty","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"]}],"param_names_string":"name","description":"<p>Set locally stored property value into element</p>\n","is_inherited":true},{"name":"syncStyles","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Refresh the &quot;style&quot; attribute on DOM element</p>\n","is_inherited":true},{"name":"wakeup","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","description":"<p>Resume bindings</p>\n","is_inherited":true},{"name":"wrap","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"function","params":[{"name":"html","type_names":["string"]}],"param_names_string":"html","returns":{"type_names":["string"]},"description":"<p>Render tag and wrap given HTML code inside it</p>\n","is_inherited":true},{"name":"_createArguments","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"configs","is_nullable":true,"type_names":["Object.&lt;string, <a href=\"/www/doc.html#object=Support;member=_cArgument\">_cArgument</a>&gt;"]},{"name":"view","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"]},{"name":"fn","is_non_nullable":true,"type_names":["function"]}],"param_names_string":"configs, view, fn","returns":{"is_non_nullable":true,"type_names":["Object.&lt;string, <a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>&gt;"]},"description":"<p>Helper method to create style, class and property bindings</p>\n","is_inherited":true},{"name":"_onClassBindingChanged","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"argument","type_names":["<a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>"]},{"name":"event_args"},{"name":"listener_args"}],"param_names_string":"argument, event_args, listener_args","description":"<p>Class binding argument has changed it&#39;s value. Refresh internal class values and element&#39;s classes</p>\n","is_inherited":true},{"name":"_onPropertyBindingChanged","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"argument","type_names":["<a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>"]},{"name":"event_args"},{"name":"listener_args"}],"param_names_string":"argument, event_args, listener_args","description":"<p>Argument value for property binding has changed. If container&#39;s element is in DOM - update it&#39;s property value</p>\n","is_inherited":true},{"name":"_onStyleBindingChanged","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"argument","type_names":["<a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>"]},{"name":"event_args"},{"name":"listener_args"}],"param_names_string":"argument, event_args, listener_args","description":"<p>Argument value for style binding has changed. If container&#39;s element is in DOM - update it&#39;s style</p>\n","is_inherited":true},{"name":"_renderAttribute","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"name","type_names":["string"]},{"name":"value","type_names":["boolean","null","string"]}],"param_names_string":"name, value","returns":{"type_names":["string"]},"description":"<p>Render one attribute</p>\n","is_inherited":true},{"name":"_renderClasses","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","returns":{"type_names":["string"]},"description":"<p>Render value of the &quot;class&quot; attribute, including bound classes</p>\n","is_inherited":true},{"name":"_renderOpeningTag","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","returns":{"type_names":["string"]},"description":"<p>Render the opening HTML tag, including all attributes</p>\n","is_inherited":true},{"name":"_renderStyles","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","returns":{"type_names":["string"]},"description":"<p>Render content of the &quot;style&quot; attribute, including bound styles</p>\n","is_inherited":true},{"name":"_toClassNames","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"classes_string","type_names":["string"]}],"param_names_string":"classes_string","returns":{"type_names":["Array"]},"description":"<p>Split a string into array of class names</p>\n","is_inherited":true},{"name":"_withArguments","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"function","params":[{"name":"callback_name","description":"<p>Method to call</p>\n","type_names":["string"]},{"name":"callback_argument","description":"<p>Argument for the method</p>\n","type_names":["*"]}],"param_names_string":"callback_name, callback_argument","description":"<p>Call a method of all binding arguments</p>\n","is_inherited":true}]}],"member_chain":[{"class_name":"Lava.view.container.CheckboxElement","descriptors":[{"name":"_IE_click_callback","belongs":"Lava.view.container.CheckboxElement","defined":"Lava.view.container.CheckboxElement","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["function"],"description":"<p>When running inside IE: bound &quot;click&quot; event handler</p>\n"}]},{"class_name":"Lava.view.container.Element","descriptors":[{"name":"isElementContainer","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>This instance belongs to Element container</p>\n","is_inherited":true},{"name":"_class_bindings","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_non_nullable":true,"type_names":["Object.&lt;string, <a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>&gt;"],"description":"<p>Arguments, that produce dynamic class names. Keys are sequential numbers</p>\n","is_inherited":true},{"name":"_class_bindings_values","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;string&gt;&gt;"],"description":"<p>Value of each argument from <code>_class_bindings</code>, split into array of class names</p>\n","is_inherited":true},{"name":"_config","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_cElementContainer\">_cElementContainer</a>"],"description":"<p>Settings for this instance</p>\n","is_inherited":true},{"name":"_element","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["HTMLElement"],"description":"<p>Reference to the real DOM element, that belongs to this container</p>\n","is_inherited":true},{"name":"_events","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cTarget\">_cTarget</a>&gt;&gt;"],"description":"<p>Targets for DOM events, routed by <a href=\"/www/doc.html#class=Lava.system.ViewManager\">Lava.system.ViewManager</a></p>\n","is_inherited":true},{"name":"_id","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>ID of DOM element that belongs to this container</p>\n","is_inherited":true},{"name":"_is_element_owner","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"description":"<p>Element container can control an existing element on page. <span class=\"api-keyword\">true</span>, if container was rendered and inserted\nas new element, and <span class=\"api-keyword\">false</span>, if this instance was ordered to capture an existing DOM element on page</p>\n","is_inherited":true},{"name":"_is_inDOM","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Is container&#39;s html element in DOM</p>\n","is_inherited":true},{"name":"_is_void","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Is container&#39;s element void? (does not require closing tag)</p>\n","is_inherited":true},{"name":"_property_bindings","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_non_nullable":true,"type_names":["Object.&lt;string, <a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>&gt;"],"description":"<p>Arguments, that produce property values. Keys are names of properties</p>\n","is_inherited":true},{"name":"_static_classes","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;string&gt;"],"description":"<p>List of static CSS classes, that are not bound to expressions</p>\n","is_inherited":true},{"name":"_static_properties","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Properties, that are not bound to an argument</p>\n","is_inherited":true},{"name":"_static_styles","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Styles, that are not bound to expressions</p>\n","is_inherited":true},{"name":"_style_bindings","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_non_nullable":true,"type_names":["Object.&lt;string, <a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>&gt;"],"description":"<p>Arguments, that produce style values dynamically. Keys are names of CSS styles</p>\n","is_inherited":true},{"name":"_tag_name","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>Tag name of the DOM element</p>\n","is_inherited":true},{"name":"_view","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"],"description":"<p>iew that owns the container</p>\n","is_inherited":true},{"name":"_widget","belongs":"Lava.view.container.Element","defined":"Lava.view.container.Element","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.widget.Standard\">Lava.widget.Standard</a>"],"description":"<p>Nearest widget in hierarchy</p>\n","is_inherited":true}]}]}