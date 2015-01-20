Site.pages['www/about'] = {
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
		"\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/widgets.html\">Widgets</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/about.html\">About</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-3\">\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9\" role=\"main\">\r\n\r\n\t\t\t<h1>About</h1>\r\n\r\n\t\t\t<p>This framework is being developed and maintained full-time by one man since mid-2013.</p>\r\n\r\n\t\t\t<h2>About the author</h2>\r\n\r\n\t\t\t<p>\r\n\t\t\t\tBefore going open-source, I worked in e-commerce area.\r\n\t\t\t\tWith a team I developed and maintained shops with 50 to 500 thousands of unique daily visitors.\r\n\t\t\t</p>\r\n\r\n\t\t\t<p><b>Like the project? Star me on GitHub!</b></p>\r\n\r\n\t\t\t<h2>Contact</h2>\r\n\t\t\t<p>Need support with Lava? You are welcome to contact me via GitHub or email for any reason: </p>\r\n\t\t\t<p>kogarashisan1 [put @tsign here] gmail [d0t] com. </p>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<footer>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-inner\">Copyright (c) 2014 Alex Galashov. MIT Licence.</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
}