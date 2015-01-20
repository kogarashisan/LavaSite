
How bootstrap process works: if there is `lava-app` attribute on &lt;body&gt; tag - then body is parsed
as template for new widget, which is inserted with {@link Lava.widget.Standard#injectIntoExistingElement}.

Otherwise (if there is no `lava-app` on body), `bootstrap()` method searches for &lt;lava-app&gt;
and &lt;script type="lava/app"&gt; tags, which are parsed and converted into widgets (tags are replaced with widgets).

You can do bootstrap process manually, for example when you want to hide the page sources and show some "loading"
indicator.