
Primary usage of types:
- run-time checks for correctness of widget property values
- parse strings from templates

Note, that these types do not correspond to JavaScript types.
For example: both Integer and Percent types expect numbers, but Integer type will allow only numbers without fractional part,
while Percent only allows numbers between 0 and 1.

All type objects have the following methods:
<table class="api-member-table" cellspacing="0" cellpadding="0">
	<thead>
		<tr>
			<td class="api-flag-td"></td>
			<td>Method name</td>
			<td>Description</td>
		</tr>
	</thead>
	<tbody>
		<tr data-scroll-name="member:_createEventWrapper" class="api-member-row api-member-row-expandable">
			<td class="api-flag-td"><img title="Public method" src="/www/design/public-method.gif"></td>
			<td class="api-name-column">fromString(value:string):\*</td>
			<td class="api-description-td"><p>Parse string and return the value of given type. Will throw exception, if string is invalid</p></td>
		</tr>
		<tr data-scroll-name="member:_createEventWrapper" class="api-member-row api-member-row-expandable">
			<td class="api-flag-td"><img title="Public method" src="/www/design/public-method.gif"></td>
			<td class="api-name-column">isValidValue(value:\*):boolean</td>
			<td class="api-description-td"><p>Checks if `value` belongs to type. For example: Lava.types.Boolean will accept only <kw>true</kw> and <kw>false</kw></p></td>
		</tr>
		<tr data-scroll-name="member:_createEventWrapper" class="api-member-row api-member-row-expandable">
			<td class="api-flag-td"><img title="Public method" src="/www/design/public-method.gif"></td>
			<td class="api-name-column">isValidString(value:string):boolean</td>
			<td class="api-description-td"><p>Check a string before parsing</p></td>
		</tr>
		<tr data-scroll-name="member:_createEventWrapper" class="api-member-row api-member-row-expandable">
			<td class="api-flag-td"><img title="Public method" src="/www/design/public-method.gif"></td>
			<td class="api-name-column">fromSafeString(value:string):\*</td>
			<td class="api-description-td"><p>Parse type from a string, but assume that string is valid. Use after checking with isValidString()</p></td>
		</tr>
	</tbody>
</table>