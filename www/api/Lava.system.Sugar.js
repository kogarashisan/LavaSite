var page_json = {"method_chain":[{"class_name":"Lava.system.Sugar","descriptors":[{"name":"parse","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":false,"type":"function","params":[{"name":"schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugar\">_cSugar</a>"]},{"name":"raw_tag","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"parent_title","type_names":["string"]}],"param_names_string":"schema, raw_tag, parent_title","description":"<p>Parse raw tag as a widget</p>\n"},{"name":"_applyTopDirectives","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"raw_blocks","description":"<p>The content inside widget&#39;s sugar tag</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tRawTemplate\">_tRawTemplate</a>"]},{"name":"widget_config","description":"<p>The config of the widget being parsed</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]}],"param_names_string":"raw_blocks, widget_config","returns":{"description":"<p>New content without directives</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tRawTemplate\">_tRawTemplate</a>"]},"description":"<p>Inside sugar tag there may be directives at the top. Apply them to widget config and cut away</p>\n"},{"name":"_parseInclude","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"content_schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarContent\">_cSugarContent</a>"]},{"name":"raw_tag","description":"<p>Widget&#39;s tag</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"name","description":"<p>Include name</p>\n","type_names":["string"]}],"param_names_string":"content_schema, raw_tag, widget_config, name","description":"<p>Parse widget&#39;s tag content as include</p>\n"},{"name":"_parseRootAttributes","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugar\">_cSugar</a>"]},{"name":"raw_tag","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]}],"param_names_string":"schema, raw_tag, widget_config","description":"<p>Parse attributes of the widget&#39;s <code>raw_tag</code> into <code>widget_config</code></p>\n"},{"name":"_parseRootExpressionsOptionAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]},{"name":"descriptor","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarRootAttribute\">_cSugarRootAttribute</a>"]},{"name":"name","type_names":["string"]}],"param_names_string":"widget_config, attribute_value, descriptor, name","description":"<p>Parse attribute value as expression and store it as an option</p>\n"},{"name":"_parseRootIdAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]}],"param_names_string":"widget_config, attribute_value","description":"<p>Store &#39;id&#39; attribute on root tag into <a href=\"/www/doc/object/Support.html#member=_cView.id\">_cView#id</a></p>\n"},{"name":"_parseRootOptionAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]},{"name":"descriptor","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarRootAttribute\">_cSugarRootAttribute</a>"]},{"name":"name","type_names":["string"]}],"param_names_string":"widget_config, attribute_value, descriptor, name","description":"<p>Evaluate attribute value and store it in <a href=\"/www/doc/object/Support.html#member=_cView.options\">_cView#options</a></p>\n"},{"name":"_parseRootPropertyAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]},{"name":"descriptor","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarRootAttribute\">_cSugarRootAttribute</a>"]},{"name":"name","type_names":["string"]}],"param_names_string":"widget_config, attribute_value, descriptor, name","description":"<p>Store attribute as property into <a href=\"/www/doc/object/Support.html#member=_cWidget.properties\">_cWidget#properties</a></p>\n"},{"name":"_parseRootSwitchAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]},{"name":"descriptor","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarRootAttribute\">_cSugarRootAttribute</a>"]},{"name":"name","type_names":["string"]}],"param_names_string":"widget_config, attribute_value, descriptor, name","description":"<p>Same as &#39;option&#39;, but empty value is treated as boolean TRUE, to allow value-less (void) attributes</p>\n"},{"name":"_parseRootTargetsOptionAttribute","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"attribute_value","type_names":["string"]},{"name":"descriptor","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarRootAttribute\">_cSugarRootAttribute</a>"]},{"name":"name","type_names":["string"]}],"param_names_string":"widget_config, attribute_value, descriptor, name","description":"<p>Parse attribute value via <a href=\"/www/doc/object/Lava.parsers.Common.html#member=parseTargets\">Common#parseTargets</a> and store it as an option</p>\n"},{"name":"_parseStorage","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"content_schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarContent\">_cSugarContent</a>"]},{"name":"raw_tag","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]}],"param_names_string":"content_schema, raw_tag, widget_config","description":"<p>Parse widget&#39;s tag content as <a href=\"/www/doc/object/Support.html#member=_cWidget.storage\">_cWidget#storage</a></p>\n"},{"name":"_parseStorageObject","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"content_schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarContent\">_cSugarContent</a>"]},{"name":"raw_tag","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]}],"param_names_string":"content_schema, raw_tag, widget_config","description":"<p>Tags inside <code>raw_tag</code> represent properties in an object in storage</p>\n"},{"name":"_parseUnion","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"content_schema","type_names":["<a href=\"/www/doc/object/Support.html#member=_cSugarContent\">_cSugarContent</a>"]},{"name":"raw_tag","type_names":["<a href=\"/www/doc/object/Support.html#member=_cRawTag\">_cRawTag</a>"]},{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]}],"param_names_string":"content_schema, raw_tag, widget_config","description":"<p>The content of <code>raw_tag</code> is storage tags, mixed with includes</p>\n"},{"name":"_storeAttributesAsResource","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"function","params":[{"name":"widget_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cWidget\">_cWidget</a>"]},{"name":"unknown_attributes","type_names":["Object"]},{"name":"resource_name","type_names":["string"]}],"param_names_string":"widget_config, unknown_attributes, resource_name","description":"<p>Store root attributes that are not described in Sugar config as &#39;container_stack&#39; resource</p>\n"}]}],"member_chain":[{"class_name":"Lava.system.Sugar","descriptors":[{"name":"_root_attributes_handlers","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>The types of attributes that can be on root object, type =&gt; handler_name</p>\n"},{"name":"_root_map","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Handlers for root types, <a href=\"/www/doc/object/Support.html#member=_eSugarRootContentType\">_eSugarRootContentType</a></p>\n"},{"name":"_union_handlers","belongs":"Lava.system.Sugar","defined":"Lava.system.Sugar","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Tag types, allowed to be inside <a href=\"/www/doc/object/Support.html#member=_eSugarRootContentType\">_eSugarRootContentType.union</a>\n(except storage tags, which are processed separately)</p>\n"}]}]}