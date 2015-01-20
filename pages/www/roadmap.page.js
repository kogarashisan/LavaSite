Site.pages['www/roadmap'] = {
	type: "widget",
	"class": "Standard",
	extender_type: "Standard",
	container: {
		type: "Element",
		tag_name: "body"
	},
	template: [
		"\r\n\r\n<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<div class=\"navbar-brand\">LiquidLava</div>\r\n\t\t</div>\r\n\t\t<div class=\"navbar-collapse collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li><!-- class=\"active\" -->\r\n\t\t\t\t\t<a href=\"/index.html\">Home</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: ["dropdown"]
			},
			template: [
				"\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: ["dropdown-toggle"],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["\r\n\t\t\t\t\t\tLearn <b class=\"caret\"></b>\r\n\t\t\t\t\t"]
				},
				"\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=tutorials\">Tutorials</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=reference\">Reference</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/doc.html#tab=api\">API</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/examples.html\">Examples</a></li>\r\n\t\t\t\t\t\t<!--li class=\"divider\"></li-->\r\n\t\t\t\t\t\t<!--li class=\"dropdown-header\">Coming soon:</li-->\r\n\t\t\t\t\t\t<!--li class=\"disabled\"><a href=\"#\">Video tutorials</a></li-->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t"
			]
		},
		"\r\n\t\t\t\t",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: ["dropdown"]
			},
			template: [
				"\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: ["dropdown-toggle"],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["\r\n\t\t\t\t\t\tDevelop <b class=\"caret\"></b>\r\n\t\t\t\t\t"]
				},
				"\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LiquidLava/\">Core on GitHub</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LavaSite/\">Site on GitHub</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/changelog.html\">Changelog</a></li>\r\n\t\t\t\t\t\t<li><a href=\"https://github.com/kogarashisan/LiquidLava/issues?state=open\">Issues</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/roadmap.html\">Roadmap</a></li>\r\n\t\t\t\t\t\t<li><a href=\"/www/tasks.html\">Tasks</a></li>\r\n\t\t\t\t\t\t<!--li class=\"divider\"></li-->\r\n\t\t\t\t\t\t<!--li class=\"dropdown-header\">Coming soon:</li-->\r\n\t\t\t\t\t\t<li class=\"disabled\"><a href=\"#\">Code coverage</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t"
			]
		},
		"\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/widgets.html\">Widgets</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/about.html\">About</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-3\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9\" role=\"main\">\r\n\t\t\t<h1>Roadmap</h1>\r\n\t\t\t<p>General directions and big plans. Task priority does not depend on order.</p>\r\n\t\t\t<p>For more detailed task list see the <a href=\"tasks.html\">Tasks</a> page.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>CSS class names compression, resource names compression</li>\r\n\t\t\t\t<li>Unit-testing</li>\r\n\t\t\t\t<li>Advanced code compression</li>\r\n\t\t\t\t<li>Drag-and-drop functionality</li>\r\n\t\t\t\t<li>Input validators and input labels</li>\r\n\t\t\t\t<li>Desktop-like UI layer, including data-bound components with selection model, layouts and focus manager</li>\r\n\t\t\t\t<li>Further development of Data layer: the DataSource class with paging, filtering and server-side loading capabilities</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\tDocumentation\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li>Articles for each Lava-namespace, including best practice and architecture notes</li>\r\n\t\t\t\t\t\t<li>Create the \"Codestyle\" document and codestyle checking rules</li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>Delay loading of images / objects</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\tWidgets:\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li>focus-manager and keyboard navigation</li>\r\n\t\t\t\t\t\t<li>Some desirable widgets are missing, some are incomplete - finish them</li>\r\n\t\t\t\t\t\t<li>ARIA-compatibility for widgets</li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>Finish Firestorm and get rid of MooTools</li>\r\n\t\t\t\t<li>Server-side template rendering with state restoration on client (questionable)</li>\r\n\t\t\t\t<li>Admin panel for the server-side framework (*)</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<p>(*) Currently, there is a server side PHP framework being developed by the author.</p>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n<footer>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-inner\">Copyright (c) 2014 Alex Galashov. MIT Licence.</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
}