{"member_chain":[{"descriptors":[{"name":"ATTRIBUTE_ESCAPE_REGEX","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">/ ... /</span>","description":"<p>Characters that nust be escaped in HTML attributes</p>\n"},{"name":"HTML_ESCAPE_REGEX","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">/ ... /</span>","description":"<p>Characters which must be escaped in a string, which is part of HTML document</p>\n"},{"name":"QUOTE_ESCAPE_REGEX","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">/ ... /</span>","description":"<p>Special characters, which must be escaped when serializing (quoting) a string</p>\n"},{"name":"TEXTAREA_ESCAPE_REGEX","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">/ ... /</span>","description":"<p>Characters that must be escaped when creating a &lt;textarea&gt; tag with initial content</p>\n"},{"name":"UNESCAPE_REGEX","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">/ ... /</span>","description":"<p>Characters, which are escaped by the browser, when getting innerHTML of elements</p>\n"},{"name":"escape_chars","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>HTML special entities that must be escaped in attributes and similar cases</p>\n"},{"name":"quote_escape_map","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Map for escaping special characters</p>\n"},{"name":"unescape_chars","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","description":"<p>Reverse map of HTML entities to perform unescaping</p>\n"}]}],"method_chain":[{"descriptors":[{"name":"camelCase","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Turn &quot;dashed-string&quot; into &quot;camelCased&quot; string</p>\n"},{"name":"capitalize","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Uppercase the first letter of all words</p>\n"},{"name":"escape","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]},{"name":"regex","description":"<p>A regular expression object, such as <a href=\"/www/doc.html#object=Firestorm.String;member=HTML_ESCAPE_REGEX\">String#HTML_ESCAPE_REGEX</a></p>\n","type_names":["RegExp"]}],"param_names_string":"string, regex","returns":{"type_names":["string"]},"description":"<p>Escape HTML entities found by <code>regex</code> argument</p>\n"},{"name":"escapeStringForRegExp","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Before constructing regular expressions from user input - you must escape them</p>\n"},{"name":"hyphenate","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Turn &quot;camelCased&quot; string into &quot;dashed-string&quot;</p>\n"},{"name":"quote","is_private":false,"type":"function","params":[{"name":"string"}],"param_names_string":"string","returns":{"type_names":["*"]},"description":"<p>Serialize a string into it&#39;s JavaScript representation. If you eval() the result - you will get the original value</p>\n"},{"name":"repeat","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]},{"name":"count","type_names":["number"]}],"param_names_string":"string, count","returns":{"type_names":["string"]},"description":"<p>Repeat string <code>count</code> times</p>\n"},{"name":"unescape","is_private":false,"type":"function","params":[{"name":"string","type_names":["string"]}],"param_names_string":"string","returns":{"type_names":["string"]},"description":"<p>Unescape html entities which are escaped by browser (see <a href=\"/www/doc.html#object=Firestorm.String;member=UNESCAPE_REGEX\">String#UNESCAPE_REGEX</a>)</p>\n"}]}]}