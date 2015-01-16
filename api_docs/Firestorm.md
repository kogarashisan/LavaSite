
All DOM manipulation should be done with Firestorm. If functionality is present in Firestorm - 
you should use it, rather then calling MooTools directly.

For example, if property of a DOM element has accessor in Firestorm, like `Firestorm.Element.getOuterHTML()` - 
then you should use that method. If property has `attributeNode` - then use `Firestorm.Element.getProperty()` - 
most properties are accessible with this method.

However, there are element fields, that should be accessed directly. They include:
- `focus()` and `blur()` methods (although, using `blur()` is not recommended by W3C)
- core DOM properties that work in all browsers, like `offsetHeight`, `parentNode` and `firstChild`

Be aware, that over time framework will become independent from MooTools, and you will not need to include it anymore.

##Advanced topics

Some browsers do not iterate over overwritten Object's prototype properties. Example from MooTools:

```javascript
var enumerables = true;
for (var i in {toString: 1}) enumerables = null;
```

In most browsers `enumerables` will be null (browser iterates over 'toString'), but it's not safe to rely on this behaviour.
Firestorm does not provide a fix for this issue in any form, so either:
- do not override Object's prototype properties - from architect's point of view it's the best solution
- or implement the fix yourself. See overloadSetter function from MooTools as example

See also: <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype">Object.prototype</a>
on MDN.