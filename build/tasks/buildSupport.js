/*
depends on previous tasks
 */

var ApiHelper = global.ApiHelper;

module.exports = function(grunt) {

	var ApiCommon = null;
	eval(grunt.file.read('src/ApiCommon.js'));

	grunt.registerTask('buildSupport', global.bug1135(function() {

		var fs = require('fs');
		var LavaBuild = global.LavaBuild;
		var jsdoc_support = eval('(' + grunt.file.read('build/temp/jsdoc_support_export.js') + ')');
		var result = LavaBuild.processMarkdown(grunt.file.read("build/Support.page.md")) + "\n\n";

		if (jsdoc_support.typedefs) {
			result += '<h2 class="api-member-group-header">Type definitions</h2>\n\n';
			jsdoc_support.typedefs.forEach(function(data){
				result += '<h3 data-scroll-name="member:' + data.name + '">' + data.name + '</h3>\n';
				LavaBuild.processDescriptorMarkdown(data);
				if (data.description) result += '<div>' + data.description + '</div>\n';
				result += '<table class="api-member-table"><thead><tr><td>Types</td></tr></thead><tbody>';
				data.type_names.forEach(function(name){
					// they should be already escaped
					result += '<tr><td class="api-name-column">' + name + '</td></tr>\n'
				});
				result += '</tbody></table>\n\n';
			});
		}

		if (jsdoc_support.enums) {
			result += '<h2 class="api-member-group-header">Enums</h2>\n\n';
			jsdoc_support.enums.forEach(function(data){
				result += '<h3 data-scroll-name="member:' + data.name + '">' + data.name + '</h3>\n';
				LavaBuild.processDescriptorMarkdown(data);
				if (data.description) result += '<div>' + data.description + '</div>\n';
				if (data.type_names) {
					if (['number', 'string'].indexOf(data.type_names[0]) == -1) throw new Error(); // unknown type
					result += '<div><b>Type: </b> ' + data.type_names[0] + '</div>';
				}

				result += '<table class="api-member-table">' +
					'<thead>' +
					'<tr><td>Name</td><td>Value</td><td>Description</td></tr>' +
					'</thead><tbody>';
				data.properties.forEach(function(property_data){
					var tmp = {};
					ApiHelper.setDefaultFromValue(tmp, property_data.value);
					LavaBuild.processDescriptorMarkdown(property_data);
					result += '<tr>' +
						'<td class="api-name-column">' + property_data.name + '</td>' +
						'<td>' + tmp.default_value + '</td>' +
						'<td class="api-description-td">' + (property_data.description || '') + '</td>' +
						'</tr>\n'
				});
				result += '</tbody></table>\n\n';
			});
		}

		if (jsdoc_support.callbacks) {
			result += '<h2 class="api-member-group-header">Callbacks</h2>\n\n';
			jsdoc_support.callbacks.forEach(function(data){
				result += '<h3 data-scroll-name="member:' + data.name + '">' + data.name + '</h3>\n';
				LavaBuild.processDescriptorMarkdown(data);
				if (data.description) result += '<div>' + data.description + '</div>\n';
				if (data.params) {
					data.params.forEach(function(param_descriptor) {
						LavaBuild.processDescriptorMarkdown(param_descriptor);
					});
					result += '<div><b>Arguments:</b></div>';
					result += ApiCommon.renderParamsTable(data.params, 'api-member-table');
					result += '\n\n';
				}
				if (data.returns) {
					LavaBuild.processDescriptorMarkdown(data.returns);
					result += '<br/>' + ApiCommon.renderReturns(data.returns);
				}
			});
		}

		if (jsdoc_support.objects) {
			jsdoc_support.objects.forEach(function(descriptor){
				LavaBuild.processDescriptorMarkdown(descriptor);
				if (descriptor.member_chain) {
					descriptor.member_chain.forEach(function(block){
						block.descriptors.forEach(function(descriptor){
							LavaBuild.processDescriptorMarkdown(descriptor);
						})
					})
				}
				if (descriptor.method_chain) {
					descriptor.method_chain.forEach(function(block){
						block.descriptors.forEach(function(descriptor){
							LavaBuild.processDescriptorMarkdown(descriptor);
							if (descriptor.params) {
								descriptor.params.forEach(function(descriptor){
									LavaBuild.processDescriptorMarkdown(descriptor);
								})
							}
							if (descriptor.returns) {
								LavaBuild.processDescriptorMarkdown(descriptor.returns);
							}
						})
					})
				}
			});
		}

		fs.writeFileSync('www/api/Support.js', "var page_json = " + JSON.stringify({
			description: result,
			support_objects: jsdoc_support.objects
		}));
		LavaBuild.createItemDocPage("object", "Support");

	}));

};