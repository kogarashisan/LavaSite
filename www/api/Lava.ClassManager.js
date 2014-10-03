{"member_chain":[{"descriptors":[{"name":"INLINE_SIMPLE_ARRAYS","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>Whether to serialize them and inline as a value, when building constructor,\nor slice() from original array in original object</p>\n"},{"name":"SIMPLE_TYPES","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">[ ... ]</span>","type_names":["Array.&lt;string&gt;"],"description":"<p>If an array consists of these types - it can be inlined</p>\n"},{"name":"_reserved_members","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">[ ... ]</span>","description":"<p>Special directives, understandable by ClassManager</p>\n"},{"name":"_root","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, Object&gt;"],"description":"<p>Namespaces, which can hold class constructors</p>\n"},{"name":"_sources","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>&gt;"],"description":"<p>All data that belongs to each class: everything that&#39;s needed for inheritance and building of a constructor</p>\n"},{"name":"constructors","is_private":false,"type":"member","default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, function()&gt;"],"description":"<p>Constructors for each class</p>\n"}]}],"method_chain":[{"descriptors":[{"name":"_buildRealConstructor","is_private":true,"type":"function","params":[{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]}],"param_names_string":"class_data","returns":{"description":"<p>The class constructor</p>\n","type_names":["function"]},"description":"<p>Build class constructor that can be used with the <span class=\"api-keyword\">new</span> keyword</p>\n"},{"name":"_disassemble","is_private":true,"type":"function","params":[{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},{"name":"source_object","type_names":["Object"]},{"name":"level","type_names":["number"]},{"name":"is_root","type_names":["boolean"]}],"param_names_string":"class_data, source_object, level, is_root","returns":{"type_names":["Object"]},"description":"<p>Recursively create skeletons for all objects inside class body</p>\n"},{"name":"_extend","is_private":true,"type":"function","params":[{"name":"child_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},{"name":"child_skeleton","description":"<p>The skeleton of a child object</p>\n","type_names":["Object"]},{"name":"parent_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},{"name":"parent_skeleton","description":"<p>The skeleton of a parent object</p>\n","type_names":["Object"]},{"name":"is_root","description":"<p><span class=\"api-keyword\">true</span>, when extending skeletons class bodies, and <span class=\"api-keyword\">false</span> in all other cases</p>\n","type_names":["boolean"]},{"name":"references_offset","description":"<p>Also acts as a sign of &#39;implements&#39; mode</p>\n","is_optional":true,"type_names":["number"]}],"param_names_string":"child_data, child_skeleton, parent_data, parent_skeleton, is_root, references_offset","description":"<p>Perform extend/implement operation</p>\n"},{"name":"_getNamespace","is_private":true,"type":"function","params":[{"name":"path_segments","description":"<p>Path to the namespace of a class. Must start with one of registered roots</p>\n","type_names":["Array.&lt;string&gt;"]}],"param_names_string":"path_segments","returns":{"type_names":["Object"]},"description":"<p>Get namespace for a class constructor</p>\n"},{"name":"_getPrototypeGenerator","is_private":true,"type":"function","params":[{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]}],"param_names_string":"class_data","returns":{"type_names":["function"]},"description":"<p>Build a function that creates class constructor&#39;s prototype. Used in export</p>\n"},{"name":"_implementPath","is_private":true,"type":"function","params":[{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},{"name":"path","type_names":["string"]}],"param_names_string":"class_data, path","description":"<p>Implement members from another class into current class data</p>\n"},{"name":"_registerClass","is_private":true,"type":"function","params":[{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]}],"param_names_string":"class_data","description":"<p>Put a newly built class constructor into it&#39;s namespace</p>\n"},{"name":"_serializeSkeleton","is_private":true,"type":"function","params":[{"name":"skeleton","type_names":["Object"]},{"name":"class_data","type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},{"name":"padding","type_names":["string"]}],"param_names_string":"skeleton, class_data, padding","returns":{"type_names":["Array"]},"description":"<p>Perform special class serialization, that takes functions and resources from class data and can be used in constructors</p>\n"},{"name":"define","is_private":false,"type":"function","params":[{"name":"class_path","description":"<p>Full name of the class</p>\n","type_names":["string"]},{"name":"source_object","description":"<p>Class body</p>\n","type_names":["Object"]}],"param_names_string":"class_path, source_object","description":"<p>Create a class</p>\n"},{"name":"exportClass","is_private":false,"type":"function","params":[{"name":"class_path","type_names":["string"]}],"param_names_string":"class_path","returns":{"type_names":["Object"]},"description":"<p>Server-side export function: create an exported version of a class, which can be loaded by\n<a href=\"/www/doc.html#object=Lava.ClassManager;member=loadClass\">ClassManager.loadClass</a> to save time on client</p>\n"},{"name":"getClassData","is_private":false,"type":"function","params":[{"name":"class_path","type_names":["string"]}],"param_names_string":"class_path","returns":{"type_names":["<a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a>"]},"description":"<p>Get <a href=\"/www/doc.html#object=Support;member=_cClassData\">_cClassData</a> structure for each class</p>\n"},{"name":"getClassNames","is_private":false,"type":"function","returns":{"type_names":["Array.&lt;string&gt;"]},"description":"<p>Get all names (full paths) of registered classes</p>\n"},{"name":"getConstructor","is_private":false,"type":"function","params":[{"name":"class_path","description":"<p>Full name of a class, or a short name (if namespace is provided)</p>\n","type_names":["string"]},{"name":"default_namespace","description":"<p>The default prefix where to search for the class, like <span class=\"api-string\">&quot;Lava.widget&quot;</span></p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"class_path, default_namespace","returns":{"type_names":["function"]},"description":"<p>Get class constructor</p>\n"},{"name":"getPackageConstructor","is_private":false,"type":"function","params":[{"name":"base_path","type_names":["string"]},{"name":"suffix","type_names":["string"]}],"param_names_string":"base_path, suffix","returns":{"type_names":["function"]},"description":"<p>Find a class that begins with <code>base_path</code> or names of it&#39;s parents, and ends with <code>suffix</code></p>\n"},{"name":"hasClass","is_private":false,"type":"function","params":[{"name":"class_path","type_names":["string"]}],"param_names_string":"class_path","returns":{"type_names":["boolean"]},"description":"<p>Does a class exists</p>\n"},{"name":"hasConstructor","is_private":false,"type":"function","params":[{"name":"class_path","description":"<p>Full class path</p>\n","type_names":["string"]}],"param_names_string":"class_path","returns":{"type_names":["boolean"]},"description":"<p>Does a constructor exists</p>\n"},{"name":"isInlineArray","is_private":false,"type":"function","params":[{"name":"items","type_names":["Array"]}],"param_names_string":"items","returns":{"type_names":["boolean"]},"description":"<p>Whether to inline or slice() an array in constructor</p>\n"},{"name":"loadClass","is_private":false,"type":"function","params":[{"name":"class_data","type_names":["Object"]}],"param_names_string":"class_data","description":"<p>Load an object, exported by <a href=\"/www/doc.html#object=Lava.ClassManager;member=exportClass\">ClassManager.exportClass</a></p>\n"},{"name":"registerExistingConstructor","is_private":false,"type":"function","params":[{"name":"class_path","description":"<p>Full class path</p>\n","type_names":["string"]},{"name":"constructor","description":"<p>Constructor instance</p>\n","type_names":["function"]}],"param_names_string":"class_path, constructor","description":"<p>Register an existing function as a class constructor for usage with <a href=\"/www/doc.html#object=Lava.ClassManager;member=getConstructor\">ClassManager.getConstructor</a>()</p>\n"},{"name":"registerRootNamespace","is_private":false,"type":"function","params":[{"name":"name","description":"<p>The name of the namespace</p>\n","type_names":["string"]},{"name":"object","description":"<p>The namespace object</p>\n","type_names":["Object"]}],"param_names_string":"name, object","description":"<p>Add a namespace, that can contain class constructors</p>\n"}]}]}