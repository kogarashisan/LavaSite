<lavabuild:title>Appendix A - Compatibility</lavabuild:title>

#Appendix A - Compatibility notes

Framework does not fix bugs in plain HTML elements, even when they belong to an Element container.
If you want your input fields to work correctly - you should either:
- use framework's widgets, which implement bug fixes (easy way, recommended)
- or manually apply containers with bug fixes to your input elements and listen to their custom events

##Release notes

- Framework depends on MooTools. Recommended version: 1.51 and newer, but may work with 1.45, but not older.
- Naturally, LiquidLava and Firestorm frameworks can not coexist with code that modifies the native object's ptototype.
- Currently, the framework cannot used with advanced/unsafe compression methods: function renaming will break it. 
Advanced compression will be implemented later.
- <b>IE8 and below are currently not supported.</b> Some features may work for you, but some are broken, 
including non-bubbling input events like focus/blur and submit.

##IE

- IE 8-9 have bugs with text input elements (they do not always send "changed" event)
- IE 10-11, and most likely lower versions, have bugs with indeterminate checkboxes (they also do not send "changed")

These bugs are fixed in {@link Lava.view.container.CheckboxElement} and {@link Lava.view.container.TextInputElement},
which are used by TextInput, PasswordInput and Checkbox widgets. These containers implement custom ViewManager event 
"compatible_changed".

&lt;textarea&gt; in IE 8-9 is also buggy, and still requires a fix.

##Safari

- On IOS: does not delegate click event. Must be fixed in {@link Lava.view.container.Element}.
- Windows (other untested): will not fire "focus" and "blur" events on inputs with "autofocus" attribute, 
which are controlled by the framework. It means that {@link Lava.system.FocusManager} instance will not know 
that input widget got focus. Will not be fixed.

##Browser compatibility - general

- Do not use "autofocus" attribute inside framework widgets. Widgets are rendered and inserted into DOM, 
and it does not work well in Safari. Instead, you can focus your input manually after insertion into DOM.

