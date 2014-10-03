{"member_chain":[{"descriptors":[{"name":"SEPARATORS","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["number"],"description":"<p>Allowed separators between expressions</p>\n"}]}],"method_chain":[{"descriptors":[{"name":"parse","is_private":false,"type":"function","params":[{"name":"input","description":"<p>Source code</p>\n","type_names":["string"]},{"name":"separator","description":"<p>Allowed separator, when parsing multiple expressions</p>\n","is_optional":true,"type_names":["Lava.ExpressionParser.SEPARATORS"]}],"param_names_string":"input, separator","returns":{"type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cArgument\">_cArgument</a>&gt;"]},"description":"<p>Parse expressions</p>\n"},{"name":"parseRaw","is_private":false,"type":"function","params":[{"name":"input","description":"<p>Expression source</p>\n","type_names":["string"]},{"name":"separator","description":"<p>Allowed separator, when parsing multiple expressions</p>\n","is_optional":true,"type_names":["Lava.ExpressionParser.SEPARATORS"]}],"param_names_string":"input, separator","returns":{"type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cRawArgument\">_cRawArgument</a>&gt;"]},"description":"<p>Parse expressions, but do not create evaluator functions from their source code</p>\n"},{"name":"parseScopeEval","is_private":false,"type":"function","params":[{"name":"input","description":"<p>Expression source</p>\n","type_names":["string"]}],"param_names_string":"input","returns":{"type_names":["<a href=\"/www/doc.html#object=Support;member=_cScopeLocator\">_cScopeLocator</a>"]},"description":"<p>Parse expression which represents a single path</p>\n"},{"name":"parseWithTail","is_private":false,"type":"function","params":[{"name":"config_ref","type_names":["Object"]},{"name":"separator","type_names":["Lava.ExpressionParser.SEPARATORS"]}],"param_names_string":"config_ref, separator","returns":{"type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cArgument\">_cArgument</a>&gt;"]},"description":"<p>Parse expressions, which are followed by a closing brace (and anything after it).\nStores the length of unparsed content in <code>config_ref.tail_length</code></p>\n"},{"name":"parseWithTailRaw","is_private":false,"type":"function","params":[{"name":"config_ref","type_names":["Object"]},{"name":"separator","type_names":["Lava.ExpressionParser.SEPARATORS"]}],"param_names_string":"config_ref, separator","returns":{"type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_cRawArgument\">_cRawArgument</a>&gt;"]},"description":"<p>Same as <a href=\"/www/doc.html#object=Lava.ExpressionParser;member=parseWithTail\">ExpressionParser.parseWithTail</a>, but does not create evaluator functions from source</p>\n"}]}]}