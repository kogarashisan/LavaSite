
var text_encoding = require('text-encoding');

module.exports = function(grunt) {

	// bug1135 is commented, cause otherwise "this" will not work inside method
	grunt.registerTask('doc_jsdocExport', /* global.bug1135() */ function() {

		var child_process = require('child_process');
		var done = this.async();
		var completed_processes = 0;

		function callJSDoc(template_name, filelist_string) {

			var cmd_string = 'jsdoc --private --destination generated_docs --template ./build/' + template_name + ' ' + filelist_string;
			grunt.log.ok('Running: ' + cmd_string);

			var child = child_process.spawn(
				'cmd',
				['/c ' + cmd_string],
				{
					windowsVerbatimArguments: true
				}
			);
			child.stdout.setEncoding('utf8');
			child.stdout.on('data', function (data) {
				grunt.log.debug('jsdoc output : ' + data);
			});
			child.stderr.on('data', function (data) {
                var error_text = new text_encoding.TextDecoder('cp866').decode(data);
				grunt.log.error('An error occured in jsdoc process:\n' + error_text);
				grunt.log.error(template_name);
				grunt.fail.warn('jsdoc failure', 3 /*errorCode.task*/);
			});
			child.on('exit', function(code){
				if(code === 0){
					grunt.log.write('jsdoc exited normally (' + completed_processes + ')\n');
					completed_processes++;
					if (completed_processes == 2) {
						done(true);
					}
				} else {
					grunt.log.error('jsdoc terminated');
					grunt.fail.warn('jsdoc failure', 3 /*errorCode.task*/);
				}
			});

		}

		var Firestorm = global.Firestorm;
		var groups = Firestorm.clone(require(global.LAVA_CORE_DIRECTORY + 'build/files.js'));
		var firestorm_groups = grunt.file.readJSON(global.FIRESTORM_DIRECTORY + 'build/files.json');

		Firestorm.Array.excludeAll(groups['parsers'], [
			"Parsers/Generated/ObjectParser.js",
			"Parsers/Generated/ExpressionParser.js",
			"Parsers/Generated/TemplateParser.js"
		]);
		Firestorm.Array.excludeAll(firestorm_groups['firestorm'], [
			"error_descriptions.js",
			"init.js"
		]);

		function prependPath(files_array, prefix) {
			for (var i = 0, count = files_array.length; i < count; i++) {
				files_array[i] = prefix + files_array[i];
			}
		}
		var core_src_path = global.LAVA_CORE_DIRECTORY + "src/";
		var firestorm_src_path = global.FIRESTORM_DIRECTORY + "src/";
		prependPath(groups['classes'], core_src_path);
		prependPath(groups['widgets'], core_src_path);
		prependPath(groups['data'], core_src_path);
		prependPath(groups['core'], core_src_path);
		prependPath(groups['parsers'], core_src_path);
		prependPath(firestorm_groups['firestorm'], firestorm_src_path);

		var filelist =
			firestorm_groups['firestorm']
			.concat(groups['classes'])
			.concat(groups['widgets'])
			.concat(groups['data'])
			.concat(groups['core'])
			.concat(groups['parsers']);

		filelist.push(global.LAVA_CORE_DIRECTORY + 'build/jsdoc_support.js');
		callJSDoc('jsdoc_classes_template', filelist.join(' '));

		var fs = require('fs');
		var core_support_path = global.LAVA_CORE_DIRECTORY + 'support/';
		var support_list = fs.readdirSync(core_support_path);
		// force interfaces to appear before objects
		support_list.splice(support_list.indexOf('interfaces.js'), 1);
		support_list.unshift('interfaces.js');
		prependPath(support_list, core_support_path);
		support_list.push(global.FIRESTORM_DIRECTORY + "support.js");

		callJSDoc('jsdoc_support_template', support_list.join(' '));

	});

};