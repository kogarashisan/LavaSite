{"member_chain":[{"descriptors":[{"name":"DEBUG","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","description":"<p>Framework contains hundreds of debug checks. It&#39;s strictly not recommended to turn this off\nat the time of development and testing</p>\n"},{"name":"DEFAULT_STABLE_SORT_ALGORITHM","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"mergeSort\"</span>","is_constant":true,"description":"<p>Sort algorithm is called stable, if it preserves order of items that are already sorted. Suitable for ordering\ntable data by several columns</p>\n"},{"name":"DEFAULT_UNSTABLE_SORT_ALGORITHM","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"mergeSort\"</span>","is_constant":true,"description":"<p>Unstable algorithms are faster, but subsequent sorts mess the previous results</p>\n"},{"name":"LOCALE","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"en\"</span>","is_constant":true,"description":"<p>Current locale. Must not be <span class=\"api-keyword\">null</span> or <span class=\"api-string\">&quot;default&quot;</span></p>\n"},{"name":"RESOURCES_ENABLED","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","description":"<p>May be used to turn off resources globally and cut away all resource-related code</p>\n"},{"name":"SUGAR_CLASSES","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">[ ... ]</span>","is_constant":true,"description":"<p>Classes, that parse sugar. An instance of each class will be created at the time of initialization</p>\n"},{"name":"VALIDATE_OBJECT_PATHS","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether to check paths to objects in evaluated options</p>\n"},{"name":"VALIDATE_OPTIONS","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>This option should be turned off in production, but keep in mind: options, defined in template, are part of\nview configuration, and they must be valid JSON objects. Putting there anything else will most likely break\nexisting and future functionality. Options must be serializable!</p>\n"},{"name":"data.DEFAULT_FIELD_TYPE","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Basic\"</span>","is_constant":true,"description":"<p>Default class for record fields</p>\n"},{"name":"data.DEFAULT_MODULE_CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Module\"</span>","is_constant":true,"description":"<p>Default class for modules</p>\n"},{"name":"data.DEFAULT_RECORD_CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Record\"</span>","is_constant":true,"description":"<p>Default class for module records</p>\n"},{"name":"data.VALIDATE_IMPORT_DATA","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether to validate the data, which is loaded into modules.\nGenerally, it&#39;s NOT recommended to turn this off in production</p>\n"},{"name":"focus_manager.CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.system.FocusManager\"</span>","is_constant":true,"description":"<p>Class for <a href=\"/www/doc.html#object=Lava;member=focus_manager\">Lava#focus_manager</a></p>\n"},{"name":"focus_manager.IS_ENABLED","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Is FocusManager enabled</p>\n"},{"name":"parsers.EXPORT_STRINGS","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","is_constant":true,"description":"<p>When parsing resources: whether to call <a href=\"/www/doc.html#object=Lava.resources;member=exportTranslatableString\">resources#exportTranslatableString</a></p>\n"},{"name":"parsers.PRESERVE_VIEW_NAME","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","is_constant":true,"description":"<p>Whether to keep original view names in compiled templates, or leave just classes</p>\n"},{"name":"parsers.view_name_to_class_map.expression","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Expression\"</span>"},{"name":"parsers.view_name_to_class_map.foreach","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Foreach\"</span>"},{"name":"parsers.view_name_to_class_map.if","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"If\"</span>"},{"name":"parsers.view_name_to_class_map.view","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"View\"</span>"},{"name":"popover_manager.CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.system.PopoverManager\"</span>","is_constant":true,"description":"<p>Class for <a href=\"/www/doc.html#object=Lava;member=popover_manager\">Lava#popover_manager</a></p>\n"},{"name":"popover_manager.HIDE_EMPTY_TOOLTIPS","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether it will ignore tooltips with no text</p>\n"},{"name":"popover_manager.IS_ENABLED","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Is PopoverManager enabled</p>\n"},{"name":"system.ALLOW_REQUEST_ANIMATION_FRAME","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p><a href=\"/www/doc.html#object=Lava.Cron\">Lava.Cron</a> uses requestAnimationFrame, if browser supports it</p>\n"},{"name":"system.APP_CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.system.App\"</span>","is_constant":true,"description":"<p>Class for <a href=\"/www/doc.html#object=Lava;member=app\">Lava#app</a></p>\n"},{"name":"system.DEFAULT_EVENTS","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">[ ... ]</span>","is_constant":true,"description":"<p>ViewManager events (routed via templates), which are enabled by default, so does not require a call to lendEvent().\nEvents from this list must have a valid <code>target</code> property.</p>\n"},{"name":"system.REFRESH_INFINITE_LOOP_THRESHOLD","is_private":false,"type":"member","default_value":3,"is_constant":true,"description":"<p>How much times a scope may be refreshed during one refresh loop, before it&#39;s considered\nan infinite refresh loop</p>\n"},{"name":"system.VIEW_MANAGER_CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.system.ViewManager\"</span>","is_constant":true,"description":"<p>Class for <a href=\"/www/doc.html#object=Lava;member=view_manager\">Lava#view_manager</a></p>\n"},{"name":"view.DEFAULT_CLASS_LOCATOR_GATEWAY","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.ClassLocatorGateway\"</span>","is_constant":true,"description":"<p>Gateway, which constructs the views with dynamic class names</p>\n"},{"name":"view.VALIDATE_CLASS_NAMES","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether to validate content of the &#39;class&#39; attribute on Element containers</p>\n"},{"name":"view.VALIDATE_STYLES","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether to validate content of the &#39;style&#39; attribute on Element containers</p>\n"},{"name":"widget.ALLOW_REDEFINITION","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","description":"<p>Whether a global widget config may be overwritten</p>\n"},{"name":"widget.DEFAULT_CLASS_LOCATOR_GATEWAY","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.ClassLocatorGateway\"</span>","is_constant":true,"description":"<p>Constructor, that resolves class names</p>\n"},{"name":"widget.DEFAULT_EXTENDER","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Standard\"</span>","description":"<p>Default config extension algorithm</p>\n"},{"name":"widget.DEFAULT_EXTENSION_GATEWAY","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.WidgetConfigExtensionGateway\"</span>","is_constant":true,"description":"<p>Constructor, that extends configs</p>\n"},{"name":"widget.DEFAULT_SUGAR_CLASS","is_private":false,"type":"member","default_value":"<span class=\"api-string\">\"Lava.system.Sugar\"</span>","is_constant":true,"description":"<p>Default class that parses widget&#39;s sugar</p>\n"},{"name":"widget.VALIDATE_PROPERTY_TYPES","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Whether to validate the values, that are <code>set()</code> to widget instances.\nMay be treated same as DEBUG switch (most likely, you will want to turn this off in production)</p>\n"}]}]}