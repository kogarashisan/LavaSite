
// compile site widgets and exports skeletons that are used by site examples

module.exports = function(grunt) {

	grunt.registerTask('buildSiteJS', global.bug1135(function () {

		var Lava = global.Lava,
			src_list = [];

		var classes_list = grunt.config("site_classes_list");

		for (var i = 0, count = classes_list.length; i < count; i++) {

			src_list.push(grunt.file.read(classes_list[i].path));

		}

		eval(src_list.join(''));
		var exported_classes = [];

		for (i = 0, count = classes_list.length; i < count; i++) {

			var class_data = Lava.ClassManager.exportClass(classes_list[i].name);
			delete class_data.skeleton;
			delete class_data.source_object;
			delete class_data.references;
			exported_classes.push(class_data);

		}

		grunt.file.write(
			'build/temp/site-compiled-classes.js',
			"Lava.ClassManager.loadClasses(" + Lava.serializer.serialize(exported_classes) + ");\n\n"
		);

		var skeletons = {};
		skeletons['Lava.widget.Standard'] = Lava.widget.Standard.prototype.Class.skeleton;
		skeletons['Lava.widget.Tree'] = Lava.widget.Tree.prototype.Class.skeleton;
		skeletons['Lava.widget.Calendar'] = Lava.widget.Calendar.prototype.Class.skeleton;
		grunt.file.write(
			'build/temp/site-skeletons.js',
			"Lava.ClassManager.loadSkeletons(" + Lava.serializer.serialize(skeletons) + ");\n\n"
		);

	}));

};