
Internally, Enumerable has 3 gapless arrays: `_data_uids`, `_data_values` and `_data_names`.
`_data_names` is populated with object keys when you construct Enumerable from object or Properties instance.
You can also add keys manually when you add an item into collection (for example, `push(value, name)`).
When constructing from array - `_data_names` is filled with nulls.

Each name-value pair has unique ID in `_data_uids` - they are used by views to track changes in collection. 
Each time you add a new value into collection - a new UID is generated. Even if you remove an item, 
and then insert it back - it will have new UID.

Some operations preserve UIDs, like filtering or sorting - this allows views to remove or reorder existing 
templates in DOM, and apply animation to this process.

Enumerable UIDs are <b>not</b> globally unique - you should take that into account when you replace one
Enumerable instance with another in your own code, cause same UIDs from new instance now correspond to different values.

The only property, which is supported, is "length" (readonly).