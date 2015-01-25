Lava.define('Lava.widget.UtilityWidget', {

	Extends: 'Lava.widget.Standard',

	id: 'utility',

	_event_handlers: {
		'scroll_top': "_scrollTop"
	},

	_scrollTop: function() {
		window.scrollTo(0, 0);
	}
});