
All DOM manipulation methods are implemented in two ways: there is version that works with ranges (with DOM Range object), 
and version that works directly with DOM nodes (using `nextSibling`, `insertBefore` and other node properties and methods). 
This behaviour is controlled by {@link Firestorm.schema#dom.PREFER_RANGE_API} switch.

Ranges are thought to be slower than direct nodes manipulation, so by default framework does not use ranges.