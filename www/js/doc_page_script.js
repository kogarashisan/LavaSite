
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
		"\r\n\r\n<div class=\"lava-page-wrapper\">\r\n\r\n\t<div class=\"lava-navbar-area\" role=\"navigation\">\r\n\t<div class=\"lava-navbar-container\">\r\n\t\t<a href=\"http://www.lava-framework.com/\" title=\"LiquidLava - Home\" class=\"lava-navbar-logo-link\"></a>\r\n\t\t<ul class=\"lava-navbar\">\r\n\t\t\t<li class=\"lava-navbar-item\"><a href=\"/index.html\" class=\"lava-navbar-item-a\">Home</a></li><li class=\"lava-navbar-item\"><a href=\"/www/demo.html\" class=\"lava-navbar-item-a\">Demo</a></li>",
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: [
					"dropdown",
					"lava-navbar-item",
					"lava-menu-item-active"
				]
			},
			template: [
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: [
							"dropdown-toggle",
							"lava-navbar-item-a"
						],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["Learn <b class=\"caret\"></b>"]
				},
				"<ul class=\"lava-dropdown-menu\"><li><a href=\"/www/quick_start.html\" class=\"lava-menu-dropdown-link\">Quick start</a></li><li><a href=\"/www/doc.html#tab=tutorials\" class=\"lava-menu-dropdown-link\">Tutorials</a></li><li><a href=\"/www/doc.html#tab=reference\" class=\"lava-menu-dropdown-link\">Reference</a></li><li><a href=\"/www/doc.html#tab=api\" class=\"lava-menu-dropdown-link\">API</a></li><li><a href=\"/www/examples.html\" class=\"lava-menu-dropdown-link\">Examples</a></li></ul>"
			]
		},
		{
			type: "widget",
			"class": "Lava.WidgetConfigExtensionGateway",
			extender_type: "Standard",
			"extends": "DropDown",
			container: {
				type: "Element",
				tag_name: "li",
				static_classes: [
					"dropdown",
					"lava-navbar-item"
				]
			},
			template: [
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "a",
						static_classes: [
							"dropdown-toggle",
							"lava-navbar-item-a"
						],
						static_properties: {href: "#"}
					},
					roles: [{
						locator_type: "Name",
						locator: "dropdown",
						name: "trigger"
					}],
					template: ["Develop <b class=\"caret\"></b>"]
				},
				"<ul class=\"lava-dropdown-menu\"><li><a href=\"https://github.com/kogarashisan/LiquidLava/issues?state=open\" target=\"_blank\" class=\"lava-menu-dropdown-link\">Tasks / Issues</a></li><li><a href=\"/www/changelog.html\" class=\"lava-menu-dropdown-link\">Changelog</a></li><li><a href=\"/www/roadmap.html\" class=\"lava-menu-dropdown-link\">Roadmap</a></li><li class=\"lava-dropdown-header\">GitHub repositories</li><li><a href=\"https://github.com/kogarashisan/LiquidLava/\" target=\"_blank\" class=\"lava-menu-dropdown-link\">Core</a></li><li><a href=\"https://github.com/kogarashisan/ClassManager/\" target=\"_blank\" class=\"lava-menu-dropdown-link\">ClassManager</a></li><li><a href=\"https://github.com/kogarashisan/Firestorm/\" target=\"_blank\" class=\"lava-menu-dropdown-link\">Firestorm</a></li><li><a href=\"https://github.com/kogarashisan/LavaSite/\" target=\"_blank\" class=\"lava-menu-dropdown-link\">Site</a></li><li><a href=\"https://github.com/kogarashisan/PerfTests\" target=\"_blank\" class=\"lava-menu-dropdown-link\">Performance tests</a></li></ul>"
			]
		},
		"<li class=\"lava-navbar-item\"><a href=\"/www/widgets.html\" class=\"lava-navbar-item-a\">Widgets</a></li><li class=\"lava-navbar-item\"><a href=\"/www/about.html\" class=\"lava-navbar-item-a\">About</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t",
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
		"\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\" id=\"default_text\">\r\n\r\n\t\t\t\t<h1>Welcome to LiquidLava documentation</h1>\r\n\r\n\t\t\t\t<p>Documentation is divided into the following sections:</p>\r\n\t\t\t\t<ul class=\"doc-default-text-list\">\r\n\t\t\t\t\t<li><span><img src=\"/www/design/tree/tutorial.gif\"/></span><a href=\"#tab=tutorials\">Tutorials</a> - helps you make your first steps with the framework</li>\r\n\t\t\t\t\t<li><span><img src=\"/www/design/tree/reference.gif\"/></span><a href=\"#tab=reference\">Reference</a> - detailed explanation of every aspect of the framework</li>\r\n\t\t\t\t\t<li><span><img src=\"/www/design/tree/class.gif\"/></span><a href=\"#tab=api\">API</a> - generated automatically from source code files</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<h2>Introducing LiquidLava</h2>\r\n\r\n\t\t\t\t<p>Lava is an MVC framework with unique architecture: everything here is a class,\r\n\t\t\t\t\tor at least a JavaScript object. Lava has excellent sources, so if something is unclear to you -\r\n\t\t\t\t\tthen sources is the first place, where you should search for answers.</p>\r\n\r\n\t\t\t\t<h3>So, what is LiquidLava?</h3>\r\n\t\t\t\t<p style=\"padding-left: 2em\">You may think of it as better alternative to modern frameworks with data-bound templates,\r\n\t\t\t\t\tlike Angular and Ember. Everything you can do with these frameworks - you can do with Lava,\r\n\t\t\t\t\texcept that Lava does it better. So, if you are tired of endless problems and bugs with other frameworks -\r\n\t\t\t\t\tconsider trying Lava instead, you will feel a relief and boost to your productiveness.</p>\r\n\r\n\t\t\t\t<h3>Project status?</h3>\r\n\t\t\t\t<p style=\"padding-left: 2em\">Lava is already mature enough to be comfortably used in small projects.\r\n\t\t\t\t\tLack of unit tests is compensated by numerous debug checks, API is mostly stable.</p>\r\n\r\n\t\t\t\t<p style=\"padding-left: 2em\">Currently it lacks some high-level features, like server-side communication or routing, and that's the reason,\r\n\t\t\t\t\twhy it's still considered alpha. Some of missing features can be replaced by third-party scripts,\r\n\t\t\t\t\tbut even now it's powerful enough to impress you.</p>\r\n\r\n\t\t\t\t<h2>Introducing Firestorm</h2>\r\n\r\n\t\t\t\t<p>Firestorm is a low-level DOM access and utility library, currently built on top of iQuery.\r\n\t\t\t\t\tIt does not extend prototypes of native JavaScript objects - this makes it extremely simple and reusable.\r\n\t\t\t\t\tIn fact, it's a collection of JavaScript objects with public API.</p>\r\n\t\t\t\t<p>Any access to DOM tree must be done using Firestorm API (although, there are exceptions).</p>\r\n\r\n\t\t\t</div>\r\n\t\t\t",
		{
			type: "view",
			"class": "View",
			container: {
				type: "Element",
				tag_name: "div",
				static_classes: ["col-md-9"],
				static_properties: {role: "main"}
			},
			id: "content_area",
			template: ["\r\n\r\n\t\t\t"]
		},
		"\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"lava-footer-push\"></div>\r\n</div>\r\n\r\n<footer class=\"\">\r\n\t<div class=\"lava-black-area lava-footer-black-area\">\r\n\t\t<div class=\"container\">\r\n\t\t\t",
		{
			type: "view",
			"class": "View",
			container: {
				type: "Element",
				tag_name: "a",
				static_classes: ["lava-footer-scroll-top-link"],
				static_properties: {
					href: "#",
					title: "Scroll to top of the page"
				},
				events: {
					click: [{
						locator_type: "Id",
						locator: "utility",
						name: "scroll_top"
					}]
				}
			}
		},
		"\r\n\t\t\t<div class=\"lava-footer-logo\">\r\n\t\t\t\t<div class=\"lava-footer-logo-title\">LiquidLava</div>\r\n\t\t\t\t<div class=\"lava-footer-logo-text\">When art is beautiful</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"lava-footer-copyright\">\r\n\t\t\t\t<span class=\"lava-footer-copyright-atom\">© 2015 Alex Galashov (MIT Licence).</span>\r\n\t\t\t\t<span class=\"lava-footer-copyright-atom\">All rights reserved.</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
};
		Site.bootstrap("www/doc");
	