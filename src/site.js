
// Request class is from MooTools
var SafeRequest = new Class({
	Extends: Request,
	success: function(text, xml) {
		this.onSuccess(text, xml);
	}
});

var Examples = {

	/**
	 * Recursively turn argument into Enumerable and Properties.
	 * @param arg
	 */
	makeLive: function(arg) {

		var result,
			temp,
			i = 0,
			count,
			name;

		if (Array.isArray(arg)) {

			temp = [];

			for (count = arg.length; i < count; i++) {
				temp.push(this.makeLive(arg[i]));
			}

			result = new Lava.system.Enumerable(temp);

		} else if (Firestorm.getType(arg) == 'object') {

			result = new Lava.mixin.Properties();

			for (name in arg) {

				result.set(name, this.makeLive(arg[name]));

			}

		} else {

			result = arg;

		}

		return result;

	}

};

var LavaVersions = [
	{name: 'master'},
	{name: '0.13.x'},
	{name: '0.12.x'},
	{name: '0.11.x'},
	{name: '0.10.x'},
	{name: '0.9.x'},
	{name: '0.8.x'},
	{name: '0.7.x'},
	{name: '0.6.x'},
	{name: '0.5.x'},
	{name: 'older'}
];

var LavaExamples = [
	{name: 'Hello', title: 'Hello'},
	{name: 'HorizontalAccordion', title: 'Horizontal Accordion'},
	{name: 'Draggable', title: 'Draggable'},
	{name: 'Circles', title: 'Draggable circles editor'},
	{name: 'Panel1', title: 'Panel 1'},
	{name: 'Panel2', title: 'Panel 2'},
	{name: 'Panel3', title: 'Panel 3'},
	{name: 'BasicTree', title: 'Tree - Basic'},
	{name: 'CheckTree', title: 'Tree - Checkboxes'},
	{name: 'EditableTable', title: 'Editable table'},
	{name: 'ModifiedCalendar', title: 'Modified calendar'},
	{name: 'ViewLayerFiltering', title: 'View layer filtering'},
	{name: 'FilteredTree', title: 'Filtered tree'}
];

var Site = {
	// current page path
	page_path: '',
	pages: {},
	utility_widget: null,
	page_loaded_callbacks: {
		index: function() {
			// twitter
			(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs'));
		},
		"www/examples": function() {
			var original_define = Lava.ClassManager.define;
			Lava.ClassManager.define = function(name, body) {
				if (!Lava.ClassManager.hasClass(name)) {
					original_define.apply(Lava.ClassManager, [name, body]);
				}
			};
			Lava.schema.widget.ALLOW_REDEFINITION = true;
		}
	},
	bootstrap: function(page_path) {
		this.page_path = page_path;

		var self = this;

		// to prevent tracking from dev's computers
		if (window.location.href.indexOf('://www.lava-framework.com/') > 0) {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-51511486-1', 'lava-framework.com');
			ga('send', 'pageview');
		}

		window.addEvent('load', function() {

			Lava.init();
			Lava.focus_manager.enable(); // before widgets are in DOM, so it could receive focus event

			this.utility_widget = new Lava.widget.UtilityWidget({is_extended: true, id: "utility"});

			var page_config = self.pages[self.page_path],
				constructor = Lava.ClassManager.getConstructor(page_config['class'] || 'Lava.widget.Standard', 'Lava.widget'),
				widget;

			if (Lava.schema.DEBUG && !constructor) Lava.t('Class not found: ' + page_config['class']);
			widget = new constructor(page_config);
			widget.injectIntoExistingElement(document.body);

			Lava.popover_manager.enable();

			if (self.page_loaded_callbacks[self.page_path]) {
				self.page_loaded_callbacks[self.page_path]();
			}

		});
	}
};