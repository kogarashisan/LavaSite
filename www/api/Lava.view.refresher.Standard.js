{"method_chain":[{"class_name":"Lava.view.refresher.Standard","descriptors":[{"name":"destroy","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"hasAnimations","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Are there any active animations</p>\n"},{"name":"init","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","params":[{"name":"config","type_names":["<a href=\"/www/doc.html#object=Support;member=_cRefresher\">_cRefresher</a>"]},{"name":"view","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"]},{"name":"container","type_names":["<a href=\"/www/doc.html#object=Support;member=_iContainer\">_iContainer</a>"]}],"param_names_string":"config, view, container","description":"<p>Create refresher instance</p>\n"},{"name":"isAnimationEnabled","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_animation_enabled</code></p>\n"},{"name":"onRender","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","params":[{"name":"current_templates","description":"<p>Templates that must be in DOM</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"]}],"param_names_string":"current_templates","description":"<p>View&#39;s render callback</p>\n"},{"name":"refresh","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","params":[{"name":"current_templates","description":"<p>Templates, that refresher must render and insert into DOM.\n Some of them are already there, some are in DOM but sleeping, and others are not yet in DOM</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"]}],"param_names_string":"current_templates","description":"<p>Insert new templates into DOM and remove those, which are queued for removal</p>\n"},{"name":"removeTemplates","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","params":[{"name":"templates","type_names":["Array.&lt;<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"]}],"param_names_string":"templates","description":"<p>Queue templates for removal</p>\n"},{"name":"stopAnimations","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":false,"type":"function","description":"<p>Stop all active animations</p>\n"},{"name":"_animateInsertion","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]},{"name":"index","description":"<p>Index of this template in list of all active templates</p>\n","type_names":["number"]}],"param_names_string":"template, index","description":"<p>Insert the template into DOM and apply corresponding animation</p>\n"},{"name":"_animateRemoval","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]}],"param_names_string":"template","description":"<p>Apply template removal animation and remove element from DOM in the end of it</p>\n"},{"name":"_createAnimation","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]},{"name":"index","description":"<p>Index of the template in the list of all active templates</p>\n","type_names":["number"]}],"param_names_string":"template, index","description":"<p>Create animation instance</p>\n"},{"name":"_getAnimationTarget","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]}],"param_names_string":"template","returns":{"type_names":["HTMLElement"]},"description":"<p>Get the element of the template, that will be animated</p>\n"},{"name":"_insertSequentialElements","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]},{"name":"index","description":"<p>Index of the template in the list of all active templates</p>\n","type_names":["number"]}],"param_names_string":"template, index","description":"<p>(insertion strategy)\nWith this callback you can insert Foreach elements at the right place.\nAll templates inside Foreach are treated as single view with Element container</p>\n"},{"name":"_insertTemplate","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]},{"name":"index","description":"<p>Index of this template in list of all active templates</p>\n","type_names":["number"]}],"param_names_string":"template, index","description":"<p>Insert template into DOM</p>\n"},{"name":"_onAnimationComplete","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"animation","type_names":["<a href=\"/www/doc.html#class=Lava.animation.Abstract\">Lava.animation.Abstract</a>"]}],"param_names_string":"animation","description":"<p>Cleanup animation instance and update state of it&#39;s template</p>\n"},{"name":"_onInsertionComplete","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"animation","type_names":["<a href=\"/www/doc.html#class=Lava.animation.Abstract\">Lava.animation.Abstract</a>"]},{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]}],"param_names_string":"animation, template","description":"<p>Insertion animation has ended. Update state of the template</p>\n"},{"name":"_onRemovalComplete","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"animation","type_names":["<a href=\"/www/doc.html#class=Lava.animation.Abstract\">Lava.animation.Abstract</a>"]},{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]}],"param_names_string":"animation, template","description":"<p>Removal animation has ended. Remove template from DOM</p>\n"},{"name":"_removeTemplate","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"function","params":[{"name":"template","type_names":["<a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>"]}],"param_names_string":"template","description":"<p>Remove template from DOM</p>\n"}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.view.refresher.Standard","descriptors":[{"name":"_animations_by_template_guid","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, <a href=\"/www/doc.html#class=Lava.animation.Standard\">Lava.animation.Standard</a>&gt;"],"description":"<p>Animation instances for each template</p>\n"},{"name":"_config","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_cRefresher\">_cRefresher</a>"],"description":"<p>Settings for this instance</p>\n"},{"name":"_container","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_iContainer\">_iContainer</a>"],"description":"<p>View&#39;s container</p>\n"},{"name":"_current_templates","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"],"description":"<p>Templates, that are currently in DOM</p>\n"},{"name":"_insertion_strategies","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","is_shared":true,"default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","type_names":["Object.&lt;string, string&gt;"],"description":"<p>Map of callbacks for dynamic insertion of templates</p>\n"},{"name":"_is_animation_enabled","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Whether to perform template insertion and removal animations</p>\n"},{"name":"_removed_templates","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"],"description":"<p>Temporary storage for templates which were removed during current refresh cycle</p>\n"},{"name":"_templates_by_animation_guid","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, <a href=\"/www/doc.html#class=Lava.system.Template\">Lava.system.Template</a>&gt;"],"description":"<p>Template of each animation</p>\n"},{"name":"_view","belongs":"Lava.view.refresher.Standard","defined":"Lava.view.refresher.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"],"description":"<p>View, that owns this refresher instance</p>\n"}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}