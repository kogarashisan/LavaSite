
Tooltips are controlled by {@link Lava.system.PopoverManager}, which is constructed and enabled in {@link Lava#init}.
PopoverManager is responsible for showing, hiding and movement of the Tooltip widget instance.

Tooltip widget serves only presentational purpose: it has template, which displays text from controller,
which currently does not have any useful logic in it.

Usage example:

```xml
<div data-tooltip="test">Block with a tooltip</div>
```
