
##Using parseWithTail()

This method is used internally when framework needs to parse expressions, followed by some other text
(for example, when parsing <i>targets</i>). Method stops parsing when it finds the first unmatched closing brace:

```javascript
var config_ref = {
	input: "1 + count) !@#$%^& some text",
	tail_length: 0
};
var result = Lava.ExpressionParser.parseWithTail(config_ref);
```

Method will exit when it encounters the closing brace (")"), and store length of unparsed content in `config_ref.tail_length` 
(in this case 18). Result is an array of {@link Lava.scope.Argument} configs.

Another example:

```javascript
var config_ref = {
	input: "i, (1 + count) * 2) !@#$%^& some text",
	tail_length: 0
};
var result = Lava.ExpressionParser.parseWithTail(config_ref, Lava.ExpressionParser.SEPARATORS.COMMA);
```

This will generate an array with two configs. Everything after the second closing brace will not be parsed
(<str>") !@#$%^& some text"</str>).