
module.exports = function(grunt) {

	grunt.registerTask('buildSiteJS', global.bug1135(function () {

		var Lava = global.Lava,
			src_list = [];

		var classes_list = grunt.config("site_classes_list");

		for (var i = 0, count = classes_list.length; i < count; i++) {

			src_list.push(grunt.file.read(classes_list[i].path));

		}

        grunt.file.write('build/temp/site-classes.js', src_list.join(''));

	}));

};