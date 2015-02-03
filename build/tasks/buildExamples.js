
/*
Create JS files in www/examples directory.
 */

module.exports = function(grunt) {

	grunt.registerTask('buildExamples', global.bug1135(function() {

		var fs = require('fs');
		var example_names = fs.readdirSync('examples/');
		var Lava = global.Lava;
		var packs = {};

		function makeTab(example, title, type, text) {

			example.tabs.push({
				title: title,
				content: global.LavaBuild.highlight(type, text)
			})

		}

		function buildExample(example_name) {

			var dirname = 'examples/' + example_name + '/';
			var filenames = fs.readdirSync(dirname);
			var example_package = {};
			var example = {
				tabs: []
			};

			for (var i = 0, count = filenames.length; i < count; i++) {

				example_package[filenames[i]] = grunt.file.read(dirname + filenames[i]);

			}

			if (example_package['classes.js']) {
				example.classes = example_package['classes.js'];
				makeTab(example, 'Classes', 'javascript', example_package['classes.js']);
			}

			example.template = Lava.TemplateParser.parse(
				(example_package['description.html'] || '')
				+ example_package['template.html']
			);
			makeTab(example, 'Template', 'xml', example_package['template.html']);

			packs[example_name] = example;

		}

		for (var i = 0, count = example_names.length; i < count; i++) {

			if (example_names[i] == '_empty') continue;
			buildExample(example_names[i]);

		}

		packs['Panel3'].classes
			= packs['Panel2'].classes
			= packs['Panel1'].classes;

		var define_source = grunt.file.read('templates/editable_table.html');
		define_source = define_source.replace(/^\<!\-\-[\s\S]+?\-\-\>\r?\n/, ''); // remove the topmost comment
		makeTab(packs['EditableTable'], 'Defines', 'xml', define_source);
		makeTab(packs['EditableTable'], 'Classes', 'javascript', grunt.file.read('src/EditableTableExample.class.js'));

		for (var example_name in packs) {
			// 1) have to use Lava serializer, cause template config contains functions
			// 2) wrap the result in braces, cause otherwise my IDE shows the file as invalid (it's not JSON)
			var result = '(' + Lava.serializer.serialize(packs[example_name]) + ')';
			grunt.file.write('www/examples/' + example_name + '.js', result);
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Main page example

		var index_content = grunt.file.read('todo_app/index.html');
		var start = index_content.indexOf("<body ");
		index_content = index_content.substr(
			start,
			index_content.indexOf("</body>") - start + ("<body ".length) + 1
		);
		index_content = index_content.replace(/\n\s+\<footer[\s\S]+?\<\/script\>\n\s*/, '');
		index_content = index_content.replace(/\r*\n\t/g, '\n');

		function cutWrapper(src) {
			var use_strict_marker = "'use strict';";
			var start_index = src.indexOf(use_strict_marker);
			if (start_index == -1) Lava.t();
			src = src.substr(start_index + use_strict_marker.length);
			var end_index = src.lastIndexOf("})(");
			if (end_index == -1) Lava.t();
			src = src.substr(0, end_index);
			return src.trim();
		}

		var todo_app_class_source = grunt.file.read('todo_app/js/Widget/TodoApp.class.js').replace(/\t/g, '    ');
		todo_app_class_source = cutWrapper(todo_app_class_source);
		var auto_focus_input_class_source = grunt.file.read('todo_app/js/Widget/Input/AutofocusText.class.js').replace(/\t/g, '    ');
		auto_focus_input_class_source = cutWrapper(auto_focus_input_class_source);

		global['main_page_example'] =
			'<tabs>' +
				'<tab>' +
					'<title>Result</title>' +
					'<content>' +
						'<script type="lava/fragment">' +
						'<iframe src="/todo_app/index_compiled.html" style="width: 100%; height: 550px"></iframe>' +
						'</script>' +
					'</content>' +
				'</tab>' +
				'<tab>' +
					'<title>Template</title>' +
					'<content>{literal:}' +
						global.LavaBuild.highlight('xml', index_content).replace(/\t/g, '  ') +
					'{:literal}</content>' +
				'</tab>' +
				'<tab>' +
					'<title>TodoApp.class.js</title>' +
					'<content>{literal:}' +
						global.LavaBuild.highlight('javascript', todo_app_class_source) +
					'{:literal}</content>' +
				'</tab>' +
				'<tab>' +
					'<title>AutofocusText.class.js</title>' +
					'<content>{literal:}' +
						global.LavaBuild.highlight('javascript', auto_focus_input_class_source) +
					'{:literal}</content>' +
				'</tab>' +
			'</tabs>';

	}));

};