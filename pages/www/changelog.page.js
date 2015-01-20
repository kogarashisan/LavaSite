Site.pages['www/changelog'] = {
	type: "widget",
	"class": "ChangelogPage",
	extender_type: "Standard",
	container: {
		type: "Element",
		tag_name: "body",
		static_properties: {"lava-app": "ChangelogPage"}
	},
	id: "changelog_page",
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
		"\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/widgets.html\">Widgets</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"/www/about.html\">About</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"bs-sidebar hidden-print affix-top\" role=\"complementary\">\r\n\t\t\t\t<ul class=\"nav bs-sidenav\">\r\n\t\t\t\t\t",
		{
			type: "view",
			"class": "Foreach",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{property_name: "versions"}]
			},
			as: "version",
			template: [
				"\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t",
				{
					type: "view",
					"class": "Expression",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue() + (this._binds[1].getValue() ? ' (loading...)' : ''));
},
						binds: [
							{
								property_name: "version",
								tail: ["name"]
							},
							{
								property_name: "version",
								tail: ["is_loading"]
							}
						]
					},
					container: {
						type: "Element",
						tag_name: "a",
						events: {
							click: [{
								locator_type: "Name",
								locator: "page",
								name: "selectItem",
								arguments: [{
									type: 2,
									data: {property_name: "version"}
								}]
							}]
						},
						property_bindings: {
							href: {
								evaluator: function() {
return ('#' + this._binds[0].getValue());
},
								binds: [{
									property_name: "version",
									tail: ["name"]
								}]
							}
						},
						style_bindings: {
							"font-weight": {
								evaluator: function() {
return (this._binds[0].getValue() ? 'bold' : null);
},
								binds: [{
									property_name: "version",
									tail: ["is_selected"]
								}]
							}
						}
					}
				},
				"\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t"
			]
		},
		"\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9\" role=\"main\">\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "Expression",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					property_name: "selected_version",
					tail: ["name"]
				}]
			},
			container: {
				type: "Element",
				tag_name: "h1"
			}
		},
		"\r\n\t\t\t<div id=\"version_content_container\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tWhile in alpha and beta stage (and most likely even after official release),\r\n\t\t\t\t\tthe framework will not provide any backward compatibility in case of ay breaking changes.\r\n\t\t\t\t\tInstead, you will receive a detailed upgrade instructions.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<footer>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"footer-inner\">Copyright (c) 2014 Alex Galashov. MIT Licence.</div>\r\n\t</div>\r\n</footer>\r\n\r\n"
	],
	is_extended: true
}