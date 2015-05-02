
Lava.define(
'Lava.widget.DocClassView',
{
	Extends: "Lava.widget.Standard",
	Shared: ['_shared'],
	id: "class_view",

	_shared: {
		meta_storage_config: {
			fields: {
				is_expanded: {type: 'Boolean', 'default': false}
			}
		}
	},

	_event_handlers: {
		member_row_click: '_onMemberRowClick'
	},

	_modifiers: {
		render_params: '_renderParams',
		render_event_ext: '_renderEventExt',
		render_method_extended: '_renderMethodExtended'
	},

	_properties: {
		extended_scroll_names: false,
		object: null,
		descriptor: null,
		extended_descriptor: null,

		meta_storage: null // stores is_expanded for extended member descriptors
	},

	clearMetaStorage: function() {
		// each time a class is selected - the expanded state of all members needs to be forgotten
		this._properties.meta_storage && this._properties.meta_storage.destroy();
		this._set('meta_storage', new Lava.data.MetaStorage(this._shared.meta_storage_config));
	},

	_getMetaRecord: function(record) {

		return this._properties.meta_storage.get(record.get('guid')) || this._properties.meta_storage.createMetaRecord(record.get('guid'));

	},

	_onMemberRowClick: function(dom_event_name, dom_event, view, template_arguments) {

		var member_descriptor = template_arguments[0],
			may_be_expanded = member_descriptor.get('params') || member_descriptor.get('type_names') || member_descriptor.get('returns');

		// if user clicks a link inside member description - do not expand the description
		if (Firestorm.Element.getTagName(dom_event.target) != 'a') {

			if (member_descriptor.isProperties && member_descriptor.get('guid') && may_be_expanded) {
				var meta_record = this._getMetaRecord(template_arguments[0]);
				meta_record.set('is_expanded', !meta_record.get('is_expanded'));
			}

		}

	},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// modifiers

	_renderParams: function(params, table_class, scroll_prefix) {

		return params ? ApiCommon.renderParamsTable(params, table_class, scroll_prefix) : '';

	},

	_renderEventExt: function(event_descriptor) {

		return event_descriptor ? ApiCommon.renderEventExt(event_descriptor.getProperties()) : '';

	},

	_renderMethodExtended: function(descriptor, table_class) {

		var result = '';

		if (descriptor) {

			if (descriptor.get('params')) {
				result += '<b class="api-member-extended-header">Arguments</b>';
				result += ApiCommon.renderParamsTable(descriptor.get('params'), table_class);
			}
			if (descriptor.get('returns')) {
				if (result) result += '<br/>';
				result += ApiCommon.renderReturns(descriptor.get('returns'));
			}

		}

		return result;

	}

	// end
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});