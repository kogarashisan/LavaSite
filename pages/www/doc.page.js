Site.pages['www/doc'] = {
	type: "widget",
	"class": "DocPage",
	extender_type: "Standard",
	container: {
		type: "Element",
		tag_name: "body",
		static_properties: {"lava-app": "DocPage"}
	},
	id: "page",
	default_events: [],
	template: [
		"\r\n\r\n\r\n",
		{
			type: "view",
			"class": "View",
			container: {
				type: "Element",
				tag_name: "div",
				static_classes: ["loading-box"],
				style_bindings: {
					display: {
						evaluator: function() {
return ((this._binds[0].getValue()) ? 'block' : 'none');
},
						binds: [{
							locator_type: "Name",
							locator: "page",
							tail: ["is_loading"]
						}]
					}
				}
			},
			template: ["\r\n\t<div class=\"loading-box-inner\">\r\n\t\t<div style=\"position:absolute;width:100%;text-align:center;line-height:128px;font-weight:bold;\">LOADING</div>\r\n\t\t<img src=\"/www/design/loading.gif\" style=\"margin: 0 auto;\"/>\r\n\t</div>\r\n"]
		},
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
		"\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/widgets.html\">Widgets</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/about.html\">About</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t",
		{
			"extends": "ApiTabs",
			roles: [{
				locator_type: "Name",
				locator: "page",
				name: "nav_tabs"
			}],
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			type: "widget"
		},
		"\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\" id=\"default_text\">\r\n\r\n\t\t\t<h1>Welcome to LiquidLava documentation</h1>\r\n\r\n\t\t\t<p>Documentation is divided into the following sections:</p>\r\n\t\t\t<ul class=\"doc-default-text-list\">\r\n\t\t\t\t<li><span><img src=\"/www/design/tree/tutorial.gif\"/></span><a href=\"#tab=tutorials\">Tutorials</a> - helps you to make your first steps with the framework</li>\r\n\t\t\t\t<li><span><img src=\"/www/design/tree/reference.gif\"/></span><a href=\"#tab=reference\">Reference</a> - detailed explanation of every aspect of the framework</li>\r\n\t\t\t\t<li><span><img src=\"/www/design/tree/class.gif\"/></span><a href=\"#tab=api\">API</a> - generated automatically from source code files</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<h2>Introducing LiquidLava</h2>\r\n\r\n\t\t\t<p>LiquidLava is an MVC framework with unique architecture: everything here is a class,\r\n\t\t\t\tor at least a JavaScript object. Lava is very modular and decoupled, for example you can parse your templates on server\r\n\t\t\t\tand exclude parsers from client package. Or you can exclude Animation and Data folders, if you don't need them.</p>\r\n\r\n\t\t\t<p>Framework has excellent sources, so if something is unclear to you -\r\n\t\t\t\tthen sources is the first place, where you should search for answers.</p>\r\n\r\n\t\t\t<h2>Introducing Firestorm</h2>\r\n\r\n\t\t\t<p>Firestorm is a low-level DOM access library, currently built on top of MooTools.\r\n\t\t\t\tIt does not extend prototypes of native JavaScript objects - this makes it extremely simple and reusable.\r\n\t\t\t\tIn fact, it's a collection of JavaScript objects with public API.</p>\r\n\t\t\t<p>Any access to DOM tree must be done using Firestorm API (although, there are exceptions).</p>\r\n\r\n\t\t</div>\r\n\t\t",
		{
			type: "view",
			"class": "View",
			container: {
				type: "Element",
				tag_name: "div",
				static_classes: ["col-md-9"],
				static_properties: {role: "main"},
				events: {
					click: [{
						locator_type: "Name",
						locator: "page",
						name: "content_area_click"
					}]
				}
			},
			id: "content_area",
			template: ["\r\n\r\n\t\t"]
		},
		"\r\n\t</div>\r\n</div>\r\n\r\n<footer>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-inner\">Copyright (c) 2014 Alex Galashov. MIT Licence.</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
}