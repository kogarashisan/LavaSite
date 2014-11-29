
#Frequently asked questions

<b>Is your framework related to "lava flow" anti-pattern?</b>

No, in no way. LiquidLava source and architecture is a work of art, see it yourself.

<b>I got "Debug assertion failed" in console. What should I do?</b>

When you get any error - you should try to debug your program. Lava is very easy to debug, 
so it's recommended to always keep a breakpoint on {@link Lava#t}.

If you are lucky - then "Debug assertion failed" just means an absence of better error message, 
and you will quickly understand the reason from source code. If you are not so lucky - then you may be doing something 
wrong, but the reason will be hard to understand. And in exceptionally rare cases - 
this means that framework has a bug and you should report it to the author (with source code of your app).

