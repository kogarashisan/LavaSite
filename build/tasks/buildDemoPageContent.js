
/*
Create content of the Demo page
 */

module.exports = function(grunt) {

	grunt.registerTask('buildDemoPageContent', global.bug1135(function() {

		var fs = require('fs');
		var Lava = global.Lava;

		var index_content = grunt.file.read('todo_app/index_raw.html');
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
							'<iframe src="/todo_app/index.html" style="width: 100%; height: 550px"></iframe>' +
						'</script>' +
					'</content>' +
				'</tab>' +
				'<tab>' +
					'<title>Template</title>' +
					'<content>{literal:}' +
						global.LavaBuild.highlight('xml', index_content) +
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