
Lava.define(
'Lava.widget.DocPage',
/**
 * This file is not the best example of what you can write with Lava framework, sorry for that.
 * When I have more time - I will rewrite it.
 * Author.
 */
{

	Extends: 'Lava.widget.Standard',
	name: 'page',

	_properties: {
		is_loading: false,
		// Data for navigation trees
		/** @type {Lava.system.Enumerable} */
		api_tree: null,
		firestorm_api_tree: null,
		reference_nav_tree: null,
		tutorials_nav_tree: null
	},

	_role_handlers: {
		nav_tabs: '_handleNavTabs'
	},

	_modifiers: {
		render_link: '_renderLink'
	},

	// DOM element with default promotional text
	_promo_text_element: null,
	_tabs_widget: null, // registered via role
	_color_animation: null,
	_scroll_animation: null,
	_current_scroll_target_attribute: null,
	_hashchange_listener: null,
	_active_tab_changed_listener: null,

	_items_by_name_hashes: {api: {}, reference: {}, tutorials: {}}, // used to find items from navigation trees by hash
	// tab_name => item, that is currently loaded into the tab (tutorial, reference, or class/object)
	_tab_items: {},
	// widget, which renders the active tab item. needs refactoring.
	_tab_content_widgets: {},
	// the name of tab, which is owner of the widget with current content
	_active_tab_name: 'reference',
	// where to scroll after request success
	_request_scroll_target: "",
	// parsed location for current request
	_request_location_data: null,
	_request: null,

	ALLOWED_HASH_KEYS: ["tab", "member", "event", "config", "property"], // "tab" is handled separately
	TAB_NAMES: ['tutorials', 'reference', 'api'],
	PAGE_TYPE_TO_TAB_MAP: {
		tutorial: 'tutorials',
		reference: 'reference',
		object: 'api',
		"class": 'api'
	},
	// directories for page content files for each page type
	JSON_DIRS: {
		object: '/www/api/',
		'class': '/www/api/',
		reference: '/www/reference/',
		tutorial: '/www/tutorials/'
	},
	BASE_PAGE_PATH: "/www/doc.html",
	EXT_PAGE_PATH: "/www/doc/",

	init: function(config, widget, parent_view, template, properties) {

		this._color_animation = new Lava.animation.Standard({
			duration: 1500,
			transition: function(x) {
				return (x < 0.5) ? Lava.transitions.inOutCubic(x*2) : Lava.transitions.inOutCubic(1 - (x - 0.5)*2);
			},
			animators: [
				{type: 'Color', from: [255, 255, 255], to: [255, 128, 128], property: 'background-color'}
			]
		}, null);

		this._properties.api_tree = Examples.makeLive(api_tree_source);
		this._prepareTree(this._items_by_name_hashes.api, this._properties.api_tree, 'api', null);
		this._properties.firestorm_api_tree = Examples.makeLive(firestorm_api_tree_source);
		this._prepareTree(this._items_by_name_hashes.api, this._properties.firestorm_api_tree, 'api', null);
		this._properties.reference_nav_tree = Examples.makeLive(reference_nav_tree_source);
		this._prepareTree(this._items_by_name_hashes.reference, this._properties.reference_nav_tree, 'reference', null);
		this._properties.tutorials_nav_tree = Examples.makeLive(tutorials_nav_tree_source);
		this._prepareTree(this._items_by_name_hashes.tutorials, this._properties.tutorials_nav_tree, 'tutorials', null);

		this._tab_content_widgets.api = Lava.createWidget('ClassContent');
		this._items_by_name_hashes.api['Widgets'] = new Lava.mixin.Properties({
			type: 'object', name: 'Widgets', title: 'Widgets', tab_name: 'api', parent: null, file_path: this.JSON_DIRS["object"] + 'Widgets.js'
		});
		this._items_by_name_hashes.api['Support'] = new Lava.mixin.Properties({
			type: 'object', name: 'Support', title: 'Support', tab_name: 'api', parent: null, file_path: this.JSON_DIRS["object"] + 'Support.js'
		});

		this.Standard$init(config, widget, parent_view, template, properties);

		this._hashchange_listener = Lava.DOMEvents.addListener('hashchange', this._onHashChange, this);
		Lava.DOMEvents.addListener("popstate", this._onPopState, this);
		Lava.DOMEvents.addListener("click", this._onPageClick, this);

	},

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// main logic

	injectIntoExistingElement: function(element) {

		this.Standard$injectIntoExistingElement(element);

		// load initial item
		var hash_segments,
			location_hash = window.location.hash,
			location_path = window.location.pathname;

		if (typeof(page_json) != "undefined") {
			var path_data = this._parseLocationPath(location_path);
			if (path_data.item) {
				this._initItem(page_json, path_data.item);
			}
		}

		if (location_hash && location_path == this.BASE_PAGE_PATH) { // select tab on root
			hash_segments = location_hash.substr(1).split("=");

			if (hash_segments.length != 2 || hash_segments[0] != "tab") {
				this._tryRedirect(location_hash);
				return;
			}

			if (hash_segments[0] == "tab" && this.TAB_NAMES.indexOf(hash_segments[1]) != -1) {
				this._active_tab_name = hash_segments[1];
			}
		}

		if (location_path != this.BASE_PAGE_PATH) { // not on root
			this._loadItemByLocation(location_path, location_hash);
		}

	},

	_loadItem: function(item) {

		var self = this;
		this.set('is_loading', true);

        this._request = $.ajax({
            url: item.get("file_path"),
            method: 'GET',
            success:function(text) {
                self._onRequestSuccess(text, item);
            },
            error: function() {
                self._onRequestFailure(item);
            }
        });

		Lava.refreshViews();

	},

	_onRequestSuccess: function(text, item) {

		this.set('is_loading', false);
		this._request = null;

		var page_json = eval('(' + text.substr("var page_json = ".length) + ')');
		this._initItem(page_json, item);
		this._showItem(item);

		this._scrollToTarget(this._request_scroll_target);

		Lava.suspendListener(this._hashchange_listener);
		this._setLocation(this._request_location_data.pathname, this._request_location_data.hash);
		Lava.resumeListener(this._hashchange_listener);

	},

	_onRequestFailure: function(item) {

		this.set('is_loading', false);
		this._request = null;
		Lava.refreshViews();

	},

	// try redirect from old URL scheme, when everything was in hashes
	_tryRedirect: function(location_hash) {

		var pairs = location_hash.substr(1).split(";"),
			pair,
			i = 0,
			count = pairs.length,
			item_href = null,
			item_hash = "";

		for (; i < count; i++) {
			pair = pairs[i].split("=");
			if (pair.length == 2) {
				if (
					(pair[0] in this.PAGE_TYPE_TO_TAB_MAP)
					&& (pair[1] in this._items_by_name_hashes[this.PAGE_TYPE_TO_TAB_MAP[pair[0]]])
				) {
					item_href = this._renderLink(pair[0], pair[1]);
				}
				if (this.ALLOWED_HASH_KEYS.indexOf(pair[0]) != -1) {
					item_hash = "#" + pair[0] + "=" + pair[1];
				}
			}
		}

		if (item_href) {
			window.location.href = item_href + item_hash;
		} else {
			window.alert("Invalid URL");
		}

	},

	_onPopState: function(event_name, event_object) {

		this._loadItemByLocation(window.location.pathname, window.location.hash);

	},

	_onPageClick: function(event_name, event_object) {

		var target = event_object.target,
            startsWith = Firestorm.String.startsWith,
			href;

		if (target && Firestorm.Element.getTagName(target) == "a") {

			href = Firestorm.Element.getAttribute(target, "href");

			if (
				href
				&& href != "#"
				&& (href[0] == "#" || startsWith(href, this.BASE_PAGE_PATH) || startsWith(href, this.EXT_PAGE_PATH))
			) {

				if (startsWith(href, this.BASE_PAGE_PATH + "#tab=")) {

					this._doHashAction(href.substr(href.indexOf("#")));

				} else if (href[0] == "#") {

					this._doHashAction(href);

				} else if (this._request == null) {

					if (href.indexOf("#") == -1) {
						this._loadItemByLocation(href, "");
					} else {
						this._loadItemByLocation(href.substr(0, href.indexOf("#")), href.substr(href.indexOf("#")));
					}
				}

				event_object.preventDefault();

			}

		}

	},

	_loadItemByLocation: function(location_path, location_hash) {

		var path_data = this._parseLocationPath(location_path),
			hash_data = this._parseLocationHash(location_hash);

		path_data.pathname = location_path;
		path_data.hash = location_hash;

		if (path_data.is_invalid) {

			window.alert('Invalid URL');

		} else {

			var item = path_data['item'];

			if (item) {

				if (item.get('is_loaded')) {

					this._showItem(item);
					hash_data.scroll_target && this._scrollToTarget(hash_data.scroll_target);
					this._setLocation(location_path, location_hash);

				} else {

					this._request_scroll_target = hash_data.scroll_target;
					this._request_location_data = path_data;
					this._loadItem(item);

				}

			}

		}

	},

	_parseLocationPath: function(pathname) {

		var path_segments,
			tab_name,
			item_name,
			name_group,
			result = {
				item: null,
				is_invalid: false
			};

		if (Firestorm.String.startsWith(pathname, this.EXT_PAGE_PATH)) {
			path_segments = pathname.substr(this.EXT_PAGE_PATH.length).split("/");
			if (
				path_segments.length != 2
				|| !(path_segments[0] in this.PAGE_TYPE_TO_TAB_MAP)
			) {
				result.is_invalid = true;
			} else {
				tab_name = this.PAGE_TYPE_TO_TAB_MAP[path_segments[0]];
				name_group = this._items_by_name_hashes[tab_name];
				item_name = path_segments[1].substr(0, path_segments[1].length - ".html".length);
				if (!name_group || !name_group[item_name]) {
					result.is_invalid = true;
				} else {
					result['item'] = name_group[item_name];
				}
			}
		}

		return result;

	},

	_parseLocationHash: function(hash_string) {

		var hash_segments,
			result = {
				scroll_target: null,
				tab: null,
				is_invalid: false
			};

		if (hash_string) {
			hash_segments = hash_string.substr(1).split('=');
			if (
				hash_segments.length != 2
				|| this.ALLOWED_HASH_KEYS.indexOf(hash_segments[0]) == -1
				|| (hash_segments[0] == 'tab' && this.TAB_NAMES.indexOf(hash_segments[1]) != -1)
			) {
				result.is_invalid = true;
			} else if (hash_segments[0] == 'tab') {
				result['tab'] = hash_segments[1];
			} else {
				result['scroll_target'] = hash_segments[0] + ':' + hash_segments[1];
			}
		}

		return result;

	},

	_showItem: function(item) {

		var content_area = Lava.view_manager.getViewById('content_area').getContainer().getDOMElement(),
			item_tab = item.get('tab_name'),
			is_item_changed = (this._tab_items[item_tab] != item),
			is_tab_changed = (this._active_tab_name != item_tab),
			active_content_widget = this._tab_content_widgets[this._active_tab_name],
			tab_content_widget = this._tab_content_widgets[item_tab];

		this._hidePromoText();
		this._setSelectedTab(item_tab);
		if (is_tab_changed || (is_item_changed && item_tab != 'api')) {
			if (active_content_widget && active_content_widget.isInDOM()) active_content_widget.remove();
		}

		if (is_item_changed) {

			if (item_tab == 'api') {
				tab_content_widget.clearMetaStorage();
				tab_content_widget.set('descriptor', item);
				tab_content_widget.set('extended_descriptor', item.get('extended_descriptor'));
			} else {
				tab_content_widget && tab_content_widget.destroy();
				tab_content_widget = new Lava.widget.Standard(item.get('widget_config'));
				this._tab_content_widgets[item_tab] = tab_content_widget;
			}

			if (this._tab_items[item_tab]) {
				this._tab_items[item_tab].set('is_selected', false);
			}
			this._tab_items[item_tab] = item;
			if (item_tab == "api") {
				this._collapseTree(this._properties.api_tree);
			}
			this._expandNodeParents(item);
			item.set('is_selected', true);

		}

		if (is_item_changed || is_tab_changed) {
			if (tab_content_widget && !tab_content_widget.isInDOM()) tab_content_widget.inject(content_area, 'Top');
			if (!tab_content_widget) this._showPromoText();
		}
		Lava.refreshViews();

	},

	_doHashAction: function(hash) {

		var segments = hash.substr(1).split("=");

		if (hash) {

			if (
				segments.length != 2
				|| this.ALLOWED_HASH_KEYS.indexOf(segments[0]) == -1
				|| (segments[0] == "tab" && this.TAB_NAMES.indexOf(segments[1]) == -1)
			) {

				//window.alert("Invalid URL");

			} else if (this._request == null) {

				if (segments[0] == "tab") {

					this._switchTab(segments[1]);

				} else {

					this._scrollToTarget(segments[0] + ':' + segments[1]);

				}

			}

		}

	},

	_onHashChange: function(event_name, event) {

		this._doHashAction(window.location.hash);

	},

	_setLocation: function(path, hash) {
		try {
			if (window.location.pathname != path || window.location.hash != hash) {
				window.history.pushState({}, "", path + hash);
			}
		} catch (e) {}
	},

	// end
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// supporting

	_initItem: function(page_json, short_descriptor) {

		var type = short_descriptor.get('type'),
			extended_descriptor,
			events,
			support_objects,
			i = 0,
			count;

		short_descriptor.set('is_loaded', true);

		if (type == 'class' || type == 'object') {

			extended_descriptor = page_json;
			events = extended_descriptor.events;
			support_objects = extended_descriptor.support_objects;

			if (extended_descriptor.method_chain) this._initItemChain(extended_descriptor.method_chain);
			//if (extended_descriptor.member_chain) this._initItemChain(extended_descriptor.member_chain);

			if (events) {
				for (i = 0, count = events.length; i < count; i++) {
					events[i].guid = Lava.guid++;
					events[i] = new Lava.mixin.Properties(events[i]);
				}
			}

			if (support_objects) {
				for (i = 0, count = support_objects.length; i < count; i++) {
					if (support_objects[i].method_chain) this._initItemChain(support_objects[i].method_chain);
				}
			}

			short_descriptor.set('extended_descriptor', extended_descriptor);

		} else if (type == 'reference' || type == 'tutorial') {

			short_descriptor.set('widget_config', page_json);

		} else {

			Lava.t('unknown item type: ' + type);

		}

	},

	_scrollToTarget: function(scroll_target_attribute) {

		var self = this,
			content_area,
			scroll_target;

		if (scroll_target_attribute /*&& this._current_scroll_target_attribute != scroll_target_attribute*/) {

			// @todo
			//this._current_scroll_target_attribute = scroll_target_attribute;
			window.setTimeout(function(){

				content_area = Lava.view_manager.getViewById('content_area').getContainer().getDOMElement();
				scroll_target = Firestorm.Element.selectElements(content_area, '*[data-scroll-name=' + scroll_target_attribute + ']')[0];
				if (scroll_target) {

					if (this._scroll_animation) {
                        $('html, body').stop();
					}

                    this._scroll_animation = true;
                    $('html, body').animate({
                        scrollTop: $("#elementtoScrollToID").offset().top,
                        duration: 1000,
                        complete: function(){
                            self._color_animation.finish(); // finish with the old target
                            self._color_animation.setTarget(scroll_target);
                            self._color_animation.start();
                            self._scroll_animation = null;
                        }
                    }, 2000);

				}

			}, 0);

		} else {

			window.scrollTo(0,0);

		}

	},

	_handleNavTabs: function(tabs_widget) {

		this._tabs_widget = tabs_widget;
		this._switchTab(this._active_tab_name);
		this._active_tab_changed_listener = tabs_widget.onPropertyChanged('active_tab', this._onTabSelected, this);

	},

	_switchTab: function(tab_name) {

		if (this._tabs_widget) {
			var tab = this._tabs_widget.getTabObjects()[this.TAB_NAMES.indexOf(tab_name)];
			tab.set('is_active', true);
		}

	},

	// select tab in the tree without touching the content area
	_setSelectedTab: function(tab_name) {

		if (this._tabs_widget) {
			Lava.suspendListener(this._active_tab_changed_listener);
			this._switchTab(tab_name);
			Lava.resumeListener(this._active_tab_changed_listener);
		}
		this._active_tab_name = tab_name;

	},

	_onTabSelected: function(tabs_widget) {

		var new_tab_name = tabs_widget.get('active_tab').get('name'),
			new_tab_widget = this._tab_content_widgets[new_tab_name],
			current_active_widget = this._tab_content_widgets[this._active_tab_name],
			item = this._tab_items[new_tab_name];

		if (this._request == null && new_tab_name != this._active_tab_name) {

			if (item) {
				this._hidePromoText();
				this._setLocation(this._renderLink(item.get("type"), item.get("name")), "");
			} else {
				this._setLocation(this.BASE_PAGE_PATH + "#tab=" + new_tab_name, "");
			}
			current_active_widget && current_active_widget.isInDOM() && current_active_widget.remove();
			new_tab_widget && !new_tab_widget.isInDOM() && new_tab_widget.inject(
				Lava.view_manager.getViewById('content_area').getContainer().getDOMElement(),
				'Top'
			);
			if (!item) this._showPromoText();
			this._active_tab_name = new_tab_name;

		}

	},

	// end
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// utility

	_startsWith: function(string, prefix) {
		return string.substr(0, prefix.length) == prefix;
	},

	// modifier
	_renderLink: function(type, name, hash) {

		return this.EXT_PAGE_PATH + type + "/" + name + ".html" + (hash ? ("#" + hash) : "");

	},

	/**
	 * Set "parent" and "tab_name" for each record in the tree
	 * Store items into `hash` as `hash[item_name] => item`
	 */
	_prepareTree: function(hash, collection, tab_name, parent) {

		var children,
			self = this;

		collection.each(function(record) {
			record.set('parent', parent);
			record.set('tab_name', tab_name);
			if (record.get('type') != 'folder') {
				hash[record.get('name')] = record;
				record.set("file_path", self.JSON_DIRS[record.get('type')] + record.get('name') + '.js');
			}
			children = record.get('children');
			if (children) {
				self._prepareTree(hash, children, tab_name, record);
			}
		})

	},

	_initItemChain: function(chain) {

		var group_count = chain.length,
			group_index = 0,
			descriptors,
			i,
			count;

		for (; group_index < group_count; group_index++) {
			descriptors = chain[group_index].descriptors;
			for (i = 0, count = descriptors.length; i < count; i++) {
				descriptors[i].guid = Lava.guid++;
				descriptors[i] = new Lava.mixin.Properties(descriptors[i]);
			}
		}

	},

	_hidePromoText: function() {
		if (!this._promo_text_element) {
			this._promo_text_element = Firestorm.getElementById('default_text');
		}
		this._promo_text_element && Firestorm.Element.remove(this._promo_text_element);
	},

	_showPromoText: function() {
		this._promo_text_element && Firestorm.Element.insertElementBefore(
			Lava.view_manager.getViewById('content_area').getContainer().getDOMElement(),
			this._promo_text_element
		);
	},

	_collapseTree: function(nodes) {

		var self = this;
		nodes.each(function(node) {
			if (node.get("children")) {
				self._collapseTree(node.get("children"));
				node.set("is_expanded", false);
			}
		})

	},

	_expandNodeParents: function(node) {
		var parent = node.get('parent');
		while (parent) {
			parent.set('is_expanded', true);
			parent = parent.get('parent');
		}
	}

	// end
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});