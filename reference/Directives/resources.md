
#x:resources directive

Defines {@link _cWidget#resources} for a widget

###Example

<lavabuild:template_result as="single_view">
<collapsible-panel>
	<x:resources locale="default">
		<container path="COLLAPSIBLE_PANEL_CONTAINER" add_classes="panel-default"></container>
	</x:resources>
	<title>...</title>
	<content>...</content>
</collapsible-panel>
</lavabuild:template_result>