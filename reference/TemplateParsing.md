<lavabuild:title>Template parsing</lavabuild:title>

#Template parsing in depth

Template parsing happens in two stages: first, TemplateParser disassembles the string with template into AST
(Abstract Syntax Tree) in {@link Lava.TemplateParser#parseRaw}, then AST is transformed into view and widget configs
in {@link Lava.parsers.Common#compileTemplate}. Compilation also converts HTML tags: tags that belong to sugar - 
are converted to widget configs, tags with control attributes - to container configs, and common tags are serialized 
back to strings.

The following construct is called a "block":

```xml
{#blockname()}
	...
{/blockname}
```

<b>Parsers are very strict about code style and validity</b>, for example: there must be no space before and after the block name,
and all non-void HTML tags must be closed properly.

Technically, any block can have an argument, hash options, and elseif/else templates:

```xml
{#blockname(argument1) option1="value1" option2="value2"}
	...
{elseif(argument2)}
	...
{elseif(argument3)}
	...
{else}
	...
{/blockname}
```

Only "if" block is able to use elseif/else sections, and only certain hash options are allowed, but
when TemplateParser transforms the template into AST - it does not check tree validity. 
This validation is done when templates are compiled, in {@link Lava.parsers.Common#compileTemplate}.

Argument and templates are technically allowed for any block, but "view" ({@link Lava.view.View}) does not use arguments, 
and "expression" ({@link Lava.view.Expression}) can not have templates - these checks are done in DEBUG mode at run time.

Symbol <str>"#"</str> in the block opening tag means that block does not have a container. 
This symbol can be replaced with <str>"$"</str> to give block a Morph container. Again, this choice is controlled at
the stage of compilation. Block can also be given an Element container, with {@link reference:ElementSyntax|special syntax}.

Quotes around hash values are optional, so you can write `option1=value1`. 
You can also write options without a value, which are assigned <kw>true</kw> in this case:

<lavabuild:template_result as="single_view">
{#expression(html) escape_off}{/expression}
</lavabuild:template_result>

## Lexer escape sequences

These sequences are converted to their corresponding equivalents:

{literal:}

<table class="api-member-table">
<thead><tr><td>Sequence</td><td>Equivalent</td></tr></thead>
<tbody>
<tr><td>{:L:}</td><td>{</td></tr>
<tr><td>{:R:}</td><td>}</td></tr>
<tr><td>{:LT:}</td><td>&lt;</td></tr>
<tr><td>{:GT:}</td><td>&gt;</td></tr>
<tr><td>{:AMP:}</td><td>&amp;</td></tr>
</tbody>
</table>

{:literal}

## Lexer switches

```text
&#x7b;literal:} ... &#x7b;:literal}
```

Content of the 'literal' switch is not parsed, and inserted into template as text. Example, where this can be useful:

```xml
<x:assign name="pad">
	{literal:}
		(foreach_index == count - 1)
			? pad + '<div class="lava-tree-pad"></div>'
			: pad + '<div class="lava-tree-pad-line"></div>'
	{:literal}{:L:}:literal}{literal:}
</x:assign>
```

Without the "literal" switch the &lt;div&gt; tags inside expression would be parsed as real tags with attributes.

##Template regions

Content of the following regions is not parsed and inserted as-is:
- html comments,
- CDATA sections,
- &lt;style&gt; tags
- &lt;script&gt; tags (see exceptions below)

##Script fragments

There are situations, when you need to preserve certain regions of template from parsing by browser.
This can be done with the following construct:

```xml
<script type="lava/fragment">
	This &lt;text&gt; will not be parsed or escaped.
</script>
```

Text inside &lt;script&gt; tags is not parsed by browser. Scripts with type="lava/fragment" are handled by TemplateParser
transparently, as if there was no &lt;script&gt; tag around the content. Content of fragments is parsed as any template.

Example usage:

```xml
<table x:type="view">
	<script type="lava/fragment">
		{#foreach(rows) as=row}
			<tr>
				<td>{#>row.first_name}</td>
				<td>{#>row.last_name}</td>
			</tr>
		{/foreach}
	</script>
</table>
```

Without the &lt;script&gt; tag, the text with "foreach" inside the &lt;table&gt; tag would be invalid, and would be removed by browser.
You may also use this wrapper to prevent escaping of "&lt;&gt;&amp;" symbols.

Warning: currently you cannot break the block boundary with fragments, but there is a task to fix that.
The following construct is invalid for now:
```xml
<table x:type="view">
	<script type="lava/fragment">
		{#foreach(rows) as=row}
			</script>
			<tr>
				<td>{#>row.first_name}</td>
				<td>{#>row.last_name}</td>
			</tr>
			<script type="lava/fragment">
		{/foreach}
	</script>
</table>
```

##Script equivalents

TemplateParser allows you to take advantage of IDE syntax highlighting while writing JavaScript objects inside templates.

```xml
<script type="application/json" x:equiv="options">
	{
		test: true
	}
</script>
```

Is equivalent to:

```xml
<options type="application/json">
	{
		test: true
	}
</options>
```

As you see, the &lt;script&gt; tag is internally changed to &lt;options&gt;. As a side-effect, the "type" attribute
is preserved.

It does not make any difference, which syntax you choose, except that text inside the &lt;script&gt; tags is not parsed.
In your templates you can use both kinds of syntax.

Tip: Lava uses unrecognizable `type="lava/options"` instead of "application/json" to avoid conflicts with user IDE environments.
For example, to take full advantage of object syntax highlighting in PhpStorm IDE - you should disable JSON validation in settings -
this will allow you to use "application/json" type.

##Common view options

You can also supply {@link _cView#label} and {@link _cView#id} via hash options of any view.
<lavabuild:codeblocks>
	<codeblock lang="xml" title="Template">
{#if(something) label="my_if" id="my_if_id"}
	...
{/if}
	</codeblock>
	<codeblock lang="javascript" title="Script">
var my_if = Lava.view_manager.getViewById("my_if_id");
	</codeblock>
</lavabuild:codeblocks>

##Custom view classes

When a template is compiled - block name is converted to a view class.
For example, "if" block converts to "If" view class. These mappings are defined in 
{@link Lava.schema#parsers.view_name_to_class_map.expression|Lava.schema#parsers.view_name_to_class_map}.

If there is no mapping in the schema - than view class equals to block name, so you can create views with custom classes:

<lavabuild:template_result as="single_view">
{#MyView()}
	...
{/MyView}
</lavabuild:template_result>

This will create a view with "Lava.view.MyView" class.

##View containers

Every opening view block has a prefix:
- "#" - defines a view without container
- "$" - defines a view with Morph container

Example - view with Morph container:
<lavabuild:template_result as="single_view">
{$if($widget.show_me)}
	I'm visible
{/if}
</lavabuild:template_result>

You can also wrap a view with an Element container by using `x:type="container"`:
<lavabuild:template_result as="single_view">
<div x:type="container">
	{#if($widget.show_me)}
		I'm visible
	{/if}
</div>
</lavabuild:template_result>

Wrapped view must be container-less ("#"). You can also use any other benefits of Element containers,
like attribute and style bindings or resources.

See also: {@link reference:Directives.container_config}