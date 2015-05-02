var page_json = {"method_chain":[{"class_name":"Lava.animation.Toggle","descriptors":[{"name":"_finish","belongs":"Lava.animation.Toggle","defined":"Lava.animation.Abstract","is_private":true,"type":"function","is_overridden":true,"description":"<p>Set the animation state to &#39;not running&#39; and fire the <a href=\"/www/doc/class/Lava.animation.Abstract.html#event=complete\">complete</a> event</p>\n"}]},{"class_name":"Lava.animation.Standard","descriptors":[{"name":"finish","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":false,"type":"function","description":"<p>Act like the animation has ended naturally:\napply the end state to the target and fire <a href=\"/www/doc/class/Lava.animation.Abstract.html#event=complete\">complete</a></p>\n","is_inherited":true},{"name":"init","belongs":"Lava.animation.Standard","defined":"Lava.animation.Abstract","is_private":false,"type":"function","param_names_string":"config, target","is_overridden":true,"description":"<p>Constructs the class instance</p>\n","params":[{"name":"config","description":"<p>Settings, <code>this._config</code></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cAnimation\">_cAnimation</a>"]},{"name":"target","description":"<p><code>this._target</code></p>\n","type_names":["*"]}],"is_inherited":true},{"name":"setDuration","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":false,"type":"function","params":[{"name":"duration","description":"<p>New duration, in milliseconds</p>\n","type_names":["number"]}],"param_names_string":"duration","description":"<p>Set animation duration</p>\n","is_inherited":true},{"name":"start","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":false,"type":"function","params":[{"name":"started_time","description":"<p>The global system time in milliseconds when animation has started.\n May be used to synchronize multiple animations</p>\n","is_optional":true,"type_names":["number"]}],"param_names_string":"started_time","description":"<p>Start animating</p>\n","is_inherited":true},{"name":"stop","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":false,"type":"function","description":"<p>Stop animation immediately where it is. Do not fire <a href=\"/www/doc/class/Lava.animation.Abstract.html#event=complete\">complete</a></p>\n","is_inherited":true},{"name":"_animateDirect","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"function","params":[{"name":"now","description":"<p>The current global time in milliseconds</p>\n","type_names":["number"]}],"param_names_string":"now","description":"<p>Perform animation in normal direction</p>\n","is_inherited":true},{"name":"_animateReverse","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"function","params":[{"name":"now","description":"<p>The current global time in milliseconds</p>\n","type_names":["number"]}],"param_names_string":"now","description":"<p>Perform animation in reversed direction</p>\n","is_inherited":true},{"name":"_callAnimators","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"function","params":[{"name":"transition_value","description":"<p>The current percent of animation</p>\n","type_names":["number"]}],"param_names_string":"transition_value","description":"<p>Calls all animator instances.\nThis function may be substituted with pre-generated version from <code>_shared</code></p>\n","is_inherited":true},{"name":"_mirror","belongs":"Lava.animation.Standard","defined":"Lava.animation.Abstract","is_private":true,"type":"function","is_overridden":true,"description":"<p>Reverse animation direction</p>\n","is_inherited":true}]},{"class_name":"Lava.animation.Abstract","descriptors":[{"name":"getDuration","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["number"]},"description":"<p>Get <code>_duration</code></p>\n","is_inherited":true},{"name":"getEndTime","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["number"]},"description":"<p>Get <code>_end_time</code></p>\n","is_inherited":true},{"name":"getStartedTime","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["number"]},"description":"<p>Get <code>_started_time</code></p>\n","is_inherited":true},{"name":"getTarget","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["*"]},"description":"<p>Get <code>_target</code></p>\n","is_inherited":true},{"name":"isReversed","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_reversed</code></p>\n","is_inherited":true},{"name":"isRunning","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_running</code></p>\n","is_inherited":true},{"name":"onTimer","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","params":[{"name":"now","description":"<p>The current time (=new Date().getTime())</p>\n","type_names":["number"]}],"param_names_string":"now","description":"<p>Called by Cron. Assigned in constructor</p>\n","is_inherited":true},{"name":"resetDirection","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","description":"<p>If animation is running backwards - reverse it to normal direction</p>\n","is_inherited":true},{"name":"reverseDirection","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","description":"<p>If animation is running forwards - reverse it to backwards direction</p>\n","is_inherited":true},{"name":"safeStart","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","params":[{"name":"started_time","description":"<p>Optionally, you can pass the time when animation has actually started.\n     Otherwise, the current system time will be taken</p>\n","is_optional":true}],"param_names_string":"started_time","description":"<p>Start only if it&#39;s not already running</p>\n","is_inherited":true},{"name":"setTarget","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"function","params":[{"name":"target"}],"param_names_string":"target","description":"<p>Set <code>_target</code></p>\n","is_inherited":true},{"name":"_afterMirror","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"function","params":[{"name":"now","description":"<p>The current time in milliseconds</p>\n","type_names":["number"]}],"param_names_string":"now","description":"<p>Callback to execute after <code>_mirror</code> is done</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.animation.Standard","descriptors":[{"name":"_animators","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_iAnimator\">_iAnimator</a>&gt;"],"description":"<p>Animator instances</p>\n","is_inherited":true},{"name":"_percent","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Current animation percent, between 0 and 1</p>\n","is_inherited":true},{"name":"_shared","belongs":"Lava.animation.Standard","defined":"Lava.animation.Standard","is_private":true,"type":"member","is_shared":true,"default_value":"<span class=\"api-highlight-gray\">{ ... }</span>","description":"<p>Shared data</p>\n","is_inherited":true}]},{"class_name":"Lava.animation.Abstract","descriptors":[{"name":"guid","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"],"description":"<p>Instance global unique identifier</p>\n","is_inherited":true},{"name":"_config","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_readonly":true,"type_names":["<a href=\"/www/doc/object/Support.html#member=_cAnimation\">_cAnimation</a>"],"description":"<p>The settings for this instance</p>\n","is_inherited":true},{"name":"_duration","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Animation duration, in milliseconds</p>\n","is_inherited":true},{"name":"_end_time","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>The time animation ends (or has ended), in milliseconds</p>\n","is_inherited":true},{"name":"_is_reversed","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Does it run in reversed direction</p>\n","is_inherited":true},{"name":"_is_running","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Is it currently running</p>\n","is_inherited":true},{"name":"_started_time","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>The time when animation was started, in milliseconds</p>\n","is_inherited":true},{"name":"_target","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["*"],"description":"<p>Usually, a HTML Element, properties of which this animation changes</p>\n","is_inherited":true},{"name":"_transition","belongs":"Lava.animation.Abstract","defined":"Lava.animation.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tTransitionCallback\">_tTransitionCallback</a>"],"description":"<p>Transition is a function, which takes current elapsed time (in percent, from 0 to 1) and returns current animation position (also in percent)</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}],"events":[{"description":"<p>Animation has ended</p>\n","name":"complete","longname":"Lava.animation.Abstract#event:complete","kind":"event"}]}