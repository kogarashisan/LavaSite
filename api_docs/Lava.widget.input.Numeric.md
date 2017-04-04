
Native numeric inputs are not supported by all browsers, so often you will see a common text input instead of numeric.
You can force input type to always be text with `type: 'text'` option - this may be useful when you also want to 
override conversion options.

What this widget does: it converts the text from input into a number (it's `value` property).
When the text is not a valid number - it's not assigned to `value`, and widget sets it's `is_valid` property 
to <kw>false</kw>. 

Widget has `data_type` option, which can be used to set the type which is used for conversion (default is {@link Firestorm.Types#Number}).
For example, you can change it to "Percent". When changing type - you may also need to set `type: 'text'` option.