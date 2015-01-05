
Lava.define(
'Lava.widget.ViewLayerFilteringExample',
{
	Extends: 'Lava.widget.Standard',
	name: "example",

	_properties: {
		filter_text: '',
		/** @type {Lava.system.Enumerable} */
		api_names_list: null
	},

	_role_handlers: {
		main_foreach: '_handleMainForeachView'
	},

	init: function(config, widget, parent_view, template, properties) {

		this._properties.api_names_list = new Lava.system.Enumerable();
		this._extractRecordTitles(this._properties.api_names_list, api_tree_source);
		this.Standard$init(config, widget, parent_view, template, properties);

	},

	/**
	 * Prepare list of API names
	 * @param {Lava.system.Enumerable} destination
	 * @param {Array} source
	 */
	_extractRecordTitles: function(destination, source) {

		for (var i = 0, count = source.length; i < count; i++) {

			if (source[i].type != 'folder') {
				destination.push(new Lava.mixin.Properties({
					title: source[i].name,
					// we need this to perform filtering faster
					lower_case_title: source[i].name.toLowerCase(),
					formatted_title: source[i].name
				}));
			}

			if (source[i].children) {
				this._extractRecordTitles(destination, source[i].children);
			}

		}

	},

	_handleMainForeachView: function(foreach_view) {

		foreach_view.getScope().on('after_refresh', this._onAfterForeachScopeRefreshed, this);

	},

	_onAfterForeachScopeRefreshed: function(foreach_scope) {

		var filter_text = this._properties.filter_text.toLowerCase(),
			filter_reg_exp = filter_text
				? new RegExp(Firestorm.String.escapeStringForRegExp(filter_text), 'gi')
				: null;

		if (filter_reg_exp) {

			foreach_scope.getValue().filter(function(record){

				// this check is faster then RegExp
				var passes = record.get('lower_case_title').indexOf(filter_text) != -1;

				if (passes) {
					record.set(
						'formatted_title',
						record.get('title').replace(filter_reg_exp, function(value){
							return "<span style='background: #ffff00'>" + value + "</span>";
						})
					)
				}

				return passes;

			});

		} else {

			foreach_scope.getValue().each(function(record){

				record.set('formatted_title', record.get('title'));

			});

		}

	}

});