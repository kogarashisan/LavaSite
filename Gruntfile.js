
/*
 Perfection kills. Even God needs to rest sometimes. Amen.
 */
global.LAVA_CORE_DIRECTORY = 'D:/LiquidLava/';

global.WIDGET_TAGS_WITHOUT_DIRECTIVE_ANALOGS = ['sugar', 'storage', 'storage_schema', 'edit_template', 'include'];
global.WIDGET_TAGS_WITH_DIRECTIVE_ANALOGS = ['bind', 'assign', 'option', 'property', 'options', 'properties', 'roles', 'resources', 'default_events'];
global.WIDGET_ONLY_DIRECTIVES = ['bind', 'property', 'properties', 'property_string', 'resources', 'default_events'];
global.DIRECTIVE_NAMES = ['define', 'define_resources', 'widget', 'static_value', 'static_eval', 'attach_directives',
	'assign', 'roles', 'container_config', 'refresher', 'option', 'options'].concat(global.WIDGET_ONLY_DIRECTIVES);
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

module.exports = function(grunt) {

	require(global.LAVA_CORE_DIRECTORY + 'build/temp/lava_module.js');

	var fs = require('fs'),
		highlight_js = require('highlight.js'),
		marked = require('marked'),
		Lava = global.Lava,
		Firestorm = global.Firestorm,
		LAVA_CORE_DIRECTORY = global.LAVA_CORE_DIRECTORY;

	eval(grunt.file.read(LAVA_CORE_DIRECTORY + 'build/temp/lava_widgets.js'));

	var LavaBuild = {

		// height of line in <code> from CSS
		CSS_CODE_LINE_HEIGHT: 18,
		links: {}, // target -> descriptor
		_page_links: {
			'api': '/www/doc.html',
			'reference': '/www/doc.html',
			'tutorials': '/www/doc.html'
		},
		has_errors: false,

		_serializer: new Lava.system.Serializer({
			pretty_print_functions: true
		}),

		wrapHighlightedCode: function(code, type, line_numbers, overlay_lines, tooltip_lines) {

			return '<div class="lava-code-container">'
					+ this._wrapCodeBlock(code, type, line_numbers, overlay_lines, tooltip_lines)
				+ '</div>';

		},

		_wrapCodeBlock: function(code, type, line_numbers, overlay_lines, tooltip_lines) {

			return '<div class="lava-code">'
					+ '<pre class="lava-code-line-numbers">' + line_numbers + '</pre>'
					+ '<pre class="lava-code-content hljs ' + type + '">' + code + '</pre>'
					+ (overlay_lines ? (
						'<div class="lava-code-overlay">' + overlay_lines + '</div>'
							+ '<div class="lava-code-tooltips">' + tooltip_lines + '</div>'
						) : '')
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
					content += '<div class="api-code-header ' + (block['custom_class'] || '') + '">' + block['header_text'] + '</div>\n';
				}
				content += this._wrapCodeBlock(parse_result.text, parse_result.type, parse_result.lines_text, parse_result.overlay_text, parse_result.tooltip_text);
			}

			return '<div class="lava-code-container ' + (custom_wrapper_class || 'lava-code-container-plain') + '">' + content + '</div>';

		},

		wrapHighlightedBlocks: function(blocks, custom_wrapper_class) {

			return '```formatted\n' + this.wrapHighlightedBlocks_A(blocks, custom_wrapper_class) + '\n```';

		},

		highlight: function(type, text) {

			var parse_result = this.parseHighlight(type, text);
			return this.wrapHighlightedCode(parse_result.text, parse_result.type, parse_result.lines_text, parse_result.overlay_text, parse_result.tooltip_text);

		},

		parseHighlight: function(type, text) {

			text = text.trim();
			if (type == 'xml') {
				text = text.replace(/\t/g, '  ');
			}

			var tooltips = {};
			var max_tooltip_index = 0;
			var tooltip_text = '';
			var overlay_text = '';

			// extract regions with tooltips
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
			});

			if (max_tooltip_index > 0 || ('0' in tooltips)) {
				var skip_lines_count = 0;
				for (var i = 0; i <= max_tooltip_index; i++) {
					if (i in tooltips) {
						var style_css = skip_lines_count ? (' style="margin-top: ' + skip_lines_count * this.CSS_CODE_LINE_HEIGHT + 'px"') : '';
						overlay_text += '<div' + style_css + ' class="lava-code-overlay-line"></div>';
						tooltip_text += '<div' + style_css + ' data-tooltip="' + tooltips[i] + '"></div>';
						skip_lines_count = 0;
					} else {
						skip_lines_count++;
					}
				}
			}

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

		hasLink: function(target) {
			return (target in this.links);
		},

		registerLink: function(target, descriptor) {
			if (!(descriptor.page in this._page_links)) throw new Error('1');
			if (target in this.links) throw new Error('link is already registered. probably, missing @ignore:' + target);
			this.links[target] = descriptor;
		},

		generateLink: function(type, link_target, linktitle) {
			if ([':types', 'link'].indexOf(type) == -1) throw new Error();
			if (!(link_target in this.links)) {
				grunt.log.error('doc: link is not registered: ' + link_target);
				this.has_errors = true;
				return '[ERROR: INVALID LINK]';
			}
			var link_descriptor = this.links[link_target];
			var href = this._page_links[link_descriptor.page] + (link_descriptor.hash ? '#' + link_descriptor.hash : '');
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
			if (global.DIRECTIVE_NAMES.indexOf(directive_name) == -1) throw "unknown directive: " + directive_name;
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
		if (!lang) throw new Error('highlight: no language specified');
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

	// workaround for a bug in Grunt, https://github.com/gruntjs/grunt/issues/1135
	global.bug1135 = function(callback) {
		return function() {
			try {
				return callback();
			} catch (e) {
				if (typeof(e) == 'string' || typeof(e) == 'number') throw new Error(e);
				throw e;
			}
		}
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	grunt.initConfig({

		js_files: grunt.file.readJSON(global.LAVA_CORE_DIRECTORY + 'build/js_files.json'),
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
							LAVA_CORE_DIRECTORY + "dist/lava-widgets.css",
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
							LAVA_CORE_DIRECTORY + "dist/lava-widgets.css"
						],
						dest: 'www/css/widgets.css'
					}
				]
			},
			site_js: {
				files: [
					{
						src: [
							"src/site.js",
							"src/sample_data.js",
							"src/UtilityWidget.class.js",
							"src/EditableTableExample.class.js",
							"src/ContentLoader.class.js",
							"src/ChangelogPage.class.js",
							"src/DocPage.class.js",
							"src/ExamplesPage.class.js",
							"src/WidgetsPage.class.js",
							"src/ApiCommon.js",
							"src/MooTools/More.js",
							"src/MooTools/Fx.Scroll.js",
							"build/temp/site_widgets.js"
						],
						dest: 'www/js/site.js'
					}
				]
			}
		},

		copy: {
			main: {
				src: LAVA_CORE_DIRECTORY + 'dist/lava-master-DEBUG.js',
				dest: 'lib/lava-master-DEBUG.js'
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
		]

	});

	LavaBuild.registerLink('page:api', {hash: 'tab=api', page: 'api', title: 'API', type: 'page'});
	LavaBuild.registerLink('page:reference', {hash: 'tab=reference', page: 'reference', title: 'Reference', type: 'page'});
	LavaBuild.registerLink('page:tutorials', {hash: 'tab=tutorials', page: 'tutorials', title: 'Tutorials', type: 'page'});
	LavaBuild.registerLink('page:widgets', {hash: 'object=Widgets', page: 'api', title: 'Widgets', type: 'page'});
	LavaBuild.registerLink('page:support', {hash: 'object=Support', page: 'api', title: 'Support', type: 'page'});

	grunt.option('stack', true);
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadTasks('build/tasks/');

	grunt.registerTask('default', ['copy', 'buildSiteWidgets', 'buildExamples', 'buildTasksPage', 'buildWeb', 'concat']);
	// depends on "default"
	grunt.registerTask('doc', ['buildSugar', 'buildDoc', 'buildSupport']);

};