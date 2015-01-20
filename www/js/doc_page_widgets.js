Lava.widgets["ClassContent"] = {
	type: "widget",
	"class": "Lava.WidgetConfigExtensionGateway",
	extender_type: "Standard",
	template: [
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"descriptor",
						"extends"
					]
				}]
			},
			template: [
				"\r\n\t\t\t\t<div class=\"api-extends-box\">\r\n\t\t\t\t\t<div class=\"api-extends-box-header\">\r\n\t\t\t\t\t\t<span class=\"api-extends-box-header-left\">EXTENDS</span>\r\n\t\t\t\t\t\t",
				{
					type: "view",
					"class": "If",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"descriptor",
								"has_implements"
							]
						}]
					},
					template: ["\r\n\t\t\t\t\t\t\t<span class=\"api-extends-box-header-right\">IMPLEMENTS</span>\r\n\t\t\t\t\t\t"]
				},
				"\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t\t\t<div class=\"api-extends-left\">",
				{
					type: "view",
					"class": "Expression",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"descriptor",
								"name"
							]
						}]
					}
				},
				"</div>\r\n\t\t\t\t\t\t",
				{
					type: "view",
					"class": "If",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"descriptor",
								"implements"
							]
						}]
					},
					template: [
						"\r\n\t\t\t\t\t\t\t<div class=\"api-extends-right\">\r\n\t\t\t\t\t\t\t\t",
						{
							type: "view",
							"class": "Foreach",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "widget",
									tail: [
										"descriptor",
										"implements"
									]
								}]
							},
							as: "name",
							template: [
								"\r\n\t\t\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{property_name: "name"}]
									},
									container: {
										type: "Element",
										tag_name: "a",
										static_classes: ["api-extends-link"],
										property_bindings: {
											href: {
												evaluator: function() {
return ('#object=' + this._binds[0].getValue());
},
												binds: [{property_name: "name"}]
											}
										}
									}
								},
								"\r\n\t\t\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t"
					]
				},
				"\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"descriptor",
								"extends_chain"
							]
						}]
					},
					as: "chain_block",
					template: [
						"\r\n\t\t\t\t\t\t<div class=\"api-extends-box-block\">\r\n\t\t\t\t\t\t\t<div class=\"api-extends-left\">\r\n\t\t\t\t\t\t\t\t",
						{
							type: "view",
							"class": "Expression",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "chain_block",
									tail: ["extends"]
								}]
							},
							container: {
								type: "Element",
								tag_name: "a",
								static_classes: ["api-extends-link"],
								property_bindings: {
									href: {
										evaluator: function() {
return ('#object=' + this._binds[0].getValue());
},
										binds: [{
											property_name: "chain_block",
											tail: ["extends"]
										}]
									}
								}
							}
						},
						"\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "chain_block",
									tail: ["implements"]
								}]
							},
							template: [
								"\r\n\t\t\t\t\t\t\t<div class=\"api-extends-right\">\r\n\t\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Foreach",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "chain_block",
											tail: ["implements"]
										}]
									},
									as: "name",
									template: [
										"\r\n\t\t\t\t\t\t\t\t\t",
										{
											type: "view",
											"class": "Expression",
											argument: {
												evaluator: function() {
return (this._binds[0].getValue());
},
												flags: {isScopeEval: true},
												binds: [{property_name: "name"}]
											},
											container: {
												type: "Element",
												tag_name: "a",
												static_classes: ["api-extends-link"],
												property_bindings: {
													href: {
														evaluator: function() {
return ('#object=' + this._binds[0].getValue());
},
														binds: [{property_name: "name"}]
													}
												}
											}
										},
										"\r\n\t\t\t\t\t\t\t\t"
									]
								},
								"\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t"
					]
				},
				"\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t<h1>",
		{
			type: "view",
			"class": "Expression",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"descriptor",
						"name"
					]
				}]
			}
		},
		"</h1>\r\n\t\t\t",
		{
			type: "view",
			"class": "Expression",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"descriptor",
						"description"
					]
				}]
			},
			escape_off: true,
			template: []
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"associated_widgets"
					]
				}]
			},
			template: [
				"\r\n\t\t\t\t<h2>Associated widgets</h2>\r\n\t\t\t\t<div><b>Widgets that use this class as controller:</b></div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"associated_widgets"
							]
						}]
					},
					as: "data",
					template: [
						"\r\n\t\t\t\t\t\t",
						{
							type: "view",
							"class": "Expression",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "data",
									tail: ["title"]
								}]
							}
						},
						" ",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "data",
									tail: ["has_sugar"]
								}]
							},
							template: [
								"(",
								{
									type: "view",
									"class": "View",
									container: {
										type: "Element",
										tag_name: "a",
										property_bindings: {
											href: {
												evaluator: function() {
return ('#object=Widgets;member=' + this._binds[0].getValue());
},
												binds: [{
													property_name: "data",
													tail: ["title"]
												}]
											}
										}
									},
									template: ["sugar"]
								},
								")"
							]
						},
						"\r\n\t\t\t\t\t"
					]
				},
				"\r\n\t\t\t\t</div>\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t<div class=\"clearfix\"></div> \r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"description"
					]
				}]
			},
			template: [
				"\r\n\t\t\t\t",
				{
					type: "view",
					"class": "If",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue() != 'Support' && this._binds[1].getValue() != 'Widgets');
},
						binds: [
							{
								locator_type: "Name",
								locator: "widget",
								tail: [
									"descriptor",
									"name"
								]
							},
							{
								locator_type: "Name",
								locator: "widget",
								tail: [
									"descriptor",
									"name"
								]
							}
						]
					},
					template: ["\r\n\t\t\t\t\t<h2>Remarks</h2>\r\n\t\t\t\t"]
				},
				"\r\n\t\t\t\t",
				{
					type: "view",
					"class": "Expression",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"description"
							]
						}]
					},
					escape_off: true,
					template: []
				},
				"\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"config_options"
					]
				}]
			},
			template: [
				"\r\n\t\t\t\t<h2 class=\"api-table-header\">Config options</h2>\r\n\t\t\t\t",
				{
					type: "view",
					"class": "Expression",
					argument: {
						evaluator: function() {
return (this._callModifier("0", [this._binds[0].getValue(), 'api-member-table', 'config:']));
},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"config_options"
							]
						}],
						modifiers: [{
							locator_type: "Id",
							locator: "page",
							callback_name: "render_params"
						}]
					},
					escape_off: true,
					template: []
				},
				"\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"properties"
					]
				}]
			},
			container: {type: "Morph"},
			template: [
				"\r\n\t\t\t\t<h2 class=\"api-table-header\">Widget properties</h2>\r\n\t\t\t\t\r\n\t\t\t\t<table class=\"api-member-table\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td class=\"api-flag-td\"></td>\r\n\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t<td>Types</td>\r\n\t\t\t\t\t\t\t<td>Default</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"properties"
							]
						}]
					},
					as: "descriptor",
					template: [
						"\r\n\t\t\t\t\t\t",
						{
							type: "view",
							"class": "View",
							container: {
								type: "Element",
								tag_name: "tr",
								property_bindings: {
									"data-scroll-name": {
										evaluator: function() {
return ('property:' + this._binds[0].getValue());
},
										binds: [{
											property_name: "descriptor",
											tail: ["name"]
										}]
									}
								}
							},
							template: [
								"\r\n\t\t\t\t\t\t\t<td class=\"api-flag-td\">\r\n\t\t\t\t\t\t\t\t<img title=\"Widget property\" src=\"/www/design/arrows.png\"/>\r\n\t\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["is_private"]
										}]
									},
									template: ["<img title=\"Protected\" src=\"/www/design/key.png\"/>"]
								},
								"\r\n\t\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["is_readonly"]
										}]
									},
									template: ["<img title=\"Readonly\" src=\"/www/design/readonly.png\"/>"]
								},
								"\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"api-name-column\">",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["name"]
										}]
									}
								},
								"</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["lava_type"]
										}]
									},
									template: [
										"\r\n\t\t\t\t\t\t\t\t\t",
										{
											type: "view",
											"class": "Expression",
											argument: {
												evaluator: function() {
return ('Lava.types.' + this._binds[0].getValue());
},
												binds: [{
													property_name: "descriptor",
													tail: ["lava_type"]
												}]
											},
											container: {
												type: "Element",
												tag_name: "a",
												static_classes: ["api-lava-type-link"],
												property_bindings: {
													href: {
														evaluator: function() {
return ('#object=Lava.types;member=' + this._binds[0].getValue());
},
														binds: [{
															property_name: "descriptor",
															tail: ["lava_type"]
														}]
													}
												}
											}
										},
										"\r\n\t\t\t\t\t\t\t\t"
									],
									elseif_arguments: [{
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["type_names"]
										}]
									}],
									elseif_templates: [[
										"\r\n\t\t\t\t\t\t\t\t\t",
										{
											type: "view",
											"class": "Foreach",
											argument: {
												evaluator: function() {
return (this._binds[0].getValue());
},
												flags: {isScopeEval: true},
												binds: [{
													property_name: "descriptor",
													tail: ["type_names"]
												}]
											},
											as: "type_name",
											template: [
												"\r\n\t\t\t\t\t\t\t\t\t\t",
												{
													type: "view",
													"class": "Expression",
													argument: {
														evaluator: function() {
return (this._binds[0].getValue());
},
														flags: {isScopeEval: true},
														binds: [{property_name: "type_name"}]
													},
													escape_off: true,
													template: []
												},
												{
													type: "view",
													"class": "If",
													argument: {
														evaluator: function() {
return (this._binds[0].getValue() < this._binds[1].getValue() - 1);
},
														binds: [
															{property_name: "foreach_index"},
															{property_name: "count"}
														]
													},
													template: ["<br/>"]
												},
												"\r\n\t\t\t\t\t\t\t\t\t"
											]
										},
										"\r\n\t\t\t\t\t\t\t\t"
									]]
								},
								"\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["default_value"]
										}]
									},
									escape_off: true,
									template: []
								},
								"</td>\r\n\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "descriptor",
									tail: ["description"]
								}]
							},
							template: [
								"\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"api-description-td api-description-row-td\">",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["description"]
										}]
									},
									escape_off: true,
									template: []
								},
								"</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t"
					]
				},
				"\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"events"
					]
				}]
			},
			container: {type: "Morph"},
			template: [
				"\r\n\t\t\t\t<h2 class=\"api-table-header\">Events</h2>\r\n\t\t\t\t\r\n\t\t\t\t<table class=\"api-member-table\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td class=\"api-flag-td\"></td>\r\n\t\t\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t\t\t<td>Description</td>\r\n\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"events"
							]
						}]
					},
					as: "descriptor",
					template: [
						"\r\n\t\t\t\t\t\t",
						{
							type: "view",
							"class": "View",
							container: {
								type: "Element",
								tag_name: "tr",
								static_classes: ["api-member-row"],
								events: {
									click: [{
										locator_type: "Id",
										locator: "page",
										name: "member_row_click",
										arguments: [{
											type: 2,
											data: {property_name: "descriptor"}
										}]
									}]
								},
								property_bindings: {
									"data-scroll-name": {
										evaluator: function() {
return ('event:' + this._binds[0].getValue());
},
										binds: [{
											property_name: "descriptor",
											tail: ["name"]
										}]
									}
								},
								class_bindings: {
									"0": {
										evaluator: function() {
return ((this._binds[0].getValue() || this._binds[1].getValue()) ? 'api-member-row-expandable' : '');
},
										binds: [
											{
												property_name: "descriptor",
												tail: ["type_names"]
											},
											{
												property_name: "descriptor",
												tail: ["params"]
											}
										]
									}
								}
							},
							template: [
								"\r\n\t\t\t\t\t\t\t<td class=\"api-flag-td\">\r\n\t\t\t\t\t\t\t\t<img title=\"Event\" src=\"/www/design/event.png\"/>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"api-name-column\">",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["name"]
										}]
									}
								},
								"</td>\r\n\t\t\t\t\t\t\t<td class=\"api-description-td\">",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "descriptor",
											tail: ["description"]
										}]
									},
									escape_off: true,
									template: []
								},
								"</td>\r\n\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue() || this._binds[1].getValue());
},
										binds: [
											{
												property_name: "descriptor",
												tail: ["type_names"]
											},
											{
												property_name: "descriptor",
												tail: ["params"]
											}
										]
									},
									template: ["\r\n\t\t\t\t\t\t\t\t<td valign=\"middle\" class=\"api-member-cell-expandable\">&#9660;</td>\r\n\t\t\t\t\t\t\t"],
									else_template: ["\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t"]
								},
								"\r\n\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Id",
									locator: "page",
									tail: [
										"meta_storage",
										{
											property_name: "descriptor",
											tail: ["guid"]
										},
										"is_expanded"
									]
								}]
							},
							container: {
								type: "Emulated",
								options: {prepender: "AfterPrevious"}
							},
							refresher: {type: "Standard"},
							template: [
								"\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t",
								{
									type: "view",
									"class": "View",
									container: {
										type: "Element",
										tag_name: "tr",
										static_classes: ["api-member-extended-row"]
									},
									template: [
										"\r\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t\t\t",
										{
											type: "view",
											"class": "Expression",
											argument: {
												evaluator: function() {
return (this._callModifier("0", [this._binds[0].getValue()]));
},
												binds: [{property_name: "descriptor"}],
												modifiers: [{
													locator_type: "Id",
													locator: "page",
													callback_name: "render_event_ext"
												}]
											},
											escape_off: true,
											template: []
										},
										"\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"api-member-cell-expandable\"></td>\r\n\t\t\t\t\t\t\t"
									]
								},
								"\r\n\t\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t"
					]
				},
				"\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t\t\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"method_chain"
					]
				}]
			},
			container: {type: "Morph"},
			template: [
				"\r\n\t\t\t\t<h2 class=\"api-member-group-header\">Methods</h2>\r\n\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"method_chain"
							]
						}]
					},
					as: "method_group",
					template: [
						"\r\n\t\t\t\t\t",
						{
							name: "method_group",
							type: "include"
						},
						"\r\n\t\t\t\t"
					]
				},
				"\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"member_chain"
					]
				}]
			},
			container: {type: "Morph"},
			template: [
				"\r\n\t\t\t\t<h2 class=\"api-member-group-header\">Members</h2>\r\n\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"member_chain"
							]
						}]
					},
					as: "member_group",
					template: [
						"\r\n\t\t\t\t\t",
						{
							name: "member_group",
							type: "include"
						},
						"\r\n\t\t\t\t"
					]
				},
				"\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t\t",
		{
			type: "view",
			"class": "If",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "widget",
					tail: [
						"extended_descriptor",
						"support_objects"
					]
				}]
			},
			container: {type: "Morph"},
			assigns: {
				extended_scroll_names: {
					evaluator: function() {
return (true);
},
					flags: {
						isStatic: true,
						isLiteral: true
					}
				}
			},
			template: [
				"\r\n\t\t\t\t\r\n\t\t\t\t<h2 class=\"api-member-group-header\">Objects</h2>\r\n\t\t\t\t",
				{
					type: "view",
					"class": "Foreach",
					argument: {
						evaluator: function() {
return (this._binds[0].getValue());
},
						flags: {isScopeEval: true},
						binds: [{
							locator_type: "Name",
							locator: "widget",
							tail: [
								"extended_descriptor",
								"support_objects"
							]
						}]
					},
					as: "object",
					template: [
						"\r\n\t\t\t\t\t",
						{
							type: "view",
							"class": "View",
							container: {
								type: "Element",
								tag_name: "h3",
								property_bindings: {
									"data-scroll-name": {
										evaluator: function() {
return ('member:' + this._binds[0].getValue());
},
										binds: [{
											property_name: "object",
											tail: ["name"]
										}]
									}
								}
							},
							template: [
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["name"]
										}]
									}
								},
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["is_interface"]
										}]
									},
									template: ["<span class=\"api-support-interface-tag\">INTERFACE</span>"]
								},
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["extends_list"]
										}]
									},
									template: [
										"\r\n\t\t\t\t\t\t\t<span class=\"api-support-extends-list\">@extends</span>\r\n\t\t\t\t\t\t\t",
										{
											type: "view",
											"class": "Foreach",
											argument: {
												evaluator: function() {
return (this._binds[0].getValue());
},
												flags: {isScopeEval: true},
												binds: [{
													property_name: "object",
													tail: ["extends_list"]
												}]
											},
											as: "name",
											template: [
												"\r\n\t\t\t\t\t\t\t\t",
												{
													type: "view",
													"class": "Expression",
													argument: {
														evaluator: function() {
return (this._binds[0].getValue());
},
														flags: {isScopeEval: true},
														binds: [{property_name: "name"}]
													},
													container: {
														type: "Element",
														tag_name: "a",
														property_bindings: {
															href: {
																evaluator: function() {
return ('#object=Support;member=' + this._binds[0].getValue());
},
																binds: [{property_name: "name"}]
															}
														}
													}
												},
												"\r\n\t\t\t\t\t\t\t"
											]
										},
										"\r\n\t\t\t\t\t\t"
									]
								},
								"\r\n\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "object",
									tail: ["description"]
								}]
							},
							template: [
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Expression",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["description"]
										}]
									},
									escape_off: true,
									template: []
								},
								"\r\n\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "object",
									tail: ["member_chain"]
								}]
							},
							template: [
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue() && this._binds[1].getValue());
},
										binds: [
											{
												property_name: "object",
												tail: ["member_chain"]
											},
											{
												property_name: "object",
												tail: ["method_chain"]
											}
										]
									},
									template: ["<b>Members</b>"]
								},
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Foreach",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["member_chain"]
										}]
									},
									as: "member_group",
									template: [
										"\r\n\t\t\t\t\t\t\t",
										{
											name: "member_group",
											type: "include"
										},
										"\r\n\t\t\t\t\t\t"
									]
								},
								"\r\n\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t\t",
						{
							type: "view",
							"class": "If",
							argument: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									property_name: "object",
									tail: ["method_chain"]
								}]
							},
							template: [
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "If",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue() && this._binds[1].getValue());
},
										binds: [
											{
												property_name: "object",
												tail: ["member_chain"]
											},
											{
												property_name: "object",
												tail: ["method_chain"]
											}
										]
									},
									template: ["<b>Methods</b>"]
								},
								"\r\n\t\t\t\t\t\t",
								{
									type: "view",
									"class": "Foreach",
									argument: {
										evaluator: function() {
return (this._binds[0].getValue());
},
										flags: {isScopeEval: true},
										binds: [{
											property_name: "object",
											tail: ["method_chain"]
										}]
									},
									as: "method_group",
									template: [
										"\r\n\t\t\t\t\t\t\t",
										{
											name: "method_group",
											type: "include"
										},
										"\r\n\t\t\t\t\t\t"
									]
								},
								"\r\n\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t"
					]
				},
				"\r\n\t\t\t"
			]
		},
		"\r\n\r\n\t\t"
	],
	container: {
		type: "Element",
		tag_name: "div"
	},
	includes: {
		method_group: [
			"\r\n\t\t",
			{
				type: "view",
				"class": "If",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue());
},
					flags: {isScopeEval: true},
					binds: [{
						property_name: "method_group",
						tail: ["class_name"]
					}]
				},
				template: [
					"\r\n\t\t\t<div class=\"api-method-group-class-name\">\r\n\t\t\t\t",
					{
						type: "view",
						"class": "Expression",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "method_group",
								tail: ["class_name"]
							}]
						}
					},
					"\r\n\t\t\t</div>\r\n\t\t"
				]
			},
			"\r\n\t\t\r\n\t\t<table class=\"api-member-table\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"api-flag-td\"></td>\r\n\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t<td>Description</td>\r\n\t\t\t\t\t<td></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t",
			{
				type: "view",
				"class": "Foreach",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue());
},
					flags: {isScopeEval: true},
					binds: [{
						property_name: "method_group",
						tail: ["descriptors"]
					}]
				},
				as: "descriptor",
				template: [
					"\r\n\t\t\t\t",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "tr",
							static_classes: ["api-member-row"],
							events: {
								click: [{
									locator_type: "Id",
									locator: "page",
									name: "member_row_click",
									arguments: [{
										type: 2,
										data: {property_name: "descriptor"}
									}]
								}]
							},
							property_bindings: {
								"data-scroll-name": {
									evaluator: function() {
return ('member:' + (this._binds[0].getValue() ? this._binds[1].getValue() + '.' : '') + this._binds[2].getValue());
},
									binds: [
										{property_name: "extended_scroll_names"},
										{
											property_name: "object",
											tail: ["name"]
										},
										{
											property_name: "descriptor",
											tail: ["name"]
										}
									]
								}
							},
							class_bindings: {
								"0": {
									evaluator: function() {
return ((this._binds[0].getValue() || this._binds[1].getValue()) ? 'api-member-row-expandable' : '');
},
									binds: [
										{
											property_name: "descriptor",
											tail: ["returns"]
										},
										{
											property_name: "descriptor",
											tail: ["params"]
										}
									]
								}
							}
						},
						template: [
							"\r\n\t\t\t\t\t<td class=\"api-flag-td\">\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["is_private"]
									}]
								},
								template: ["\r\n\t\t\t\t\t\t\t<img title=\"Protected method\" src=\"/www/design/protected-method.gif\"/>\r\n\t\t\t\t\t\t"],
								else_template: ["\r\n\t\t\t\t\t\t\t<img title=\"Public method\" src=\"/www/design/public-method.gif\"/>\r\n\t\t\t\t\t\t"]
							},
							"\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"api-name-column\">\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["name"]
									}]
								}
							},
							"\r\n\t\t\t\t\t\t(",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["param_names_string"]
									}]
								}
							},
							")",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["returns"]
									}]
								},
								template: ["&nbsp;<span class=\"api-returns-icon glyphicon glyphicon-arrow-right\"></span>"]
							},
							"\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"api-description-td\">",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["description"]
									}]
								},
								escape_off: true,
								template: []
							},
							"</td>\r\n\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue() || this._binds[1].getValue());
},
									binds: [
										{
											property_name: "descriptor",
											tail: ["returns"]
										},
										{
											property_name: "descriptor",
											tail: ["params"]
										}
									]
								},
								template: ["\r\n\t\t\t\t\t\t<td valign=\"middle\" class=\"api-member-cell-expandable\">&#9660;</td>\r\n\t\t\t\t\t"],
								else_template: ["\r\n\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t"]
							},
							"\r\n\t\t\t\t"
						]
					},
					"\r\n\t\t\t\t",
					{
						type: "view",
						"class": "If",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								locator_type: "Id",
								locator: "page",
								tail: [
									"meta_storage",
									{
										property_name: "descriptor",
										tail: ["guid"]
									},
									"is_expanded"
								]
							}]
						},
						container: {
							type: "Emulated",
							options: {prepender: "AfterPrevious"}
						},
						refresher: {type: "Standard"},
						template: [
							"\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t",
							{
								type: "view",
								"class": "View",
								container: {
									type: "Element",
									tag_name: "tr",
									static_classes: ["api-member-extended-row"]
								},
								template: [
									"\r\n\t\t\t\t\t\t<td colspan=\"3\">\r\n\t\t\t\t\t\t\t",
									{
										type: "view",
										"class": "Expression",
										argument: {
											evaluator: function() {
return (this._callModifier("0", [this._binds[0].getValue(), 'api-member-inner-table']));
},
											binds: [{property_name: "descriptor"}],
											modifiers: [{
												locator_type: "Id",
												locator: "page",
												callback_name: "render_method_extended"
											}]
										},
										escape_off: true,
										template: []
									},
									"\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"api-member-cell-expandable\"></td>\r\n\t\t\t\t\t"
								]
							},
							"\r\n\t\t\t\t"
						]
					},
					"\r\n\t\t\t"
				]
			},
			"\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t\r\n\t"
		],
		member_group: [
			"\r\n\t\t",
			{
				type: "view",
				"class": "If",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue());
},
					flags: {isScopeEval: true},
					binds: [{
						property_name: "member_group",
						tail: ["class_name"]
					}]
				},
				template: [
					"\r\n\t\t\t<div class=\"api-method-group-class-name\">\r\n\t\t\t\t",
					{
						type: "view",
						"class": "Expression",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "member_group",
								tail: ["class_name"]
							}]
						}
					},
					"\r\n\t\t\t</div>\r\n\t\t"
				]
			},
			"\r\n\t\t\r\n\t\t<table class=\"api-member-table\" cellspacing=\"0\" cellpadding=\"0\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"api-flag-td\"></td>\r\n\t\t\t\t\t<td>Name</td>\r\n\t\t\t\t\t<td>Default</td>\r\n\t\t\t\t\t<td>Types</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t",
			{
				type: "view",
				"class": "Foreach",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue());
},
					flags: {isScopeEval: true},
					binds: [{
						property_name: "member_group",
						tail: ["descriptors"]
					}]
				},
				as: "descriptor",
				template: [
					"\r\n\t\t\t\t",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "tr",
							static_classes: ["api-member-row"],
							property_bindings: {
								"data-scroll-name": {
									evaluator: function() {
return ('member:' + (this._binds[0].getValue() ? this._binds[1].getValue() + '.' : '') + this._binds[2].getValue());
},
									binds: [
										{property_name: "extended_scroll_names"},
										{
											property_name: "object",
											tail: ["name"]
										},
										{
											property_name: "descriptor",
											tail: ["name"]
										}
									]
								}
							}
						},
						template: [
							"\r\n\t\t\t\t\t<td class=\"api-flag-td\">\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["is_private"]
									}]
								},
								template: ["\r\n\t\t\t\t\t\t\t<img title=\"Protected member\" src=\"/www/design/protected-property.gif\"/>\r\n\t\t\t\t\t\t"],
								else_template: ["\r\n\t\t\t\t\t\t\t<img title=\"Public member\" src=\"/www/design/public-property.gif\"/>\r\n\t\t\t\t\t\t"]
							},
							"\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["is_shared"]
									}]
								},
								template: ["<img title=\"Shared\" src=\"/www/design/shared.gif\"/>"]
							},
							"\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["is_constant"]
									}]
								},
								template: ["<img title=\"Constant\" src=\"/www/design/const.png\"/>"]
							},
							"\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "If",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["is_readonly"]
									}]
								},
								template: ["<img title=\"Readonly\" src=\"/www/design/readonly.png\"/>"]
							},
							"\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"api-name-column\">",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["name"]
									}]
								}
							},
							"</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["default_value"]
									}]
								},
								escape_off: true,
								template: []
							},
							"\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t",
							{
								type: "view",
								"class": "Foreach",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["type_names"]
									}]
								},
								as: "type_name",
								template: [
									"\r\n\t\t\t\t\t\t\t",
									{
										type: "view",
										"class": "Expression",
										argument: {
											evaluator: function() {
return (this._binds[0].getValue());
},
											flags: {isScopeEval: true},
											binds: [{property_name: "type_name"}]
										},
										escape_off: true,
										template: []
									},
									{
										type: "view",
										"class": "If",
										argument: {
											evaluator: function() {
return (this._binds[0].getValue() < this._binds[1].getValue() - 1);
},
											binds: [
												{property_name: "foreach_index"},
												{property_name: "count"}
											]
										},
										template: ["<br/>"]
									},
									"\r\n\t\t\t\t\t\t"
								]
							},
							"\r\n\t\t\t\t\t</td>\r\n\t\t\t\t"
						]
					},
					"\r\n\t\t\t\t",
					{
						type: "view",
						"class": "If",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "descriptor",
								tail: ["description"]
							}]
						},
						template: [
							"\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"4\" class=\"api-description-row-td api-description-td\">",
							{
								type: "view",
								"class": "Expression",
								argument: {
									evaluator: function() {
return (this._binds[0].getValue());
},
									flags: {isScopeEval: true},
									binds: [{
										property_name: "descriptor",
										tail: ["description"]
									}]
								},
								escape_off: true,
								template: []
							},
							"</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t"
						]
					},
					"\r\n\t\t\t"
				]
			},
			"\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t\r\n\t"
		]
	},
	properties: {
		extended_scroll_names: false,
		object: null,
		descriptor: null,
		extended_descriptor: null
	},
	real_class: "Standard",
	is_extended: false
};
Lava.widgets["ApiTree"] = {
	"extends": "FolderTree",
	includes: {
		node_title: [
			"\r\n\t\t",
			{
				type: "view",
				"class": "If",
				argument: {
					evaluator: function() {
return (this._binds[0].getValue() == 'folder');
},
					binds: [{
						property_name: "node",
						tail: ["type"]
					}]
				},
				template: [
					"\r\n\t\t\t",
					{
						type: "view",
						"class": "Expression",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "node",
								tail: ["title"]
							}]
						},
						container: {
							type: "Element",
							tag_name: "span",
							static_classes: ["lava-tree-title"],
							events: {
								click: [{
									locator_type: "Name",
									locator: "tree",
									name: "node_click",
									arguments: [{
										type: 2,
										data: {property_name: "node"}
									}]
								}]
							},
							class_bindings: {
								"0": {
									evaluator: function() {
return (this._binds[0].getValue() ? 'lava-tree-title-expandable' : '');
},
									binds: [{
										property_name: "node",
										tail: [
											"children",
											"length"
										]
									}]
								}
							}
						}
					},
					"\r\n\t\t"
				],
				else_template: [
					"\r\n\t\t\t",
					{
						type: "view",
						"class": "Expression",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "node",
								tail: ["title"]
							}]
						},
						container: {
							type: "Element",
							tag_name: "a",
							static_classes: ["lava-tree-title"],
							events: {
								click: [{
									locator_type: "Name",
									locator: "page",
									name: "node_click",
									arguments: [{
										type: 2,
										data: {property_name: "node"}
									}]
								}]
							},
							property_bindings: {
								href: {
									evaluator: function() {
return ('#' + this._binds[0].getValue() + '=' + this._binds[1].getValue());
},
									binds: [
										{
											property_name: "node",
											tail: ["type"]
										},
										{
											property_name: "node",
											tail: ["name"]
										}
									]
								}
							}
						}
					},
					"\r\n\t\t"
				]
			},
			"\r\n\t"
		],
		node_body: [
			"\r\n\t\t",
			{
				type: "view",
				"class": "View",
				container: {
					type: "Element",
					tag_name: "div",
					static_classes: ["lava-tree-node"],
					static_properties: {unselectable: "on"},
					class_bindings: {
						"0": {
							evaluator: function() {
return ('level-' + this._binds[0].getValue());
},
							binds: [{property_name: "level"}]
						},
						"1": {
							evaluator: function() {
return (this._binds[0].getValue() ? 'api-node-selected' : '');
},
							binds: [{
								property_name: "node",
								tail: ["is_selected"]
							}]
						}
					}
				},
				template: [
					"\r\n\t\t\t",
					{
						locator_type: "Name",
						locator: "tree",
						name: "node_body_content",
						type: "include"
					},
					"\r\n\t\t"
				]
			},
			"\r\n\t"
		]
	},
	"class": "Lava.WidgetConfigExtensionGateway",
	extender_type: "Standard",
	is_extended: false
};
Lava.widgets["ApiTabs"] = {
	template: [
		"\r\n\t\t",
		{
			type: "view",
			"class": "Foreach",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "tabs",
					tail: ["_tabs"]
				}]
			},
			as: "tab",
			template: [
				"\r\n\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "li",
						static_classes: ["api-tabs-header-item"]
					},
					template: [
						"\r\n\t\t\t\t\t",
						{
							type: "view",
							"class": "View",
							container: {
								type: "Element",
								tag_name: "a",
								static_classes: ["api-tabs-header-link"],
								events: {
									click: [{
										locator_type: "Name",
										locator: "tabs",
										name: "header_click",
										arguments: [{
											type: 2,
											data: {property_name: "tab"}
										}]
									}]
								},
								property_bindings: {
									href: {
										evaluator: function() {
return ('#tab=' + (this._binds[0].getValue() || ''));
},
										binds: [{
											property_name: "tab",
											tail: ["name"]
										}]
									}
								},
								class_bindings: {
									"0": {
										evaluator: function() {
return (this._binds[0].getValue() ? 'api-tabs-header-link-active' : '');
},
										binds: [{
											property_name: "tab",
											tail: ["is_active"]
										}]
									}
								}
							},
							template: [
								"\r\n\t\t\t\t\t\t",
								{
									locator_type: "Name",
									locator: "tabs",
									name: "tab_include",
									arguments: [
										{
											type: 2,
											data: {property_name: "tab"}
										},
										{
											type: 1,
											data: "title"
										}
									],
									type: "include"
								},
								"\r\n\t\t\t\t\t"
							]
						},
						"\r\n\t\t\t\t"
					]
				},
				"\r\n\t\t\t"
			],
			container: {
				type: "Element",
				tag_name: "ul",
				static_classes: ["api-tabs-header"]
			}
		},
		"\r\n\t\t",
		{
			type: "view",
			"class": "Foreach",
			argument: {
				evaluator: function() {
return (this._binds[0].getValue());
},
				flags: {isScopeEval: true},
				binds: [{
					locator_type: "Name",
					locator: "tabs",
					tail: ["_tabs"]
				}]
			},
			as: "tab",
			refresher: {type: "Standard"},
			template: [
				"\r\n\t\t\t\t\r\n\t\t\t\t",
				{
					type: "view",
					"class": "View",
					container: {
						type: "Element",
						tag_name: "div",
						static_classes: ["api-tabs-tab"],
						style_bindings: {
							display: {
								evaluator: function() {
return (this._binds[0].getValue() ? 'block' : 'none');
},
								binds: [{
									property_name: "tab",
									tail: ["is_active"]
								}]
							}
						}
					},
					template: [
						"\r\n\t\t\t\t\t",
						{
							locator_type: "Name",
							locator: "tabs",
							name: "tab_include",
							arguments: [
								{
									type: 2,
									data: {property_name: "tab"}
								},
								{
									type: 1,
									data: "content"
								}
							],
							type: "include"
						},
						"\r\n\t\t\t\t"
					]
				},
				"\r\n\t\t\t"
			],
			container: {
				type: "Element",
				tag_name: "div",
				static_classes: ["api-tabs-container"]
			}
		},
		"\r\n\t"
	],
	"extends": "Tabs",
	storage: {
		tabs: [
			{
				title: [
					"<img src=\"/www/design/play.png\"/>",
					{
						type: "view",
						"class": "If",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "tab",
								tail: ["is_active"]
							}]
						},
						template: ["<span class=\"api-tabs-header-link-title\">Tutorials</span>"]
					}
				],
				content: [
					"\r\n\t\t\t\t\t<div class=\"api-tree-header\">Tutorials</div>\r\n\t\t\t\t\t",
					{
						"extends": "ApiTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "page",
									tail: ["tutorials_nav_tree"]
								}]
							}
						},
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t\t\t\t"
				],
				name: "tutorials"
			},
			{
				title: [
					"<img src=\"/www/design/book.png\"/>",
					{
						type: "view",
						"class": "If",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "tab",
								tail: ["is_active"]
							}]
						},
						template: ["<span class=\"api-tabs-header-link-title\">Reference</span>"]
					}
				],
				content: [
					"\r\n\t\t\t\t\t<div class=\"api-tree-header\">Reference</div>\r\n\t\t\t\t\t",
					{
						"extends": "ApiTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "page",
									tail: ["reference_nav_tree"]
								}]
							}
						},
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t\t\t\t"
				],
				name: "reference",
				is_active: true
			},
			{
				title: [
					"<img src=\"/www/design/class_large.png\"/>",
					{
						type: "view",
						"class": "If",
						argument: {
							evaluator: function() {
return (this._binds[0].getValue());
},
							flags: {isScopeEval: true},
							binds: [{
								property_name: "tab",
								tail: ["is_active"]
							}]
						},
						template: ["<span class=\"api-tabs-header-link-title\">API</span>"]
					}
				],
				content: [
					"\r\n\t\t\t\t\t<div class=\"api-tree-header\">LiquidLava API</div>\r\n\t\t\t\t\t",
					{
						"extends": "ApiTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "page",
									tail: ["api_tree"]
								}]
							}
						},
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t\t\t\t\t",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "a",
							static_classes: ["api-system-link"],
							static_properties: {href: "#object=Widgets"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "page",
									name: "node_click",
									arguments: [{
										type: 2,
										data: {
											locator_type: "Id",
											locator: "page",
											tail: ["sugar_descriptor"]
										}
									}]
								}]
							}
						},
						template: ["Widgets"]
					},
					"\r\n\t\t\t\t\t",
					{
						type: "view",
						"class": "View",
						container: {
							type: "Element",
							tag_name: "a",
							static_classes: ["api-system-link"],
							static_properties: {href: "#object=Support"},
							events: {
								click: [{
									locator_type: "Name",
									locator: "page",
									name: "node_click",
									arguments: [{
										type: 2,
										data: {
											locator_type: "Id",
											locator: "page",
											tail: ["support_descriptor"]
										}
									}]
								}]
							}
						},
						template: ["Support"]
					},
					"\r\n\t\t\t\t\t<div class=\"api-tree-header\">Firestorm API</div>\r\n\t\t\t\t\t",
					{
						"extends": "ApiTree",
						assigns: {
							records: {
								evaluator: function() {
return (this._binds[0].getValue());
},
								flags: {isScopeEval: true},
								binds: [{
									locator_type: "Name",
									locator: "page",
									tail: ["firestorm_api_tree"]
								}]
							}
						},
						"class": "Lava.WidgetConfigExtensionGateway",
						extender_type: "Standard",
						type: "widget"
					},
					"\r\n\t\t\t\t"
				],
				name: "api"
			}
		]
	},
	"class": "Lava.WidgetConfigExtensionGateway",
	extender_type: "Standard",
	is_extended: false
};
