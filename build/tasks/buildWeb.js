
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

		var generators = {
			widgets_page_navigation: function () {
				var result = '';
				var descriptors = grunt.config('www_files').widget_descriptors;
				for (var i = 0, count = descriptors.length; i < count; i++) {
					var descriptor = descriptors[i];
					result += '<li><a href="#' + descriptor.title + '">' + descriptor.title + '</a></li>';
					// <ul class="nav"><li><a href="#">Usage</a></li></ul>
				}
				return result;
			},
			widgets_page: function () {

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
					return includes[current_page_descriptor.header_include];
				}
				return '';
			},
			footer_include: function() {
				if (current_page_descriptor.footer_include) {
					if (!includes[current_page_descriptor.footer_include]) throw new Error();
					return includes[current_page_descriptor.footer_include];
				}
				return '';
			},
			page_script: function() {
				return createPageScript(current_page_descriptor.page_path);
			},
			loading_indicator: function() {
				return includes["loading_indicator.html"];
			}
		};

		function processTemplates(src) {
			src = src.replace(/(?:\/\*|\<)\%include\:(.+?)\%(?:\>|\*\/)/g, function(_, include_name) {
				if (!(include_name in includes)) throw new Error();
				return includes[include_name];
			});
			src = src.replace(/(?:\/\*|\<)\%var\:(.+?)\%(?:\>|\*\/)/g, function(_, var_name) {
				if (!(var_name in vars)) throw new Error();
				return vars[var_name];
			});
			src = src.replace(/(?:\/\*|\<)\%generator\:(.+?)\%(?:\>|\*\/)/g, function(_, generator_name) {
				if (!(generator_name in generators)) throw new Error();
				return generators[generator_name]();
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

			//grunt.file.write('pages/' + page_path + '.page.js', createPageScript(page_path));

		}

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// build To Do MVC APP

		var page_src = grunt.file.read('todo_app/index.html'),
			page_widget_src;

		// parse body of existing index
		page_src.replace(/\<body([\s\S]+?)\<\/body\>/, function(body) {
			body = body.replace(/\<script src="bower_components\/todomvc-common\/base.js"\>\<\/script\>/, '');
			page_widget_src = "page_config = " + Lava.serializer.serialize(page_to_widget(body)) + ';';
		});

		page_src = grunt.file.read('pages_src/todo_app.html');
		page_src = page_src.replace(/\/\*lavabuild\:scripts\*\//, function() {
			return grunt.file.read('todo_app/bower_components/director/build/director.js') + "\n\n"
				+ grunt.file.read('todo_app/js/Widget/Input/AutofocusText.class.js') + "\n\n"
				+ grunt.file.read('todo_app/js/Widget/TodoApp.class.js') + "\n\n"
				+ page_widget_src + "\n\n";
		});

		grunt.file.write('todo_app/index_compiled.html', page_src);

		// end
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	}));

};