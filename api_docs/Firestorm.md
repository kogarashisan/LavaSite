
##Advanced topics

Some browsers do not iterate over overwritten Object's prototype properties. Example from MooTools:

```javascript
var enumerables = true;
for (var i in {toString: 1}) enumerables = null;
```

In most browsers `enumerables` will be null (browser iterates over 'toString'), but it's not safe to rely on this behaviour.
LavaFramework does not provide a fix for this issue in any form, so either:
- do not override Object's prototype properties - from architect's point of view it's the best solution
- or implement the fix yourself. See overloadSetter function from MooTools as example

See <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype">Object.prototype</a>
on MDN.