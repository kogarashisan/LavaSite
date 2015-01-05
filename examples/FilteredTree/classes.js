
Lava.define(
'Lava.widget.FilteredTreeExample',
{
	Extends: 'Lava.widget.Tree',

	_meta_storage_config: {
		fields: {
			is_expanded: {type: 'Boolean'},
			is_expandable: {type: 'Boolean'},
			is_visible: {type:'Boolean'},
			lower_case_title: {type: 'Basic', "default": ''},
			formatted_title: {type: 'Basic', "default": ''}
		}
	},

	_property_descriptors: {
		filter_text: {setter: '_setFilterText'}
	},

	_properties: {
		filter_text: ''
	},

	_lowercase_filter_text: '',
	_filter_reg_exp: null,

	CREATE_META_STORAGE: true,

	_meta_storage_columns: {
		is_expandable: true
	},

	init: function(config, widget, parent_view, template, properties) {

		this._properties.records = this._prepareTree(api_tree_source);

		this.Tree$init(config, widget, parent_view, template, properties);

		this._filterTree(this._properties.records);

	},

	_prepareTree: function(records) {

		var i = 0,
			count = records.length,
			item,
			result = new Lava.system.Enumerable();

		for (;i < count; i++) {

			item = new Lava.mixin.Properties(records[i]);
			item.set('guid', Lava.guid++);

			if (records[i].children) {

				item.set('children', this._prepareTree(records[i].children));

			}

			result.push(item);

		}

		return result;

	},

	_setRecords: function(value, name) {

		this.Tree$_setRecords(value, name);
		value && this._filterTree(value);

	},

	_handleRootNodesForeach: function(foreach_view) {

		this.Tree$_handleRootNodesForeach(foreach_view);
		this._handleScope(foreach_view);

	},

	_handleNodesForeach: function(foreach_view) {

		this.Tree$_handleNodesForeach(foreach_view);
		this._handleScope(foreach_view);

	},

	_handleScope: function(foreach_view) {

		var scope_foreach = foreach_view.getScope();
		scope_foreach.on('after_refresh', this._onAfterForeachScopeRefreshed, this);
		this._onAfterForeachScopeRefreshed(scope_foreach);

	},

	_onAfterForeachScopeRefreshed: function(foreach_scope) {

		var self = this;

		foreach_scope.getValue().filter(function(record) {

			var meta_record = self._getMetaRecord(record);
			return meta_record && meta_record.get('is_visible');

		});

	},

	_setFilterText: function(value, name) {

		this._lowercase_filter_text = value.toLowerCase();
		this._filter_reg_exp = this._lowercase_filter_text
			? new RegExp(Firestorm.String.escapeStringForRegExp(this._lowercase_filter_text), 'gi')
			: null;

		this._filterTree(this._properties.records);

		this._set(name, value);

	},

	_getMetaRecord: function(record) {

		var meta_record = this._meta_storage.get(record.get('guid'));

		if (!meta_record) {
			meta_record = this._meta_storage.createMetaRecord(record.get('guid'), {
				lower_case_title: record.get('title').toLowerCase()
			});
		}

		return meta_record;

	},

	_filterTree: function(records) {

		var i = 0,
			count,
			meta_record,
			record,
			passes,
			children,
			has_visible_children,
			has_visible_records = false;

		records = records.getValues();

		for (count = records.length; i < count; i++) {

			record = records[i];
			meta_record = this._getMetaRecord(record);

			if (this._filter_reg_exp) {

				// this check is faster then RegExp
				passes = meta_record.get('lower_case_title').indexOf(this._lowercase_filter_text) != -1;
				if (passes) {

					meta_record.set(
						'formatted_title',
						record.get('title').replace(this._filter_reg_exp, function(value){
							return "<span style='background: #ffff00'>" + value + "</span>";
						})
					);

				}

			} else {

				passes = true;
				meta_record.set('formatted_title', record.get('title'));

			}

			has_visible_children = false;
			children = record.get('children');
			if (children && children.getCount()) {
				has_visible_children = this._filterTree(children);
				if (!passes && has_visible_children) {
					passes = true;
					meta_record.set('formatted_title', record.get('title'));
				}
			}

			meta_record.set('is_expandable', has_visible_children);
			meta_record.set('is_visible', passes);

			has_visible_records = has_visible_records || passes;

		}

		return has_visible_records;

	}

});