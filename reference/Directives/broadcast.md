
#x:broadcast directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('broadcast');</script>

Sets {@link _cWidget#broadcast}

###Example

<lavabuild:template_result as="single_view">
<accordion>
	<x:broadcast 
		panel_expanding="#page.accordion_panel_expanding"
		panel_collapsing="#page.accordion_panel_collapsing"></x:broadcast>
	<panels>
		<panel>
			<title>Panel 1</title>
			<content>Content 1</content>
		</panel>
		<panel>
			<title>Panel 2</title>
			<content>Content 2</content>
		</panel>
	</panels>
</accordion>
</lavabuild:template_result>

Here, &lt;accordion&gt; is syntax sugar for Accordion tag.

You can set broadcast targets for a global widget in x:define (via &lt;broadcast&gt; tag),
but it's not recommended to do so. It's recommended to use broadcast on inline widgets.

Targets are parsed by {@link Lava.parsers.Common#parseTargets}.