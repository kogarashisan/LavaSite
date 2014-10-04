
#x:assign directive

Directive sets {@link _cView#assigns} for view or widget config.

###Example

<lavabuild:template_result as="single_view">
<checkbox>
	<x:assign name="is_checked">node.is_checked</x:assign>
</checkbox>
</lavabuild:template_result>