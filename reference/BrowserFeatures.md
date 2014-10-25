<lavabuild:title>Browser features</lavabuild:title>

#Browser parsing features and common pitfalls

You must know how browser behaves, when it parses HTML. This article aims to save some time for novice developers
and provide better understanding on several design aspects of Lava framework.

##HTML parsing and validity

First of all, text inside &lt;script&gt; tags is not parsed. If you want to include some invalid HTML in your page,
which is however a valid Lava template, you must enclose it inside a &lt;script&gt; tag.
Framework provides special support for this kind of inclusion, see documentation on template parsing.

Tags are not valid everywhere on page. In example below, the panel has "title" and "content" tags:
```xml
<collapsible-panel>
	<title>The title</title>
	<content>The content</content>
</collapsible-panel>
```

But &lt;title&gt; is a reserved tag name: it's valid only inside &lt;head&gt;, and must not contain other tags.
If browser finds any tags inside it - they will be removed for validity reasons.

You can write HTML, that will be perfectly valid Lava template, but when you retrieve the innerHTML of panel tag
for parsing - you will find that tags inside "title" are already removed.

```xml
<title>The title. <b>This all will be removed</b></title>
```

Framework solves this by providing special &lt;script&gt; blocks, that preserve original template from modification.

```xml
<!-- Method 1 -->
<collapsible-panel>
	<script x:equiv="title" type="lava/template">Now you can write <b>anything</b> here</script>
	<content>The content</content>
</collapsible-panel>

<!-- Method 2 -->
<collapsible-panel>
	<script type="lava/fragment">
		<title>Now you can write <b>anything</b> here</title>
	</script>
	<content>The content</content>
</collapsible-panel>
```

Note the type="lava/template" attribute: it's needed by browser (otherwise it will try to execute the script as JavaScript).

Text between &lt;table&gt; and &lt;tr&gt; tags is also forbidden, but sometimes you will want to iterate over a set of rows:

```xml
<script type="lava/fragment">
	<table>
		{#foreach(rows) as=row}
			<tr>
				<td>{#>row.first_name}</td>
				<td>{#>row.last_name}</td>
			</tr>
		{/foreach}
	</table>
</script>
```

See reference on templates for explanation.

##Void tags

Tags that do not need a closing tag are called "void". This list includes tags like "br", "img" or "input".

```xml
<!-- before HTML5 -->
<img src="image.png" />
<!-- since HTML5 -->
<img src="image.png">
```

Notice the slash at the end of the first image tag. Tags that end with "/&gt;" are called selfclosing.

Since HTML5 - there are no selfclosing tags anymore: void tags do not require selfclosing suffix.
And even worse: if suffix exists - it will be ignored. This means, that you cannot write custom selfclosing tags, like this:

```xml
<!-- Invalid -->
<x:my_directive />
```

In HTML5 mode - there will be an opening &lt;x:my_directive&gt; tag, without the corresponding closing tag,
and anything that follows - will be inside that tag.
Browser will automatically close it, when it's parent tag is closed,
but Lava template parser will not parse that invalid result:

```xml
<div>
	<x:my_directive />
	this is invalid
</div>
<!-- this is equivalent to: -->
<div>
	<x:my_directive>
		this is invalid
	</x:my_directive>
</div>
```

Lava parsers understand void and selfclosing tags, but you should remember, that browser behaves differently
in HTML4 and HTML5 modes, so you must explicitly close all non-void tags - this can save you a lot of time on debugging.

See also: {@link Lava#VOID_TAGS}

##Escaped characters

If you get innerHTML from a &lt;div&gt; and some other tags - browser will escape "&lt;", "&gt;" and "&amp;" symbols.
These symbols are used in expressions as comparison and logical operators, but there is no need to worry about it:
ExpressionParser understands these entities and converts them back to their normal form.
If this matters to you - than you can enclose the template into &lt;script&gt; tag.

What's more important, is that when you get values of attributes from JavaScript - entities are
unescaped by browser. This matters, when you define tooltips.

<lavabuild:codeblocks>
	<codeblock title="Template" lang="xml">
<body data-tooltip="&lt;b&gt;test&gt;/b&gt;">...
	</codeblock>
	<codeblock title="Javascript" lang="javascript">
Firestorm.Element.getAttribute(document.body, "data-tooltip"); // will return "<b>test</b>"
	</codeblock>
</lavabuild:codeblocks>

##JavaScript features and issues

First of all, you can return an object from constructor, and it will be treated as result of the <kw>new</kw> operator.
This feature is used in the process of widget config extension.

```javascript
function irregularConstructor() {
	return {
		test: 1
	}
};

var instance = new irregularConstructor();
instance.test; // 1
```

Second, there are performance related issues:
you should not add new members to objects, which were constructed with <kw>new</kw> operator.
And especially, never use <kw>delete</kw> operator on constructed objects.

<kw>delete</kw> operator may significantly slow down your code, so try to avoid it whenever possible.
For more information, read V8 optimization articles in the internet.