
/*
 Perfection kills. Even God needs to rest sometimes. Amen.
 */
global.LAVA_CORE_DIRECTORY = 'C:/@Cache/Dropbox/@GitHub/LiquidLava/';
global.FIRESTORM_DIRECTORY = 'C:/@Cache/Dropbox/@GitHub/Firestorm/';
global.FIRESTORM_PATH = global.FIRESTORM_DIRECTORY;

global.WIDGET_TAGS_WITHOUT_DIRECTIVE_ANALOGS = ['sugar', 'storage', 'storage_schema', 'include'];
global.WIDGET_TAGS_WITH_DIRECTIVE_ANALOGS = ['bind', 'assign', 'option', 'property', 'options', 'properties', 'roles', 'resources', 'default_events'];
global.WIDGET_ONLY_DIRECTIVES = ['bind', 'property', 'properties', 'property_string', 'resources', 'default_events'];
global.DIRECTIVE_NAMES = [
	'define', 'define_resources', 'widget', 'static_value', 'static_eval', 'attach_directives',
	'assign', 'roles', 'container_config', 'refresher', 'option', 'options', 'include'].concat(global.WIDGET_ONLY_DIRECTIVES);
global.DIRECTIVES_WITH_RESULT = ['widget', 'static_value', 'static_eval', 'attach_directives'];
global.DIRECTIVE_MULTIPLICITY = {
	// multiple
	assign: true,
	bind: true,
	option: true,
	property: true,
	property_string: true,
	resources: true,
	// singular
	default_events: false,
	options: false,
	properties: false,
	refresher: false,
	roles: false,
	container_config: false,
	// n/a
	define: null,
	define_resources: null,
	widget: null,
	static_value: null,
	static_eval: null,
	attach_directives: null
};

global.Lava = require(global.LAVA_CORE_DIRECTORY);
global.Firestorm = global.Lava.getFirestorm();
global.highlight_js = require('highlight.js');
require("./build/ApiHelper.js");

// workaround for a bug in Grunt, https://github.com/gruntjs/grunt/issues/1135
global.bug1135 = function(callback) {
	return function() {
		try {
			return callback();
		} catch (e) {
            if (!(e instanceof Error)) e = new Error(e);
			throw e;
		}
	}
};

