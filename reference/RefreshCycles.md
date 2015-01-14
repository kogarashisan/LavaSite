<lavabuild:title>Refresh cycles</lavabuild:title>

#Scope refresh cycle

<i>This article mostly covers advanced topics. Read it if you want to get deeper insight into framework internals.</i>

Scopes are connected to each other with "changed" events. Have a look at the following example:

```text
{#> $widget.property1.property2 }
```

This expression displays result of an Argument, which returns the value of DataBinding (to "property2"),
which is bound to PropertyBinding (bound to "property1" in $widget).

Now what if we sequentially modify both properties?

```javascript
var widget = ... // get widget
widget.get("property1").set("property2", "test");
widget.set("property1", {property2: 'new value'});
```

If scopes were updating immediately - then Argument would be updated twice, which could result in performance degradation.

When scope receives "changed" event from it's dependent scopes or bound data - it does not refresh itself immediately.
Instead, it places itself into the refresh queue in {@link Lava.ScopeManager} - it's job is to update scopes in correct order.

So, full refresh cycle in Lava consists of two parts: first - a call to {@link Lava.ScopeManager#refresh}, 
which refreshes scope hierarchy, then call to {@link Lava.system.ViewManager#refresh}, which refreshes views.

##Refresh order

ScopeManager needs to maintain correct refresh order of scopes.
For this purpose scopes have the {@link Lava.mixin.Refreshable#level} property,
which is chosen by the following rule: level of scope must be higher, then level of it's dependencies.

Level of PropertyBinding is equal to {@link Lava.view.Abstract#depth} of it's bound view 
(it matters in complex scenarios). Level of DataBinding is equal to "level of it's PropertyBinding + 1".
Segment and Argument depend on multiple scopes, so their level is "max(&lt;level of dependencies&gt;) + 1".

The above example is shown on the following diagram:

<a href="/www/reference_img/scope-refresh-diagram.png" target="_blank">
	<img src="/www/reference_img/scope-refresh-diagram.png" style="width: 50%;"/>
</a>

<b>When scopes are placed into the refresh queue - they are sorted by their level.</b>

##The refresh operation

Scope refresh cycle happens in {@link Lava.ScopeManager#refresh} - it calls {@link Lava.mixin.Refreshable#refresh}
of each scope in it's queue, starting from scopes with lower levels, to scopes with higher levels. 
During the cycle new scopes can be added into the refresh queue.

Scope's `refresh()` operation updates it's `_value` property, and if old and new values differ - also fires "changed" event.

##Example cycle

Let's update "property1" in previous example, and launch the refresh cycle:

```javascript
widget.set("property1", {property2: 'some value'});
Lava.ScopeManager.refresh();
```

PropertyBinding listens to widget's onPropertyChanged, so when "property1" was set to new value - 
it placed itself into the refresh queue. For clarity, let's assume that now it's the only scope in the queue.

In refresh cycle, ScopeManager calls `refresh` of PropertyBinding, which fires it's own "changed" event
(new value is an object, so in this case it's guaranteed that old and new values of "property1" differ).
When DataBinding receives "changed" event from PropertyBinding - it places itself into refresh queue,
and refresh cycle continues. ScopeManager refreshes DataBinding, and if it's value differs - then it also fires "changed".

Old value of DataBinding could be same as the new one - <str>"some value"</str>. If old and new values are the same - 
then it will not fire "changed" event, but if they differ - then Argument will be placed into refresh queue and
refreshed, notifying it's view.

Expression view listens to "changed" event from argument, and when it occurs - it will place itself into view refresh 
queue in ViewManager.

Tip: if you want to understand this process better - then it's a good idea to watch it in debugger.

##Nuances

Refreshing views in a framework - is a difficult task, so refresh cycle is not ideal.

It's possible to modify data in view refresh cycle (in `refresh()` and `render()`), 
and it's extremely hard to create application lifecycle, that would not do that.
For example, Foreach view performs data modification during refresh.

As a workaround for that, when view refresh cycle starts - it turns ScopeManager into immediate refresh mode.
If a new scope is submitted into ScopeManager during view refresh cycle - it's not put into refresh queue, 
but rather refreshed immediately. 

Due to this fact, it's possible to create applications, which can have performance issues due to wrong  
scope refresh order. In practice, it's very hard to degrade performance of Lava application to noticeable level by 
refreshing scopes in wrong order, so probably you should not worry about that.

Recommendation: if you can - then try to avoid data manipulations in view's `refresh()` and `render()` methods.
The right place to change data is event listeners - in this case most of scopes will be refreshed before view 
refresh cycle starts.

##Dead loops

It's possible to create eternal refresh loops - when setting property to child widget triggers change of property in 
parent widget, which in turn triggers change of property in same child widget... 
These situations can be artificially created with wrong program logic
(Lava framework is not responsible for them, only the widget developer).

Scope system has protection from eternal loops, so if this happens - browser will <b>not</b> hang up,
and framework will try to continue normal operation, but user may experience lags and interface glitches.

