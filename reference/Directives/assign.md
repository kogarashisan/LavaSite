
#x:assign directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('assign');</script>

Directive sets {@link _cView#assigns} for view or widget config.

##Example

<lavabuild:template_result as="single_view">
<checkbox>
	<x:assign name="is_checked">node.is_checked</x:assign>
</checkbox>
</lavabuild:template_result>

Directive content can be any valid expression.

You can set assigns in x:define via &lt;assigns&gt; tag, but it's recommended to move them to inline widget definition.

##Once attribute

Assign supports an optional attribute `once` - when it's set, expression result will be evaluated and assigned only once
in view constructor.

```xml
<x:assign name="is_checked" once="true">node.is_checked</x:assign>
```

##Architecture

Assigns are supported by {@link Lava.scope.PropertyBinding} class - it creates an Argument from assign config,
and updates it's own value when argument changes. Assigns are created in view constructor, 
before any other PropertyBinding instances.