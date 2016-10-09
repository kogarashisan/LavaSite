
module.exports = function(grunt) {

	grunt.registerTask('applyCompression', global.bug1135(function () {

        grunt.file.write("www/js/site.js", grunt.file.read('build/temp/site.js'));
        return; // @todo

		var UglifyJS = require('uglify-js');

		var result = UglifyJS.minify(['build/temp/site.js'], {
			//outSourceMap: "/site.js.map",
			mangle: true,
				// sort
				// toplevel
				// eval
			compress: {
				dead_code: true,
				unsafe: true,
				unused: true
				//warnings: true,
				//drop_debugger
				//evaluate: true,
				//loops: true,
				//hoist_funs
				//hoist_vars
				//negate_iife: true,
				//pure_funcs: []

				// options, that have no effect on file size
				//sequences: true,
				//properties: true,
				//conditionals: true,
				//comparisons: true,
				//booleans: true,
				//if_return: true,
				//join_vars: true,
				//cascade: true,

				// dangerous or incompatible
				//pure_getters: true // can break different kinds of gateways
				//drop_console: true // it's highly recommended to keep the only console statement

				// unneeded
				//keep_fargs // Lava does not rely on constant arguments.length values
			}
		});

		grunt.file.write("www/js/site.js", result.code);
		//grunt.file.write("site.js.map", result.map);

	}));

};