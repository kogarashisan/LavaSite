<lavabuild:title>View containers</lavabuild:title>

#Containers

Each view can have a container. Views with containers can update themselves independently from their parent views.
If view does not have a container - than it asks it's parent to update it.

Here is an example of <i>expression</i> view without container:

```xml
<body lava-app="HelloApp">
	Hello {#> your_name}!
</body>
```

When the page renders, you will see something like this in your browser:

```xml
<body lava-app="HelloApp" id="e1">
	Hello World!
</body>
```

As you see, there is no possibility to update <str>"World"</str> independently from it's surrounding text -
it was rendered and inserted into the page as one text element.
When `your_name` property changes - the expression view will ask it's <b>nearest parent with container</b> to update itself.
In this case, it will be HelloApp widget: it will render and replace everything inside the &lt;body&gt; tag -
it's container.

##Morph containers

This container represents two &lt;script&gt; tags with content between them, like this:

```xml
Hello <script id='c123s' type='x'></script>World<script id='c123e' type='x'></script>!
```

Content between the &lt;script&gt; tags can be replaced.
To give your views a {@link Lava.view.container.Morph|Morph} container - you should use "$" sign instead of "#":

```xml
<body lava-app="HelloApp">
	Hello {$> your_name}!
	
	{$if(your_name.length < 3)}
		Error: your name is too short
	{/if}
</body>
```

Now, if `your_name` changes - views will update themselves independently from each other.

##Element containers

You can give your views an {@link Lava.view.container.Element|Element} container with special "control attribute" syntax:

```xml
<body lava-app="HelloApp">
	<div x:type="container">
		{#if(your_name.length < 3)}
			Error: your name is too short
		{/if}
	</div>
</body>
```

Without `x:type="container"` attribute - the &lt;div&gt; element would be common text. 
This attribute transforms it into config for Element container class and gives that container to the view inside it.
When the page renders - you will see a &lt;div&gt; inside &lt;body&gt;.

##Exercise

Each view and widget in Lava has global unique identifier (GUID).
Open the <a href="/www/demos/tutorials/TemplatesIntro_1.html" target="_blank">previous example</a> in new window and inspect it's DOM structure.
You will see automatically generated IDs on all container elements - they equal to their view's GUIDs.

You can get view and widget instances by their GUIDs. Make sure, that body has `id="e1"` and type in console:

```javascript
var hello_widget = Lava.view_manager.getViewByGuid(1);
```

This will get the owner of the &lt;body&gt; container - the HelloApp widget instance (notice, that "e" prefix was removed). 
Now you can set it's properties. Type in console:

```javascript
hello_widget.set('your_name', 'Jack');
```

You will not see changes immediately: framework caches all changes for performance reasons. 
To bring your changes to DOM - you can click anywhere on page, or make a call to

```javascript
Lava.refreshViews();
```

Each DOM event handler ends with a call to `refreshViews`, that's why you see changes when you click on page.
This matters when you make AJAX calls - they all should end with a call to `Lava.refreshViews()`.