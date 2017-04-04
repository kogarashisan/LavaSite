
module.exports = function(grunt) {

	grunt.registerTask('buildWeb', global.bug1135(function() {

		var Lava = global.Lava,
			LavaBuild = global.LavaBuild,
			fs = require('fs'),
			vars = {},
			includes = readIncludes(),
			current_page_descriptor,
			page_descriptors = grunt.config('www_files').pages,
			page_template = grunt.file.read('templates/page.template.html');

		function readIncludes() {
			var include_names = fs.readdirSync('includes/');
			var name;
			var result = {};
			for (var i = 0, count = include_names.length; i < count; i++) {
				name = include_names[i];
				result[name] = grunt.file.read('includes/' + name);
			}
			return result;
		}

		function renderNavbarDropDown(children_array) {
			var result = "",
				is_active = false,
				child_node,
				attributes,
				classes,
				i = 0,
				count = children_array.length;

			for (; i < count; i++) {
				child_node = children_array[i];
				attributes = " href=\"" + (child_node.href || "#") + "\"";
				classes = 'lava-menu-dropdown-link';
				if (child_node.is_blank) {
					attributes += " target=\"_blank\"";
				}
				if (child_node.is_disabled) {
					classes += " lava-dropdown-menu-item-disabled";
				}
				attributes += " class=\"" + classes + "\"";

				if (child_node.type == "header") {
					result += "<li class='lava-dropdown-header'>" + child_node.title + "</li>";
				} else {
					result += "<li><a" + attributes + ">" + child_node.title + "</a></li>";
				}

				if (child_node.href && child_node.href.indexOf("/" + current_page_descriptor.page_path) == 0) {
					is_active = true;
				}
			}

			return {
				html: "<ul class=\"lava-dropdown-menu\">" + result + "</ul>",
				is_active: is_active
			};
		}

		var generators = {
			widgets_page_navigation: function() {
				var result = '';
				var descriptors = grunt.config('www_files').widget_descriptors;
				for (var i = 0, count = descriptors.length; i < count; i++) {
					var descriptor = descriptors[i];
					result += '<li><a href="#' + descriptor.title + '">' + descriptor.title + '</a></li>';
					// <ul class="nav"><li><a href="#">Usage</a></li></ul>
				}
				return result;
			},
			widgets_page: function() {

				function highlight_widget_example(src) {
					var cut_start_marker = "<!--lavabuild_cut_before-->";
					var cut_end_marker = "<!--lavabuild_cut_after-->";
					var index = src.indexOf(cut_start_marker);
					if (index != -1) {
						src = src.substr(index + cut_start_marker.length);
					}
					index = src.indexOf(cut_end_marker);
					if (index != -1) {
						src = src.substr(0, index);
					}
					src = src.replace(/\<\!\-\-lavabuild\:include\_FolderTree\-\-\>/, function() {
						return grunt.file.read('templates/FolderTree.html');
					});
					return "{literal:}"
						+ LavaBuild.wrapHighlightedBlocks_A([
							LavaBuild.packCode('xml', 'Source', '', src)
						])
						+ "{:literal}";
				}

				var result = '';
				var descriptors = grunt.config('www_files').widget_descriptors;
				for (var i = 0, count = descriptors.length; i < count; i++) {
					var descriptor = descriptors[i];
					result += '<a class="widgets-api-link-h2 h3" href="' + descriptor.api_href + '"><span class="glyphicon glyphicon-link"></span>' + (descriptor.api_title || "API") + '</a>';
					result += '<h1 id="' + descriptor.title + '">' + descriptor.title + "</h1>";
					if (grunt.file.exists('widgets_page_src/' + descriptor.title + '/description.html')) {
						result += grunt.file.read('widgets_page_src/' + descriptor.title + '/description.html');
					}
					var src = grunt.file.read('widgets_page_src/' + descriptor.title + '/template.html');
					result += "<example>" + src + "</example>\n";
					result += highlight_widget_example(src);
					result += '\n\n';
				}

				return result;

			},
			tasks_page: function() {
				return global['tasks_page_export'];
			},
			main_page_example: function() {
				return global['main_page_example'];
			},
			header_include: function() {
				if (current_page_descriptor.header_include) {
					if (!includes[current_page_descriptor.header_include]) throw new Error();
					return processTemplates(includes[current_page_descriptor.header_include]);
				}
				return '';
			},
			header_bottom_include: function() {
				if (current_page_descriptor.header_bottom_include) {
					if (!includes[current_page_descriptor.header_bottom_include]) throw new Error();
					return processTemplates(includes[current_page_descriptor.header_bottom_include]);
				}
				return '';
			},
			page_script: function() {
				return createPageScript(current_page_descriptor.page_path);
			},
			loading_indicator: function() {
				return includes["loading_indicator.html"];
			},
			footer_class: function() {
				return (current_page_descriptor.page_path == "index") ? "lava-footer-index" : '';
			},
			navbar_items: function() {
				var menu_items = grunt.config('www_files').navbar,
					result = '',
					i = 0,
					count = menu_items.length,
					child_node,
					attributes,
					classes;

				for (; i < count; i++) {
					child_node = menu_items[i];
					if (child_node.children) {
						var dropdown_result = renderNavbarDropDown(child_node.children);
						result += "<li class=\"dropdown lava-navbar-item" + (dropdown_result.is_active ? " lava-menu-item-active" : "") + "\" x:widget=\"DropDown\">"
								+ "<a href=\"#\" class=\"dropdown-toggle lava-navbar-item-a\" x:type=\"view\" x:roles=\"$dropdown.trigger\">"
									+ child_node.title + " <b class=\"caret\"></b>"
								+ "</a>"
								+ dropdown_result.html
							+ "</li>";
					} else {
						classes = "lava-navbar-item-a";
						attributes = " href=\"" + (child_node.href || "#") + "\"";
						if (child_node.href && child_node.href.indexOf("/" + current_page_descriptor.page_path) == 0) {
							classes += " lava-menu-item-active";
						}
						if (child_node.is_disabled) {
							classes += " lava-menu-item-disabled";
						}
						attributes += " class=\"" + classes + "\"";
						result += "<li class=\"lava-navbar-item\"><a" + attributes + ">" + child_node.title + "</a></li>";
					}
				}

				return result;
			},
			core_version: function() {
				var version_string = grunt.file.readJSON(global.LAVA_CORE_DIRECTORY + 'package.json').version;
				if (!version_string.match(/\d+\.\d+\.\d+/)) Lava.t();
				return "v" + version_string;
			},
			changelog_versions: function() {
				var filenames = fs.readdirSync('www/versions');
				var versions = [];
				filenames.forEach(function(filename) {
					if (filename.match(/\d+\.(\d+|x)(\.(\d+|x))?\.html/)) {
						var parts = filename.split('.');
						if (parts[0].match(/\d+/)) parts[0] = +parts[0];
						if (parts[1].match(/\d+/)) parts[1] = +parts[1];
						if (parts[2].match(/\d+/)) parts[2] = +parts[2];
						parts.pop();
						versions.push(parts);
					}
				});
				versions = Firestorm.Sorting[Firestorm.schema.DEFAULT_UNSTABLE_SORT_ALGORITHM](versions, function(a, b) {
					return a[0] > b[0] || a[1] > b[1] || a[2] > b[2];
				});
				var result = [{name: 'next'}];
				versions.forEach(function(version) {
					result.push({name: version.join('.')});
				});
				result.push({name: 'older'});
				return "var LavaVersions = " + Lava.serializer.serialize(result) + ";";
			}
		};

		function processTemplates(src) {
			src = src.replace(/<!--\{\*.+?\*\}-->/g, "");
			src = src.replace(/(?:\/\*|\<)\%var\:(.+?)\%(?:\>|\*\/)/g, function(_, var_name) {
				if (!(var_name in vars)) throw new Error();
				return vars[var_name];
			});
			src = src.replace(/(?:\/\*|\<)\%generator\:(.+?)\%(?:\>|\*\/)/g, function(_, generator_name) {
				if (!(generator_name in generators)) throw new Error();
				return generators[generator_name]();
			});
			src = src.replace(/(?:\/\*|\<)\%include\:(.+?)\%(?:\>|\*\/)/g, function(_, include_name) {
				if (!(include_name in includes)) throw new Error();
				return processTemplates(includes[include_name]);
			});
			return src;
		}

		function page_to_widget(page_src) {
			var raw_template = Lava.TemplateParser.parseRaw(page_src);
			if (raw_template.length != 1) Lava.t();
			var raw_tag = raw_template[0];
			var config = Lava.parsers.Common.toWidget(raw_tag);
			config.is_extended = true;
			config['class'] = (raw_tag.attributes && raw_tag.attributes['lava-app'])
				? raw_tag.attributes['lava-app']
				: "Standard";
			return config;
		}

		function createPageScript(page_path) {

			var page_src = grunt.file.read('pages_src/' + page_path + '.html');
			var config = page_to_widget(processTemplates(page_src));

			return "Site.pages['" + page_path + "'] = " + Lava.serializer.serialize(config) + ';';

		}

		for (var i = 0, count = page_descriptors.length; i < count; i++) {

			current_page_descriptor = page_descriptors[i];
			var page_path = current_page_descriptor.page_path;
			vars['page_path'] = page_path;
			vars['page_title'] = current_page_descriptor.page_title;
			grunt.file.write(page_path + '.html', processTemplates(page_template));

		}

	}));

};