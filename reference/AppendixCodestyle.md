<lavabuild:title>Appendix B - Code style</lavabuild:title>

#Appendix B - Code style notes

##Private properties

<i>If name of a property starts with underscore - it's considered private.</i>

Naturally, you must not reference variable's private properties from outside of the variable: 
such behaviour is not natural, and it's prohibited by most of strong-typed and even many scripting languages. 
<b>Object's private properties and methods can be referenced only by own object's methods.</b>

However, there is one exception for JavaScript - the <var>self</var> variable:

```javascript
Lava.define(
'Lava.user.MyClass',
{
	_callback: null,

	init: function() {

		var self = this;

		this._callback = function() {
			self._doSomething();
		};

	}

...
```

With such pattern - private variables stay private. `_doSomething` method is still referenced by the class, 
from a method that belongs to that class. This pattern is allowed as exception, due to features of JavaScript language.

This is strictly prohibited:

```javascript
var instance = new Lava.user.MyClass();
// NEVER DO IT!
instance._callback = null; 
instance._doSomething();
```

Some widget classes have private widget properties (name of property starts with underscore). 
You must not access them from outside of the widget, just like other variables:

```javascript
var tabs_widget = Lava.view_manager.getViewById("my_tabs");
// NEVER DO IT!
tabs_widget.get("_tabs");
 // most likely, this will break the Tabs widget. Never do it.
tabs_widget.set("_tabs", new Lava.system.Enumerable());
```

##Forced code style in parsers

Parsers are very strict about spaces. These restrictions are intentional - to force good code style in community.
The following example highlights where spaces are not allowed in templates and expressions:

{literal:}
<pre>
{$<span class="doc-invalid-space">&nbsp;</span>foreach<span class="doc-invalid-space">&nbsp;</span>($widget<span class="doc-invalid-space">&nbsp;</span>.<span class="doc-invalid-space">&nbsp;</span>something<span class="doc-invalid-space">&nbsp;</span>(...))}
</pre>
{:literal}

Next example highlights where spaces are not allowed in event and role targets:

{literal:}
<pre>
$widget<span class="doc-invalid-space">&nbsp;</span>.<span class="doc-invalid-space">&nbsp;</span>something<span class="doc-invalid-space">&nbsp;</span>(...)<span class="doc-invalid-space">&nbsp;</span>; $another_widget.another_thing(...)
</pre>
{:literal}

Notice, that space is not allowed before semicolon.