
/*
Sorry for such an ugly source, but you will NOT need anything here. Definitely.
This script generates the tasks.html page.
*/

module.exports = function(grunt) {

	grunt.registerTask('buildTasksPage', global.bug1135(function() {

		function highlightTags(tags_string) {
			var tags = tags_string.split(/\s*,\s*/);
			var result = '';
			for (var i = 0, count = tags.length; i < count; i++) {
				if (!/T\d/.test(tags[i])) {
					result += '<span class="tag-' + tags[i] + '">' + tags[i] + '</span>';
				}
			}
			return result;
		}

		function escapeText(text) {
			return text.trim().replace('\n', '<br/>'); // .replace(/\</g, '&lt;').replace(/\{/g, '{:L:}')
		}

		var fs = require('fs');
		var tasks_page_source = grunt.file.read('build/tasks_page_source.txt');
		var lines = tasks_page_source.split(/\r?\n/g);

		var i = 0,
			count = lines.length,
			result_stack = [],
			fragment;

		while (i < count) {
			var line = lines[i];
			if (/^#/.test(line)) {
				result_stack.push({
					type: 'header',
					content: line.substr(1)
				})
			} else if (/^[a-zA-Z0-9]/.test(line)) {
				result_stack.push({
					type: 'category',
					content: line
				})
			} else if (/^\t\-/.test(line)) { // task start
				fragment = line.substr(2);
				var matches = fragment.match(/\s*\[([^\]]*)\]/);
				if (!matches) throw new Error("Unknown line format at line " + i);
				result_stack.push({
					type: 'task',
					tags: highlightTags(matches[1]),
					task_content: fragment.substr(matches[0].length),
					comment: ''
				})
			} else if (/^\t\t[^\/]/.test(line)) { // part of task's description
				result_stack[result_stack.length - 1].task_content += '\n' + line.substr(2);
			} else if (/^\t\t\/\//.test(line)) { // comment for task
				result_stack[result_stack.length - 1].comment += '\n' + line.substr(4);
			} else if (line != '') {
				throw new Error('unknown line format at line ' + i);
			}
			i++;
		}

		var result = '';
		i = 0;
		count = result_stack.length;
		var is_writing_tasks = false;
		while (i < count) {
			if (result_stack[i].type == 'header') {
				if (is_writing_tasks) {
					result += '</ul>\n';
					is_writing_tasks = false;
				}
				result += '<h2>' + escapeText(result_stack[i].content) + '</h2>\n';
			} else if (result_stack[i].type == 'category') {
				if (is_writing_tasks) {
					result += '</ul>\n';
					is_writing_tasks = false;
				}
				result += '<h3>' + escapeText(result_stack[i].content) + '</h3>\n';
			} else {
				if (!is_writing_tasks) {
					result += '<ul>\n';
					is_writing_tasks = true;
				}
				result += '<li>'
					+ result_stack[i].tags
					+ ' '
					+ escapeText(result_stack[i].task_content)
					+ (result_stack[i].comment ? '<span class="task-comment">' + escapeText(result_stack[i].comment) + '</span>' : '')
					+ '</li>\n';
			}
			i++;
		}
		if (is_writing_tasks) {
			result += '</ul>\n';
			is_writing_tasks = false;
		}

		global['tasks_page_export'] = result;

	}));

};
