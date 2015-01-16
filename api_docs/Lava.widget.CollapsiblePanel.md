
Panel has default templates for title and body content - they display `title` and `content` widget properties.
For example:

```xml
<x:widget extends="CollapsiblePanel">
	<properties>
		{
			title: "Test title",
			content: "Test content"
		}
	</properties>
</x:widget>
```

But when you define a panel with syntax sugar - sugar replaces the default templates with yours.

```xml
<collapsible-panel>
	<x:properties>
		{
			title: "You will NOT see this title",
			content: "You will NOT see this content"
		}
	</x:properties>
	<title>This is the title that you will see!</title>
	<content>You will see this content!</content>
</collapsible-panel>
```

So if you assign `title` and `content` properties while you have replaced the templates - you will not see any changes.
Here is another example with static title and dynamic content:

```xml
<collapsible-panel>
	<x:properties>
		{
			content: "Dynamic content"
		}
	</x:properties>
	<title>This static title will never change</title>
</collapsible-panel>
```

It's recommended to have a look at the sources of CollapsiblePanel widget and it's controller.