<lavabuild:title>Resources definition</lavabuild:title>

#Resources definition and format

The format, described below, applies to content of &lt;x:resources&gt; directive, and to the content of &lt;resources&gt;
tag in widget definition.

See also:
- {@link reference:Directives.define_resources} directive
- {@link reference:Resources}

##Resource types

###&lt;options&gt;

Allows you to store any object, array, string or JavaScript literal in resources object.
Content of the directive is parsed as any other options tag.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="default">
		<options path="DATA">{test: true}</options>
	</resources>
</x:widget>
</lavabuild:template_result>

###&lt;translate&gt;

Define a translatable string.

You can also supply `description` attribute - human-understandable description for this string,
for use in localization tools. May also be used by translators to differentiate between strings with equal source,
which are translated differently depending on context.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="default">
		<translate path="HELLO_STRING" description="Standard hello world message">
			Hello world!
		</translate>
	</resources>
</x:widget>
</lavabuild:template_result>

###&lt;ntranslate&gt;

Define a translatable plural string (string changes, depending on number).
You can also use `description` attribute.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="default">
		<ntranslate path="MESSAGES_STRING" description="Test string">
			<string>There is one message in your inbox</string>
			<string>There are $1 messages in your inbox</string>
		</ntranslate>
	</resources>
</x:widget>
</lavabuild:template_result>

Number of plural forms varies among languages. For example, English has two, and Russian has three plural forms.
Each Lava locale has `pluralize(n)` method, which returns the index of correct plural form.

You must provide correct number of plural &lt;string&gt;s, which corresponds to number of plural forms in locale.

###&lt;container&gt;

Describe container data: properties, styles and classes. Allows to add/remove existing data, or replace it completely.

Example: replace operations

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="default">
		<container path="panel.MAIN_CONTAINER"
			static_classes="class1 class2"
			static_styles="background-color: green">
			<static_properties property1="value1" property2="value2"></static_properties>
		</container>
	</resources>
</x:widget>
</lavabuild:template_result>

Example: add/remove operations

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="default">
		<container path="panel.MAIN_CONTAINER"
			remove_properties="property1 property2 property3"

			remove_classes="class1 class2 class3"
			add_classes="class4 class5"

			remove_styles="style1 style2 style3"
			add_styles="width: 100px;height: 100px">
			<add_properties property1="value1" property2="value2"></add_properties>
		</container>
	</resources>
</x:widget>
</lavabuild:template_result>

If you want to add or replace properties in container - there must be either &lt;static_properties&gt; or
&lt;add_properties&gt; tag inside the &lt;container&gt;. They also must not have `class` or `style`
attributes, as they are specified separately.

Every "static_" operation replaces all old content. `static_properties` replaces container's properties,
`static_styles` replaces styles, and `static_classes` replaces classes - so they are not allowed to be used together
with "add_" or "remove_" operations. There may be either "static_" operation or add/remove operations for classes,
styles or properties.

##Strings export

While parsing resources, Lava calls {@link Lava.resources#exportTranslatableString} method. 
You may override it to perform string export for translation tools like Poedit. It's better to do it on server, of course.

You may notice, that there is no way to specify "context" attribute for a string. Context may be needed by translation tools
to differentiate between equal source strings with different meaning. It's expected, that if you need context - you
will be able to generate it yourself from widget title and path.