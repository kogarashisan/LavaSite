
/*
Build the <example> widget and some others. Most likely, you will not need to use this script.
*/

module.exports = function(grunt) {

	grunt.registerTask('buildSiteWidgets', global.bug1135(function() {

		var fs = require('fs');
		var Lava = global.Lava;

		Lava.TemplateParser.parse(grunt.file.read('templates/example_widget.html'));
		var widgets_src =
			'Lava.widgets["Example"] = ' + Lava.serializer.serialize(Lava.widgets['Example']) + ';\n'
			+ 'Lava.sugar_map["example"] = ' + Lava.serializer.serialize(Lava.sugar_map['example']) + ';\n';

		Lava.TemplateParser.parse(grunt.file.read('templates/FolderTree.html'));
		widgets_src += 'Lava.widgets["FolderTree"] = ' + Lava.serializer.serialize(Lava.widgets['FolderTree']) + ';\n';

		Lava.TemplateParser.parse(grunt.file.read('templates/editable_table.html'));
		widgets_src += 'Lava.widgets["EditableTable"] = ' + Lava.serializer.serialize(Lava.widgets['EditableTable']) + ';\n';

		grunt.file.write('build/temp/site_widgets.js', widgets_src);

	}));

};