
Both Select and MultipleSelect widgets have `value` property, but the key difference is that `value` of Select 
is a string, while `value` of MultipleSelect is an array of strings.

Template is bound to `optgroups` property. If group has `label` property - then it's rendered inside &lt;optgroup&gt; tag.
Here are the usage examples for both widgets, with only difference in `value` property:

```xml
<x:widget extends="Select">
	<properties>
		{
			optgroups: [
				{
					options: [
						{title: "Option 1", value: "option_1"},
						{title: "Option 2", value: "option_2"},
						{title: "Option 3", value: "option_3", is_disabled: true}
					]
				}
			],
			value: "option_2"
		}
	</properties>
</x:widget>

<x:widget extends="MultipleSelect">
	<properties>
		{
			optgroups: [
				{
					options: [
						{title: "Option 1", value: "option_1"},
						{title: "Option 2", value: "option_2"},
						{title: "Option 3", value: "option_3", is_disabled: true}
					]
				}
			],
			value: ["option_2"]
		}
	</properties>
</x:widget>
```

Each option can have `value`, `title` and `is_disabled`. 
Example multiple select with groups:

```xml
<x:widget extends="MultipleSelect">
	<properties>
		{
			optgroups: [
				{
					options: [
						{title: "Option without group 1", value: "option_1"},
						{title: "Option without group 2", value: "option_2"}
					]
				},{
					label: "This is group 1",
					options: [
						{title: "Group 1.1", value: "g_11"},
						{title: "Group 1.2", value: "g_12"}
					]
				},{
					label: "This is group 2",
					options: [
						{title: "Group 2.1", value: "g_21"},
						{title: "Group 2.2", value: "g_22"}
					]
				}
			]
		}
	</properties>
</x:widget>
```

Options from the first group will be rendered without &lt;optgroup&gt; tag.