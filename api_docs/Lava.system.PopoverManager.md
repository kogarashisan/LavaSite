
PopoverManager displays tooltips on page and is enabled in {@link Lava#bootstrap}.

Warning: `Lava.init()` does not enable it, so if you don't use `Lava.bootstrap()`, then you should manually call
`Lava.popover_manager.enable()` to enable tooltips. when it's enabled - it creates an instance of Tooltip widget 
and inserts it into &lt;body&gt;. This matters if you parse and replace page content manually,