
#x:broadcast directive

Sets {@link _cWidget#broadcast}

###Example

<lavabuild:template_result as="single_view">
<accordion>
	<x:broadcast panel_expanding="#page.accordion_panel_expanding"
		panel_collapsing="#page.accordion_panel_collapsing"></x:broadcast>
</accordion>
</lavabuild:template_result>