module.exports = function(grunt) {

	var Lava = global.Lava,
		Firestorm = global.Firestorm,
		highlight_js = global.highlight_js,
		fs = require('fs'),
		marked = require('marked');

	var LavaBuild = {

		// height of line in <code> from CSS
		CSS_CODE_LINE_HEIGHT: 18,
		links: {}, // target -> descriptor
		DOC_BASE_PATH: '/www/doc.html',
		DOC_EXT_PATH: "/www/doc/",
		has_errors: false,
		doc_page_src: null,

		_serializer: new Lava.system.Serializer({
			pretty_print_functions: true
		}),

		createItemDocPage: function(type, name) {
			var json_dir = (type == "object" || type == "class") ? "api" : type;
			grunt.file.write(
				"www/doc/" + type + "/" + name + ".html",
				this.doc_page_src
					.replace("_CANONICAL_HREF_PLACEHOLDER_", "http://www.lava-framework.com/www/doc/"  + type + "/" + name + ".html")
					.replace("_PAGE_JSON_SRC_PLACEHOLDER_", "/www/" + json_dir + "/" + name + ".js")
			)
		},

		// old code block with rounded corners and without headers
		wrapHighlightedCode: function(code, type, line_numbers, overlay_lines, tooltip_lines) {

			return '<div class="lava-new-code-container lava-new-code-container-primary">'
					+ this._wrapCodeBlock(code, type, line_numbers, overlay_lines, tooltip_lines)
				+ '</div>';

		},

		// result requires another container around it
		_wrapCodeBlock: function(code, type, line_numbers, overlay_lines, tooltip_lines) {

			return '<div class="lava-new-code-box">'
					+ '<pre class="lava-new-code-line-numbers">' + line_numbers + '</pre>'
					+ '<div class="lava-new-code-overlays">'
						+ (overlay_lines ? ('<pre class="lava-new-code-highlights">' + overlay_lines + '</pre>') : '')
						+ '<pre class="lava-new-code-content hljs ' + type + '">' + code + '</pre>'
						+ (tooltip_lines ? ('<pre class="lava-new-code-tooltips">' + tooltip_lines + '</pre>') : '')
					+ '</div>'
				+ '</div>';

		},

		wrapHighlightedBlocks_A: function(blocks, custom_wrapper_class) {

			var content = '',
				block,
				parse_result,
				i = 0,
				count = blocks.length;

			for (; i < count; i++) {
				block = blocks[i];
				parse_result = block['parse_result'];
				if (block['header_text']) {
					content += '<div class="lava-new-code-header ' + (block['custom_class'] || '') + '">' + block['header_text'] + '</div>\n';
				}
				content += this._wrapCodeBlock(parse_result.text, parse_result.type, parse_result.lines_text, parse_result.overlay_text, parse_result.tooltip_text);
			}

			return '<div class="lava-new-code-container lava-new-code-container-primary ' + (custom_wrapper_class || '') + '">' + content + '</div>';

		},

		// produces new-style box with multiple code areas and square corners.
		// Version for use in markdown.
		wrapHighlightedBlocks: function(blocks, custom_wrapper_class) {

			return '```formatted\n' + this.wrapHighlightedBlocks_A(blocks, custom_wrapper_class) + '\n```';

		},

		highlight: function(type, text) {

			var parse_result = this.parseHighlight(type, text);
			return this.wrapHighlightedCode(parse_result.text, parse_result.type, parse_result.lines_text, parse_result.overlay_text, parse_result.tooltip_text);

		},

		parseHighlight: function(type, text) {

			text = text.trim();
			//if (type == 'xml') {
				text = text
					.replace(/\r\n/g, '\n') // otherwise line length will include invisible \r characters
					.replace(/\t/g, '  ');
			//}

			var tooltips = [];

			// extract regions with tooltips
			[/\{\*H\:([\s\S]+?)\*\}/g, /\/\*H\:([\s\S]+?)\*\//g].forEach(function(tooltip_pattern){
				text = text.replace(tooltip_pattern, function(full_comment, tooltip_text, index, source) {

					// count the lines before the tooltip
					var tooltip_index = source.substr(0, index).split('\n').length;
					tooltips[tooltip_index - 1] = tooltip_text;
					return '';

				});
			});

			// In IE there is a bug: highlighted code chars have higher z-index then div with tooltip,
			// so tooltip does not show over highlighted text.
			// Fill tooltips with spaces to override z-index with tooltip's own text
			var longest_line_length = 0;
			var lines = text.split('\n');
			for (var i = 0, count = lines.length; i < count; i++) {
				if (lines[i].length > longest_line_length) {
					longest_line_length = lines[i].length;
				}
			}
			var longest_line_padding = Firestorm.String.repeat(' ', longest_line_length);
			// end

			var tooltip_lines = [];
			var overlay_lines = [];
			count = tooltips.length;
			if (count) {
				for (i = 0; i < count; i++) {
					if (i in tooltips) {
						overlay_lines.push('<span class="lava-new-code-highlight-line">' + longest_line_padding + '</span>');
						tooltip_lines.push('<span data-tooltip="' + tooltips[i] + '">' + longest_line_padding + '</span>');
					} else {
						tooltip_lines.push(' ');
						overlay_lines.push(' ');
					}
				}
			}

			var overlay_text = overlay_lines.join('\n');
			var tooltip_text = tooltip_lines.join('\n');
			var highlighted = highlight_js.highlight(type, text).value;

			if (type == 'xml') {
				// make control attributes red
				highlighted = highlighted.replace(/\<span class="hljs-attribute"\>x:([\s\S]+?)\<\/span>/g, function() {
					return '<span class="lava-control-prefix">x</span><span class="hljs-attribute">:' + arguments[1] + '</span>';
				});
			}

			if (type == 'javascript') {
				// remove nonexistent newline before "use strict"
				highlighted = highlighted.replace(/\<span class=\"hljs-pi\"\>\s+(\'use strict\'|\"use strict\")\<\/span\>/g, function() {
					return "<span class=\"hljs-pi\">'use strict'</span>";
				});
			}

			return {
				text: highlighted,
				type: type,
				lines_text: this.createLineNumbers(text),
				overlay_text: overlay_text,
				tooltip_text: tooltip_text
			};

		},

		createLineNumbers: function(text) {
			var count_lines = text.split('\n').length;
			var lines_text = '&nbsp;&nbsp;';
			for (var i = 1; i <= count_lines; i++) {
				lines_text += i + '\r\n';
			}
			return lines_text;
		},

		/**
		 * Serialize with pretty-printed function bodies
		 */
		smartSerialize: function(value) {

			return this._serializer.serialize(value);

		},

		recursiveRemoveDirectory: function(path) {
			var self = this;
			if(fs.existsSync(path) ) {
				fs.readdirSync(path).forEach(function(file){
					var curPath = path + "/" + file;
					if(fs.lstatSync(curPath).isDirectory()) {
						self.recursiveRemoveDirectory(curPath);
					} else {
						fs.unlinkSync(curPath);
					}
				});
				fs.rmdirSync(path);
			}
		},

		emptyDirectory: function(path) {
			this.recursiveRemoveDirectory(path);
			fs.mkdirSync(path);
		},

		hasLink: function(target) {
			return (target in this.links);
		},

		/**
		 * @param target the name of the link in @link tags
		 * @param descriptor
		 * @param descriptor.type not used - prefix of the link in @link tag.
		 */
		registerLink: function(target, descriptor) {
			if (target in this.links) throw new Error('link is already registered. probably, missing @ignore:' + target);
			this.links[target] = descriptor;
		},

		generateLink: function(kind, link_target, linktitle) {
			if ([':types', 'link'].indexOf(kind) == -1) throw new Error();
			if (!(link_target in this.links)) {
				grunt.log.error('doc: link is not registered: ' + link_target);
				this.has_errors = true;
				return '[ERROR: INVALID LINK]';
			}
			var link_descriptor = this.links[link_target];
			var href = "";
			if (link_descriptor.tab) {
				href = this.DOC_BASE_PATH + "#" + "tab=" + link_descriptor.tab;
			} else {
				var page_part = null;
				var hssh_part = "";
				var PAGE_TYPES = ["object", "class", "reference", "tutorial"];
				var HASH_TARGETS = ["member", "event", "config", "property"];
				for (var i = 0; i < 4; i++) {
					if (PAGE_TYPES[i] in link_descriptor) {
						page_part = PAGE_TYPES[i] + "/" + link_descriptor[PAGE_TYPES[i]] + ".html"
					}
					if (HASH_TARGETS[i] in link_descriptor) {
						hssh_part = "#" + HASH_TARGETS[i] + "=" + link_descriptor[HASH_TARGETS[i]]
					}
				}
				if (!page_part) throw new Error();
				href = this.DOC_EXT_PATH + page_part + hssh_part;
			}
			linktitle = linktitle || link_descriptor.title || link_target;
			return '<a href="' + href + '">' + linktitle + '</a>';
		},

		objects_with_processed_markdown: [],

		processDescriptorMarkdown: function(descriptor) {
			if (this.objects_with_processed_markdown.indexOf(descriptor) == -1) {
				this.objects_with_processed_markdown.push(descriptor);

				if (descriptor.description) descriptor.description = LavaBuild.processMarkdown(descriptor.description);
				// for events
				if (descriptor.argument_description) descriptor.argument_description = LavaBuild.processMarkdown(descriptor.argument_description);

				if (descriptor.type_names) {
					var new_type_names = [];
					descriptor.type_names.forEach(function(value){

						if (value.indexOf(' href=') != -1) throw new Error();
						var parts = value.replace(/(Lava[\.a-zA-Z\_]*|[\_a-zA-Z]+)/g, function(string){
							return '\n' + string + '\n';
						}).split('\n');

						for (var i = 0, count = parts.length; i < count; i++) {
							if (!parts[i]) continue;
							if (parts[i] in LavaBuild.links) {
								parts[i] = LavaBuild.generateLink(':types', parts[i], parts[i]);
							} else {
								parts[i] = Firestorm.String.escape(parts[i], Firestorm.String.HTML_ESCAPE_REGEX);
							}
						}

						new_type_names.push(parts.join(''));

					});
					descriptor.type_names = new_type_names;
				}
			}
		},

		_replaceMarkers: function(content) {

			content = content.replace(/\<kw\>([\s\S]+?)\<\/kw\>/g, function(match, inner) {
				return '<span class="api-keyword">' + inner + '</span>';
			});
			content = content.replace(/\<var\>([\s\S]+?)\<\/var\>/g, function(match, inner) {
				return '<span class="api-var">' + inner + '</span>';
			});
			content = content.replace(/\<str\>([\s\S]+?)\<\/str\>/g, function(match, inner) {
				return '<span class="api-string">'
					+ Firestorm.String.escape(inner, Firestorm.String.HTML_ESCAPE_REGEX)
					+ '</span>';
			});
			// @todo not used
			content = content.replace(/\<wp\>([\s\S]+?)\<\/wp\>/g, function(match, inner) {
				return '<span class="api-widget-property">' + inner + '</span>';
			});

			return content;

		},

		_replaceLinks: function(content) {

			return content.replace(/\{\@(link) ([^\\\}]|\\.)+\}/g, function(match, type) {
				// type is the content of the first brace (the instruction name): "link", "apilink", "reflink" and so on
				var linktarget = match.substr(0, match.length - 1).substr(type.length + 3).trim(); // leave only the content
				var linktitle = null;
				var separator_index = linktarget.indexOf('|');
				if (separator_index != -1) { // includes title, not just name/url
					linktitle = linktarget.substr(separator_index + 1);
					linktarget = linktarget.substr(0, separator_index);
				}
				return LavaBuild.generateLink(type, linktarget, linktitle);
			});

		},

		packCode: function(type, header_text, custom_class, src) {

			return {
				header_text: header_text,
				custom_class: custom_class,
				parse_result: type == 'text' ? {
					text: src,
					type: 'text',
					lines_text: this.createLineNumbers(src)
				} : this.parseHighlight(type, src)
			};

		},

		// eval and format special code blocks
		_replaceCodes: function(content) {

			var self = this;

			function evalResult(src) {
				var __sanitized_content = src.replace(/^[\r\n\s]+/, '').replace(/[\r\n\s\;]+$/, '');
				var result;
				var __eval_result;
				try {
					__eval_result = eval('(' + __sanitized_content + ')');
				} catch (e) {
					result = void 0;
					__eval_result = eval(__sanitized_content);
				}
				return result || __eval_result;
			}

			// for dynamic content generation (tables, etc). Eval the given piece of code and return result.
			content = content.replace(/\<script[^\>]+?type=\"lavabuild\/eval\"[\S\s]+?\<\/script>/g, function(region){
				var ast = Lava.TemplateParser.parseRaw(region);
				var result;
				eval(ast[0].content[0]);
				return result;
			});

			// eval the code and make a box with 2 sections: 'source' and 'result'
			content = content.replace(/\<script[^\>]+?type=\"lavabuild\/source_result\"[\S\s]+?\<\/script>/g, function(region){
				var ast = Lava.TemplateParser.parseRaw(region);
				if (ast.length != 1 || !ast[0].attributes) throw new Error('wrong lavabuild/js region format');
				var region_content = ast[0].content[0];

				var eval_result = evalResult(region_content);
				var serialized_eval_result = self.smartSerialize(eval_result);
				return self.wrapHighlightedBlocks([
					self.packCode('javascript', 'Source', 'api-code-header-blue', region_content),
					self.packCode('text', 'Result', 'api-code-header-blue', serialized_eval_result)
				]);
			});

			// several highlighted blocks of code with headers
			// lavabuild:codeblocks > codeblock[lang,title]
			content = content.replace(/\<lavabuild\:codeblocks\>([\s\S]+?)\<\/lavabuild\:codeblocks\>/g, function(region, inner_content){
				// regex includes cases for "\>" inside strings
				var re = /(\<codeblock(?:[^\"\'\>]|\"(?:\\\"|[^"])*\"|\'(?:\\\'|[^'])*\')*\>)([\s\S]+?)(\<\/codeblock\>)/g;
				var parsed_blocks = [];

				while(true) {
					var matches = re.exec(inner_content);
					if (!matches) break;
					var tag_ast = Lava.TemplateParser.parseRaw(matches[1] + matches[3])[0]; // extract attributes
					if (!tag_ast.attributes) throw new Error('codeblock without attributes');
					var lang = tag_ast.attributes.lang || 'javascript';
					if (!tag_ast.attributes.title) throw new Error();
					parsed_blocks.push(self.packCode(lang, tag_ast.attributes.title, tag_ast.attributes.class || 'api-code-header-blue', matches[2]));
				}

				return self.wrapHighlightedBlocks(parsed_blocks);
			});

			content = content.replace(/\<lavabuild\:template_result[^\>]*?\>([\s\S]+?)\<\/lavabuild\:template_result\>/g, function(region, region_content_text){
				var ast = Lava.TemplateParser.parseRaw(region);
				if (ast.length != 1 || !ast[0].content) throw new Error('wrong lavabuild/template_result region format');
				var region_content;
				var as = ast[0].attributes ? ast[0].attributes.as : '';
				switch (as) {
					case 'single_view':
						region_content = [Lava.parsers.Common.compileAsView(ast[0].content)];
						break;
					default:
						region_content = Lava.parsers.Common.compileTemplate(ast[0].content)
				}

				var serialized_eval_result = self.smartSerialize(region_content);
				return self.wrapHighlightedBlocks([
					self.packCode('xml', 'Template source', 'api-code-header-blue', region_content_text),
					self.packCode('javascript', 'Parse result', 'api-code-header-blue', serialized_eval_result)
				]);
			});

			return content;

		},

		for_template: false,

		processMarkdown: function(content, for_template) {

			// workaround for a bug with multiple iframes
			var i = 0;
			var iframes = [];
			content = content.replace(/\<iframe[\s\S]+?\<\/iframe\>/g, function(match) {
				return "$$$ifr[" + (iframes.push(match) - 1) + "]$$$";
			});

			this.for_template = for_template;
			content = this._replaceMarkers(content);
			content = this._replaceCodes(content);
			content = this._replaceLinks(content);
			var result = marked(content);
			this.for_template = false;

			result = result.replace(/\$\$\$ifr\[(\d+)\]\$\$\$/g, function(match, index) {
				return iframes[index];
			});

			return result;

		},

		generateDirectiveInfoBox: function(directive_name) {
			if (!(directive_name in global.DIRECTIVE_MULTIPLICITY)) throw new Error("directive is not in global.DIRECTIVE_MULTIPLICITY: " + directive_name);
			var multiplicity = 'N/A';
			if (global.DIRECTIVE_MULTIPLICITY[directive_name] == true) multiplicity = 'Allowed';
			if (global.DIRECTIVE_MULTIPLICITY[directive_name] == false) multiplicity = 'Disallowed';
			if (global.DIRECTIVE_NAMES.indexOf(directive_name) == -1) throw new Error("unknown directive: " + directive_name);
			return '<table class="api-member-table doc-directive-quick-facts"><thead><tr><td>Quick facts</td><td></td></tr></thead><tbody>'
				+ '<tr><td>Has analog in widget definition tags</td><td>' + (global.WIDGET_TAGS_WITH_DIRECTIVE_ANALOGS.indexOf(directive_name) != -1 ? 'Yes' : 'No')  + '</td></tr>'
				+ '<tr><td>Produces result</td><td>' + (global.DIRECTIVES_WITH_RESULT.indexOf(directive_name) != -1 ? 'Yes' : 'No') + '</td></tr>'
				+ '<tr><td>Widget only directive</td><td>' + (global.WIDGET_ONLY_DIRECTIVES.indexOf(directive_name) != -1 ? 'Yes' : 'No') + '</td></tr>'
				+ '<tr><td>Multiple usage</td><td>' + multiplicity + '</td></tr>'
				+ '</tbody></table>\n\n';
		}

	};

	marked.Renderer.prototype.code = function(code, lang, escaped) {

		var result = '';
		if (!lang) {
            throw new Error('highlight: no language specified');
        }
		if (lang == 'text') {
			result = LavaBuild.wrapHighlightedCode(code, 'text', LavaBuild.createLineNumbers(code), '', '');
		} else if (lang == 'xml' || lang == 'javascript') {
			result = LavaBuild.highlight(lang, code);
		} else if (lang == 'formatted') {
			result = code;
		} else {
			throw new Error('highlight: unknown language');
		}
		return LavaBuild.for_template ? ('{literal:}' + result + '{:literal}') : result;

	};

	global.LavaBuild = LavaBuild;

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	grunt.initConfig({

		firestorm_files: grunt.file.readJSON(global.FIRESTORM_DIRECTORY + 'build/files.json'),
		www_files: grunt.file.readJSON('build/www_files.json'),

		concat: {
			options: {
				banner: "\n/*\nThis file was generated via build script. See Gruntfile.js\n*/\n\n"
			},
			site_css: {
				files: [
					{
						src: [
							"css/bootstrap/bootstrap.min.css",
							"css/bootstrap/bootstrap-theme.min.css",
							"css/bootstrap/partial-docs.css",
							"css/site.css",
							global.LAVA_CORE_DIRECTORY + "css/lava-widgets.css",
							"css/highlightjs/vs.css"
						],
						dest: 'www/css/site.css'
					}
				]
			},
			public_css: {
				files: [
					{
						src: [
							"css/bootstrap/bootstrap.min.css",
							"css/bootstrap/bootstrap-theme.min.css",
							global.LAVA_CORE_DIRECTORY + "css/lava-widgets.css"
						],
						dest: 'www/css/widgets.css'
					}
				]
			},
			site_js: {
				files: [
					{
						src: [
							global.LAVA_CORE_DIRECTORY + 'lib/export/firestorm.js',
							global.LAVA_CORE_DIRECTORY + 'lib/export/lava.js',
							global.LAVA_CORE_DIRECTORY + 'lib/export/widget-templates.js',
							"src/site.js",
							"src/sample_data.js",
							"build/temp/site-classes.js",
							"src/ApiCommon.js",
							"build/temp/site_widgets.js",
							"build/suffix.js"
						],
						dest: 'build/temp/site.js'
					}
				]
			},
			main: {
				src: [
					global.LAVA_CORE_DIRECTORY + 'lib/export/firestorm.js',
					global.LAVA_CORE_DIRECTORY + 'lib/export/lava.js',
					global.LAVA_CORE_DIRECTORY + 'lib/export/widget-templates.js'
				],
				dest: 'lib/lava-master-DEV.js'
			}
		},

		reference_list: [
			'reference/BrowserFeatures.md',
			'reference/Classes.md',
			'reference/Collections.md',
			'reference/Data.md',
			'reference/Containers.md',
			'reference/ScopeLayer.md',
			'reference/ExpressionsOverview.md',
			'reference/WritingExpressions.md',
			'reference/Targets.md',

			'reference/TemplateParsing.md',
			'reference/Views.md',
			'reference/ElementSyntax.md',
			'reference/DirectivesOverview.md',
			'reference/Directives/*.md',
			'reference/Includes.md',
			'reference/Resources.md',
			'reference/ResourcesDefinition.md',
			'reference/Storage.md',
			'reference/Sugar.md',

			'reference/ViewLifecycle.md',
			'reference/ConfigExtension.md',
			'reference/Packages.md',
			'reference/Animation.md',
			'reference/Refreshers.md',
			'reference/ClassPatches.md',
			'reference/ViewLayerFiltering.md',
			'reference/ScopeRefreshCycle.md',
			'reference/APIRemarksList.md',
			'reference/FAQ.md',

			'reference/AppendixCompat.md',
			'reference/AppendixCodestyle.md',
			'reference/AppendixDev.md',
			'reference/AppendixPitfalls.md'
		],

		tutorials_list: [
			'tutorials/Introduction.md',
			'tutorials/Classes.md',
			'tutorials/PropertiesEvents.md',
			'tutorials/TemplatesIntro.md',
			'tutorials/ViewContainers.md',
			'tutorials/ViewConfigs.md',
			'tutorials/BindingAttributes.md',
			'tutorials/UsingWidgets.md',
			'tutorials/Events.md',
			'tutorials/StandardSyntax.md',
			'tutorials/Directives.md',
			'tutorials/Roles.md',
			'tutorials/WidgetProperties.md'
		],

        // @todo this needs to be merged with some other list
		site_classes_list: [
			{path: "src/classes/ContentLoader.class.js",        name: "Lava.widget.ContentLoader"},
			{path: "src/classes/UtilityWidget.class.js",        name: "Lava.widget.UtilityWidget"},
			{path: "src/classes/EditableTableExample.class.js", name: "Lava.widget.EditableTableExample"},
			{path: "src/classes/ChangelogPage.class.js",        name: "Lava.widget.ChangelogPage"},
			//{path: "src/classes/CodeTabs.class.js",             name: "Lava.widget.CodeTabs"},
			{path: "src/classes/DocClassView.class.js",         name: "Lava.widget.DocClassView"},
			{path: "src/classes/DocPage.class.js",              name: "Lava.widget.DocPage"},
			{path: "src/classes/QuickStartPage.class.js",       name: "Lava.widget.QuickStartPage"},
			{path: "src/classes/ExamplesPage.class.js",         name: "Lava.widget.ExamplesPage"},
			{path: "src/classes/WidgetsPage.class.js",          name: "Lava.widget.WidgetsPage"}
		]

	});

	LavaBuild.registerLink('page:api', {tab: 'api', title: 'API', type: "page"});
	LavaBuild.registerLink('page:reference', {tab: 'reference', title: 'Reference', type: "page"});
	LavaBuild.registerLink('page:tutorials', {tab: 'tutorials', title: 'Tutorials', type: "page"});
	LavaBuild.registerLink('page:widgets', {object: 'Widgets', title: 'Widgets', type: "page"});
	LavaBuild.registerLink('page:support', {object: 'Support', title: 'Support', type: "page"});

	grunt.option('stack', true);
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadTasks('build/tasks/');

	grunt.registerTask('default', [
		'concat:main',
		'buildSiteWidgets',
		'buildExamples',
		'buildDemoPageContent',
		'buildQuickStart',
		'buildWeb',
		"prepareDocPage",
		'buildSiteJS',
		'concat:site_css',
		'concat:public_css',
		// depends on previous tasks, which generate files
		'concat:site_js',
		'applyCompression'
	]);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// documentation-related

	grunt.registerTask('doc_prepareDoc', function() {
		LavaBuild.emptyDirectory('www/api/');
		LavaBuild.emptyDirectory('www/reference/');
		LavaBuild.emptyDirectory('www/tutorials/');
		LavaBuild.emptyDirectory('www/doc/');
		LavaBuild.doc_page_src = grunt.file.read("build/temp/doc_page_src.html");
	});

	grunt.registerTask('doc_finalizeDoc', function() {
		if (global.LavaBuild.has_errors) throw new Error("build process has errors, aborting");
	});

	// depends on "default"
	grunt.registerTask('doc', [
		'doc_prepareDoc',
		'doc_jsdocExport',
		'doc_buildSugar',
		'doc_buildDoc',
		'doc_buildSupport',
		'doc_finalizeDoc'
	]);

};