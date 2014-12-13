#Packages [ALPHA]

When you create a widget - you don't need it to be one monolithic class:
you can create some helper views or widgets, which will be used by main widget.
But your class names are hardcoded in your templates, so when people extend your classes - 
they will also be faced with the need to rewrite the templates. 

Packages allow you to determine class name dynamically, without changing templates.

##Packages in ClassManager

Slash is allowed in class names - it allows you to create a "package".
Example below defines a widget "ExistingWidget", and a view "ExistingWidget/ExistingView".

```javascript
Lava.define('Lava.widget.ExistingWidget', {
	Extends: 'Lava.widget.Standard'
});

Lava.define('Lava.widget.ExistingWidget/ExistingView', {
	Extends: 'Lava.view.View'
});
```

Let's say, that you want to extend this widget with your own functionality:

```javascript
Lava.define('Lava.widget.MyWidget', {
	Extends: 'Lava.widget.ExistingWidget'
});

Lava.define('Lava.widget.MyWidget/ExistingView', {
	Extends: 'Lava.widget.ExistingWidget/ExistingView'
});
```

Note that "/ExistingView" part has not changed and remains the same.

Now you want to get constructor of the topmost overridden version of "ExistingView" from "MyWidget". 
In other words, you know that MyWidget exists, but you don't know if "MyWidget/ExistingView" exists.

```javascript
// arguments: top_parent_path, suffix
var constructor = Lava.ClassManager.getPackageConstructor('Lava.widget.MyWidget', '/ExistingView');
```

{@link Lava.ClassManager#getPackageConstructor} builds a list of "MyWidget" and it's parent classes,
and attaches the "/ExistingView" suffix to them:

```text
Lava.widget.MyWidget/ExistingView
Lava.widget.ExistingWidget/ExistingView
Lava.widget.Standard/ExistingView
Lava.view.View/ExistingView
... 
```

Then it returns the first class that exists. 

##Dynamic class name resolution

There is special syntax for templates and another kind of gateway, 
which allows you do define views and widgets with dynamic class names - {@link Lava#ClassLocatorGateway}. 
The following example expects, that MyApp class has {@link Lava.widget.Standard#name} <str>"my_app"</str>:

<lavabuild:template_result as="single_view">
<x:widget controller="MyApp">
	<template>
		<x:widget controller="$my_app/MyWidget">
		</x:widget>
		{#:$my_app/MyView()}
		{/MyView}
	</template>
</x:widget>
</lavabuild:template_result>

In case of the above syntax - the `class` of widget configs becomes {@link Lava#ClassLocatorGateway} after extension.
View configs have it as class right after template compilation.

What ClassLocatorGateway does:
- searches the hierarchy up and finds the widget. In this case, a widget with name <str>"my_app"</str>
- calls {@link Lava.widget.Standard#getPackageConstructor} of that widget, and receives the exact constructor from it
- creates the class instance and returns it

ClassLocatorGateway can not be replaced with real class cause of config inheritance: 
the same template may be used inside different widgets, with different classes, 
and they could return different constructors.

Widget's {@link Lava.widget.Standard#getPackageConstructor} calls {@link Lava.ClassManager#getPackageConstructor} by default.

If your widget uses functionality of your other widgets - it's recommended to use dynamic class names - 
this way you will not need to rewrite your templates, when you extend them.