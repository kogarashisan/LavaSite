module.exports = function(grunt) {

	var Lava = global.Lava,
		LavaBuild = global.LavaBuild,
		fs = require('fs');

	/**
	 * Notes: with current CSS and HTML markup it's impossible to create overlapping highlight regions,
	 * cause otherwise there will be scaling issues in Chrome (when user sets page scale other than 100%)
	 */
	var LavaHighlighter = {

		initStructure: function(src, language, title) {

			src = src.replace(/\t/g, (language == 'xml') ? '  ' : '  ');
			src = src.replace(/\r\n/g, "\n"); // otherwise line length will include invisible \r characters

			return {
				blocks: this._parseRegions(src),
				highlights: [],
				language: language,
				title: title
			};

		},

		refreshCaches: function(structure) {

			if (!structure.$has_caches) {
				structure.$has_caches = true;
				structure.$src = this._renderBlocks(structure.blocks);
				structure.$lines = structure.$src.split("\n");
				structure.$line_numbers = this._createLineNumbers(structure.$lines.length);
				// In IE there is a bug: highlighted code chars have higher z-index then div with tooltip,
				// so (with current HTML/CSS markup) tooltips does not show over highlighted text.
				// Fill tooltips with spaces to override z-index with tooltip's own text
				structure.$longest_line_padding = Firestorm.String.repeat(' ', this._getLongestLineLength(structure.$lines));
				structure.$highlighted = this._highlight(structure.$src, structure.language);
			}

			this.refreshRegionReferences(structure);

		},

		refreshRegionReferences: function(structure) {
			if (!structure.$regions) {
				structure.$regions = [];
				structure.$placeholders = [];
				this._getReferences(structure.blocks, structure);
			}
		},

		_parseRegions: function(src) {

			var separator = "<##-|-##>";

			var raw_regions = src.replace( /(\/\*region\:[^\*]+\*\/|\/\*\:region\*\/|\<x\:placeholder name="[^\"]+"\s*\/\>)/g, function(match) {
				return separator + match + separator;
			}).split(separator);

			var type_regexp = /^(\/\*(region)\:([^\*]+)\*\/|\<x\:(placeholder) name="([^\"]+)"\s*\/\>)$/;
			var blocks_export = [];

			for (var i = 0, count = raw_regions.length; i < count; i++) {

				var match = raw_regions[i].match(type_regexp);
				if (raw_regions[i] == "/*:region*/") {
					var region_content = [];
					var region_piece = blocks_export.pop();
					while (region_piece.type != 'region_open') {
						region_content.unshift(region_piece);
						region_piece = blocks_export.pop();
						if (blocks_export.length == 0) Lava.t();
					}
					region_piece.type = 'region';
					region_piece.content = region_content;
					blocks_export.push(region_piece);
				} else if (match && match[2] == 'region') {
					blocks_export.push({
						type: 'region_open',
						name: match[3]
					});
				} else if (match && match[4] == 'placeholder') {
					var placeholder_block = {
						type: 'placeholder',
						name: match[5]
					};
					blocks_export.push(placeholder_block);
				} else {
					blocks_export.push({
						type: 'string',
						content: raw_regions[i]
					});
				}

			}

			return blocks_export;

		},

		_getReferences: function(blocks, structure) {

			var self = this;
			blocks.forEach(function(block) {
				if (block.type == "placeholder") {
					if (structure.$placeholders[block.name]) Lava.t();
					structure.$placeholders[block.name] = block;
				} else if (block.type == "region") {
					if (structure.$regions[block.name]) Lava.t();
					structure.$regions[block.name] = block;
					self._getReferences(block.content, structure);
				}
			})

		},

		_highlight: function(text, language) {

			var highlighted = global.highlight_js.highlight(language, text).value;

			if (language == 'xml') {
				// make control attributes red
				highlighted = highlighted.replace(/\<span class="hljs-attribute"\>x:([\s\S]+?)\<\/span>/g, function() {
					return '<span class="lava-control-prefix">x</span><span class="hljs-attribute">:' + arguments[1] + '</span>';
				});
			}

			if (language == 'javascript') {
				// remove nonexistent newline before "use strict"
				highlighted = highlighted.replace(/\<span class=\"hljs-pi\"\>\s+(\'use strict\'|\"use strict\")\<\/span\>/g, function() {
					return "<span class=\"hljs-pi\">'use strict'</span>";
				});
			}

			return highlighted;

		},

		_renderBlocks: function(blocks) {

			var result = '';
			var self = this;

			blocks.forEach(function(block){
				if (block.type == "region_open") Lava.t();
				if (block.type == "string") {
					result += block.content;
				} else if (block.type == "region") {
					result += self._renderBlocks(block.content);
				}
				// skip placeholders
			});

			return result;

		},

		_createLineNumbers: function(count) {

			var result = ['&nbsp;&nbsp;1'];
			for (var i = 2; i <= count; i++) {
				result.push(i);
			}
			return result.join('\n');

		},

		_getLongestLineLength: function(lines) {

			var result = 0;

			for (var i = 0, count = lines.length; i < count; i++) {
				if (lines[i].length > result) {
					result = lines[i].length;
				}
			}

			return result;

		},

		_addLineHighlight: function (structure, line_number, options) {
			if (structure.highlights[line_number]) Lava.t();
			structure.highlights[line_number] = {
				type: 'line',
				options: options
			};
		},

		_addSpanHighlight: function(structure, line_number, start, length, options) {
			if (structure.highlights[line_number] && structure.highlights[line_number].type != 'spans') Lava.t();
			if (!structure.highlights[line_number]) {
				structure.highlights[line_number] = {
					type: 'spans',
					spans: []
				};
			}
			structure.highlights[line_number].spans.push({start: start, length: length, options: options});
		},

		addHighlightLinesWithSearchText: function(structure, search_text, options) {

			this.refreshCaches(structure);

			var indices = this._getAllIndicesOf(structure.$src, search_text);
			var line_numbers = [];
			for (var i = 0, count = indices.length; i < count; i++) {
				var line_number = structure.$src.substr(0, indices[i]).split('\n').length - 1;
				if (Firestorm.Array.include(line_numbers, line_number)) {
					this._addLineHighlight(structure, line_number, options);
				}
			}

		},

		addHighlightLinesWithDelimiters: function(structure, search_start, search_end, options) {

			this.refreshCaches(structure);

			var highlight_start_index = structure.$src.indexOf(search_start);
			if (highlight_start_index == -1) Lava.t();
			var start_line_index = structure.$src.substr(0, highlight_start_index).split('\n').length - 1;
			var hightlight_end_index = structure.$src.indexOf(search_end, highlight_start_index + search_start.length);
			if (hightlight_end_index == -1) Lava.t();
			var end_line_index = structure.$src.substr(0, hightlight_end_index).split('\n').length - 1;

			if (start_line_index > end_line_index) Lava.t();
			end_line_index++;
			while (start_line_index < end_line_index) {
				this._addLineHighlight(structure, start_line_index, options);
				start_line_index++;
			}

		},

		addHighlightSpanWithSearchText: function(structure, search_text, options) {

			this.refreshCaches(structure);
			var index = structure.$src.indexOf(search_text);
			if (index == -1) Lava.t();
			var lines = structure.$src.substr(0, index).split('\n');
			var last_line = lines.pop();

			this._addSpanHighlight(
				structure,
				lines.length,
				last_line.length,
				search_text.length,
				options
			);

		},

		copy: function(structure) {

			return {
				blocks: Firestorm.clone(structure.blocks),
				highlights: [],
				language: structure.language,
				title: structure.title
			};

		},

		replaceRegion: function(structure, name, text) {

			text = text.replace(/\t/g, (structure.language == 'xml') ? '  ' : '  ');
			text = text.replace(/\r?\n/g, "\n");
			this.refreshRegionReferences(structure);
			structure.$regions[name].content = this._parseRegions(text);
			structure.$regions = null;

		},

		replacePlaceholder: function(structure, name, text) {

			text = text.replace(/\t/g, (structure.language == 'xml') ? '  ' : '  ');
			text = text.replace(/\r?\n/g, "\n");
			this.refreshRegionReferences(structure);
			structure.$placeholders[name].type = "region";
			structure.$placeholders[name].content = this._parseRegions(text);
			structure.$regions = null;

		},

		render: function(structure) {

			this.refreshCaches(structure);

			var highlights = '';
			if (structure.highlights && structure.highlights.length) {
				highlights = this._renderHighlights(structure);
			}

			return '<div class="lava-new-code-container">'
					+ '<div class="lava-new-code-box">'
						+ '<pre class="lava-new-code-line-numbers">' + structure.$line_numbers + '</pre>'
						+ '<div class="lava-new-code-overlays">'
							+ '<pre class="lava-new-code-highlights">' + highlights + '</pre>'
							+ '<pre class="lava-new-code-content hljs ' + structure.language + '">' + structure.$highlighted + '</pre>'
						+ '</div>'
					+ '</div>'
				+ '</div>';

		},

		_renderHighlights: function(structure) {
			var result = [];
			for (var i = 0, count = structure.highlights.length; i < count; i++) {
				if (structure.highlights[i]) {
					if (structure.highlights[i].type == "line") {
						var options = structure.highlights[i].options;
						var classes = "lava-new-code-highlight-line ";
						var styles = "";
						var additional_attributes = "";
						if (options) {
							if (options.classes_string) classes += options.classes_string;
							if (options.styles_string) styles += options.styles_string;
							if (options.attributes_string) additional_attributes += options.attributes_string;
						}
						if (styles) additional_attributes += ' style="' + styles + '"';
						if (classes) additional_attributes += ' class="' + classes + '"';
						result.push('<span ' + additional_attributes + '>' + structure.$longest_line_padding + '</span>');
					} else if (structure.highlights[i].type == "spans") {
						var line_content = "";
						var line_content_length = 0;
						structure.highlights[i].spans.forEach(function(span){
							var pad = span.start - line_content_length;
							if (pad < 0) Lava.t();

							var options = span.options;
							var classes = "lava-new-code-highlight-span ";
							var styles = "";
							var additional_attributes = "";
							if (options) {
								if (options.classes_string) classes += options.classes_string;
								if (options.styles_string) styles += options.styles_string;
								if (options.attributes_string) additional_attributes += options.attributes_string;
							}
							if (styles) additional_attributes += ' style="' + styles + '"';
							if (classes) additional_attributes += ' class="' + classes + '"';
							line_content += Firestorm.String.repeat(" ", pad) + '<span ' + additional_attributes + '>' + Firestorm.String.repeat(" ", span.length) + "</span>";
							line_content_length += pad + span.length;
						});
						result.push(line_content);
					} else {
						Lava.t();
					}
				} else {
					result.push(' '); // fix for a bug in Chrome: eats the first newline
				}
			}

			return result.join("\n");
		},

		_getAllIndicesOf: function(string, search_string) {

			var index = string.indexOf(search_string),
				start_index = 0,
				search_string_length = search_string.length,
				result = [];

			while (index != -1) {
				result.push(index);
				start_index = index + search_string_length;
				index = string.indexOf(search_string, start_index);
			}

			return result;

		},

		_getAllIndicesOfRegexp: function(string, search_regexp) {

			var match,
				result = [];

			while ((match = search_regexp.exec(string)) != null) {
				result.push(match.index);
			}

			return result;

		}

		/*wrapHighlightedBlocks_A: function(blocks, custom_wrapper_class) {

			var content = '',
				block,
				parse_result,
				i = 0,
				count = blocks.length;

			for (; i < count; i++) {
				block = blocks[i];
				parse_result = block['parse_result'];
				if (block['header_text']) {
					content += '<div class="api-code-header ' + (block['custom_class'] || '') + '">' + block['header_text'] + '</div>\n';
				}
				content += this._wrapCodeBlock(parse_result.text, parse_result.type, parse_result.lines_text, parse_result.overlay_text, parse_result.tooltip_text);
			}

			return '<div class="lava-code-container ' + (custom_wrapper_class || 'lava-code-container-plain') + '">' + content + '</div>';

		}*/

		/* // extract regions with tooltips
		 [/\{\*H\:([\s\S]+?)\*\}/g, /\/\*H\:([\s\S]+?)\*\//g].forEach(function(tooltip_pattern){
		 text = text.replace(tooltip_pattern, function(full_comment, tooltip_text, index, source) {

		 // count the lines before the tooltip
		 var tooltip_index = source.substr(0, index).split('\n').length;
		 if (tooltip_index > max_tooltip_index) {
		 max_tooltip_index = tooltip_index;
		 }
		 tooltips[tooltip_index - 1] = tooltip_text;
		 return '';

		 });
		 });*/

	};

	grunt.registerTask('buildQuickStart', global.bug1135(function () {

		var schema_src = grunt.file.read('build/quick_start_schema.html');
		var content_includes = [];

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// extract raw content containers
		function replaceContentInclude(all, wrapper_tag_start, content, wrapper_tag_end) {

			var wrapper_tag = Lava.TemplateParser.parseRaw(wrapper_tag_start + wrapper_tag_end)[0];
			// wrapper_tag.attributes.type
			wrapper_tag.text = content;
			var new_index = content_includes.push(wrapper_tag) - 1;

			return "<" + wrapper_tag.name + " id=\"" + new_index + "\"/>";

		}

		schema_src = schema_src.replace(/(\<x\:content[\s\S]*?>)([\s\S]*?)(<\/x\:content\>)/g, replaceContentInclude);
		schema_src = schema_src.replace(/(\<x\:region_content[\s\S]*?>)([\s\S]*?)(<\/x\:region_content\>)/g, replaceContentInclude);
		schema_src = schema_src.replace(/(\<x\:placeholder_content[\s\S]*?>)([\s\S]*?)(<\/x\:placeholder_content\>)/g, replaceContentInclude);
		// end
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		var schema = Lava.TemplateParser.parseRaw(schema_src);
		schema = Lava.parsers.Common.asBlocks(schema);
		if (schema.length != 2 || schema[0].name != 'codes' || schema[1].name != 'steps') Lava.t();
		var codes = Lava.parsers.Common.asBlocks(schema[0].content);
		var steps = Lava.parsers.Common.asBlocks(schema[1].content);

		var steps_export = [];
		steps.forEach(function(raw_step){
			var step = {};
			if (raw_step.attributes) {
				if (raw_step.attributes.code_name) step.code_name = raw_step.attributes.code_name;
				if (raw_step.attributes.active_highlights) step.active_highlights = raw_step.attributes.active_highlights.split(',');
				if (raw_step.attributes.text_class_suffix) step.text_class_suffix = raw_step.attributes.text_class_suffix;
				if (raw_step.attributes.result_href) step.result_href = raw_step.attributes.result_href;
			}

			var step_text = Lava.parsers.Common.compileTemplate(
				Lava.parsers.Common.asBlocks(raw_step.content)[0].content // <text>
			);
			if (step_text.length != 1) Lava.t();
			step.text = step_text[0];

			steps_export.push(step);
		});

		var code_structures = {};
		var rendered_codes = {};
		codes.forEach(function (code) {

			var items_by_type = {};
			code.content = Lava.parsers.Common.asBlocks(code.content);
			code.content.forEach(function(item){
				if (!items_by_type[item.name]) items_by_type[item.name] = [];
				items_by_type[item.name].push(item);
			});

			var structure;
			if (code.attributes.extends) {

				structure = LavaHighlighter.copy(code_structures[code.attributes.extends]);
				items_by_type["region_content"] && items_by_type["region_content"].forEach(function(item){
					var real_item = content_includes[item.attributes.id];
					LavaHighlighter.replaceRegion(structure, real_item.attributes.for, real_item.text);
				});

				items_by_type["placeholder_content"] && items_by_type["placeholder_content"].forEach(function(item){
					var real_item = content_includes[item.attributes.id];
					LavaHighlighter.replacePlaceholder(structure, real_item.attributes.for, real_item.text);
				});

			} else {

				//items_by_type["content"] && items_by_type["content"].forEach(function(item){});
				if (!items_by_type["content"] || items_by_type["content"].length != 1) Lava.t();
				var content_pointer = items_by_type["content"][0];
				structure = LavaHighlighter.initStructure(content_includes[content_pointer.attributes.id].text, 'xml', null);

			}

			items_by_type["highlight"] && items_by_type["highlight"].forEach(function(item){

				item.content = Lava.parsers.Common.asBlocks(item.content);
				switch (item.attributes.type) {
					case "lines":
						if (item.content.length != 1 || item.content[0].name != 'search' || item.content[0].content.length != 1) Lava.t();
						LavaHighlighter.addHighlightLinesWithSearchText(structure, item.content[0].content[0], {
							attributes_string: ' data-group="' + item.attributes['data-group'] + '"',
							classes_string: 'lava-quick-start-highlight'
						});
						break;
					case "lines_span":
						if (item.content.length != 2
							|| item.content[0].name != 'search_start'
							|| item.content[0].content.length != 1
							|| item.content[1].name != 'search_end'
							|| item.content[1].content.length != 1
						) Lava.t();
						LavaHighlighter.addHighlightLinesWithDelimiters(structure, item.content[0].content[0], item.content[1].content[0], {
							attributes_string: ' data-group="' + item.attributes['data-group'] + '"',
							classes_string: 'lava-quick-start-highlight'
						});
						break;
					case "span":
						if (item.content.length != 1 || item.content[0].name != 'search' || item.content[0].content.length != 1) Lava.t();
						LavaHighlighter.addHighlightSpanWithSearchText(structure, item.content[0].content[0], {
							attributes_string: ' data-group="' + item.attributes['data-group'] + '"',
							classes_string: 'lava-quick-start-highlight'
						});
						break;
					default:
						Lava.t();
				}

			});

			code_structures[code.attributes.name] = structure;
			rendered_codes[code.attributes.name] = LavaHighlighter.render(structure);

		});

		grunt.file.write("www/js/quick_start_schema.js", "var quick_start_schema =" + Lava.serializer.serialize({
			codes: rendered_codes,
			steps: steps_export
		}));

	}));

};