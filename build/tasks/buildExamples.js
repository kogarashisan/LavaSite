
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
		makeTab(packs['editable_table'], 'Defines', 'xml', define_source);
		makeTab(packs['editable_table'], 'Classes', 'javascript', grunt.file.read('src/EditableTableExample.class.js'));

		for (var example_name in packs) {
			// 1) have to use Lava serializer, cause template config contains functions
			// 2) wrap the result in braces, cause otherwise my IDE shows the file as invalid (it's not JSON)
			var result = '(' + Lava.Serializer.serialize(packs[example_name]) + ')';
			grunt.file.write('www/examples/' + example_name + '.js', result);
		}

	}));

};