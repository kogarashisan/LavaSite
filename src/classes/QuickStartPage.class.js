
Lava.define(
"Lava.widget.QuickStartPage",
{

	Extends: 'Lava.widget.Standard',
	name: "page",

	_properties: {
		current_step_index: 0,
		steps: null,
		codes: null,
		current_step: null,
		current_code: null
	},

	_event_handlers: {
		continue_click: '_onContinueClick',
		back_click: '_onBackClick'
	},

	init: function(config, widget, parent_view, template, properties) {

		var hash = window.location.hash,
			parts,
			step_index;

		this._properties.steps = quick_start_schema.steps;
		this._properties.codes = quick_start_schema.codes;
		this._properties.current_step = this._properties.steps[0];

		this.Standard$init(config, widget, parent_view, template, properties);

		if (hash) {

			parts = hash.substr(1).split('=');
			if (parts.length == 2 && parts[0] == 'step' && /\d+/.test(parts[1])) {
				step_index = +parts[1] - 1;
				if (step_index >= 0 && step_index < this._properties.steps.length) {
					this._selectStep(+parts[1] - 1);
				}
			}

		}

	},

	_onContinueClick: function() {

		this._selectStep(this._properties.current_step_index + 1);

	},

	_onBackClick: function() {

		this._selectStep(this._properties.current_step_index - 1);

	},

	_selectStep: function(new_step_index) {

		var current_step,
			active_highlights = null;

		current_step = this._properties.steps[new_step_index];
		active_highlights = current_step.active_highlights || [];
		this.set("current_step_index", new_step_index);
		this.set("current_step", current_step);
		this.set(
			"current_code",
			(current_step.code_name) ? this._properties.codes[current_step.code_name] : null
		);

		window.setTimeout(function() {

			var highlight_elements = Firestorm.selectElements(".lava-new-code-highlights > *"),
				i = 0,
				count = highlight_elements.length,
				group_name;

			for (; i < count; i++) {
				group_name = Firestorm.Element.getProperty(highlight_elements[i], 'data-group');
				Firestorm.Element.setProperty(
					highlight_elements[i],
					'opacity',
					(active_highlights.indexOf(group_name) != -1) ? 1 : 0
				);
			}

		},0);

		window.location.hash = "#step=" + (new_step_index + 1);

		this._trackPerformance();

	},

	_trackPerformance: function() {

		var current_step_index = this._properties.current_step_index;
		try {
			if (current_step_index == this._properties.steps.length - 1) {
				ga('send', 'event', 'quick_start', 'reach_end');
			} else if ([5,10,15].indexOf(current_step_index) != -1) {
				ga('send', 'event', 'quick_start', 'reach_step', '', current_step_index);
			}
		} catch (e) {}

	}

});