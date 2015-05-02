
// prepare template for individual doc pages for each tutorial, reference, object and class

module.exports = function(grunt) {

	grunt.registerTask('prepareDocPage', global.bug1135(function() {

		var Lava = global.Lava,
			LavaBuild = global.LavaBuild,
			fs = require('fs');

		var doc_page_src = grunt.file.read('www/doc.html'),
			script_start_marker = "<!--PAGE_SCRIPT_START-->",
			script_end_marker = "<!--PAGE_SCRIPT_END-->",
			start_marker_index = doc_page_src.indexOf(script_start_marker),
			end_marker_index = doc_page_src.indexOf(script_end_marker);

		if (start_marker_index == -1 || end_marker_index == -1) throw new Error();

		var page_script_content = doc_page_src.substr(
			start_marker_index + script_start_marker.length,
			end_marker_index - start_marker_index - script_start_marker.length
		);
		page_script_content = page_script_content.substr(page_script_content.indexOf(">") + 1); // cut <script>
		page_script_content = page_script_content.substr(0, page_script_content.lastIndexOf("</")); // cut </script>

		grunt.file.write("www/js/doc_page_script.js", page_script_content);

		doc_page_src = doc_page_src.substr(0, start_marker_index)
			+ "<script src=\"_PAGE_JSON_SRC_PLACEHOLDER_\"></script>\n\t"
			+ "<script src=\"/www/js/doc_page_script.js\"></script>"
			+ doc_page_src.substr(end_marker_index + script_end_marker.length);

		var canonical_regex = /\<link rel=\"canonical\" href=\"[^\"]+"\/\>/g;
		if (!doc_page_src.match(canonical_regex)) throw new Error();

		grunt.file.write(
			"build/temp/doc_page_src.html",
			doc_page_src.replace(canonical_regex, "<link rel=\"canonical\" href=\"_CANONICAL_HREF_PLACEHOLDER_\">")
		);

	}))

};