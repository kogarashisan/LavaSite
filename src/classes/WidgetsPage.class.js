
Lava.define(
'Lava.widget.WidgetsPage',
{

	Extends: 'Lava.widget.Standard',

	name: 'widgets_page',

	_properties: {
		is_collapsible_expanded: true,
		periodic_elements: null,
		tree_records: null
	},

	_event_handlers: {
		toggle_collapsible: '_toggleCollapsibleExpanded',
		toggle_tree: '_toggleTree'
	},

	init: function(config, widget, parent_view, template, properties) {

		this._properties.periodic_elements = Examples.makeLive(ExampleData.periodic_elements);

		var demo_module = Lava.app.getModule('DemoTree');

		demo_module.loadRecords(ExampleData.example_tree);
		this._properties.tree_records = new Lava.system.Enumerable(demo_module.getAllRecords());
		this._properties.tree_records.filter(function(record) {
			return !record.get('parent')
		});

		this.Standard$init(config, widget, parent_view, template, properties);

	},

	_toggleCollapsibleExpanded: function() {

		this.set('is_collapsible_expanded', !this._properties.is_collapsible_expanded);

	},

	_toggleTree: function(dom_event_name, dom_event, view, template_arguments) {

		var action = template_arguments[1] ? 'expandAll' : 'collapseAll';
		Lava.view_manager.getViewById(template_arguments[0])[action]();

	}

});